import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Loader2, Wand2, Download, Save } from "lucide-react";
import { toast } from "sonner";

interface AIRedesignDialogProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string | null;
    onSave: (newImageUrl: string) => void;
}

export const AIRedesignDialog = ({ isOpen, onClose, imageUrl, onSave }: AIRedesignDialogProps) => {
    const [style, setStyle] = useState("modern");
    const [creativity, setCreativity] = useState([50]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!imageUrl) return;

        setIsGenerating(true);

        // Simulate API call
        setTimeout(() => {
            setIsGenerating(false);
            // For mock purposes, we just use the same image but maybe apply a filter logic if we could, 
            // but here we just simulate "success" with the original or a placeholder to show the UI flow.
            // In a real app, this would be the URL returned from DALL-E/Midjourney/Replicate.
            setGeneratedImage(imageUrl);
            toast.success("Design generated! (Mock)");
        }, 2000);
    };

    const handleSave = () => {
        if (generatedImage) {
            onSave(generatedImage);
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl bg-card text-card-foreground">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-serif text-primary" flex-row items-center gap-2>
                        <Wand2 className="inline-block w-6 h-6 mr-2" />
                        AI Interior Redesign
                    </DialogTitle>
                    <DialogDescription>
                        Select a style to reimagine this space. Experiments are free!
                    </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
                    {/* Controls Sidebar */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label>Design Style</Label>
                            <Select value={style} onValueChange={setStyle}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select style" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="modern">Modern Luxury</SelectItem>
                                    <SelectItem value="minimalist">Minimalist</SelectItem>
                                    <SelectItem value="industrial">Industrial Chic</SelectItem>
                                    <SelectItem value="scandinavian">Scandinavian</SelectItem>
                                    <SelectItem value="coastal">Coastal</SelectItem>
                                    <SelectItem value="farmhouse">Modern Farmhouse</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label>Creativity Level: {creativity}%</Label>
                            <Slider
                                value={creativity}
                                onValueChange={setCreativity}
                                max={100}
                                step={1}
                                className="py-4"
                            />
                            <p className="text-xs text-muted-foreground">
                                Lower = closer to original structure. Higher = more radical changes.
                            </p>
                        </div>

                        <Button
                            onClick={handleGenerate}
                            disabled={isGenerating || !imageUrl}
                            className="w-full"
                        >
                            {isGenerating ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Dreaming...
                                </>
                            ) : (
                                <>
                                    <Wand2 className="mr-2 h-4 w-4" />
                                    Generate Redesign
                                </>
                            )}
                        </Button>
                    </div>

                    {/* Preview Area */}
                    <div className="md:col-span-2 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Original</Label>
                                <div className="aspect-square rounded-lg overflow-hidden border bg-muted/50 relative">
                                    {imageUrl && <img src={imageUrl} alt="Original" className="w-full h-full object-cover" />}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>AI Proposal</Label>
                                <div className="aspect-square rounded-lg overflow-hidden border bg-muted/50 relative flex items-center justify-center">
                                    {generatedImage ? (
                                        <img src={generatedImage} alt="Generated" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="text-center p-4 text-muted-foreground">
                                            <Wand2 className="mx-auto h-8 w-8 mb-2 opacity-50" />
                                            <p className="text-sm">Click Generate to see magic</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <DialogFooter className="gap-2 sm:gap-0">
                    <Button variant="outline" onClick={onClose}>Cancel</Button>
                    <Button onClick={handleSave} disabled={!generatedImage}>
                        <Save className="mr-2 h-4 w-4" />
                        Save to Gallery
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
