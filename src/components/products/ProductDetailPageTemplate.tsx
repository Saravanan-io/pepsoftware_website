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
  const isSimplifiedProduct = product.modules.some((m) => !!m.image);

  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* 01. Product Hero */}
      <ProductDetailHero
        product={product}
        onOpenDemo={isSimplifiedProduct ? undefined : () => setIsDemoModalOpen(true)}
      />

      {/* 02. Business Challenges Section */}
      <ProductChallengesSection challenges={product.challenges} />

      {/* 03. Application Showcase (Rendered for products without screenshot modules) */}
      {!isSimplifiedProduct && product.showcase && (
        <ProductShowcaseSection
          showcase={product.showcase}
          productName={product.name}
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />
      )}

      {/* 04. Product Modules Section */}
      <ProductModulesSection
        modules={product.modules}
        productName={product.name}
      />

      {/* 05. How It Works (Dual User & Admin Workflows) */}
      <ProductWorkflowsSection
        workflow={product.workflow}
        productName={product.name}
      />

      {/* 06. Organizational Fit (Omitted on simplified view for clean UI) */}
      {!isSimplifiedProduct && product.useCases && (
        <ProductUseCasesSection
          useCases={product.useCases}
          productName={product.name}
        />
      )}

      {/* 07. Centralized Governance / Administration (Omitted on simplified view for clean UI) */}
      {!isSimplifiedProduct && product.administration && (
        <ProductAdminOverviewSection
          administration={product.administration}
          productName={product.name}
        />
      )}

      {/* 08. FAQs Section (Reliably tailored for verified modules) */}
      <ProductFAQSection
        faqs={product.faqs}
        productName={product.name}
      />

      {/* 09. Final CTA (Send Enquiry is primary) */}
      <ProductFinalCTA
        finalCta={product.finalCta}
        productSlug={product.slug}
        onOpenDemo={isSimplifiedProduct ? undefined : () => setIsDemoModalOpen(true)}
      />

      {/* Interactive Demo Request Modal (Omitted for simplified direct enquiry flow) */}
      {!isSimplifiedProduct && (
        <ProductDemoModal
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
          productName={product.name}
        />
      )}
    </div>
  );
}
