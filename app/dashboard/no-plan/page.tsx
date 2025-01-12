import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Choose a Plan | QuickFeel",
  description: "Select a plan to start analyzing your feedback with QuickFeel.",
};

const plans = [
  {
    name: "Basic",
    price: "29",
    description:
      "Perfect for small teams getting started with feedback analysis",
    features: [
      "500 feedback analyses per month",
      "Basic sentiment analysis",
      "1 project",
      "Email support",
      "1 team member",
    ],
  },
  {
    name: "Pro",
    price: "79",
    description: "Ideal for growing businesses needing more insights",
    features: [
      "2,000 feedback analyses per month",
      "Advanced sentiment analysis",
      "Unlimited projects",
      "Priority support",
      "5 team members",
      "Custom reports",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "199",
    description: "For large organizations with custom needs",
    features: [
      "10,000+ feedback analyses per month",
      "Custom AI models",
      "Unlimited everything",
      "24/7 premium support",
      "Unlimited team members",
      "Custom integrations",
      "Dedicated account manager",
    ],
  },
];

export default function NoPlanPage() {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Choose Your Plan</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Select a plan to start analyzing your feedback with QuickFeel
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border bg-card p-8 shadow-sm ${
              plan.popular
                ? "border-primary ring-2 ring-primary ring-offset-2"
                : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-8">
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <p className="mt-4 text-muted-foreground">{plan.description}</p>
              <p className="mt-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </p>
            </div>

            <ul className="mb-8 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="mr-3 h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full"
              variant={plan.popular ? "default" : "outline"}
            >
              Get Started with {plan.name}
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          Need a custom plan?{" "}
          <Link
            href="/contact"
            className="font-medium text-primary hover:underline"
          >
            Contact our sales team
          </Link>
        </p>
      </div>
    </div>
  );
}
