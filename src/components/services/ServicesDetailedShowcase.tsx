"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Check
} from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export function ServicesDetailedShowcase() {
  return (
    <div className="w-full">
      {/* ========================================================
          01. SERVICE 01 — WEBSITE & WEB APPS
          ======================================================== */}
      <section id="service-01" className="py-20 lg:py-28 bg-[#F7F8F8] border-b border-[#C6C2C1]/40 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <RevealOnScroll>
                {/* Clean Section Name */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-[2px] rounded-full bg-[#2563EB]" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2563EB]">
                    Service 01 — Website & Web Apps
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-[-0.03em] leading-tight">
                  Websites That Do More Than Look Good.
                </h2>

                <p className="text-base sm:text-lg text-[#544643] leading-relaxed">
                  We build responsive websites and web applications that are fast, functional and designed around your business goals.
                </p>

                {/* What We Build List */}
                <div className="pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#151515] mb-3">
                    What We Build:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Business Websites",
                      "Corporate Websites",
                      "E-commerce Websites",
                      "Web Applications",
                      "Customer Portals",
                      "Admin Dashboards",
                      "Custom Web Platforms",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-sm sm:text-base text-[#151515]">
                        <div className="w-5 h-5 rounded-full bg-[#2563EB]/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#2563EB] stroke-[3]" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="pt-4">
                  <Link
                    href="/contact?service=website"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#151515] text-white font-bold text-sm hover:bg-[#2563EB] shadow-md shadow-[#151515]/15 transition-all cursor-pointer"
                  >
                    <span>Build My Website</span>
                    <ArrowRight className="w-4 h-4 text-[#FCB116]" />
                  </Link>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-6">
              <RevealOnScroll delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden bg-white border border-[#C6C2C1]/60 shadow-xl shadow-[#151515]/5 group">
                  <div className="relative h-[320px] sm:h-[400px] w-full overflow-hidden">
                    <Image
                      src="/images/services/website-development-real.jpg"
                      alt="Website & Web App Development"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-bold block mb-1">
                        High Speed & Scalable
                      </span>
                      <p className="text-lg font-bold text-white tracking-tight">
                        Next.js, React, & Modern Cloud Architecture
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          02. SERVICE 02 — MOBILE APPS
          ======================================================== */}
      <section id="service-02" className="py-20 lg:py-28 bg-white border-b border-[#C6C2C1]/40 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Visual (Alternating) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <RevealOnScroll delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden bg-[#F7F8F8] border border-[#C6C2C1]/60 shadow-xl shadow-[#151515]/5 group">
                  <div className="relative h-[320px] sm:h-[400px] w-full overflow-hidden">
                    <Image
                      src="/images/services/mobile-app-development-real.jpg"
                      alt="Mobile App Development Studio"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#34D399] font-bold block mb-1">
                        iOS & Android Production
                      </span>
                      <p className="text-lg font-bold text-white tracking-tight">
                        React Native, Flutter & Native Swift/Kotlin
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <RevealOnScroll>
                {/* Clean Section Name */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-[2px] rounded-full bg-[#059669]" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#059669]">
                    Service 02 — Mobile Apps
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-[-0.03em] leading-tight">
                  Turn Your Idea Into a Mobile App.
                </h2>

                <p className="text-base sm:text-lg text-[#544643] leading-relaxed">
                  We design and develop mobile applications that are easy to use, reliable and built around real user needs.
                </p>

                {/* What We Build List */}
                <div className="pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#151515] mb-3">
                    What We Build:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Business Apps",
                      "Customer Apps",
                      "Service Apps",
                      "E-commerce Apps",
                      "Internal Business Apps",
                      "Management Apps",
                      "Custom Mobile Solutions",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-sm sm:text-base text-[#151515]">
                        <div className="w-5 h-5 rounded-full bg-[#059669]/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#059669] stroke-[3]" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Platforms */}
                <div className="pt-4 border-t border-[#C6C2C1]/30">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#544643] block mb-2">
                    Platforms:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["Android", "iOS", "Cross-platform"].map((platform) => (
                      <span
                        key={platform}
                        className="px-3.5 py-1.5 rounded-lg bg-white border border-[#C6C2C1]/60 text-xs font-semibold text-[#151515] shadow-2xs"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="pt-4">
                  <Link
                    href="/contact?service=mobile-app"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#059669] text-white font-bold text-sm hover:bg-[#151515] shadow-md shadow-[#059669]/15 transition-all cursor-pointer"
                  >
                    <span>Build My App</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          03. SERVICE 03 — CUSTOM SOFTWARE
          ======================================================== */}
      <section id="service-03" className="py-20 lg:py-28 bg-[#F7F8F8] border-b border-[#C6C2C1]/40 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <RevealOnScroll>
                {/* Clean Section Name */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-[2px] rounded-full bg-[#D97706]" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D97706]">
                    Service 03 — Custom Software
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-[-0.03em] leading-tight">
                  Software Built Around Your Business.
                </h2>

                <p className="text-base sm:text-lg text-[#544643] leading-relaxed">
                  Every business has its own way of working. We build custom software around your actual processes instead of forcing your business into a standard solution.
                </p>

                {/* We Can Build List */}
                <div className="pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#151515] mb-3">
                    We Can Build:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Business Management Systems",
                      "CRM Solutions",
                      "ERP Solutions",
                      "Internal Tools",
                      "Workflow Automation",
                      "Management Dashboards",
                      "Industry-Specific Software",
                      "API & System Integrations",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-sm sm:text-base text-[#151515]">
                        <div className="w-5 h-5 rounded-full bg-[#D97706]/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#D97706] stroke-[3]" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="pt-4">
                  <Link
                    href="/contact?service=custom-software"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#151515] text-white font-bold text-sm hover:bg-[#D97706] shadow-md shadow-[#151515]/15 transition-all cursor-pointer"
                  >
                    <span>Discuss My Business Requirement</span>
                    <ArrowRight className="w-4 h-4 text-[#FCB116]" />
                  </Link>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-6">
              <RevealOnScroll delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden bg-white border border-[#C6C2C1]/60 shadow-xl shadow-[#151515]/5 group">
                  <div className="relative h-[320px] sm:h-[400px] w-full overflow-hidden">
                    <Image
                      src="/images/services/custom-software-development-real.jpg"
                      alt="Custom Software Development"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#FBBF24] font-bold block mb-1">
                        Tailored Architecture
                      </span>
                      <p className="text-lg font-bold text-white tracking-tight">
                        Enterprise CRM, ERP & Workflow Automation
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          04. SERVICE 04 — SAAS PRODUCTS
          ======================================================== */}
      <section id="service-04" className="py-20 lg:py-28 bg-white border-b border-[#C6C2C1]/40 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Visual (Alternating) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <RevealOnScroll delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden bg-[#F7F8F8] border border-[#C6C2C1]/60 shadow-xl shadow-[#151515]/5 group">
                  <div className="relative h-[320px] sm:h-[400px] w-full overflow-hidden">
                    <Image
                      src="/images/case-studies/healthcare-dashboard.jpg"
                      alt="SaaS Cloud Product Architecture"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#C084FC] font-bold block mb-1">
                        Multi-Tenant & Cloud Scalable
                      </span>
                      <p className="text-lg font-bold text-white tracking-tight">
                        SaaS MVP to Enterprise Production Architecture
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <RevealOnScroll>
                {/* Clean Section Name */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-[2px] rounded-full bg-[#7C3AED]" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C3AED]">
                    Service 04 — SaaS Products
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-[-0.03em] leading-tight">
                  Have a Product Idea? Let&apos;s Build It.
                </h2>

                <p className="text-base sm:text-lg text-[#544643] leading-relaxed">
                  We help entrepreneurs and businesses turn software ideas into scalable SaaS products — from concept to launch.
                </p>

                {/* We Help With List */}
                <div className="pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#151515] mb-3">
                    We Help With:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Product Strategy",
                      "UI/UX Design",
                      "MVP Development",
                      "SaaS Architecture",
                      "Web & Mobile Development",
                      "Subscription & Payment Integration",
                      "Admin Dashboards",
                      "Launch & Support",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-sm sm:text-base text-[#151515]">
                        <div className="w-5 h-5 rounded-full bg-[#7C3AED]/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#7C3AED] stroke-[3]" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="pt-4">
                  <Link
                    href="/contact?service=saas"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#7C3AED] text-white font-bold text-sm hover:bg-[#151515] shadow-md shadow-[#7C3AED]/15 transition-all cursor-pointer"
                  >
                    <span>Discuss My Product Idea</span>
                    <ArrowRight className="w-4 h-4 text-[#FCB116]" />
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          05. SERVICE 05 — UI/UX DESIGN
          ======================================================== */}
      <section id="service-05" className="py-20 lg:py-28 bg-[#F7F8F8] border-b border-[#C6C2C1]/40 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <RevealOnScroll>
                {/* Clean Section Name - No Pill Badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-[2px] rounded-full bg-[#502D6D]" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#502D6D]">
                    Service 05 — UI/UX Design
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-[-0.03em] leading-tight">
                  Design People Understand.
                </h2>

                <p className="text-base sm:text-lg text-[#544643] leading-relaxed">
                  We create clean, intuitive and engaging digital experiences that make products easier to use.
                </p>

                {/* What We Do List */}
                <div className="pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#151515] mb-3">
                    What We Do:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "User Research",
                      "User Flows",
                      "Wireframes",
                      "UI Design",
                      "Prototypes",
                      "Design Systems",
                      "Usability Improvements",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-sm sm:text-base text-[#151515]">
                        <div className="w-5 h-5 rounded-full bg-[#502D6D]/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#502D6D] stroke-[3]" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best For Tags */}
                <div className="pt-4 border-t border-[#C6C2C1]/30">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#544643] block mb-2">
                    Best For:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["Websites", "Mobile Apps", "SaaS", "Business Software"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 rounded-lg bg-white border border-[#C6C2C1]/60 text-xs font-semibold text-[#151515] shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="pt-4">
                  <Link
                    href="/contact?service=ui-ux"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#502D6D] text-white font-bold text-sm hover:bg-[#151515] shadow-md shadow-[#502D6D]/15 transition-all cursor-pointer"
                  >
                    <span>Discuss a Design Project</span>
                    <ArrowRight className="w-4 h-4 text-[#FCB116]" />
                  </Link>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-6">
              <RevealOnScroll delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden bg-white border border-[#C6C2C1]/60 shadow-xl shadow-[#151515]/5 group">
                  <div className="relative h-[320px] sm:h-[400px] w-full overflow-hidden">
                    <Image
                      src="/images/services/ui-ux-design-real.jpg"
                      alt="UI/UX Design Studio Services"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#FCB116] font-bold block mb-1">
                        Intuitive & Frictionless
                      </span>
                      <p className="text-lg font-bold text-white tracking-tight">
                        Human-Centered Design Systems & Wireframes
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          06. SERVICE 06 — DIGITAL MARKETING
          ======================================================== */}
      <section id="service-06" className="py-20 lg:py-28 bg-white border-b border-[#C6C2C1]/40 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Visual (Alternating) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <RevealOnScroll delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden bg-[#F7F8F8] border border-[#C6C2C1]/60 shadow-xl shadow-[#151515]/5 group">
                  <div className="relative h-[320px] sm:h-[400px] w-full overflow-hidden">
                    <Image
                      src="/images/services/digital-marketing-real.jpg"
                      alt="Digital Marketing and SEO Services"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#FB7185] font-bold block mb-1">
                        Measurable ROI & Growth
                      </span>
                      <p className="text-lg font-bold text-white tracking-tight">
                        SEO, Google Ads, Meta Ads & Conversion Strategy
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <RevealOnScroll>
                {/* Clean Section Name */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-[2px] rounded-full bg-[#E11D48]" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E11D48]">
                    Service 06 — Digital Marketing
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-[-0.03em] leading-tight">
                  Reach the People Who Matter to Your Business.
                </h2>

                <p className="text-base sm:text-lg text-[#544643] leading-relaxed">
                  Having a digital product is only the first step. We help businesses attract, engage and convert the right audience through practical digital strategies.
                </p>

                {/* What We Offer List */}
                <div className="pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#151515] mb-3">
                    What We Offer:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Search Engine Optimization (SEO)",
                      "Local SEO",
                      "Google Ads Management",
                      "Social Media Marketing",
                      "Content Strategy",
                      "Lead Generation Campaigns",
                      "Website Performance & Conversion Improvements",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-sm sm:text-base text-[#151515]">
                        <div className="w-5 h-5 rounded-full bg-[#E11D48]/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#E11D48] stroke-[3]" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="pt-4">
                  <Link
                    href="/contact?service=marketing"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#E11D48] text-white font-bold text-sm hover:bg-[#151515] shadow-md shadow-[#E11D48]/15 transition-all cursor-pointer"
                  >
                    <span>Grow My Business</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
