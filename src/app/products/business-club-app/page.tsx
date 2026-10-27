import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS_CATALOG } from "@/data/products";
import { ProductDetailPageTemplate } from "@/components/products/ProductDetailPageTemplate";

const product = PRODUCTS_CATALOG.find(
  (p) => p.slug === "business-club-app"
);

export const metadata: Metadata = {
  title: "Business Club Management App | PEP Software",
  description:
    "Explore a business club management app for member profiles, meetings, attendance, referrals, Thank You Notes and club administration with PEP Software.",
  keywords: [
    "Business club management app",
    "Business networking app",
    "Business referral management software",
    "Club attendance tracking app",
    "Power team meeting software",
  ],
  alternates: {
    canonical: "https://pepsoftwares.com/products/business-club-app/",
  },
};

export default function BusinessClubAppPage() {
  if (!product) notFound();
  return <ProductDetailPageTemplate product={product} />;
}
