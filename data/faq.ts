import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} secure?`,
        answer: `Yes, ${siteDetails.siteName} prioritizes the security of your data. We use advanced encryption technology to protect your personal and travel details, ensuring your information remains private and secure.`,
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: `Absolutely! ${siteDetails.siteName} is designed to work seamlessly across all devices, including smartphones, tablets, and desktops. Your travel plans will sync automatically, so you can access them wherever you are.`,
    },
    {
        question: `How does ${siteDetails.siteName} create personalized travel plans?`,
        answer: `${siteDetails.siteName} generates personalized travel itineraries by analyzing your preferences, budget, and available time. It suggests tailored destinations, activities, and experiences that match your unique travel style.`,
    },
    {
        question: 'Can I access maps and guides offline?',
        answer: 'Yes! You can download your itineraries, maps, and travel guides to your device. This allows you to access important travel information even when you’re in areas without internet access.',
    },
    {
        question: `Do I need an internet connection to use ${siteDetails.siteName}?`,
        answer: 'While certain features like real-time chat guidance and live updates require an internet connection, you can still access downloaded maps, itineraries, and other offline tools without being online.',
    },
    {
        question: 'How does the chat feature work?',
        answer: `${siteDetails.siteName} provides a real-time chat feature that acts as your personal travel assistant. You’ll receive helpful recommendations, directions, and travel tips directly within the chat interface to assist you during your journey.`,
    },
    {
        question: 'What if I need help while traveling?',
        answer: `${siteDetails.siteName} offers real-time travel assistance, providing instant support for questions like directions, local recommendations, and travel advice. Simply send a message, and we'll be there to help.`,
    },
    {
        question: 'Is customer support available?',
        answer: 'Yes, we offer customer support via chat or email. Our team is ready to assist you with any inquiries or issues you may encounter during your trip. Your satisfaction is our priority.',
    }
];