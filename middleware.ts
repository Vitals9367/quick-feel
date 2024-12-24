export { auth as middleware } from "@/lib/auth/auth"

export const config = {
  matcher: [
    /**
     * Match all routes except:
     * - Static files and directories
     * - Next.js special routes (_next/static, _next/image, etc.)
     * - Public files (favicon.ico, robots.txt, etc.)
     * - NextAuth paths (e.g., /api/auth/*)
     */
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|static|assets|api/auth).*)",
  ],
};