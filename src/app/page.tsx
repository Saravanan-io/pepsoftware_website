import type { Metadata } from "next";
import { HeroContent } from "@/components/home/HeroContent";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { IntroStatement } from "@/components/home/IntroStatement";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PortfolioTeaser } from "@/components/home/PortfolioTeaser";
import { ProcessHowWeDevelop } from "@/components/home/ProcessHowWeDevelop";
import { Testimonials } from "@/components/home/Testimonials";
import { ModernWhyChooseSection } from "@/components/shared/ModernWhyChooseSection";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Pep Software | Software Company in Erode & Coimbatore, Tamil Nadu",
  description:
    "Pep Software is a premier software development company in Erode & Coimbatore, Tamil Nadu. We build custom software, web applications, and mobile apps for growing businesses.",
  keywords: [
    "Software company in Erode",
    "Best software company in Erode",
    "IT company in Erode",
    "Software company in Coimbatore",
    "Top IT company in Coimbatore",
    "Software company in Tamil Nadu",
    "Software development company near me",
    "Custom software development",
    "Web application development company",
    "Mobile app development company",
  ],
  alternates: {
    canonical: "https://pepsoftwares.com",
  },
  openGraph: {
    title: "Pep Software | Software Company in Erode & Coimbatore, Tamil Nadu",
    description:
      "Pep Software builds high-performance web applications, mobile apps, and custom enterprise software in Erode, Coimbatore, and across Tamil Nadu.",
    url: "https://pepsoftwares.com",
    siteName: "Pep Software",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 3D Hero + Interactive Floating Badges & Content */}
      <HeroContent />

      {/* Infinite Logo Marquee */}
      <ClientsMarquee />

      {/* About Pep Software & Metrics Cards (Who We Are) */}
      <IntroStatement />

      {/* Services Grid (4 Core Services with 3D Tilt Hover - Our Services) */}
      <ServicesGrid />

      {/* Structured Process Strip (01 to 06 with 'From Idea to Impact') */}
      <ProcessStrip />

      {/* Why Choose Us: Smart Solutions, Real Results */}
      <WhyChooseUs />

      {/* Portfolio Teaser with Filter Tabs */}
      <PortfolioTeaser />

      {/* Impact Numbers & Performance Growth Chart */}
      <ProcessHowWeDevelop />

      {/* Client Testimonials Slider */}
      <Testimonials />

      {/* Built for Quality. Engineered to Scale. (Modern Why Choose Section) */}
      <ModernWhyChooseSection id="built-for-quality" />

      {/* Ready to Bring Your Ideas to Life Banner */}
      <ContactCTA />
    </div>
  );
}
