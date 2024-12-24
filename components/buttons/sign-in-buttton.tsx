'use client'

import { signIn } from "next-auth/react"
import React from 'react'

interface SignInButtonProps {
    text?: string
}

const SignInButton: React.FC<SignInButtonProps> = ({text = "Start Your Journey Today – Try Nomad Chat for Free!"}) => {

    const onClick = () => {
        signIn("keycloak", { callbackUrl: '/chat' });
    }

    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export default SignInButton