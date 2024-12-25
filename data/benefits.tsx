import { FiMapPin, FiCompass, FiMessageSquare, FiClock, FiMap, FiMusic, FiCamera, FiAirplay, FiFlag, FiDollarSign } from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
    {
        title: "Personalized Adventure Planning",
        description: "Plan your next journey with customized itineraries that match your interests, budget, and schedule.",
        bullets: [
            {
                title: "Tailored Itineraries",
                description: "Create unique travel plans based on your preferences, from hiking trails to cultural landmarks.",
                icon: <FiCompass size={26} />
            },
            {
                title: "Smart Recommendations",
                description: "Uncover hidden gems and must-visit locations based on expert and community insights.",
                icon: <FiMapPin size={26} />
            },
            {
                title: "Budget-Friendly Options",
                description: "Receive cost estimates and tips to maximize your adventure without overspending.",
                icon: <FiDollarSign size={26} />
            }
        ],
        imageSrc: "/images/mockup-adventure-planning.webp"
    },
    {
        title: "Real-Time Guidance",
        description: "Your virtual guide, offering tips, directions, and insights throughout your journey.",
        bullets: [
            {
                title: "Interactive Maps",
                description: "Navigate with ease using built-in maps that highlight routes, attractions, and hidden gems.",
                icon: <FiMap size={26} />
            },
            {
                title: "Live Tips and Assistance",
                description: "Ask for help or advice anytime, anywhere, and get instant responses.",
                icon: <FiMessageSquare size={26} />
            },
            {
                title: "Cultural Insights",
                description: "Immerse yourself in local culture with stories, traditions, and historical context.",
                icon: <FiMusic size={26} />
            }
        ],
        imageSrc: "/images/mockup-real-time-guidance.webp"
    },
    {
        title: "Comprehensive Travel Tools",
        description: "Keep all your travel essentials in one place for a seamless adventure experience.",
        bullets: [
            {
                title: "Integrated Bookings",
                description: "Access tickets, reservations, and trip details in just a few taps.",
                icon: <FiClock size={26} />
            },
            {
                title: "Immersive Audio Guides",
                description: "Enjoy guided tours, destination stories, and cultural insights through audio experiences.",
                icon: <FiAirplay size={26} />
            },
            {
                title: "Offline Accessibility",
                description: "Use maps and travel tools even in remote areas without an internet connection.",
                icon: <FiCamera size={26} />
            }
        ],
        imageSrc: "/images/mockup-travel-tools.webp"
    },
    {
        title: "Seamless Accessibility",
        description: "Adventurer Guide stays with you, offering a smooth experience for planning and exploring.",
        bullets: [
            {
                title: "Cross-Device Sync",
                description: "Access your travel plans on any device, anytime.",
                icon: <FiFlag size={26} />
            },
            {
                title: "User-Friendly Interface",
                description: "Effortlessly navigate your tools with a simple and intuitive design.",
                icon: <FiMap size={26} />
            },
            {
                title: "Chat-First Design",
                description: "Interact with Adventurer Guide like talking to a friend, with everything just a message away.",
                icon: <FiMessageSquare size={26} />
            }
        ],
        imageSrc: "/images/mockup-seamless-accessibility.webp"
    }
];
