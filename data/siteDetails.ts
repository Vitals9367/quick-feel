export const siteDetails = {
    siteName: 'Adventurer Guide',
    siteUrl: 'https://adventurer-guide.vercel.app/',
    metadata: {
        title: 'Adventurer Guide - Your AI-Powered Travel Companion',
        description: 'Plan adventures, explore destinations, and travel with ease using Adventurer Guide, your all-in-one AI travel assistant.',
    },
    language: 'en-us',
    locale: 'en-US',
    siteLogo: `${process.env.BASE_PATH || ''}/images/logo.svg`,
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || '',
    email: 'support@adventurerguide.com'
}