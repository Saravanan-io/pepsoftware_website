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
  title: "Website Development Company in Erode & Tamil Nadu | Pep Software",
  description:
    "Custom website design & modern web application development by Pep Software. High-speed, responsive, SEO-ready Next.js web applications engineered for business growth.",
  keywords: [
    "Website development company",
    "Website development company in Erode",
    "Web application development company",
    "Web design and development",
    "Next.js web development",
    "e-commerce website development",
    "Website designers in Tamil Nadu",
  ],
  alternates: {
    canonical: "https://pepsoftwares.com/services/website-design-development",
  },
  openGraph: {
    title: "Website Development Company in Erode & Tamil Nadu | Pep Software",
    description:
      "High-speed, responsive, SEO-ready Next.js web applications engineered for business growth by Pep Software.",
    url: "https://pepsoftwares.com/services/website-design-development",
    siteName: "Pep Software",
  },
};

export default function WebsiteDevPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "website-design-development")!;

  const serviceSchema = getServiceSchema({
    name: "Website Design & Development Services",
    description: service.shortDescription,
    url: "https://pepsoftwares.com/services/website-design-development",
    serviceType: "Web Development",
  });

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://pepsoftwares.com" },
    { name: "Services", url: "https://pepsoftwares.com/services" },
    {
      name: "Website Design & Development",
      url: "https://pepsoftwares.com/services/website-design-development",
    },
  ]);

  return (
    <div>
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={breadcrumbsSchema} />
      <ServiceHero
        badge="Website Development"
        title="Inspired Design."
        highlight="Intelligent Development."
        description={service.shortDescription}
        bullets={service.features.slice(0, 4)}
        ctaText="Get a Free Quote"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Web Design & Development", href: "/services/website-design-development" },
        ]}
        visualImage="/images/services/website-development-3d.png"
        visualAlt="Website Design & Development Services - Modern Web Apps & Responsive Design"
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
