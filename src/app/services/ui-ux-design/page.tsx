import { Metadata } from "next";
import { SERVICES_DATA } from "@/data/services";
import {
  JsonLd,
  getServiceSchema,
  getBreadcrumbSchema,
} from "@/components/seo/JsonLd";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverviewCard } from "@/components/services/ServiceOverviewCard";
import { ServiceProcessTimeline } from "@/components/services/ServiceProcessTimeline";
import { CaseStudy3DSlider } from "@/components/services/CaseStudy3DSlider";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Custom Software & UI/UX Design Services | PEP Software Erode",
  description:
    "Bespoke custom software development, enterprise CRM/ERP systems, and intuitive UI/UX design architecture by PEP Software to streamline operations and scale businesses.",
  keywords: [
    "Custom software development",
    "Custom software development company",
    "UI UX design services",
    "CRM and ERP development",
    "Enterprise software development",
    "Business process automation",
    "Software company in Erode",
  ],
  alternates: {
    canonical: "https://pepsoftwares.com/services/ui-ux-design",
  },
  openGraph: {
    title: "Custom Software & UI/UX Design Services | PEP Software Erode",
    description:
      "Bespoke custom software development and intuitive UI/UX design architecture by PEP Software in Tamil Nadu.",
    url: "https://pepsoftwares.com/services/ui-ux-design",
    siteName: "PEP Software",
  },
};

export default function UIUXDesignPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "ui-ux-design")!;

  const serviceSchema = getServiceSchema({
    name: "Custom Software Development & UI/UX Design",
    description: service.shortDescription,
    url: "https://pepsoftwares.com/services/ui-ux-design",
    serviceType: "Custom Software Engineering",
  });

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://pepsoftwares.com" },
    { name: "Services", url: "https://pepsoftwares.com/services" },
    {
      name: "UI/UX Design & Custom Software",
      url: "https://pepsoftwares.com/services/ui-ux-design",
    },
  ]);

  return (
    <div>
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={breadcrumbsSchema} />
      <ServiceHero
        badge={service.badge}
        title="Beautiful Interfaces."
        highlight="Meaningful Experiences."
        description={service.shortDescription}
        bullets={service.features.slice(0, 4)}
        ctaText="Discuss Your Design"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "UI/UX Design Services", href: "/services/ui-ux-design" },
        ]}
        visualImage="/images/services/ui-ux-design-3d.png"
        visualAlt="UI/UX Design Services - Wireframes, Prototypes, Design Systems & User Personas"
      />
      <ServiceOverviewCard
        features={service.features}
        deliverables={service.deliverables}
        subServices={service.subServices}
        serviceTitle={service.title}
        tools={service.tools}
      />
      <ServiceProcessTimeline timeline={service.timeline} />
      <CaseStudy3DSlider />
      <ContactCTA />
    </div>
  );
}
