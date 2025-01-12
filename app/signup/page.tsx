import SignUpForm from '@/components/auth/SignUpForm'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/data/site-config'
import Logo from '@/components/logo'

export const metadata: Metadata = {
  title: 'Sign Up | QuickFeel',
  description: 'Create your QuickFeel account and start analyzing customer feedback with AI.',
}

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center items-center gap-2">
          <Logo />
          <span className="text-2xl font-bold text-[#1D3557]">QuickFeel</span>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#1D3557]">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-[#2A9D8F] hover:text-[#238579]">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <SignUpForm />
          
          <p className="mt-6 text-center text-xs text-gray-600">
            By signing up, you agree to our{' '}
            <Link href="/terms" className="font-medium text-[#2A9D8F] hover:text-[#238579]">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="font-medium text-[#2A9D8F] hover:text-[#238579]">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

