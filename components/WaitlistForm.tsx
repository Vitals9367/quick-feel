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
                <div className="h-full w-full">
                    <div className="rounded-xl absolute inset-0 -z-10 h-full w-full bg-cover bg-center" style={{ backgroundImage: 'url(images/waitlist-background.jpg)' }}>
                        <div className="rounded-xl absolute inset-0 bg-black opacity-60"></div>
                    </div>
                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">{ctaDetails.heading}</h2>

                        <p className="mx-auto max-w-xl md:px-5 mb-4">{ctaDetails.subheading}</p>

                        {isSent ? (
                            <p className='text-[var(--primary)] font-bold'>Thank you for signing up!</p>
                        ) : (
                            <form onSubmit={onSubmit}>
                                <div className='space-y-4 w-[16rem]'>
                                    <div className="flex flex-col gap-2">
                                        <Input
                                        id="email"
                                        name="email"
                                        className="bg-white text-black px-2 py-1 rounded-md placeholder:text-gray-400"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="email@gmail.com"
                                        required
                                        />
                                    </div>

                                    <div className="mt-4 flex flex-col sm:flex-row items-center sm:gap-4">
                                        <Button className='w-full bg-[var(--primary)] hover:bg-white hover:text-[var(--primary)] py-1 rounded-md' type='submit' disabled={isLoading}>
                                            {isLoading ? 'Loading...' : 'Join The Waitlist'}
                                        </Button>
                                    </div>

                                </div>
                            </form>
                        )}
                </div>
            </div>
        </div>
    </section>
    );
  };