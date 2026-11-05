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
  (p) => p.slug === "business-club-app"
);

export const metadata: Metadata = {
  title: "Business Club Management Software & Networking App | PEP Software",
  description:
    "Empower business networking organizations with PEP Software's business club management app. Manage members, track 1-to-1s, log referrals, and automate meeting attendance.",
  keywords: [
    "Business club management software",
    "Business networking app",
    "Business club app development",
    "B2B referral tracking software",
    "Club management application",
    "Meeting attendance software",
  ],
  alternates: {
    canonical: "https://pepsoftwares.com/products/business-club-app",
  },
  openGraph: {
    title: "Business Club Management Software & Networking App | PEP Software",
    description:
      "Empower business networking organizations with PEP Software's business club management app. Members, 1-to-1s, referrals, and meeting attendance.",
    url: "https://pepsoftwares.com/products/business-club-app",
    siteName: "PEP Software",
  },
};

export default function BusinessClubAppPage() {
  if (!product) notFound();

  const softwareSchema = getSoftwareApplicationSchema({
    name: "Business Club Management App",
    description: product.hero.supportingContent,
    url: "https://pepsoftwares.com/products/business-club-app",
    category: "BusinessApplication",
    features: product.modules.map((m) => m.name),
  });

  const faqSchema = getFAQSchema(product.faqs);

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://pepsoftwares.com" },
    { name: "Products", url: "https://pepsoftwares.com/products" },
    {
      name: "Business Club App",
      url: "https://pepsoftwares.com/products/business-club-app",
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
