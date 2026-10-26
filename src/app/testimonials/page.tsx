import { Metadata } from "next";
import { TestimonialsHero } from "@/components/testimonials/TestimonialsHero";
import { TrustStatementSection } from "@/components/testimonials/TrustStatementSection";
import { FeaturedTestimonialSection } from "@/components/testimonials/FeaturedTestimonialSection";
import { ClientTestimonialsGrid } from "@/components/testimonials/ClientTestimonialsGrid";
import { TestimonialsByServiceSection } from "@/components/testimonials/TestimonialsByServiceSection";
import { ClientLogoWallSection } from "@/components/testimonials/ClientLogoWallSection";
import { WhyChooseUsSection } from "@/components/testimonials/WhyChooseUsSection";
import { TestimonialProjectsSection } from "@/components/testimonials/TestimonialProjectsSection";
import { TestimonialsFinalCTA } from "@/components/testimonials/TestimonialsFinalCTA";

export const metadata: Metadata = {
  title: "Testimonials | Trusted by Businesses. Recommended by Clients — PEP Software",
  description:
    "The best way to understand our work is to hear from the people we've worked with. Verified testimonials, case studies, and client stories for websites, mobile apps, and custom software by Pep Software.",
  openGraph: {
    title: "Client Testimonials & Verified Stories | PEP Software",
    description:
      "From websites and digital experiences to custom software, hear what our clients have to say about working with Pep Software.",
    url: "https://pepsoftwares.com/testimonials",
    siteName: "PEP Software",
  },
};

export default function TestimonialsPage() {
  return (
    <div className="w-full bg-[#F7F8F8]">
      {/* 01. Hero / Introduction */}
      <TestimonialsHero />

      {/* 02. Trust Introduction */}
      <TrustStatementSection />

      {/* 03. Featured Client Story */}
      <FeaturedTestimonialSection />

      {/* 04. Client Feedback */}
      <ClientTestimonialsGrid />

      {/* 05. What Clients Trusted Us With */}
      <TestimonialsByServiceSection />

      {/* 06. Our Clients (Logo Wall) */}
      <ClientLogoWallSection />

      {/* 07. Why Pep Software */}
      <WhyChooseUsSection />

      {/* 08. Projects Behind the Stories */}
      <TestimonialProjectsSection />

      {/* 09. Let's Create Your Success Story & 10. Footer Anchor */}
      <TestimonialsFinalCTA />
    </div>
  );
}
