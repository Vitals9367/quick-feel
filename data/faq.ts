import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} secure?`,
        answer: 'Absolutely. We prioritize your privacy and security. All your data is protected with bank-level encryption, ensuring your travel information stays safe.',
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: 'Yes! Adventurer Guide syncs seamlessly across all your devices – smartphone, tablet, or desktop – making it easy to plan and explore from anywhere.',
    },
    {
        question: 'Can I access maps and guides offline?',
        answer: 'Definitely! You can download maps, itineraries, and guides to use them offline, ensuring you stay on track even in remote areas with no internet connection.',
    },
    {
        question: 'Do I need internet access to use all features?',
        answer: 'Some features, like real-time chat guidance and live updates, require internet access. However, offline tools like maps and saved itineraries are fully functional without it.',
    },
    {
        question: 'How does Adventurer Guide create personalized travel plans?',
        answer: `Adventurer Guide uses advanced algorithms to tailor itineraries based on your preferences, interests, budget, and schedule. Whether you love nature, culture, or adventure, we’ve got you covered!`,
    },
    {
        question: 'What if I get lost or need help during my trip?',
        answer: 'No worries! Adventurer Guide provides real-time guidance and support. You can get live directions, ask for tips, or use interactive maps to navigate.',
    },
    {
        question: 'Is there customer support available?',
        answer: 'Of course! Our dedicated support team is available 24/7 via chat or email to help with any questions or issues you may encounter.',
    },
    {
        question: 'Can I share my itinerary with others?',
        answer: 'Yes! You can easily share your travel plans with friends and family through a shareable link or by exporting your itinerary.',
    }
];