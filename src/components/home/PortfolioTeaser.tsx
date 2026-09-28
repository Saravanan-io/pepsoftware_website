"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { RevealOnScroll } from "../shared/RevealOnScroll";

const categories = ["All", "Websites", "Mobile Apps", "UI/UX", "AR/VR"];

export function PortfolioTeaser() {
  const [activeTab, setActiveTab] = useState("All");
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;

  const filtered = useMemo(
    () =>
      activeTab === "All"
        ? PORTFOLIO_DATA
        : PORTFOLIO_DATA.filter((p) => p.category === activeTab),
    [activeTab]
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const current = useMemo(
    () => filtered.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage),
    [filtered, page]
  );

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setPage(0);
  };

  return (
    <section id="work" className="py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden">
      {/* Background Dot Texture */}
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <RevealOnScroll className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2EC] border border-[#F4D3C2] text-xs font-bold uppercase tracking-wider text-[#C86A28] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR WORK</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#151515] leading-tight tracking-tight">
              Projects that speak{" "}
              <span className="text-[#544643] font-medium">for</span>{" "}
              <span className="text-[#C86A28]">themselves</span>
            </h2>
            <p className="mt-4 text-base text-[#544643] leading-relaxed max-w-xl">
              Explore some of our recent projects across websites, mobile applications and AR/VR experiences.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#151515] text-[#F7F8F8] text-sm font-bold hover:bg-[#544643] shadow-md shadow-[#151515]/10 transition-all shrink-0"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 text-[#C86A28] transition-transform group-hover:translate-x-1" />
            </Link>
          </RevealOnScroll>
        </div>

        {/* Filter Pills */}
        <RevealOnScroll delay={0.15}>
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#151515] text-white border border-[#151515] shadow-xs"
                    : "bg-[#FFFFFF] border border-[#E5E5E3] text-[#544643] hover:text-[#151515] hover:border-[#544643] shadow-2xs"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {current.map((project, idx) => {
              const hasLiveUrl = project.liveUrl && project.liveUrl !== "#";

              return (
                <motion.div
                  key={`${project.id}-${activeTab}-${page}`}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.97 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="group relative flex flex-col rounded-[26px] bg-[#FFFFFF] border border-[#E5E5E3] hover:border-[#C86A28]/50 shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  {/* Top Visual Preview Area */}
                  <div className="relative bg-[#F4F4F3] border-b border-[#E5E5E3] p-5 flex flex-col justify-between overflow-hidden">
                    {/* Top Row: Category Badge & Year */}
                    <div className="flex items-center justify-between relative z-10 mb-4">
                      <span className="text-[11px] font-black uppercase tracking-wider bg-[#151515] text-[#FFFFFF] px-3.5 py-1 rounded-full shadow-2xs">
                        {project.category}
                      </span>
                      <span className="text-xs font-bold text-[#544643] font-mono">
                        {project.year}
                      </span>
                    </div>

                    {/* Browser / Device Mockup Frame */}
                    <div className="relative z-10 bg-[#FFFFFF] rounded-2xl border border-[#E5E5E3] shadow-xs p-3.5 transition-all duration-300 group-hover:shadow-md">
                      {/* Browser Mockup Top Bar */}
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF7700] shrink-0" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#C6C2C1] shrink-0" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#544643] shrink-0" />
                          <span className="text-[11px] text-[#151515] ml-1.5 font-mono font-bold tracking-tight truncate">
                            {project.client}
                          </span>
                        </div>

                        {hasLiveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#C86A28] hover:text-[#151515] transition-colors p-1"
                            title="Visit Live Site"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                      {/* Mockup Screen Visual (Project Screenshot Preview + Accent Lines) */}
                      <div className="relative h-28 w-full rounded-xl overflow-hidden bg-[#FAF9F7] border border-[#E5E5E3]/70 flex items-center justify-center">
                        {project.image ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        ) : (
                          <div className="w-full px-4 space-y-2">
                            <div className="h-2 bg-[#544643]/20 rounded-full w-full" />
                            <div className="h-2 bg-[#C86A28]/35 rounded-full w-2/3" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-black text-[#151515] group-hover:text-[#C86A28] transition-colors mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#544643] leading-relaxed line-clamp-2 mb-4 flex-1">
                      {project.summary}
                    </p>

                    {/* Result Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-5 py-3 border-y border-[#E5E5E3]/80">
                      {project.results.slice(0, 2).map((res) => (
                        <div key={res.label} className="text-left">
                          <div className="text-base sm:text-lg font-black text-[#C86A28] tracking-tight">
                            {res.metric}
                          </div>
                          <div className="text-[10px] text-[#544643] font-semibold leading-tight mt-0.5 line-clamp-1">
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies & CTA Link */}
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-[#F5F5F4] border border-[#E5E5E3] text-[#544643]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          href={`/work/${project.slug}`}
                          className="text-xs font-bold text-[#151515] hover:text-[#C86A28] flex items-center gap-1 transition-colors"
                        >
                          <span>View Case</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#C86A28]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-12 pt-6 border-t border-[#E5E5E3]/70">
            <span className="text-xs font-semibold text-[#544643]">
              Showing {page * itemsPerPage + 1}–{Math.min((page + 1) * itemsPerPage, filtered.length)} of {filtered.length} projects
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#E5E5E3] flex items-center justify-center text-[#151515] hover:bg-[#151515] hover:text-[#F7F8F8] disabled:opacity-30 transition-all cursor-pointer shadow-2xs"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-1.5">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      i === page ? "bg-[#151515] w-6" : "bg-[#C6C2C1] w-2 hover:bg-[#544643]"
                    }`}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page === totalPages - 1}
                className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#E5E5E3] flex items-center justify-center text-[#151515] hover:bg-[#151515] hover:text-[#F7F8F8] disabled:opacity-30 transition-all cursor-pointer shadow-2xs"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
