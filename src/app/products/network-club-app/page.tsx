import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS_CATALOG } from "@/data/products";
import { ProductDetailPageTemplate } from "@/components/products/ProductDetailPageTemplate";

const product = PRODUCTS_CATALOG.find(
  (p) => p.slug === "network-club-app"
);

export const metadata: Metadata = {
  title: "Association and Network Club App | PEP Software",
  description:
    "Explore association management features for member directories, business profiles, committee information, events and membership administration with PEP Software.",
  keywords: [
    "Association management app",
    "Club membership management software",
    "Member directory app",
    "Trade association directory software",
    "Executive committee management",
  ],
  alternates: {
    canonical: "https://pepsoftwares.com/products/network-club-app/",
  },
};

export default function NetworkClubAppPage() {
  if (!product) notFound();
  return <ProductDetailPageTemplate product={product} />;
}
