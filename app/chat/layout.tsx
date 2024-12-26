import { cookies } from 'next/headers';

import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

import Script from 'next/script';
import { createClient } from '@/utils/supabase/server';
import Feedback from '@/components/Feedback/Feedback';

export const experimental_ppr = true;

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const [userData, cookieStore] = await Promise.all([
    supabase.auth.getUser(),
    cookies(),
  ]);

  const isCollapsed = cookieStore.get('sidebar:state')?.value !== 'true';
  const user = userData.data?.user ?? undefined;

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js"
        strategy="beforeInteractive"
      />
      <SidebarProvider defaultOpen={!isCollapsed}>
        <AppSidebar user={user} />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
      <Feedback />
    </>
  );
}
