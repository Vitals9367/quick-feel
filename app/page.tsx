import { createClient } from "@/utils/supabase/server";
import {
  getProducts,
  getSubscription,
  getUser,
} from "@/utils/supabase/queries";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default async function Home() {
  const supabase = createClient();
  const [user, products, subscription] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
    getSubscription(supabase),
  ]);

  return (
    <div className="w-full flex min-h-screen flex-col items-center">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing
        user={user}
        products={products ?? []}
        subscription={subscription}
      />
      <CTA />
      <Footer />
    </div>
  );
}
