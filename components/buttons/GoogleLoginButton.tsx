'use client'

import { createClient } from "@/utils/supabase/client";

const GoogleLoginButton = () => {

    const supabase = createClient();

    const handleGoogleLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `http://localhost:3000/auth/callback`
            }
        });

        if (error) {
            console.error('Google sign-in error:', error.message);
        }
    };

    return (
        <button onClick={handleGoogleLogin} style={buttonStyles}>
            Sign in with Google
        </button>
    );
};

const buttonStyles = {
  padding: '10px 20px',
  background: '#4285F4',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default GoogleLoginButton;
