"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { TechIcon } from "./TechIcons";

interface ServiceMetric {
  value: string;
  label: string;
}

interface ServiceItemData {
  number: string;
  id: string;
  category: string;
  shortName: string;
  title: string;
  tagline: string;
  description: string;
  route: string;
  image: string;
  capabilities: string[];
  techStack: string[];
  metrics: ServiceMetric[];
  statusPill: {
    status: string;
    detail: string;
  };
  reversed?: boolean;
}

const SERVICES_LIST: ServiceItemData[] = [
  {
    number: "01",
    id: "01",
    category: "ENTERPRISE ARCHITECTURE",
    shortName: "Custom Software",
    title: "Custom Software Development",
    tagline: "Tailored Architecture. Scalable Systems. Enterprise Stability.",
    description:
      "From architectural design to full-stack engineering, we build bespoke software systems that automate complex workflows, eliminate operational bottlenecks, and accelerate commercial growth.",
    route: "/services/website-design-development",
    image: "/images/services/custom-software-development-real.jpg",
    capabilities: [
      "Enterprise System Architecture & Data Modeling",
      "Cloud Microservices & High-Throughput APIs",
      "Database Optimization & Pipeline Engineering",
      "Automated CI/CD DevOps & Ironclad Security",
    ],
    techStack: ["Node.js", "Python", "PostgreSQL", "AWS", "Docker", "Redis", "Next.js"],
    metrics: [
      { value: "99.99%", label: "Target Uptime SLA" },
      { value: "10x", label: "Throughput Scale" },
      { value: "<50ms", label: "Low-Latency APIs" },
    ],
    statusPill: {
      status: "Microservices Active",
      detail: "14ms Latency • Enterprise Cloud",
    },
    reversed: false,
  },
  {
    number: "02",
    id: "02",
    category: "WEB ARCHITECTURE",
    shortName: "Website Design & Dev",
    title: "Website Design & Development",
    tagline: "High Conversion. Blazing Speed. Pixel-Perfect Craft.",
    description:
      "From high-performance frontend engineering to custom headless CMS and eCommerce storefronts, we build responsive web platforms optimized for speed, search engines, and conversions.",
    route: "/services/website-design-development",
    image: "/images/services/website-development-real.jpg",
    capabilities: [
      "Custom UI/UX & Responsive Web Layouts",
      "Modern Next.js & React Frontend Architecture",
      "Headless WordPress & Secure Custom CMS Portals",
      "High-Conversion eCommerce & Shopify Engines",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress", "Shopify"],
    metrics: [
      { value: "<0.8s", label: "First Contentful Paint" },
      { value: "100/100", label: "Core Web Vitals" },
      { value: "+65%", label: "Avg Conversion Uplift" },
    ],
    statusPill: {
      status: "Edge CDN Live",
      detail: "Global Edge Network • 100 Performance",
    },
    reversed: true,
  },
  {
    number: "03",
    id: "03",
    category: "NATIVE IOS & ANDROID",
    shortName: "Mobile Apps",
    title: "Mobile App Development",
    tagline: "Design with Purpose. Develop with Precision. Deliver with Impact.",
    description:
      "High-performance native iOS, Android, and cross-platform mobile apps engineered for speed, offline data persistence, touch ergonomics, and store-ready stability.",
    route: "/services/mobile-app-design-development",
    image: "/images/services/mobile-app-development-real.jpg",
    capabilities: [
      "Native iOS App Engineering (Swift & SwiftUI)",
      "Native Android Development (Kotlin & Material UI)",
      "Cross-Platform Codebases (Flutter & React Native)",
      "Offline-First Architecture & Push Notification Sync",
    ],
    techStack: ["Swift", "Kotlin", "Flutter", "React Native", "Firebase", "App Store Connect"],
    metrics: [
      { value: "60 FPS", label: "Fluid Native UI" },
      { value: "iOS & Android", label: "Feature Parity" },
      { value: "Offline-First", label: "Local Data Sync" },
    ],
    statusPill: {
      status: "Store Ready Build",
      detail: "SwiftUI & Kotlin Engines • Verified",
    },
    reversed: false,
  },
  {
    number: "04",
    id: "04",
    category: "GROWTH & ANALYTICS",
    shortName: "Digital Marketing",
    title: "Digital Marketing & Branding",
    tagline: "Data-Driven Reach. Targeted SEO. Measurable ROI.",
    description:
      "ROI-focused PPC advertising campaigns, technical search engine optimization (SEO), and creative brand storytelling that turns qualified traffic into loyal paying customers.",
    route: "/services/graphic-design",
    image: "/images/services/digital-marketing-real.jpg",
    capabilities: [
      "Technical & On-Page SEO Auditing",
      "High-ROI Performance Ads (Google & Meta)",
      "Conversion Rate Optimization (CRO) & Funnels",
      "Strategic Copywriting & Brand Identity Assets",
    ],
    techStack: ["Google Analytics 4", "Meta Ads", "Google Search Console", "SEMrush", "HubSpot"],
    metrics: [
      { value: "4.8x", label: "Average ROAS" },
      { value: "+340%", label: "Organic Search Growth" },
      { value: "Top 3", label: "SERP Rankings" },
    ],
    statusPill: {
      status: "Live Funnel Active",
      detail: "Multi-Touch Attribution • Real-Time",
    },
    reversed: true,
  },
];

export function StickyServicesStack() {
  const [activeDomain, setActiveDomain] = useState<string>("01");
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  // Smooth scroll handler to jump directly to any service anchor
  const scrollToService = (id: string) => {
    setActiveDomain(id);
    const element = document.getElementById(`service-pillar-${id}`);
    if (element) {
      const navOffset = 110;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  // Sync active domain pill with user scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (const service of SERVICES_LIST) {
        const el = document.getElementById(`service-pillar-${service.id}`);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveDomain(service.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden select-none border-b border-[#C6C2C1]/40">
      {/* Ambient Atmospheric Lighting Blobs */}
      <div className="absolute top-1/4 -left-28 w-[600px] h-[600px] bg-[#502D6D]/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-28 w-[600px] h-[600px] bg-[#FCB116]/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-light opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header ──────────────────────────────────────────────── */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] rounded-full bg-gradient-to-r from-[#502D6D] to-[#FCB116]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#502D6D]">
              OUR SERVICES & ENGINEERING EXPERTISE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight leading-[1.12]">
            Engineered for Scale.{" "}
            <span className="text-[#502D6D]">Designed</span> to{" "}
            <span className="text-[#FCB116]">Inspire</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#544643] mt-4 leading-relaxed font-normal max-w-2xl">
            We partner with forward-thinking enterprises and fast-moving brands across four specialized technical pillars.
          </p>
        </div>

        {/* ── Sticky Quick-Jump Domain Anchor Bar ─────────────────────────── */}
        <div className="sticky top-20 sm:top-24 z-30 mb-14 sm:mb-20 py-2 flex justify-start sm:justify-center">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#C6C2C1]/70 shadow-lg shadow-black/5 max-w-full overflow-x-auto scrollbar-none">
            {SERVICES_LIST.map((service) => {
              const isActive = activeDomain === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => scrollToService(service.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-[#151515] text-[#F7F8F8] shadow-sm"
                      : "text-[#544643] hover:text-[#151515] hover:bg-[#EFF0EF]"
                  }`}
                >
                  <span>{service.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── The 4 Services: Open Modern Showcase (No Cards, No Box Containers) ── */}
        <div className="space-y-24 lg:space-y-36">
          {SERVICES_LIST.map((service) => {
            const isReversed = service.reversed;

            return (
              <div
                key={service.id}
                id={`service-pillar-${service.id}`}
                className={`pt-14 lg:pt-20 border-t border-[#C6C2C1]/60 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* ── Text Content Column ─────────────────────────────────── */}
                <div
                  className={`space-y-6 text-left ${
                    isReversed ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-6"
                  }`}
                >
                  <div>
                    {/* Category Row */}
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="w-3.5 h-[2px] rounded-full bg-gradient-to-r from-[#502D6D] to-[#FCB116]" />
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#502D6D]">
                        {service.category}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#151515] tracking-tight leading-tight">
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm sm:text-base font-medium text-[#502D6D] mt-2 italic">
                      {service.tagline}
                    </p>

                    {/* Detailed Paragraph */}
                    <p className="text-sm sm:text-base text-[#544643] leading-relaxed mt-4 font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Technology Stack Row */}
                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#151515] block mb-2">
                      Core Technologies:
                    </span>
                    <div className="flex flex-wrap items-center gap-2.5">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-white text-[#151515] border border-[#C6C2C1]/60 shadow-2xs hover:border-[#502D6D]/40 transition-colors"
                        >
                          <TechIcon name={tech} className="w-5 h-5 shrink-0" />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Clean Editorial Action Row */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={service.route}
                      className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#151515] hover:text-[#502D6D] transition-colors group cursor-pointer"
                    >
                      <span className="underline underline-offset-4 decoration-[#FCB116] group-hover:decoration-[#502D6D]">
                        Explore Full {service.title}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#FCB116] group-hover:text-[#502D6D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#151515] text-white text-xs font-bold hover:bg-[#502D6D] transition-all shadow-sm shadow-black/10 cursor-pointer"
                    >
                      <span>Get a Proposal</span>
                    </Link>
                  </div>
                </div>

                {/* ── Visual Media Column (No Card Container) ─────────────── */}
                <div
                  className={`relative ${
                    isReversed ? "lg:col-span-6 lg:col-start-1" : "lg:col-span-6"
                  }`}
                >
                  {/* Ambient Lighting Ring */}
                  <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[#502D6D]/15 via-[#FCB116]/20 to-transparent blur-3xl pointer-events-none" />

                  {/* Clean Borderless Floating Media Canvas */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#502D6D]/10 bg-white aspect-[16/10] sm:aspect-[16/9] group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
