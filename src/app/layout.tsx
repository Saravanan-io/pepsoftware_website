import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Syne, Caveat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SEO_CONFIG } from "@/lib/seo-config";
import {
  JsonLd,
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebSiteSchema,
} from "@/components/seo/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { ScrollProgressBar } from "@/components/shared/ScrollProgressBar";
import { WhatsAppFloatingButton } from "@/components/shared/WhatsAppFloatingButton";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

const clashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["700", "800"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  title: {
    default: "PEP Software | Software Company in Erode & Coimbatore, Tamil Nadu",
    template: "%s | PEP Software",
  },
  description:
    "PEP Software is a top software development company in Erode & Coimbatore, Tamil Nadu. We engineer custom enterprise software, high-speed web applications, and iOS/Android mobile apps.",
  keywords: [
    "PEP Software",
    "Software Company in Erode",
    "Best software company in Erode",
    "IT Company in Erode",
    "Software Company in Coimbatore",
    "Top IT company in Coimbatore",
    "Software company in Tamil Nadu",
    "Custom Software Development",
    "Website Development Company",
    "Mobile App Development",
    "Flutter App Development",
    "Attendance Tracking System",
    "Business Club Management Software",
  ],
  authors: [{ name: SEO_CONFIG.legalName, url: SEO_CONFIG.siteUrl }],
  creator: SEO_CONFIG.siteName,
  publisher: SEO_CONFIG.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.siteName,
    title: "PEP Software | Software Company in Erode & Coimbatore, Tamil Nadu",
    description:
      "We engineer custom enterprise software, high-speed web applications, and iOS/Android mobile apps that help businesses automate operations and scale in Tamil Nadu.",
    images: [
      {
        url: SEO_CONFIG.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "PEP Software - Digital Experiences Engineered for Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PEP Software | Software Company in Erode & Coimbatore, Tamil Nadu",
    description:
      "Custom software engineering, mobile application development, and high-performance web systems in Tamil Nadu.",
    images: [SEO_CONFIG.defaultOgImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/pep-icon.png", type: "image/png", sizes: "328x328" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/pep-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F8F8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganizationSchema();
  const localBizSchema = getLocalBusinessSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="en" className={`${jakarta.variable} ${syne.variable} ${caveat.variable} ${clashDisplay.variable} font-sans`}>
      <head>
        <JsonLd schema={orgSchema} />
        <JsonLd schema={localBizSchema} />
        <JsonLd schema={websiteSchema} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F8F8] text-[#151515] antialiased selection:bg-[#C86A28] selection:text-white">
        <Preloader />
        <ScrollProgressBar />
        <WhatsAppFloatingButton />
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
