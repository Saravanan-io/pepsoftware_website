import { Metadata } from "next";
import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { ServicesOverviewSection } from "@/components/services/ServicesOverviewSection";
import { ServicesDetailedShowcase } from "@/components/services/ServicesDetailedShowcase";
import { ServicesSolutionFinder } from "@/components/services/ServicesSolutionFinder";
import { ServicesProcessSection } from "@/components/services/ServicesProcessSection";
import { ServicesSelectedWorkSection } from "@/components/services/ServicesSelectedWorkSection";
import { ServicesFinalCTASection } from "@/components/services/ServicesFinalCTASection";

export const metadata: Metadata = {
  title: "Software Development Services in Tamil Nadu | PEP Software",
  description:
    "Explore PEP Software's full-stack technology services: custom software development, web applications, mobile apps (iOS & Android), UI/UX design, and digital systems.",
  keywords: [
    "Software development services in Tamil Nadu",
    "Website development company",
    "Mobile application development company",
    "Custom software development",
    "UI UX design services",
    "Digital marketing services",
    "Enterprise software development",
  ],
  alternates: {
    canonical: "https://pepsoftwares.com/services",
  },
  openGraph: {
    title: "Software Development Services in Tamil Nadu | PEP Software",
    description:
      "Explore PEP Software's full suite of digital engineering services: UI/UX design, web applications, iOS/Android mobile apps, and custom enterprise software.",
    url: "https://pepsoftwares.com/services",
    siteName: "PEP Software",
  },
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#F7F8F8]">
      {/* 01. Hero Section — Hero / Introduction */}
      <ServicesHeroSection />

      {/* 02. Services Overview — What We Do */}
      <ServicesOverviewSection />

      {/* 03 to 08. Detailed Service Showcases:
          03 — UI/UX Design
          04 — Website & Web Apps
          05 — Mobile Apps
          06 — Custom Software
          07 — SaaS Products
          08 — Digital Marketing
      */}
      <ServicesDetailedShowcase />

      {/* 09. How We Choose the Right Solution — Solution Finder */}
      <ServicesSolutionFinder />

      {/* 10. Our Process — How We Work */}
      <ServicesProcessSection />


      {/* 12. Selected Work — Our Projects */}
      <ServicesSelectedWorkSection />

      {/* 13. Final CTA — Project CTA */}
      <ServicesFinalCTASection />
    </div>
  );
}
