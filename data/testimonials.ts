export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export const testimonials: Testimonial[] = [
  {
    quote: "QuickFeel has transformed the way we analyze customer feedback. What used to take us days now takes minutes.",
    author: "John Smith",
    role: "Marketing Manager",
    company: "TechCorp",
    image: "/testimonials/john.jpg",
    stats: [
      {
        label: "Time Saved",
        value: "85%"
      },
      {
        label: "Customer Satisfaction",
        value: "+40%"
      }
    ]
  },
  {
    quote: "QuickFeel has saved our team hours of work each week. We can now react to feedback faster and with greater precision.",
    author: "Emily Chen",
    role: "Customer Success Lead",
    company: "GrowthStart",
    image: "/testimonials/emily.jpg",
    stats: [
      {
        label: "Weekly Hours Saved",
        value: "20+"
      },
      {
        label: "Response Time",
        value: "-65%"
      }
    ]
  }
]

export const socialProof = {
  customers: "1,000+",
  feedback: "1M+",
  satisfaction: "98%",
  companies: [
    {
      name: "TechCorp",
      logo: "/logos/techcorp.svg"
    },
    {
      name: "GrowthStart",
      logo: "/logos/growthstart.svg"
    },
    {
      name: "InnovateCo",
      logo: "/logos/innovateco.svg"
    }
  ]
}

