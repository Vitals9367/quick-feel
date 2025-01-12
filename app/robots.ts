import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    // Check if the environment is development
    const isDev = process.env.NODE_ENV === 'development';
    const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/+$/, '');

    return {
        rules: {
            userAgent: '*',
            allow: isDev ? [] : '/',
        },
        sitemap: isDev ? '' : `${baseUrl}/sitemap.xml`,
    }
}