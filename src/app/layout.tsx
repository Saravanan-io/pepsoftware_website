import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Syne, Caveat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
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
  metadataBase: new URL("https://pepsoftwares.com"),
  title: {
    default: "PEP Software | Digital Experiences, Engineered for Growth",
    template: "%s | PEP Software",
  },
  description:
    "At Pep Softwares, we bring your ideas to life with boundless creativity. We design and develop modern websites, mobile applications, and immersive digital solutions.",
  keywords: [
    "PEP Software",
    "UI/UX Design",
    "Website Development",
    "Mobile App Development",
    "UI UX Design Course Erode",
    "Web Development Course",
    "Design Internship",
  ],
  authors: [{ name: "Pep Softwares Pvt. Ltd." }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pepsoftwares.com",
    siteName: "PEP Software",
    title: "PEP Software | Digital Experiences, Engineered for Growth",
    description:
      "We design and develop modern websites, mobile applications, and immersive digital solutions that help businesses grow in the real world and beyond.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/pep-icon.png", type: "image/png", sizes: "328x328" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
  return (
    <html lang="en" className={`${jakarta.variable} ${syne.variable} ${caveat.variable} ${clashDisplay.variable} font-sans`}>
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
