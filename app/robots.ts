import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    // Check if the environment is development
    const isDev = process.env.NODE_ENV === 'development';
    const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/+$/, '');

    return {
        rules: {
            userAgent: '*',
            allow: isDev ? [] : '/', // Disallow everything in development
            disallow: isDev ? '/' : [], // Allow everything in production
        },
        sitemap: isDev ? '/sitemap.xml' : `${baseUrl}/sitemap.xml`,
    }
}