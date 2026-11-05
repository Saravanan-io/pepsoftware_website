import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS_CATALOG } from "@/data/products";
import {
  JsonLd,
  getSoftwareApplicationSchema,
  getFAQSchema,
  getBreadcrumbSchema,
} from "@/components/seo/JsonLd";
import { ProductDetailPageTemplate } from "@/components/products/ProductDetailPageTemplate";

const product = PRODUCTS_CATALOG.find(
  (p) => p.slug === "network-club-app"
);

export const metadata: Metadata = {
  title: "Association & Network Club Management App | PEP Software",
  description:
    "Modern association and community networking software for professional networks, trade bodies, and alumni clubs. Features digital member directories and event hubs.",
  keywords: [
    "Network club management application",
    "Association management software",
    "Club membership management software",
    "Member directory application",
    "Association software Tamil Nadu",
    "Trade association directory software",
  ],
  alternates: {
    canonical: "https://pepsoftwares.com/products/network-club-app",
  },
  openGraph: {
    title: "Association & Network Club Management App | PEP Software",
    description:
      "Modern association and community networking software for professional networks, trade bodies, and alumni clubs by PEP Software.",
    url: "https://pepsoftwares.com/products/network-club-app",
    siteName: "PEP Software",
  },
};

export default function NetworkClubAppPage() {
  if (!product) notFound();

  const softwareSchema = getSoftwareApplicationSchema({
    name: "Association and Network Club App",
    description: product.hero.supportingContent,
    url: "https://pepsoftwares.com/products/network-club-app",
    category: "BusinessApplication",
    features: product.modules.map((m) => m.name),
  });

  const faqSchema = getFAQSchema(product.faqs);

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://pepsoftwares.com" },
    { name: "Products", url: "https://pepsoftwares.com/products" },
    {
      name: "Network Club App",
      url: "https://pepsoftwares.com/products/network-club-app",
    },
  ]);

  return (
    <>
      <JsonLd schema={softwareSchema} />
      {faqSchema && <JsonLd schema={faqSchema} />}
      <JsonLd schema={breadcrumbsSchema} />
      <ProductDetailPageTemplate product={product} />
    </>
  );
}
