import { HeroContent } from "@/components/home/HeroContent";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { IntroStatement } from "@/components/home/IntroStatement";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PortfolioTeaser } from "@/components/home/PortfolioTeaser";
import { ProcessHowWeDevelop } from "@/components/home/ProcessHowWeDevelop";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 3D Hero + Interactive Floating Badges & Content */}
      <HeroContent />

      {/* Infinite Logo Marquee */}
      <ClientsMarquee />

      {/* Services Grid (4 Core Services with 3D Tilt Hover) */}
      <ServicesGrid />

      {/* About PEP Software & Metrics Cards */}
      <IntroStatement />

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

      {/* Ready to Bring Your Ideas to Life Banner */}
      <ContactCTA />
    </div>
  );
}
