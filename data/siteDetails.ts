export const siteDetails = {
    siteName: 'Adventurer Guide',
    siteUrl: 'https://adventurer-guide.vercel.app/',
    metadata: {
        title: 'Adventurer Guide - Your AI-Powered Travel Companion',
        description: 'Plan your adventures effortlessly with Adventurer Guide. Tailored itineraries, real-time guidance, travel tools, and immersive experiences—all in one app. Join the waitlist now!',
    },
    language: 'en-us',
    locale: 'en-US',
    siteLogo: `${process.env.BASE_PATH || ''}/images/logo.svg`,
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || '',
    email: 'support@adventurerguide.com'
}