import { Metadata } from "next";
import { SERVICES_DATA } from "@/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverviewCard } from "@/components/services/ServiceOverviewCard";
import { ServiceProcessTimeline } from "@/components/services/ServiceProcessTimeline";
import { CaseStudy3DSlider } from "@/components/services/CaseStudy3DSlider";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "UI/UX Design Services | PEP Software",
  description:
    "Pep Software specializes in user-centered UI/UX designs that enhance the user experience. Beautiful Interfaces. Meaningful Experiences.",
};

export default function UIUXDesignPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "ui-ux-design")!;

  return (
    <div>
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
        tools={service.tools}
      />
      <ServiceProcessTimeline timeline={service.timeline} />
      <CaseStudy3DSlider />
      <ContactCTA />
    </div>
  );
}
