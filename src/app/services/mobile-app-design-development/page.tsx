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
  title: "Mobile App Development Company in Coimbatore & Erode | Pep Software",
  description:
    "Native and cross-platform Flutter, Android, and iOS mobile application development services by Pep Software for enterprises and startups in Coimbatore and Tamil Nadu.",
  keywords: [
    "Mobile application development company",
    "Mobile app development in Coimbatore",
    "Android application development",
    "iOS application development",
    "Flutter app development",
    "Cross-platform application development",
    "Mobile app developers in Tamil Nadu",
  ],
  alternates: {
    canonical: "https://pepsoftwares.com/services/mobile-app-design-development",
  },
  openGraph: {
    title: "Mobile App Development Company in Coimbatore & Erode | Pep Software",
    description:
      "Native and cross-platform Flutter, Android, and iOS mobile application development by Pep Software in Tamil Nadu.",
    url: "https://pepsoftwares.com/services/mobile-app-design-development",
    siteName: "Pep Software",
  },
};

export default function MobileAppDevPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "mobile-app-design-development")!;

  const serviceSchema = getServiceSchema({
    name: "Mobile Application Development Services",
    description: service.shortDescription,
    url: "https://pepsoftwares.com/services/mobile-app-design-development",
    serviceType: "Mobile App Development",
  });

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://pepsoftwares.com" },
    { name: "Services", url: "https://pepsoftwares.com/services" },
    {
      name: "Mobile App Development",
      url: "https://pepsoftwares.com/services/mobile-app-design-development",
    },
  ]);

  return (
    <div>
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={breadcrumbsSchema} />
      <ServiceHero
        badge={service.badge}
        title="Design with Purpose."
        highlight="Deliver with Impact."
        description={service.shortDescription}
        bullets={service.features.slice(0, 4)}
        ctaText="Start Your App Project"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Mobile App Development", href: "/services/mobile-app-design-development" },
        ]}
        visualImage="/images/services/mobile-app-development-3d.png"
        visualAlt="Mobile App Development Services - iOS & Android Native and Cross-Platform Apps"
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
