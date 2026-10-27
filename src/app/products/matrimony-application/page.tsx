import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS_CATALOG } from "@/data/products";
import { ProductDetailPageTemplate } from "@/components/products/ProductDetailPageTemplate";

const product = PRODUCTS_CATALOG.find(
  (p) => p.slug === "matrimony-application"
);

export const metadata: Metadata = {
  title: "Matrimony Application Software for Businesses | PEP Software",
  description:
    "Explore matrimony application software with profile registration, partner search, member interactions, membership administration and management tools with PEP Software.",
  keywords: [
    "Matrimony software for businesses",
    "Matrimony application for associations",
    "Community matrimony software",
    "Matrimonial profile management software",
    "B2B matrimony platform",
  ],
  alternates: {
    canonical: "https://pepsoftwares.com/products/matrimony-application/",
  },
};

export default function MatrimonyApplicationPage() {
  if (!product) notFound();
  return <ProductDetailPageTemplate product={product} />;
}
