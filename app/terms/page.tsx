import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | QuickFeel',
  description: 'Read our terms of service to understand the rules and guidelines for using QuickFeel.',
}

export default function TermsPage() {
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
            <h1 className="text-4xl font-bold">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 11, 2024</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">1. Agreement to Terms</h2>
            <p>
              By accessing or using QuickFeel's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">2. Use License</h2>
            <p>
              Subject to your compliance with these Terms, QuickFeel grants you a limited, non-exclusive, non-transferable, and revocable license to access and use our services for your internal business purposes.
            </p>
            <h3 className="text-xl font-semibold">2.1 Restrictions</h3>
            <p>You must not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials without written consent</li>
              <li>Use the materials for commercial purposes</li>
              <li>Remove any copyright or proprietary notations</li>
              <li>Transfer the materials to another person</li>
              <li>Attempt to reverse engineer any software</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">3. Account Terms</h2>
            <p>You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintaining the security of your account</li>
              <li>All activities that occur under your account</li>
              <li>Ensuring account information is accurate</li>
              <li>Notifying us of unauthorized access</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">4. Payment Terms</h2>
            <p>
              By selecting a paid subscription, you agree to pay QuickFeel the monthly or annual subscription fees indicated. Payments will be charged on a pre-pay basis on the day you sign up and will cover the use of that service for the period indicated.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">5. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are owned by QuickFeel and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">6. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">7. Limitation of Liability</h2>
            <p>
              In no event shall QuickFeel, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">8. Contact Information</h2>
            <p>
              Questions about the Terms of Service should be sent to us at:{' '}
              <Link href="mailto:legal@quickfeel.com" className="text-primary hover:underline">
                legal@quickfeel.com
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

