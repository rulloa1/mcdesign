import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [configCheck, setConfigCheck] = useState<{ status: 'ok' | 'error' | 'checking'; message?: string }>({ status: 'checking' });

    useEffect(() => {
        // Diagnostic check
        const checkConfig = async () => {
            try {
                // Check if keys are present (basic check)
                const url = import.meta.env.VITE_SUPABASE_URL;
                const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

                if (!url || !key) {
                    setConfigCheck({ status: 'error', message: 'Missing VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY variables.' });
                    return;
                }

                // Simple ping to check connection (optional, just checking auth endpoint availability)
                const { error } = await supabase.auth.getSession();
                if (error) throw error;

                setConfigCheck({ status: 'ok' });
            } catch (err) {
                console.error("Config check failed:", err);
                setConfigCheck({ status: 'error', message: `Supabase connection failed: ${err.message}` });
            }
        };
        checkConfig();
    }, []);

    useEffect(() => {
        if (location.state?.message) {
            setErrorMessage(location.state.message);
        }
    }, [location.state]);

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        try {
            if (isSignUp) {
                const { error, data } = await supabase.auth.signUp({
                    email,
                    password,
                });
                if (error) throw error;
                toast.success("Account created! Please check your email for verification.");
                setIsSignUp(false); // Switch back to login
            } else {
                const { error, data } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;

                console.log("Login successful", data);
                toast.success("Logged in successfully");
                navigate("/admin/gallery");
            }
        } catch (error) {
            console.error("Auth error:", error);
            const msg = error.message || "Authentication failed";
            setErrorMessage(msg);
            toast.error(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto flex h-screen items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Admin {isSignUp ? "Sign Up" : "Login"}</CardTitle>
                    <CardDescription>{isSignUp ? "Create a new account" : "Enter your credentials to access the dashboard"}</CardDescription>
                </CardHeader>
                <CardContent>
                    {configCheck.status === 'error' && (
                        <Alert variant="destructive" className="mb-4">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Configuration Error</AlertTitle>
                            <AlertDescription>{configCheck.message}</AlertDescription>
                        </Alert>
                    )}

                    <form onSubmit={handleAuth} className="space-y-4">
                        {errorMessage && (
                            <Alert variant={errorMessage.includes("successfully") ? "default" : "destructive"}>
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Notice</AlertTitle>
                                <AlertDescription>{errorMessage}</AlertDescription>
                            </Alert>
                        )}

                        <div className="space-y-2">
                            <Input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={loading || configCheck.status === 'error'}>
                            {loading ? (isSignUp ? "Signing up..." : "Logging in...") : (isSignUp ? "Sign Up" : "Login")}
                        </Button>
                        <div className="text-center text-sm text-gray-500">
                            {isSignUp ? "Already have an account? " : "Don't have an account? "}
                            <button
                                type="button"
                                className="text-primary hover:underline"
                                onClick={() => {
                                    setIsSignUp(!isSignUp);
                                    setErrorMessage("");
                                }}
                            >
                                {isSignUp ? "Login" : "Sign Up"}
                            </button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
