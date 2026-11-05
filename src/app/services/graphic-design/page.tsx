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
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Graphic Design & Digital Marketing Services | Pep Software",
  description:
    "Transform your brand presence with Pep Software's professional graphic design, digital marketing campaigns, brand identity systems, and visual marketing assets.",
  keywords: [
    "Graphic design services",
    "Digital marketing services",
    "Brand identity design",
    "Corporate branding services",
    "Digital marketing services in Tamil Nadu",
    "Visual design company",
  ],
  alternates: {
    canonical: "https://pepsoftwares.com/services/graphic-design",
  },
  openGraph: {
    title: "Graphic Design & Digital Marketing Services | Pep Software",
    description:
      "Transform your brand presence with Pep Software's professional graphic design, digital marketing, and visual identity systems in Tamil Nadu.",
    url: "https://pepsoftwares.com/services/graphic-design",
    siteName: "Pep Software",
  },
};

export default function GraphicDesignPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "graphic-design")!;

  const serviceSchema = getServiceSchema({
    name: "Graphic Design & Digital Marketing Services",
    description: service.shortDescription,
    url: "https://pepsoftwares.com/services/graphic-design",
    serviceType: "Graphic Design & Digital Marketing",
  });

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://pepsoftwares.com" },
    { name: "Services", url: "https://pepsoftwares.com/services" },
    {
      name: "Graphic Design & Digital Marketing",
      url: "https://pepsoftwares.com/services/graphic-design",
    },
  ]);

  return (
    <div>
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={breadcrumbsSchema} />
      <ServiceHero
        badge={service.badge}
        title="Captivating Visuals."
        highlight="Meaningful Experiences."
        description={service.shortDescription}
        bullets={service.features.slice(0, 4)}
        ctaText="Start Creative Project"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Graphic Design", href: "/services/graphic-design" },
        ]}
        visualImage="/images/services/graphic-design-3d.png"
        visualAlt="Graphic Design Services - Branding & Visual Identity"
      />
      <ServiceOverviewCard
        features={service.features}
        deliverables={service.deliverables}
        subServices={service.subServices}
        serviceTitle={service.title}
        tools={service.tools}
      />
      <ServiceProcessTimeline timeline={service.timeline} />
      <ContactCTA />
    </div>
  );
}
