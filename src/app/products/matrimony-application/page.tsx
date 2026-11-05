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
  (p) => p.slug === "matrimony-application"
);

export const metadata: Metadata = {
  title: "Matrimony Application Software in Tamil Nadu | Pep Software",
  description:
    "Turnkey matrimony application software platform for businesses and community networks in Tamil Nadu. Includes verified profiles, horoscope matching, and secure chat.",
  keywords: [
    "Matrimony application",
    "Matrimony software in Tamil Nadu",
    "Custom matrimony app development",
    "Community matrimony software",
    "Matrimonial portal development",
    "Matrimonial app developers Erode",
  ],
  alternates: {
    canonical: "https://pepsoftwares.com/products/matrimony-application",
  },
  openGraph: {
    title: "Matrimony Application Software in Tamil Nadu | Pep Software",
    description:
      "Turnkey matrimony application software platform for businesses and community networks in Tamil Nadu by Pep Software.",
    url: "https://pepsoftwares.com/products/matrimony-application",
    siteName: "Pep Software",
  },
};

export default function MatrimonyApplicationPage() {
  if (!product) notFound();

  const softwareSchema = getSoftwareApplicationSchema({
    name: "Matrimony Application Platform",
    description: product.hero.supportingContent,
    url: "https://pepsoftwares.com/products/matrimony-application",
    category: "BusinessApplication",
    features: product.modules.map((m) => m.name),
  });

  const faqSchema = getFAQSchema(product.faqs);

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://pepsoftwares.com" },
    { name: "Products", url: "https://pepsoftwares.com/products" },
    {
      name: "Matrimony Application",
      url: "https://pepsoftwares.com/products/matrimony-application",
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
