import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactCTA } from "@/components/home/ContactCTA";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { CosmicSolarSystem } from "@/components/about/CosmicSolarSystem";
import { AboutLogoShowcase } from "@/components/about/AboutLogoShowcase";
import { CeoSection } from "@/components/about/CeoSection";
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
      {/* Hero Header: About PEP Software (Left Content, Right Logo Showcase) */}
      <section className="pt-28 sm:pt-32 lg:pt-36 pb-20 lg:pb-28 bg-[#F7F8F8] relative overflow-hidden border-b border-[#C6C2C1]/40">
        <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />
        <div className="absolute -top-28 -left-20 w-[550px] h-[550px] bg-[#502D6D]/[0.06] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-[#FCB116]/[0.08] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: About PEP Software Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <RevealOnScroll>
                <div className="inline-flex items-center gap-2.5 mb-2">
                  <span className="w-4 h-[2px] rounded-full bg-gradient-to-r from-[#502D6D] to-[#FCB116]" />
                  <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] text-[#502D6D]">
                    ABOUT PEP SOFTWARE
                  </span>
                </div>

                <WordReveal
                  as="h1"
                  text="Inspire Through Creative Design & Scalable Engineering"
                  gradientWords="Creative Design"
                  gradientClassName="text-[#502D6D]"
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#151515] leading-[1.08] mt-3"
                />

                <ParagraphReveal
                  text="At PEP Software, we bring your ideas to life with boundless creativity and architectural excellence. We are an interdisciplinary collective of designers, artists, and software engineers dedicated to crafting high-impact digital experiences."
                  delay={0.12}
                  className="text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl font-normal mt-4"
                />

                <ParagraphReveal
                  text="Headquartered in Erode, Tamil Nadu, our studio bridges strategic design thinking with full-stack engineering rigor. Whether developing modern web platforms, native mobile applications, or custom enterprise solutions, we empower forward-thinking brands to scale effectively."
                  delay={0.2}
                  className="text-sm sm:text-base text-[#544643]/85 leading-relaxed max-w-2xl font-normal mt-3"
                />

                {/* Key Pillars / Value Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  {[
                    "Human-Centered UI/UX Design",
                    "Robust Custom Architecture",
                    "Native Mobile App Engineering",
                    "Continuous Digital Growth",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#151515]">
                      <span className="w-2 h-2 rounded-full bg-[#FCB116] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#151515] text-[#F7F8F8] font-bold text-sm hover:bg-[#502D6D] shadow-md shadow-[#151515]/10 hover:shadow-[#502D6D]/20 transition-all cursor-pointer group"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="w-4 h-4 text-[#FCB116] transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#151515] font-bold text-sm border border-[#C6C2C1]/70 hover:border-[#502D6D] hover:text-[#502D6D] shadow-xs transition-all cursor-pointer"
                  >
                    <span>View Our Work</span>
                  </Link>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Column: PEP Software Logo Showcase */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <RevealOnScroll delay={0.2}>
                <AboutLogoShowcase />
              </RevealOnScroll>
            </div>
          </div>
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
                <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] text-[#FCB116]">
                  OUR ACHIEVEMENTS
                </span>
              </div>

              <WordReveal
                as="h2"
                text="Delivering Measurable Milestones & Lasting Digital Impact."
                gradientWords="Lasting Digital Impact."
                gradientClassNames={["text-[#D79EFF]", "text-[#FCB116]", "text-[#FFE29A]"]}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.12] tracking-tight"
              />

              <ParagraphReveal
                text="Over the past 5+ years, PEP Software has achieved monumental milestones — engineering and deploying over 50+ mission-critical digital products for startups and enterprises across the globe. From high-throughput web platforms to custom mobile architectures, our track record reflects our unwavering dedication to execution velocity and technical excellence."
                delay={0.15}
                className="text-base sm:text-lg text-[#E3DAF3] leading-relaxed font-normal"
              />

              <ParagraphReveal
                text="With a 99.9% client satisfaction rate and 100% on-time project delivery, our biggest achievement remains the tangible growth of our partners. By pairing modern software engineering with human-centered design in Erode, Tamil Nadu, we transform ambitious visions into market-leading digital realities that consistently outperform expectations."
                delay={0.25}
                className="text-base text-[#C6B8DE] leading-relaxed font-normal"
              />
            </RevealOnScroll>

            {/* Right Metric Stat Cards */}
            <RevealOnScroll delay={0.2} className="lg:col-span-5 pointer-events-auto">
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {[
                  { value: "5+", label: "Years Experience" },
                  { value: "50+", label: "Projects Delivered" },
                  { value: "50+", label: "Happy Global Clients" },
                  { value: "99.9%", label: "Client Satisfaction" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-6 sm:p-7 rounded-3xl bg-[#1C0B32]/80 backdrop-blur-xl border border-[#502D6D]/70 hover:border-[#FCB116] text-center shadow-2xl shadow-black/50 hover:shadow-[#502D6D]/40 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden cursor-default"
                  >
                    {/* Hover inner stardust glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(252,177,22,0.18),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10 text-3xl sm:text-4xl font-black text-[#FCB116] group-hover:scale-105 transition-transform duration-300">
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

      {/* Leadership & CEO Section: Left Content, Right CEO Image */}
      <CeoSection />

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
