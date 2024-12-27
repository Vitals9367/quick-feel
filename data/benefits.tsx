import { FiMapPin, FiCompass, FiMessageSquare, FiClock, FiMap, FiMusic, FiCamera, FiAirplay, FiFlag, FiDollarSign } from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
    {
        title: "Plan Like a Pro, Your Way",
        description: "Create custom itineraries tailored to your interests, budget, and schedule. From scenic hiking trails to hidden cultural gems, we make every trip truly yours.",
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
        imageSrc: "/images/planning.jpg",
        imageAlt: "Traveler reviewing a custom itinerary."
    },
    {
        title: "Your Virtual Travel Companion",
        description: "Navigate confidently with interactive maps, live tips, and on-the-go advice. Get instant recommendations and insights anytime, anywhere.",
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
        imageSrc: "/images/real-time.jpg",
        imageAlt: "Traveler using a smartphone for directions."
    },
    {
        title: "All Your Essentials in One Place",
        description: "Access bookings, tickets, and key trip details with ease. Enjoy offline tools for seamless travel, even in remote area.",
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
        imageSrc: "/images/app.jpg",
        imageAlt: "Organized trip bookings and tickets on a tablet."
    },
    {
        title: "Travel Made Effortless",
        description: "Sync your plans across all devices. With a user-friendly chat-first design, it's like having a personal travel assistant in your pocket.",
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
        imageSrc: "/images/design.jpg",
        imageAlt: "Adventurer syncing plans across devices."
    }
];
