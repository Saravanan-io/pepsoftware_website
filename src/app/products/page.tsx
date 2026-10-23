import { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactCTA } from "@/components/home/ContactCTA";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import Link from "next/link";
import { ArrowRight, Box, Code, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Products | PEP Software — Innovative Software Solutions",
  description:
    "Explore Pep Software's suite of digital products, SaaS tools, and enterprise software solutions designed for modern businesses.",
};

const productsList = [
  {
    icon: Box,
    badge: "SaaS Platform",
    title: "Enterprise Web Suite",
    description:
      "A comprehensive, high-performance web suite powering scalable digital platforms with real-time analytics and seamless API integrations.",
    tag: "Featured Product",
  },
  {
    icon: Cpu,
    badge: "AI & Automation",
    title: "Smart Workflow Engine",
    description:
      "Automate repetitive tasks, streamline team collaboration, and harness intelligent workflow insights with custom AI modules.",
    tag: "New",
  },
  {
    icon: Code,
    badge: "Mobile Framework",
    title: "Cross-Platform App Core",
    description:
      "Ultra-responsive mobile infrastructure optimized for lightning-fast iOS and Android application deployments.",
    tag: "Popular",
  },
];

export default function ProductsPage() {
  return (
    <div className="w-full bg-[#F7F8F8]">
      {/* Hero Header */}
      <section className="pt-28 pb-20 bg-[#F7F8F8] text-center border-b border-[#C6C2C1]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Innovation Hub"
            title="Our Digital"
            gradientWord="Products"
            description="Explore our growing ecosystem of digital products, SaaS frameworks, and custom software tools crafted for modern businesses."
            align="center"
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productsList.map((product, idx) => {
            const Icon = product.icon;
            return (
              <RevealOnScroll key={product.title} delay={idx * 0.1}>
                <div className="group relative h-full bg-white rounded-3xl p-8 border border-[#C6C2C1]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#502D6D]/10 to-[#FCB116]/20 flex items-center justify-center text-[#502D6D]">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#502D6D]/10 text-[#502D6D]">
                        {product.tag}
                      </span>
                    </div>

                    <span className="text-xs font-bold text-[#FCB116] uppercase tracking-wider">
                      {product.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-[#151515] mt-1 mb-3 group-hover:text-[#502D6D] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-[#151515]/70 text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#502D6D] group-hover:text-[#FCB116] transition-colors"
                  >
                    <span>Request Demo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
}
