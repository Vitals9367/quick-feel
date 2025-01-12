import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | QuickFeel',
  description: 'Learn how QuickFeel collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl px-4 py-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8"
          asChild
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 11, 2024</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p>
              At QuickFeel, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our feedback analysis platform and related services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold">2.1 Personal Information</h3>
            <p>We may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Billing information</li>
              <li>Company information</li>
              <li>Usage data and preferences</li>
            </ul>

            <h3 className="text-xl font-semibold">2.2 Customer Feedback Data</h3>
            <p>
              When you use our services to analyze customer feedback, we process:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Customer reviews and comments</li>
              <li>Survey responses</li>
              <li>Social media mentions</li>
              <li>Support tickets</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send administrative information</li>
              <li>Improve our services</li>
              <li>Respond to your requests</li>
              <li>Prevent fraud and abuse</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">6. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:{' '}
              <Link href="mailto:privacy@quickfeel.com" className="text-primary hover:underline">
                privacy@quickfeel.com
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

