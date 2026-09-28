import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { ScrollProgressBar } from "@/components/shared/ScrollProgressBar";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
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
    "AR/VR Design",
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
    icon: "/favicon.ico",
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
    <html lang="en" className={`${jakarta.variable} font-sans`}>
      <body className="min-h-screen flex flex-col bg-[#F7F8F8] text-[#151515] antialiased selection:bg-[#C86A28] selection:text-white">
        <Preloader />
        <ScrollProgressBar />
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
