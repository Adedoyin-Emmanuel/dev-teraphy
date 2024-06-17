import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Seo from "./components/seo";

const inter = Bricolage_Grotesque({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Dev teraphy",
  description: "",
  icons: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Seo />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
