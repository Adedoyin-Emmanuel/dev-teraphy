import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Sidenav from "@/app/components/sidenav";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";

const inter = Bricolage_Grotesque({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Dev teraphy",
  description: "",
  icons: [
    {
      url: "/asset/supabase.svg",
      href: "/asset/supabase.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Toaster />
        <Suspense>
          <Sidenav>{children}</Sidenav>
        </Suspense>
      </body>
    </html>
  );
}
