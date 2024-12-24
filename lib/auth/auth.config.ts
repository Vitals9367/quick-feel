import type { NextAuthConfig } from 'next-auth';
import NextAuth, { type User, type Session } from 'next-auth';
import Keycloak from "next-auth/providers/keycloak"

interface ExtendedSession extends Session {
  user: User;
}

export const authConfig = {
  providers: [Keycloak],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.idToken = account.id_token
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.expiresAt = account.expires_at
      }
      return token
    },
    async session({ session, token }) {
      session.sessionToken = token.accessToken as string
      return session
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;
    
      const isOnLandingPage = pathname === '/';
      const isOnChat = pathname.startsWith('/chat');
      const isOnRegister = pathname.startsWith('/register');
      const isOnLogin = pathname.startsWith('/login');
    
      // Redirect logged-in users from landing page, login, or register to /chat
      if (isLoggedIn && (isOnLandingPage || isOnLogin || isOnRegister)) {
        return Response.redirect(new URL('/chat', nextUrl));
      }
    
      // Allow access to landing, register, and login pages for unauthenticated users
      if (!isLoggedIn && (isOnLandingPage || isOnLogin || isOnRegister)) {
        return true;
      }
    
      // Protect /chat routes
      if (isOnChat && !isLoggedIn) {
        return false;
      }
    
      // Default behavior: redirect logged-in users to /chat, others can access
      if (isLoggedIn && !isOnChat) {
        return Response.redirect(new URL('/chat', nextUrl));
      }
    
      return true; // Allow unauthenticated access for other routes
    }
  },
} satisfies NextAuthConfig;
