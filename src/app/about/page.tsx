import { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactCTA } from "@/components/home/ContactCTA";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { CosmicSolarSystem } from "@/components/about/CosmicSolarSystem";
import { WordReveal, ParagraphReveal } from "@/components/shared/WordReveal";
import { ModernWhyChooseSection } from "@/components/shared/ModernWhyChooseSection";

export const metadata: Metadata = {
  title: "About Us | PEP Software — Design & Development Studio",
  description:
    "Learn about PEP Software, our human-centered design philosophy, our creative team in Erode, and our mission to inspire through creative design.",
};

export default function AboutPage() {

  return (
    <div className="w-full bg-[#F7F8F8]">
      {/* Hero Header */}
      <section className="pt-24 pb-20 bg-[#F7F8F8] text-center border-b border-[#C6C2C1]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Story & Philosophy"
            title="Inspire Through"
            gradientWord="Creative Design"
            description="At Pep Software, we bring your ideas to life with boundless creativity. We are an interdisciplinary collective of designers, artists, and software engineers."
            align="center"
          />
        </div>
      </section>

      {/* Narrative & Metrics with Dark Purple Cosmic 3D Solar System & Asteroids */}
      <section className="py-24 lg:py-32 bg-[#0C0418] relative overflow-hidden border-y border-[#502D6D]/50 select-none">
        {/* Cosmic Ambient Deep Purple & Gold Nebulae */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(80,45,109,0.5),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(252,177,22,0.12),transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(104,53,143,0.35),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-dot-light opacity-10 pointer-events-none" />

        {/* 3D Interactive Solar System, Orbiting Planets, Asteroid Belt & Flickering Stars */}
        <CosmicSolarSystem />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Narrative */}
            <RevealOnScroll className="lg:col-span-7 space-y-6 pointer-events-auto">
              <div className="inline-flex items-center gap-2.5">
                <span className="w-4 h-[2px] rounded-full bg-gradient-to-r from-[#D79EFF] to-[#FCB116]" />
                <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] bg-gradient-to-r from-[#D79EFF] via-[#FCB116] to-[#FFE8A3] bg-clip-text text-transparent">
                  SOLUTIONS THAT EMPOWER
                </span>
              </div>

              <WordReveal
                as="h2"
                text="Crafting digital experiences that stand out in an increasingly crowded world."
                gradientWords="increasingly crowded world."
                gradientClassName="bg-gradient-to-r from-[#D79EFF] via-[#FCB116] to-[#FFE29A] bg-clip-text text-transparent"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.12] tracking-tight"
              />

              <ParagraphReveal
                text="Founded with a conviction that software should not just function, but inspire — PEP Software has grown into a versatile creative engineering studio. We partner with emerging startups and established enterprises across industries such as healthcare, e-commerce, real estate, automotive, and high technology."
                delay={0.15}
                className="text-base sm:text-lg text-[#E3DAF3] leading-relaxed font-normal"
              />

              <ParagraphReveal
                text="Headquartered along Perundurai Road in Erode, Tamil Nadu, our studio serves as an innovation lab where design thinking, spatial AR computing, and full-stack web engineering converge to solve real business challenges."
                delay={0.25}
                className="text-base text-[#C6B8DE] leading-relaxed font-normal"
              />
            </RevealOnScroll>

            {/* Right Metric Stat Cards */}
            <RevealOnScroll delay={0.2} className="lg:col-span-5 pointer-events-auto">
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {[
                  { value: "20+", label: "Years Combined Studio Experience" },
                  { value: "150+", label: "High Impact Projects Delivered" },
                  { value: "50+", label: "Happy Global Clients" },
                  { value: "100%", label: "Client Satisfaction Focus" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-6 sm:p-7 rounded-3xl bg-[#1C0B32]/80 backdrop-blur-xl border border-[#502D6D]/70 hover:border-[#FCB116] text-center shadow-2xl shadow-black/50 hover:shadow-[#502D6D]/40 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden cursor-default"
                  >
                    {/* Hover inner stardust glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(252,177,22,0.18),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10 text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-[#FCB116] to-[#FFD573] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="relative z-10 text-xs font-semibold text-[#D4C7EC] mt-2.5 group-hover:text-white transition-colors leading-tight">
                      {stat.label}
                    </div>

                    {/* Corner starlight sparkle accent */}
                    <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#FCB116] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_#FCB116]" />
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Values & Quality Pillars - Modern 3D Card Design */}
      <ModernWhyChooseSection id="values" />

      {/* Structured Process Section */}
      <ProcessStrip />

      {/* Client Marquee */}
      <ClientsMarquee />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}
