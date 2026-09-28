import { Metadata } from "next";
import { SERVICES_DATA } from "@/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverviewCard } from "@/components/services/ServiceOverviewCard";
import { ServiceProcessTimeline } from "@/components/services/ServiceProcessTimeline";
import { CaseStudy3DSlider } from "@/components/services/CaseStudy3DSlider";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Web Design & Development Services | PEP Software",
  description:
    "Responsive Web Design & Development That Works Seamlessly Across Devices. Custom Website Design, WordPress, and Shopify eCommerce.",
};

export default function WebsiteDevPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "website-design-development")!;

  return (
    <div>
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
        tools={service.tools}
      />
      <ServiceProcessTimeline timeline={service.timeline} />
      <CaseStudy3DSlider />
      <ContactCTA />
    </div>
  );
}
