import { Brain, TrendingUp, FolderKanban } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Brain,
    title: "Understand Customer Sentiment Instantly",
    description:
      "Our AI categorizes feedback automatically, uncovering trends and patterns that would take hours to find manually.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Insights for Quick Decisions",
    description:
      "Watch trends emerge in real-time and make data-driven decisions that impact your business immediately.",
  },
  {
    icon: FolderKanban,
    title: "Streamline Feedback Management",
    description:
      "Organize and prioritize customer input effortlessly with our intuitive management system.",
  },
];
