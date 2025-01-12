import Logo from "@/components/logo";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coming Soon | QuickFeel",
  description: "Something exciting is coming.",
};

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg mx-auto text-center space-y-8">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2 mb-8">
          <Logo />
          <span className="text-2xl font-bold text-[#1D3557]">QuickFeel</span>
        </Link>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-[#1D3557]">
            Coming Soon
          </h1>
          <p className="text-xl text-gray-600">
            We're working on something exciting. Check back soon.
          </p>
        </div>

        {/* Footer Links */}
        <div className="text-sm text-gray-600">
          <Link href="/privacy" className="hover:text-[#2A9D8F]">
            Privacy Policy
          </Link>
          <span className="mx-2">•</span>
          <Link href="/terms" className="hover:text-[#2A9D8F]">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}
