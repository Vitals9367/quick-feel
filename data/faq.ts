import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} secure?`,
        answer: `Yes! ${siteDetails.siteName} ensures the security and privacy of your data with bank-level encryption, keeping all your travel details safe.`,
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: `Absolutely! ${siteDetails.siteName} is fully synced across devices – whether you’re using a smartphone, tablet, or desktop, your travel plans are accessible anytime, anywhere.`,
    },
    {
        question: `How does ${siteDetails.siteName} create personalized travel plans?`,
        answer: `${siteDetails.siteName} customizes your travel itinerary based on your preferences, budget, and timeline. It takes into account your interests to suggest the best places and experiences tailored just for you.`,
    },
    {
        question: 'Can I access maps and guides offline?',
        answer: 'Yes! You can download your itineraries, maps, and travel guides to access them offline while you explore remote areas.',
    },
    {
        question: `Do I need an internet connection to use ${siteDetails.siteName}?`,
        answer: 'Certain features like real-time chat guidance and live updates require internet access, but offline tools like saved maps and itineraries will work without a connection.',
    },
    {
        question: 'How does the chat feature work?',
        answer: `${siteDetails.siteName} acts as your travel companion, providing real-time recommendations, directions, and tips through an easy-to-use chat interface.`,
    },
    {
        question: 'What if I need help while traveling?',
        answer: `${siteDetails.siteName} offers real-time guidance for any travel-related queries. Whether it’s directions or recommendations, help is just a message away.`,
    },
    {
        question: 'Is customer support available?',
        answer: 'Yes, our support team is available via chat or email for any assistance you may need during your trip. We’re here to help!',
    }
];