"use client";

import React, { useState } from "react";
import { ProductDetailData } from "@/data/products";
import { ProductDetailHero } from "./ProductDetailHero";
import { ProductChallengesSection } from "./ProductChallengesSection";
import { ProductShowcaseSection } from "./ProductShowcaseSection";
import { ProductModulesSection } from "./ProductModulesSection";
import { ProductWorkflowsSection } from "./ProductWorkflowsSection";
import { ProductUseCasesSection } from "./ProductUseCasesSection";
import { ProductAdminOverviewSection } from "./ProductAdminOverviewSection";
import { ProductFAQSection } from "./ProductFAQSection";
import { ProductFinalCTA } from "./ProductFinalCTA";
import { ProductDemoModal } from "./ProductDemoModal";

interface ProductDetailPageTemplateProps {
  product: ProductDetailData;
}

export function ProductDetailPageTemplate({ product }: ProductDetailPageTemplateProps) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* 01. Product Hero */}
      <ProductDetailHero
        product={product}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      {/* 02. Business Challenges Section */}
      <ProductChallengesSection challenges={product.challenges} />

      {/* 03. Application Showcase Section */}
      <ProductShowcaseSection
        showcase={product.showcase}
        productName={product.name}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      {/* 04. Product Modules Section */}
      <ProductModulesSection
        modules={product.modules}
        productName={product.name}
      />

      {/* 05 & 06. How It Works (Dual User & Admin Workflows) */}
      <ProductWorkflowsSection
        workflow={product.workflow}
        productName={product.name}
      />

      {/* 07. Organizational Use Cases */}
      <ProductUseCasesSection
        useCases={product.useCases}
        productName={product.name}
      />

      {/* 08. Administration & Operational Oversight */}
      <ProductAdminOverviewSection
        administration={product.administration}
        productName={product.name}
      />

      {/* 09. FAQs Section */}
      <ProductFAQSection
        faqs={product.faqs}
        productName={product.name}
      />

      {/* 10. Final Request a Demo CTA */}
      <ProductFinalCTA
        finalCta={product.finalCta}
        productSlug={product.slug}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Interactive Demo Request Modal */}
      <ProductDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        productName={product.name}
      />
    </div>
  );
}
