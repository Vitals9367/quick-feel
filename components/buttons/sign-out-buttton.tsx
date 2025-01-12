"use client";

import { signOutAction } from "@/app/(auth)/actions";
import React from "react";

interface SignOutButtonProps {
  text?: string;
}

const SignOutButton: React.FC<SignOutButtonProps> = ({ text = "Sign Out" }) => {
  return <button onClick={signOutAction}>{text}</button>;
};

export default SignOutButton;
