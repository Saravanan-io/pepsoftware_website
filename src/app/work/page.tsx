import { Metadata } from "next";
import { PortfolioTeaser } from "@/components/home/PortfolioTeaser";
import { ContactCTA } from "@/components/home/ContactCTA";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { PortfolioHeroCardsShowcase } from "@/components/work/PortfolioHeroCardsShowcase";
import { WordReveal, ParagraphReveal } from "@/components/shared/WordReveal";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | PEP Software",
  description:
    "Explore our carefully curated portfolio, showcasing our expertise in creating websites, mobile applications, and digital products for various industries.",
};

export default function WorkPage() {
  return (
    <div className="w-full bg-[#F7F8F8] select-none">
      {/* Initial Hero Point with Brain Showcase & Animated Floating Cards */}
      <section className="pt-24 sm:pt-28 pb-16 lg:pb-24 bg-[#F7F8F8] relative overflow-hidden border-b border-[#C6C2C1]/40">
        {/* Background Dot Texture & Ambient Brand Lighting */}
        <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-[650px] h-[650px] bg-[#502D6D]/[0.08] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 -right-24 w-[600px] h-[600px] bg-[#FCB116]/[0.09] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Texts */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <RevealOnScroll>
              <WordReveal
                as="h1"
                text="Digital craftsmanship that drives business growth."
                gradientWords="business growth."
                gradientClassName="bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent"
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#151515] leading-[1.08] tracking-tight"
              />

              <ParagraphReveal
                text="Discover our case study on website and application redesigns. See our innovative approach, architectural rigor, and impressive results."
                delay={0.15}
                className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl mx-auto font-normal"
              />
            </RevealOnScroll>
          </div>

          {/* AI Robotic Hand Core and Floating Animated Cards Showcase */}
          <PortfolioHeroCardsShowcase />
        </div>
      </section>

      {/* Portfolio Grid & Case Studies */}
      <PortfolioTeaser />
      <ContactCTA />
    </div>
  );
}
