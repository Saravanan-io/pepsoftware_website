import { Metadata } from "next";
import { JsonLd, getBreadcrumbSchema } from "@/components/seo/JsonLd";
import { ProductsOverviewHero } from "@/components/products/ProductsOverviewHero";
import { ProductsWhyUsSection } from "@/components/products/ProductsWhyUsSection";
import { ProductsEnquiryCTA } from "@/components/products/ProductsEnquiryCTA";

export const metadata: Metadata = {
  title: "Software Products & Business Applications | Pep Software",
  description:
    "Discover Pep Software's readymade business applications: employee attendance tracking systems, business club apps, association portals, and matrimony platforms.",
  keywords: [
    "Attendance tracking system",
    "Business club management app",
    "Network club app",
    "Matrimony application software",
    "Association software",
    "Workforce management software",
    "Software products in Tamil Nadu",
  ],
  alternates: {
    canonical: "https://pepsoftwares.com/products",
  },
  openGraph: {
    title: "Software Products & Business Applications | Pep Software",
    description:
      "Proprietary software applications for attendance tracking, business networking clubs, association governance, and matrimonial matchmaking by Pep Software.",
    url: "https://pepsoftwares.com/products",
    siteName: "Pep Software",
  },
};

export default function ProductsPage() {
  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://pepsoftwares.com" },
    { name: "Products", url: "https://pepsoftwares.com/products" },
  ]);

  return (
    <div className="w-full bg-[#FFFFFF]">
      <JsonLd schema={breadcrumbsSchema} />
      {/* 01. Hero & Products Showcase (Exact Match to Reference Design) */}
      <ProductsOverviewHero />

      {/* 03. Why Our Products (4 Benefit Themes) */}
      <ProductsWhyUsSection />

      {/* 04. Contact / Enquiry CTA */}
      <ProductsEnquiryCTA />
    </div>
  );
}
