'use client'

import { signIn } from "next-auth/react"
import { redirect } from "next/navigation"
import React from 'react'

interface SignInButtonProps {
    text?: string
}

const SignInButton: React.FC<SignInButtonProps> = ({text = "Sign Up"}) => {

    const onClick = () => {
        redirect('/login');
    }

    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export default SignInButton