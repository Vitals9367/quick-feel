import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    socials: ISocials;
} = {
    subheading: "Plan adventures, explore destinations, and travel with ease using Adventurer Guide, your all-in-one AI travel assistant.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "Pricing",
            url: "#pricing"
        }
    ],
    email: 'support@adventurerguide.com',
    socials: {
        x: 'https://twitter.com/x',
        github: 'https://github.com',
        linkedin: 'https://www.linkedin.com'
    }
}