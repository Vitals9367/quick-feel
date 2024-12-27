'use client';

import { Label } from "@radix-ui/react-dropdown-menu";
import { useState, FormEvent } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { createClient } from "@/utils/supabase/client";
import { ctaDetails } from "@/data/cta";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const WaitlistForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [isSent, setIsSent] = useState<boolean>(false);
  
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setIsLoading(true);
      setError(null);
  
      try {
        const formData = new FormData(event.currentTarget);
        const supabase = createClient();
  
        await supabase.from('waitlist').insert({
          email: formData.get('email'),
        });
      } catch (error: any) {
        setError(error.message);
        console.error(error);
      } finally {
        setIsSent(true);
      }
    }
  
    return (
        <section className="lg:my-20 drop-shadow-lg">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
            <div className="rounded-xl absolute inset-0 -z-10 h-full w-full bg-cover bg-center" style={{ backgroundImage: 'url(images/waitlist-background.jpg)' }}>
                <div className="rounded-xl absolute inset-0 bg-black opacity-75"></div>
            </div>
            <div className="h-full flex flex-col items-center justify-center text-white text-center px-5 py-8">
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

                {isSent ? (
                    <p className="text-[var(--primary)] font-bold text-xl">Thank you for signing up!</p>
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
    );
  };