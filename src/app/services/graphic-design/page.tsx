import { Metadata } from "next";
import { SERVICES_DATA } from "@/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverviewCard } from "@/components/services/ServiceOverviewCard";
import { ServiceProcessTimeline } from "@/components/services/ServiceProcessTimeline";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Graphic Design & AR/VR Services | PEP Software",
  description:
    "Captivating Visuals. Immersive Realities. Professional graphic design, 3D modeling, and WebAR experiences.",
};

export default function GraphicDesignPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "graphic-design")!;

  return (
    <div>
      <ServiceHero
        badge={service.badge}
        title="Captivating Visuals."
        highlight="Immersive Realities."
        description={service.shortDescription}
        bullets={service.features.slice(0, 4)}
        ctaText="Start Creative Project"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Graphic Design & AR/VR", href: "/services/graphic-design" },
        ]}
        visualImage="/images/services/graphic-design-3d.png"
        visualAlt="Graphic Design & AR/VR Services - Branding, Visual Identity & Spatial Experiences"
      />
      <ServiceOverviewCard
        features={service.features}
        deliverables={service.deliverables}
        subServices={service.subServices}
        tools={service.tools}
      />
      <ServiceProcessTimeline timeline={service.timeline} />
      <ContactCTA />
    </div>
  );
}
