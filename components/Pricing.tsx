"use client";

import { User } from "@supabase/supabase-js";
import type { Tables } from "@/types_db";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { getStripe } from "@/utils/stripe/client";
import { checkoutWithStripe } from "@/utils/stripe/server";
import { getErrorRedirect } from "@/utils/helpers";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { staggerChildren, fadeIn } from "./animations";

type Subscription = Tables<"subscriptions">;
type Product = Tables<"products">;
type Price = Tables<"prices">;
interface ProductWithPrices extends Product {
  prices: Price[];
}
interface PriceWithProduct extends Price {
  products: Product | null;
}
interface SubscriptionWithProduct extends Subscription {
  prices: PriceWithProduct | null;
}

interface Props {
  user: User | null | undefined;
  products: ProductWithPrices[];
  subscription: SubscriptionWithProduct | null;
}

type BillingInterval = "lifetime" | "year" | "month";

export default function Pricing({ user, products, subscription }: Props) {
  const intervals = Array.from(
    new Set(
      products.flatMap((product) =>
        product?.prices?.map((price) => price?.interval),
      ),
    ),
  );
  const router = useRouter();
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("month");
  const [priceIdLoading, setPriceIdLoading] = useState<string>();
  const currentPath = usePathname();

  const handleStripeCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);

    if (!user) {
      setPriceIdLoading(undefined);
      return router.push("/signin/signup");
    }

    const { errorRedirect, sessionId } = await checkoutWithStripe(
      price,
      currentPath,
    );

    if (errorRedirect) {
      setPriceIdLoading(undefined);
      return router.push(errorRedirect);
    }

    if (!sessionId) {
      setPriceIdLoading(undefined);
      return router.push(
        getErrorRedirect(
          currentPath,
          "An unknown error occurred.",
          "Please try again later or contact a system administrator.",
        ),
      );
    }

    const stripe = await getStripe();
    stripe?.redirectToCheckout({ sessionId });

    setPriceIdLoading(undefined);
  };

  return (
    <section id="pricing" className="w-full py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="flex flex-col items-center space-y-4 text-center"
        >
          <div className="text-[#2A9D8F] text-sm font-medium">PRICING</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Choose the Plan That Fits Your Business
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            No credit card required to get started with QuickFeel. Pay monthly
            for the value your team will gain.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3 md:gap-8"
        >
          {products.map((product, index) => {
            console.log(product);
            const price = product?.prices?.find(
              (price) => price.interval === billingInterval,
            );

            if (!price) return null;

            const priceString = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: price.currency!,
              minimumFractionDigits: 0,
            }).format((price?.unit_amount || 0) / 100);

            const popular = index === 1;

            return (
              <motion.div
                key={product.name}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className={cn(
                  "relative rounded-2xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl",
                  popular && "border-2 border-[#2A9D8F]",
                )}
              >
                {popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                  >
                    <div className="bg-[#2A9D8F] text-white px-3 py-1 rounded-full text-sm">
                      Most popular
                    </div>
                  </motion.div>
                )}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">{priceString}</span>
                    <span className="text-gray-500 ml-1">/month</span>
                  </div>
                  <p className="text-gray-500">{product.description}</p>
                </div>
                <motion.ul
                  variants={staggerChildren}
                  className="mt-8 space-y-4"
                >
                  {/* {plan.features.map((feature) => (
                  <motion.li 
                    key={feature}
                    variants={slideInFromLeft}
                    className="flex items-center"
                  >
                    <div className="rounded-full bg-[#2A9D8F]/10 p-1 mr-3">
                      <Check className="h-4 w-4 text-[#2A9D8F]" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))} */}
                </motion.ul>
                <Button className="w-full mt-8 bg-[#2A9D8F] hover:bg-[#238579] text-white transition-transform hover:scale-105 duration-200">
                  Start for {priceString}/month
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
