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
  (p) => p.slug === "attendance-tracking-system"
);

export const metadata: Metadata = {
  title: "Attendance Management Software in Erode & Tamil Nadu | Pep Software",
  description:
    "Complete employee attendance tracker and workforce management software by Pep Software. Features GPS location verification, leave workflows, and automated payroll reports.",
  keywords: [
    "Attendance management software",
    "Employee attendance tracker",
    "Attendance tracker in Erode",
    "Attendance management software in Tamil Nadu",
    "GPS attendance tracking software",
    "Workforce management application",
    "Leave management workflows",
  ],
  alternates: {
    canonical: "https://pepsoftwares.com/products/attendance-tracking-system",
  },
  openGraph: {
    title: "Attendance Management Software in Erode & Tamil Nadu | Pep Software",
    description:
      "Complete employee attendance tracker and workforce management software by Pep Software. GPS verification, leave workflows, and payroll integration.",
    url: "https://pepsoftwares.com/products/attendance-tracking-system",
    siteName: "Pep Software",
  },
};

export default function AttendanceTrackingSystemPage() {
  if (!product) notFound();

  const softwareSchema = getSoftwareApplicationSchema({
    name: "Attendance Tracking System",
    description: product.hero.supportingContent,
    url: "https://pepsoftwares.com/products/attendance-tracking-system",
    category: "BusinessApplication",
    features: product.modules.map((m) => m.name),
  });

  const faqSchema = getFAQSchema(product.faqs);

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://pepsoftwares.com" },
    { name: "Products", url: "https://pepsoftwares.com/products" },
    {
      name: "Attendance Tracking System",
      url: "https://pepsoftwares.com/products/attendance-tracking-system",
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
