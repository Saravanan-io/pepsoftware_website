import { CheckCircle2, PackageCheck, Wrench, Layers, HelpCircle, ChevronDown } from "lucide-react";
import { RevealOnScroll } from "../shared/RevealOnScroll";
import { DeliverablesHubShowcase } from "./DeliverablesHubShowcase";

interface ServiceOverviewCardProps {
  features: string[];
  deliverables: string[];
  subServices?: { title: string; description: string }[];
  tools?: string[];
  whyChooseUs?: { title: string; description: string }[];
}

export function ServiceOverviewCard({
  features,
  deliverables,
  subServices,
  tools,
  whyChooseUs,
}: ServiceOverviewCardProps) {
  return (
    <section className="py-10 sm:py-14 bg-[#F7F8F8] border-y border-[#C6C2C1]/40 space-y-10 sm:space-y-12">
      {/* Row 1: Interactive Deliverables Hub & Spoke Showcase (if subServices provided) */}
      {subServices && subServices.length > 0 && (
        <DeliverablesHubShowcase subServices={subServices} />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">

        {/* Row 2: Capabilities & Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Key Capabilities */}
          <RevealOnScroll>
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#E9E8E6] text-[#C86A28] border border-[#C6C2C1] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#151515]">
                  Core Capabilities & Scope
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#E9E8E6] border border-[#C6C2C1]/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C86A28] shrink-0 mt-2" />
                    <span className="text-xs sm:text-sm font-semibold text-[#151515]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Key Deliverables */}
          <RevealOnScroll delay={0.15}>
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#E9E8E6] text-[#544643] border border-[#C6C2C1] flex items-center justify-center">
                  <PackageCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#151515]">
                  What You Receive
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {deliverables.map((del, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#E9E8E6] border border-[#C6C2C1]/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#544643] shrink-0 mt-2" />
                    <span className="text-xs sm:text-sm font-semibold text-[#151515]">
                      {del}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Row 3: Tools & Technologies */}
        {tools && tools.length > 0 && (
          <RevealOnScroll>
            <div className="p-8 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E9E8E6] text-[#C86A28] border border-[#C6C2C1] flex items-center justify-center shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#151515]">
                    Tools & Technologies We Use
                  </h4>
                  <p className="text-xs text-[#544643]">
                    Industry-standard stacks and battle-tested toolchains.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-xl bg-[#E9E8E6] text-xs font-bold text-[#151515] border border-[#C6C2C1]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}
