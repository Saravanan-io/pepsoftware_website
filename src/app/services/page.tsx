import { Metadata } from "next";
import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { ServicesOverviewSection } from "@/components/services/ServicesOverviewSection";
import { ServicesDetailedShowcase } from "@/components/services/ServicesDetailedShowcase";
import { ServicesSolutionFinder } from "@/components/services/ServicesSolutionFinder";
import { ServicesProcessSection } from "@/components/services/ServicesProcessSection";
import { ServicesWhyUsSection } from "@/components/services/ServicesWhyUsSection";
import { ServicesSelectedWorkSection } from "@/components/services/ServicesSelectedWorkSection";
import { ServicesFinalCTASection } from "@/components/services/ServicesFinalCTASection";

export const metadata: Metadata = {
  title: "Services | Digital Solutions for Real Business Needs — PEP Software",
  description:
    "We design, develop and deliver digital solutions that help businesses work smarter, serve customers better and grow: UI/UX Design, Websites & Web Apps, Mobile Apps, Custom Software, SaaS Products, and Digital Marketing.",
  openGraph: {
    title: "Digital Solutions for Real Business Needs | PEP Software Services",
    description:
      "Explore PEP Software's full suite of digital services: UI/UX Design, Website & Web Apps, Mobile App Development, Custom Enterprise Software, SaaS Development, and Digital Marketing.",
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

      {/* 11. Why Choose Pep Software? — Why Us */}
      <ServicesWhyUsSection />

      {/* 12. Selected Work — Our Projects */}
      <ServicesSelectedWorkSection />

      {/* 13. Final CTA — Project CTA */}
      <ServicesFinalCTASection />
    </div>
  );
}
