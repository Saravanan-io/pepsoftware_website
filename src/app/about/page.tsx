import { Metadata } from "next";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import { AboutValuesSection } from "@/components/about/AboutValuesSection";
import { CeoSection } from "@/components/about/CeoSection";
import { AboutTeamSection } from "@/components/about/AboutTeamSection";
import { AboutIndustriesSection } from "@/components/about/AboutIndustriesSection";
import { AboutWhyUsSection } from "@/components/about/AboutWhyUsSection";
import { AboutImpactSection } from "@/components/about/AboutImpactSection";
import { AboutClientsSection } from "@/components/about/AboutClientsSection";
import { AboutClosingCTA } from "@/components/about/AboutClosingCTA";

export const metadata: Metadata = {
  title: "About Us | PEP Software — Software & Digital Product Development",
  description:
    "We Build Digital Solutions That Move Businesses Forward. Learn about PEP Software's story, philosophy, mission, values, team, capabilities, and verified impact.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* 01. Hero Section (with 3D Interactive Logo Showcase) */}
      <AboutHeroSection />

      {/* 02. Our Story, 03. What We Believe (Philosophy), 04. Mission & Vision */}
      <AboutStorySection />

      {/* 05. Our Values: The Principles Behind Our Work */}
      <AboutValuesSection />


      {/* 07. Leadership & Vision: Pioneering Technology with Purpose (CEO Shri Gowtham) */}
      <CeoSection />

      {/* 08. Our Team: A Team of Designers, Developers & Problem Solvers */}
      <AboutTeamSection />

      {/* 08. Industries We Serve: Technology for Different Businesses */}
      <AboutIndustriesSection />

      {/* 10. Why Pep Software?: Why Businesses Choose Pep Software */}
      <AboutWhyUsSection />

      {/* 11. Our Work in Numbers: Experience You Can See in Our Work (with Cosmic 3D Solar System) */}
      <AboutImpactSection />

      {/* 12. Featured Client / Trust Section: Trusted by Businesses Across Industries */}
      <AboutClientsSection />

      {/* 13. Closing CTA: Have an Idea? Let's Build It Together */}
      <AboutClosingCTA />
    </div>
  );
}
