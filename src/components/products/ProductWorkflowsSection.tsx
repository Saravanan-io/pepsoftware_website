"use client";

import React, { useState } from "react";
import {
  User,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Workflow,
  Sparkles,
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { ProductDetailData } from "@/data/products";

interface ProductWorkflowsSectionProps {
  workflow: ProductDetailData["workflow"];
  productName: string;
}

export function ProductWorkflowsSection({
  workflow,
  productName,
}: ProductWorkflowsSectionProps) {
  const [activePerspective, setActivePerspective] = useState<"user" | "admin">("user");

  return (
    <section className="py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden border-t border-[#C6C2C1]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-[#7C3AED]" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                USER & ADMINISTRATOR WORKFLOWS
              </span>
              <span className="w-5 sm:w-6 h-[2px] rounded-full bg-gradient-to-r from-[#7C3AED] to-orange-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151515] tracking-tight leading-tight mt-1">
              {workflow.heading}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl mx-auto">
              {workflow.intro}
            </p>
          </RevealOnScroll>
        </div>

        {/* Perspective Switcher Controls */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <button
            onClick={() => setActivePerspective("user")}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2.5 shadow-sm ${
              activePerspective === "user"
                ? "bg-[#502D6D] text-white shadow-[#502D6D]/20 scale-105"
                : "bg-white text-[#544643] border border-[#C6C2C1]/60 hover:border-[#502D6D] hover:text-[#151515]"
            }`}
          >
            <User className="w-4 h-4" />
            <span>{workflow.userWorkflow.roleTitle}</span>
          </button>

          <button
            onClick={() => setActivePerspective("admin")}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2.5 shadow-sm ${
              activePerspective === "admin"
                ? "bg-[#151515] text-white shadow-black/20 scale-105"
                : "bg-white text-[#544643] border border-[#C6C2C1]/60 hover:border-[#151515] hover:text-[#151515]"
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-[#FCB116]" />
            <span>{workflow.adminWorkflow.roleTitle}</span>
          </button>
        </div>

        {/* Sequential Workflow Steps Timeline */}
        <div className="max-w-4xl mx-auto">
          {activePerspective === "user" ? (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/80 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#502D6D] block">
                    Active Perspective
                  </span>
                  <h4 className="text-lg font-black text-[#151515]">
                    {workflow.userWorkflow.roleTitle}
                  </h4>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-[#502D6D] border border-purple-200">
                  {workflow.userWorkflow.roleBadge}
                </span>
              </div>

              <div className="relative border-l-2 border-[#502D6D]/30 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
                {workflow.userWorkflow.steps.map((step, idx) => (
                  <RevealOnScroll key={step.step} delay={idx * 0.1}>
                    <div className="relative group">
                      {/* Step Number Dot on Timeline */}
                      <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-[#502D6D] text-[#502D6D] font-mono text-xs font-black flex items-center justify-center shadow-xs group-hover:bg-[#502D6D] group-hover:text-white transition-colors">
                        {step.step}
                      </div>

                      <div className="p-6 rounded-2xl bg-white border border-[#C6C2C1]/60 shadow-xs hover:shadow-md transition-all">
                        <h4 className="text-base sm:text-lg font-bold text-[#151515] tracking-tight">
                          {step.title}
                        </h4>
                        <p className="mt-2 text-xs sm:text-sm text-[#544643] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B45309] block">
                    Active Perspective
                  </span>
                  <h4 className="text-lg font-black text-[#151515]">
                    {workflow.adminWorkflow.roleTitle}
                  </h4>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-[#B45309] border border-amber-200">
                  {workflow.adminWorkflow.roleBadge}
                </span>
              </div>

              <div className="relative border-l-2 border-[#FCB116] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
                {workflow.adminWorkflow.steps.map((step, idx) => (
                  <RevealOnScroll key={step.step} delay={idx * 0.1}>
                    <div className="relative group">
                      {/* Step Number Dot on Timeline */}
                      <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-full bg-[#151515] border-2 border-[#FCB116] text-[#FCB116] font-mono text-xs font-black flex items-center justify-center shadow-xs group-hover:bg-[#FCB116] group-hover:text-[#151515] transition-colors">
                        {step.step}
                      </div>

                      <div className="p-6 rounded-2xl bg-white border border-[#C6C2C1]/60 shadow-xs hover:shadow-md transition-all">
                        <h4 className="text-base sm:text-lg font-bold text-[#151515] tracking-tight">
                          {step.title}
                        </h4>
                        <p className="mt-2 text-xs sm:text-sm text-[#544643] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
