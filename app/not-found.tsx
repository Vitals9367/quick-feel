"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Logo from "@/components/logo";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Logo />
          <span className="text-2xl font-bold text-[#1D3557]">QuickFeel</span>
        </div>

        {/* Error Content */}
        <div className="space-y-6 max-w-[600px]">
          <h1 className="text-7xl font-bold text-[#1D3557]">404</h1>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1D3557]">
            Page not found
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed">
            We couldn't find the page you're looking for. It might have been
            moved, deleted, or never existed.
          </p>

          {/* Navigation Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              className="bg-[#2A9D8F] hover:bg-[#238579] text-white"
              asChild
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-[#2A9D8F] text-[#2A9D8F] hover:bg-[#2A9D8F] hover:text-white"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
