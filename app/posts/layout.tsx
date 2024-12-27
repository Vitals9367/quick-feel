import { Inter } from "next/font/google";
import cn from "classnames";

import PostFooter from "@/components/posts/footer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <Header />
        <div className="min-h-screen">{children}</div>
        <PostFooter />
        <Footer />
      </body>
    </html>
  );
}
