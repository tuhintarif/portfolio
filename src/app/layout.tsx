import type { Metadata } from "next";
import {  Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alimohammadtarif.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "md",
    "mohammad",
    "Md",
    "MD",
    "ALI",
    "Ali",
    "ali",
    "TARIF",
    "Tarif",
    "tarif",
    "ALI MOHAMMAD",
    "Ali Mohammad",
    "ali mohammad",
    "ali mohammad tarif",
    "Ali Mohammad Tarif",
    "ALI MOHAMMAD TARIF",
    "tuhin",
    "Tuhin",
    "TUHIN",
    "Tuhin.Tarif",
    "tuhin.tarif",
    "tuhin.iium",
    "tuhin tarif",
    "Tuhin Tarif",
    "tuhintarif",
    "Tuhintarif",
    "Ali Tarif",
    "Tarif Ali",
    "Alimohammadtarif",
    "alimohammadtarif",
    "portfolio",
    "web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER ",
    "programmer ",
    "software engineer",
    "Software Engineer",
    "website",
    "engineer portfolio",
    "web developer portfolio",
    "software engineer portfolio",
  ],
  authors: [
    {
      name: "Ali Mohammad Tarif",
      url: "https://github.com/tuhintarif",
    },
  ],
  creator: "Ali Mohammad Tarif",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "ali mohammad tarif",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            "flex relative break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-primary max-sm:pt-20 [background-size:16px_16px]"
          )}
        >
          {/* NAVBAR ->  */}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
