import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Crimson_Pro,
  Press_Start_2P,
} from "next/font/google";
import "./globals.css";
import PixelFooter from "./components/PixelArtFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-heading",
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "runtime.works - Building better software",
  description:
    "A software studio that takes time to build things right. We focus on understanding problems deeply and engineering solutions that grow with your needs.",
  openGraph: {
    title: "runtime.works - Building better software",
    description:
      "A software studio that takes time to build things right. We focus on understanding problems deeply and engineering solutions that grow with your needs.",
    url: "https://runtime.works",
    siteName: "runtime.works",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "runtime.works - Building better software",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "runtime.works - Building better software",
    description:
      "A software studio that takes time to build things right. We focus on understanding problems deeply and engineering solutions that grow with your needs.",
    creator: "@worksruntime",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${crimsonPro.variable} ${pressStart2P.variable} antialiased`}
      >
        <main>{children}</main>
        <PixelFooter />
      </body>
    </html>
  );
}
