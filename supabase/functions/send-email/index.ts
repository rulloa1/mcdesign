import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from 'resend';

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message } = await req.json();

const toEmail = Deno.env.get('TO_EMAIL_ADDRESS');
if (!toEmail) {
  console.error('TO_EMAIL_ADDRESS is not set in Supabase secrets.');
  return new Response(JSON.stringify({ error: 'Server configuration error.' }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    status: 500,
  });
}

    const { data, error } = await resend.emails.send({
      from: Deno.env.get('RESEND_FROM_EMAIL') || 'onboarding@resend.dev', // IMPORTANT: Set RESEND_FROM_EMAIL in Supabase secrets to your verified Resend domain.
      to: toEmail,
      subject: `New message from ${name}`,
      html: `<p>You have a new message from your website contact form.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      });
    }

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (e) {
    const error = e as Error;
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
