export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "29",
    description: "Perfect for small teams getting started with feedback analysis",
    features: [
      "500 feedback analyses per month",
      "Sentiment & keyword analysis",
      "Simple, easy-to-read reports",
      "1 user access",
      "Email support"
    ],
    cta: "Start Free Trial"
  },
  {
    name: "Pro",
    price: "79",
    description: "Ideal for growing businesses needing more insights",
    features: [
      "2,000 feedback analyses per month",
      "Advanced sentiment analysis",
      "Customizable reporting",
      "Unlimited integrations",
      "3 user access",
      "Priority support",
      "API access"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "199",
    description: "For large organizations with custom needs",
    features: [
      "10,000+ feedback analyses per month",
      "Priority AI analysis for trends",
      "Advanced custom reports",
      "API access for automation",
      "10+ users",
      "24/7 premium support",
      "Custom integrations",
      "Dedicated account manager"
    ],
    cta: "Contact Sales"
  }
]

export const pricingFeatures = [
  {
    name: "Feedback Analysis",
    description: "Automate your feedback analysis at scale"
  },
  {
    name: "Sentiment Analysis",
    description: "Quickly understand customer sentiment with AI-powered analysis"
  },
  {
    name: "Customizable Reporting",
    description: "Get clear and actionable reports that can be tailored to your business needs"
  },
  {
    name: "API Access",
    description: "Automate feedback workflows by integrating QuickFeel with your existing systems"
  },
  {
    name: "User Access",
    description: "Allow multiple team members to act on insights from feedback analysis"
  }
]

