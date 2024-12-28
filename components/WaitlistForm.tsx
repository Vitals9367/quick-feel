'use client';

import { Label } from "@radix-ui/react-dropdown-menu";
import { useState, FormEvent } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { createClient } from "@/utils/supabase/client";
import { ctaDetails } from "@/data/cta";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { motion, Variants } from "framer-motion";
import { z } from 'zod';
import { sendWelcomingEmail } from "@/lib/send-mail";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import AlertPortal from "./AlertPortal";

const emailSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export const WaitlistForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [isSent, setIsSent] = useState<boolean>(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
    const [showErrorAlert, setShowErrorAlert] = useState<boolean>(false);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setIsLoading(true);
      setError(null);
  
      try {
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
  
        emailSchema.parse({ email });
  
        const response = await fetch('/api/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          if (response.status === 409) {
            setError("You are already signed up for the waitlist.");
          } else {
            setError("An unexpected error occurred. Please try again later.");
          }
          throw new Error(errorData.error);
        }
  
        setShowSuccessAlert(true);
        setIsSent(true);
      } catch (error: any) {
        setShowErrorAlert(true);
      } finally {
        setIsLoading(false);
      }
    }
    
    const containerVariants: Variants = {
        offscreen: {
            opacity: 0,
            y: 100
        },
        onscreen: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1.2,
                delayChildren: 0.2,
                staggerChildren: 0.1,
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
        >
        <section className="lg:my-20 drop-shadow-lg text-gray-100">
                <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="rounded-xl absolute inset-0 -z-10 h-full w-full bg-cover bg-center" style={{ backgroundImage: 'url(/images/waitlist-background.jpg)' }}>
                    <div className="rounded-xl absolute inset-0 bg-black opacity-75"></div>
                </div>
                <div className="h-full flex flex-col items-center justify-center text-center px-5 py-8">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight mb-6 max-w-2xl font-bold text-[var(--primary)]">{ctaDetails.heading}</h2>

                    <p className="mx-auto max-w-xl md:px-5 mb-6">Join the waitlist today and enjoy exclusive lifetime benefits:</p>

                    <div className="w-[50%]">
                        <ul className="list-disc text-left mb-6">
                            <li><span className="font-bold">Locked-in Discounts:</span> Get special pricing for life, only available to founding members.</li>
                            <li><span className="font-bold">Premium Support:</span> Access priority customer support whenever you need it.</li>
                            <li><span className="font-bold">Early Access to New Features:</span> Be the first to try out new tools and enhancements before anyone else.</li>
                            <li><span className="font-bold">Exclusive Community:</span> Join a select group of passionate adventurers shaping the future of travel.</li>
                        </ul>
                    </div>

                    <p className="mb-6">Don&apos;t miss out – limited spots available!</p>

                    {showSuccessAlert && (
                        <AlertPortal
                            title="Success!"
                            description="Thank you for signing up for our waitlist!"
                            onClose={() => setShowSuccessAlert(false)}
                        />
                    )}

                    {showErrorAlert && (
                        <AlertPortal
                            title="Error!"
                            description={error || "An unexpected error occurred."}
                            onClose={() => setShowErrorAlert(false)}
                        />
                    )}

                    {isSent ? (
                        <>
                            <p className="text-[var(--primary)] font-bold text-xl">Thank you for joining the waitlist!</p>
                            <p className="text-gray-100 text-md">
                                We have sent you an email confirming your spot on the waitlist. Please check your inbox for more details!
                            </p>
                        </>
                    ) : (
                        <form onSubmit={onSubmit}>
                            <div className="space-y-6 w-[16rem] flex justify-center flex-col items-center">
                                <div className="flex flex-col gap-4 w-full">
                                    <Input
                                        id="email"
                                        name="email"
                                        className="bg-white text-black px-4 py-2 rounded-md placeholder:text-gray-600 placeholder:font-semibold"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="email@example.com"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>

                                <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-6">
                                    <Button className='bg-[var(--primary)] hover:bg-white hover:text-[var(--primary)] py-2 px-4 rounded-md text-[1rem]' type='submit' disabled={isLoading}>
                                        {isLoading ? 'Loading...' : 'Join as a Founding Member'}
                                    </Button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    </motion.div>
    );
  };