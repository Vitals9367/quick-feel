'use client'

import { signOut } from "next-auth/react"
import React from 'react'

interface SignOutButtonProps {
    text?: string
}

const SignOutButton: React.FC<SignOutButtonProps> = ({text = "Sign Out"}) => {

    const onClick = async () => {
        signOut({ redirectTo: '/' });
    }

    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export default SignOutButton