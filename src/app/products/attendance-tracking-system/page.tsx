import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS_CATALOG } from "@/data/products";
import { ProductDetailPageTemplate } from "@/components/products/ProductDetailPageTemplate";

const product = PRODUCTS_CATALOG.find(
  (p) => p.slug === "attendance-tracking-system"
);

export const metadata: Metadata = {
  title: "Employee Attendance Tracking System | PEP Software",
  description:
    "Explore employee attendance tracking, working-time records, leave workflows, location-aware attendance and workforce-management capabilities with PEP Software.",
  keywords: [
    "Employee attendance tracking system",
    "Attendance management software",
    "GPS attendance tracking software",
    "Workforce management application",
    "Leave management workflows",
  ],
  alternates: {
    canonical: "https://pepsoftwares.com/products/attendance-tracking-system/",
  },
};

export default function AttendanceTrackingSystemPage() {
  if (!product) notFound();
  return <ProductDetailPageTemplate product={product} />;
}
