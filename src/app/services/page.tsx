import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { WordReveal, ParagraphReveal } from "@/components/shared/WordReveal";
import { CaseStudy3DSlider } from "@/components/services/CaseStudy3DSlider";
import { ServicesFAQ } from "@/components/services/ServicesFAQ";
import { ServiceFeaturesVisual } from "@/components/services/ServiceFeaturesVisual";
import { StickyServicesStack } from "@/components/services/StickyServicesStack";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ModernWhyChooseSection } from "@/components/shared/ModernWhyChooseSection";

export const metadata: Metadata = {
  title: "Services | PEP Software",
  description:
    "Explore our complete range of digital services: Web Design & Development, UI/UX Design, Mobile App Development, and Graphic Design / AR.",
};

export default function ServicesPage() {

  return (
    <div className="w-full bg-[#F7F8F8] select-none">
      {/* Hero Header */}
      <section className="pt-20 sm:pt-24 pb-16 lg:pb-20 bg-[#F7F8F8] border-b border-[#C6C2C1]/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

        {/* Ambient Logo-Themed Glow Orbs */}
        <div className="absolute -top-24 -right-20 w-[550px] h-[550px] bg-[#502D6D]/[0.06] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 w-[550px] h-[550px] bg-[#FCB116]/[0.08] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <RevealOnScroll>
                <div className="inline-flex items-center gap-2.5 mb-2">
                  <span className="w-4 h-[2px] rounded-full bg-gradient-to-r from-[#502D6D] to-[#FCB116]" />
                  <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent">
                    FULL SUITE SERVICES
                  </span>
                </div>
                <WordReveal
                  as="h1"
                  text="Digital solutions engineered for maximum impact."
                  gradientWords="maximum impact."
                  gradientClassName="bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent"
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#151515] leading-[1.08] mt-4"
                />
                <ParagraphReveal
                  text="From high-converting websites and native mobile apps to bespoke design systems and scalable software architectures, our studio delivers end-to-end excellence."
                  delay={0.15}
                  className="text-base sm:text-lg text-[#544643] leading-relaxed max-w-xl mx-auto lg:mx-0 mt-4"
                />
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#151515] text-[#F7F8F8] font-bold text-sm hover:bg-[#502D6D] shadow-md shadow-[#151515]/10 hover:shadow-[#502D6D]/20 transition-all cursor-pointer"
                  >
                    <span>Get a Free Quote</span>
                    <ArrowRight className="w-4 h-4 text-[#FCB116]" />
                  </Link>
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#EFF0EF] border border-[#C6C2C1] text-[#151515] font-semibold text-sm hover:border-[#502D6D]/40 hover:text-[#502D6D] shadow-xs transition-all cursor-pointer"
                  >
                    <span>View Our Work</span>
                  </Link>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right: 3D Animated Feature Highlights Visual */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <ServiceFeaturesVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Scroll-Driven Sticky Stacking Services Showcase */}
      <StickyServicesStack />

      {/* 3D Cylindrical Curved Case Study Slider (matching pepsoftwares.com) */}
      <CaseStudy3DSlider />

      {/* Why Choose Pep Software Section - Modern 3D Card Design */}
      <ModernWhyChooseSection />

      {/* Interactive FAQ Accordion with categories */}
      <ServicesFAQ />

      {/* Ready to Bring Your Ideas to Life Banner */}
      <ContactCTA />
    </div>
  );
}
