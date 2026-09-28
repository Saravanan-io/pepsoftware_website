import { Metadata } from "next";
import { SERVICES_DATA } from "@/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverviewCard } from "@/components/services/ServiceOverviewCard";
import { ServiceProcessTimeline } from "@/components/services/ServiceProcessTimeline";
import { CaseStudy3DSlider } from "@/components/services/CaseStudy3DSlider";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Mobile App Development Services | PEP Software",
  description:
    "Design with Purpose. Develop with Precision. Deliver with Impact. Transform Your Ideas into Powerful Mobile Apps on Android, iOS, and Flutter.",
};

export default function MobileAppDevPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "mobile-app-design-development")!;

  return (
    <div>
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
        tools={service.tools}
      />
      <ServiceProcessTimeline timeline={service.timeline} />
      <CaseStudy3DSlider />
      <ContactCTA />
    </div>
  );
}
