import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Seo from "./components/seo";
import { Toaster } from "@/components/ui/toaster";

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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
