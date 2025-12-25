import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts';

// Get allowed origin from environment variable, default to production domain
const ALLOWED_ORIGIN = Deno.env.get('ALLOWED_ORIGIN') || 'https://mike-construction.lovable.app';

const corsHeaders = {
  'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Define allowed styles to prevent prompt injection
const ALLOWED_STYLES = [
  'Modern Luxury',
  'Minimalist Scandinavian',
  'Industrial Chic',
  'Modern Farmhouse',
  'Mid-Century Modern',
  'Coastal Contemporary',
  'Dark Academia',
  'Art Deco',
  'Bohemian',
  'Traditional',
  'Contemporary',
  'Rustic',
  'Mediterranean',
  'Japanese Zen'
] as const;

// Input validation schema
const requestSchema = z.object({
  imageBase64: z.string()
    .min(1, 'Image is required')
    .refine(
      (val) => val.startsWith('data:image/'),
      'Invalid image format: must be a base64 data URL'
    )
    .refine(
      (val) => /^data:image\/(jpeg|jpg|png|webp|gif);base64,/.test(val),
      'Invalid image type: must be JPEG, PNG, WebP, or GIF'
    )
    .refine(
      (val) => val.length < 10_000_000,
      'Image too large: must be less than ~7.5MB'
    ),
  style: z.enum(ALLOWED_STYLES, {
    errorMap: () => ({ message: `Invalid style. Allowed styles: ${ALLOWED_STYLES.join(', ')}` })
  })
});

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify authentication
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      console.error('No authorization header provided');
      return new Response(
        JSON.stringify({ error: 'Authentication required' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: authHeader } } }
    );

    const { data: { user }, error: authError } = await supabaseClient.auth.getUser();
    
    if (authError || !user) {
      console.error('Authentication failed:', authError?.message);
      return new Response(
        JSON.stringify({ error: 'Invalid authentication' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Authenticated user:', user.id);

    // Parse and validate request body
    let body;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON in request body' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate input with zod
    const validationResult = requestSchema.safeParse(body);
    if (!validationResult.success) {
      console.error('Validation failed:', validationResult.error.errors);
      return new Response(
        JSON.stringify({ 
          error: 'Invalid request parameters', 
          details: validationResult.error.errors.map(e => e.message)
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { imageBase64, style } = validationResult.data;
    
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    if (!OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'OpenAI API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Analyzing room structure with Vision API...');

    // Step 1: Vision API - Analyze the room structure
    const visionResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'user',
            content: [
              { 
                type: 'text', 
                text: 'Describe this interior room in detail. Focus on the architectural layout, perspective, furniture placement, and lighting. Do NOT describe the colors or specific decor style. Just the structure and composition.' 
              },
              { 
                type: 'image_url', 
                image_url: { url: imageBase64 } 
              }
            ],
          },
        ],
      }),
    });

    if (!visionResponse.ok) {
      const errorText = await visionResponse.text();
      console.error('Vision API error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to analyze image' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const visionData = await visionResponse.json();
    const rawDescription = visionData.choices?.[0]?.message?.content || 'A room interior';
    
    // Sanitize Vision API output to prevent prompt injection
    // Limit length and remove special characters that could affect DALL-E prompts
    const description = rawDescription
      .substring(0, 500)
      .replace(/[^a-zA-Z0-9\s,.'\\-]/g, '')
      .trim() || 'A room interior';
    
    console.log('Vision Analysis complete (sanitized):', description.substring(0, 100) + '...');

    // Step 2: DALL-E 3 - Generate new style
    console.log('Generating redesigned image with DALL-E 3...');
    
    const imageResponse = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'dall-e-3',
        prompt: `A photorealistic, architectural digest quality photograph of a room with this structure: ${description}. The room is designed in a ${style} style. High end, professional interior design photography, 8k resolution.`,
        n: 1,
        size: '1024x1024',
      }),
    });

    if (!imageResponse.ok) {
      const errorText = await imageResponse.text();
      console.error('DALL-E API error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to generate image' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const imageData = await imageResponse.json();
    const generatedUrl = imageData.data?.[0]?.url;

    if (!generatedUrl) {
      console.error('No image URL in response');
      return new Response(
        JSON.stringify({ error: 'No image generated' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Image generated successfully');
    
    return new Response(
      JSON.stringify({ imageUrl: generatedUrl, description }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
    console.error('Error in generate-design function:', errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
