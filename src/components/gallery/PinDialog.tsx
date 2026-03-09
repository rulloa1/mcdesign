import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface PinDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const PinDialog = ({ isOpen, onClose, onSuccess }: PinDialogProps) => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async () => {
    if (!pin.trim() || pin.length < 4) {
      setError("PIN must be at least 4 characters");
      return;
    }

    setIsVerifying(true);
    setError("");

    try {
      const { data, error: fnError } = await supabase.functions.invoke("verify-edit-pin", {
        body: { pin: pin.trim() },
      });

      if (fnError) {
        setError("Verification failed. Please try again.");
        return;
      }

      if (data?.success) {
        setPin("");
        setError("");
        onSuccess();
        onClose();
      } else {
        setError("Incorrect PIN");
      }
    } catch {
      setError("Verification failed. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleVerify();
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setPin("");
      setError("");
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-sm bg-charcoal border-primary/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-cream">
            <Lock className="w-5 h-5 text-primary" />
            Admin Access
          </DialogTitle>
          <DialogDescription className="text-cream/60">
            Enter the admin PIN to enable editing.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-2">
          <Input
            type="password"
            placeholder="Enter PIN"
            value={pin}
            onChange={(e) => {
              setPin(e.target.value);
              setError("");
            }}
            onKeyDown={handleKeyDown}
            className="bg-charcoal/50 border-cream/20 text-cream placeholder:text-cream/30 focus:border-primary"
            maxLength={20}
            autoFocus
          />

          {error && (
            <p className="text-destructive text-sm">{error}</p>
          )}

          <div className="flex gap-3 justify-end">
            <Button
              variant="ghost"
              onClick={() => handleOpenChange(false)}
              className="text-cream/60 hover:text-cream hover:bg-cream/10"
            >
              Cancel
            </Button>
            <Button
              onClick={handleVerify}
              disabled={isVerifying || !pin.trim()}
              className="bg-primary text-primary-foreground hover:bg-gold-dark"
            >
              {isVerifying ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : null}
              Verify
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
