import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Target,
  Zap,
  Repeat,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { CaseStudy3DSlider } from "@/components/services/CaseStudy3DSlider";
import { ServicesFAQ } from "@/components/services/ServicesFAQ";
import { ServiceFeaturesVisual } from "@/components/services/ServiceFeaturesVisual";
import { StickyServicesStack } from "@/components/services/StickyServicesStack";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Services | PEP Software",
  description:
    "Explore our complete range of digital services: Web Design & Development, UI/UX Design, Mobile App Development, and Graphic Design / AR.",
};

export default function ServicesPage() {
  const whyChoosePillars = [
    {
      icon: Target,
      title: "Tailored Solutions",
      description:
        "Every digital product is custom crafted to your exact business goals, target audience, and market niche.",
    },
    {
      icon: Sparkles,
      title: "User-Centered Design",
      description:
        "We blend visual branding with empathetic UI/UX principles to build interfaces that visitors love and trust.",
    },
    {
      icon: Zap,
      title: "Innovation-Driven Approach",
      description:
        "Modern frameworks ensuring blazing fast performance, ironclad security, and future-proof scalability.",
    },
    {
      icon: Repeat,
      title: "Transparent Workflow",
      description:
        "Predictable milestones, regular updates, and collaborative project management from concept to launch.",
    },
  ];

  return (
    <div className="w-full bg-[#F7F8F8] select-none">
      {/* Hero Header */}
      <section className="pt-20 sm:pt-24 pb-16 lg:pb-20 bg-[#F7F8F8] border-b border-[#C6C2C1]/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <RevealOnScroll>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] text-xs font-bold uppercase tracking-wider text-[#C86A28]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Full Suite Services</span>
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#151515] leading-[1.08] mt-4">
                  Digital solutions engineered for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#544643] to-[#C86A28]">
                    maximum impact.
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-[#544643] leading-relaxed max-w-xl mx-auto lg:mx-0 mt-4">
                  From high-converting websites and native mobile apps to bespoke design systems and scalable software architectures, our studio delivers end-to-end excellence.
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#151515] text-[#F7F8F8] font-bold text-sm hover:bg-[#544643] shadow-md shadow-[#151515]/10 transition-all cursor-pointer"
                  >
                    <span>Get a Free Quote</span>
                    <ArrowRight className="w-4 h-4 text-[#C86A28]" />
                  </Link>
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#EFF0EF] border border-[#C6C2C1] text-[#151515] font-semibold text-sm hover:border-[#151515] shadow-xs transition-all cursor-pointer"
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

      {/* Why Choose Pep Software Section */}
      <section className="py-20 lg:py-28 bg-[#E7EBEA] border-t border-[#C6C2C1]/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <RevealOnScroll>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] text-xs font-bold uppercase tracking-wider text-[#C86A28] mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>WHY CHOOSE PEP SOFTWARE</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151515] leading-tight tracking-tight mt-2">
                Built for Quality.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#544643] to-[#C86A28]">
                  Engineered to Scale.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#544643] mt-3">
                We combine creative artistry with rigorous engineering to deliver digital solutions that give your brand a lasting competitive edge.
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePillars.map((pillar, i) => {
              const PillarIcon = pillar.icon;
              return (
                <RevealOnScroll key={pillar.title} delay={i * 0.08}>
                  <div className="p-7 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs hover:border-[#544643] hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 card-shimmer h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#E9E8E6] border border-[#C6C2C1] flex items-center justify-center text-[#C86A28] mb-5 shadow-xs">
                        <PillarIcon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-[#151515] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#544643] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion with categories */}
      <ServicesFAQ />

      {/* Ready to Bring Your Ideas to Life Banner */}
      <ContactCTA />
    </div>
  );
}
