import { Metadata } from "next";
import { ProductsOverviewHero } from "@/components/products/ProductsOverviewHero";
import { ProductsWhyUsSection } from "@/components/products/ProductsWhyUsSection";
import { ProductsEnquiryCTA } from "@/components/products/ProductsEnquiryCTA";

export const metadata: Metadata = {
  title: "Products | PEP Software — Application Solutions",
  description:
    "Explore application solutions for employee attendance, business club management, association membership and matrimony services with PEP Software.",
  keywords: [
    "Attendance tracking system",
    "Business club management app",
    "Network club app",
    "Matrimony application software",
    "Association software",
    "Workforce management software",
  ],
};

export default function ProductsPage() {
  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* 01. Hero & Products Showcase (Exact Match to Reference Design) */}
      <ProductsOverviewHero />

      {/* 03. Why Our Products (4 Benefit Themes) */}
      <ProductsWhyUsSection />

      {/* 04. Contact / Enquiry CTA */}
      <ProductsEnquiryCTA />
    </div>
  );
}
