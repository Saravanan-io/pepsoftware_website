import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { ContactCTA } from "@/components/home/ContactCTA";

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_DATA.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study Not Found" };

  return {
    title: `${project.title} Case Study | PEP Software`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const projectIndex = PORTFOLIO_DATA.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PORTFOLIO_DATA[projectIndex];
  const nextProject =
    PORTFOLIO_DATA[(projectIndex + 1) % PORTFOLIO_DATA.length];

  return (
    <div className="w-full bg-[#F7F8F8]">
      {/* Hero Header */}
      <section className="pt-24 pb-20 bg-[#F7F8F8] border-b border-[#C6C2C1]/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#544643] hover:text-[#C86A28] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 text-[#C86A28]" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#E9E8E6] text-[#C86A28] border border-[#C6C2C1]">
                {project.category}
              </span>
              <span className="text-xs font-semibold text-[#544643]">
                Client: {project.client} • {project.year}
              </span>
            </div>
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151515] text-[#F7F8F8] text-xs font-bold hover:bg-[#544643] transition-colors"
              >
                <span>Visit Live Project</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C86A28]" />
              </a>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#151515] tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#544643] leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-[#C6C2C1]/60">
            {project.results.map((res, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs">
                <div className="text-3xl font-black text-[#C86A28]">
                  {res.metric}
                </div>
                <div className="text-xs font-semibold text-[#544643] mt-1">
                  {res.label}
                </div>
              </div>
            ))}
          </div>

          {/* Project Showcase Visual */}
          {project.image && (
            <div className="mt-12 rounded-[28px] bg-[#FFFFFF] border border-[#E5E5E3] p-4 sm:p-6 shadow-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF7700]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#C6C2C1]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#544643]" />
                <span className="text-xs text-[#544643] font-mono ml-2 font-bold">{project.client}</span>
              </div>
              <div className="relative w-full aspect-[16/9] max-h-[460px] rounded-2xl overflow-hidden bg-[#FAF9F7] flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Challenge & Solution Grid */}
      <section className="py-20 bg-[#EFF0EF] border-b border-[#C6C2C1]/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#544643]">
                  The Problem
                </span>
                <h3 className="text-2xl font-extrabold text-[#151515] mt-1">
                  The Challenge
                </h3>
              </div>
              <div className="md:col-span-8 text-base text-[#544643] leading-relaxed">
                {project.challenge}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-12 border-t border-[#C6C2C1]/60">
              <div className="md:col-span-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C86A28]">
                  Our Approach
                </span>
                <h3 className="text-2xl font-extrabold text-[#151515] mt-1">
                  The Solution
                </h3>
              </div>
              <div className="md:col-span-8 text-base text-[#544643] leading-relaxed">
                {project.solution}
              </div>
            </div>
          </RevealOnScroll>

          {/* Tech Stack */}
          <RevealOnScroll>
            <div className="pt-8 border-t border-[#C6C2C1]/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#544643] mb-4">
                Technologies & Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-4 py-2 rounded-xl bg-[#E9E8E6] text-[#151515] border border-[#C6C2C1]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Next Case Study Navigation */}
      <section className="py-16 bg-[#F7F8F8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#544643]">
              Next Case Study
            </span>
            <h4 className="text-xl font-bold text-[#151515] mt-1">
              {nextProject.title}
            </h4>
          </div>

          <Link
            href={`/work/${nextProject.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#151515] text-[#F7F8F8] hover:bg-[#544643] font-semibold text-sm shadow-xs transition-all"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 text-[#C86A28]" />
          </Link>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
