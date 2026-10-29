"use client";

import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, Map } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { RevealOnScroll } from "../shared/RevealOnScroll";
import { WordReveal, ParagraphReveal } from "../shared/WordReveal";


export function ContactCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F8F8] relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

      {/* Ambient background glows */}
      <div className="absolute -top-24 right-10 w-[500px] h-[500px] bg-[#502D6D]/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-[500px] h-[500px] bg-[#FCB116]/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          {/* Big Charcoal Luxury CTA card with Logo Nebula Accents */}
          <div className="relative rounded-[36px] overflow-hidden bg-[#151515] border border-[#502D6D]/40 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-[#502D6D]/15">
            {/* Soft subtle brand glows inside card */}
            <div className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full bg-[#502D6D]/35 blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] rounded-full bg-[#FCB116]/20 blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-grid-dark opacity-10 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left: Heading + CTA buttons */}
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2.5">
                  <span className="w-4 h-[2px] rounded-full bg-gradient-to-r from-[#D79EFF] to-[#FCB116]" />
                  <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] text-[#FCB116]">
                    LET&apos;S WORK TOGETHER
                  </span>
                </div>

                <WordReveal
                  as="h2"
                  text="Ready to bring your ideas to life?"
                  gradientWords="ideas to life?"
                  gradientClassNames={["text-[#D79EFF]", "text-[#FCB116]", "text-[#FFE8A3]"]}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F8F8] leading-[1.05] tracking-tight"
                />

                <ParagraphReveal
                  text="Partner with PEP Software and take your business to the next level with innovative digital solutions. Big ideas. Brighter tomorrow."
                  delay={0.12}
                  className="text-base sm:text-lg text-[#E7EBEA]/80 leading-relaxed max-w-2xl"
                />

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FCB116] text-[#151515] font-extrabold text-base hover:bg-white shadow-lg shadow-[#FCB116]/20 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Get a Free Quote</span>
                    <ArrowRight className="w-4 h-4 text-[#151515] transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#502D6D]/20 border border-[#502D6D]/50 text-[#F7F8F8] font-semibold text-base hover:border-[#FCB116] hover:bg-[#502D6D]/35 transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#FCB116]" />
                    <span>Talk to Our Team</span>
                  </a>
                </div>

              </div>

              {/* Right: Contact info card */}
              <div className="lg:col-span-4 bg-[#151515]/95 rounded-3xl p-7 border border-[#502D6D]/40 space-y-5 shadow-xl">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#F7F8F8]">
                  Direct Contact
                </h4>

                <div className="space-y-4 text-sm text-[#E7EBEA]/80">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#502D6D]/40 border border-[#502D6D]/60 text-[#FCB116] flex items-center justify-center shrink-0 mt-0.5">
                      <Map className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#F7F8F8] mb-0.5">Location</span>
                      <span className="text-xs leading-relaxed text-[#C6C2C1]">{COMPANY_INFO.city}, {COMPANY_INFO.state}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#502D6D]/40 border border-[#502D6D]/60 text-[#FCB116] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#F7F8F8] mb-0.5">Call Us</span>
                      <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-xs font-semibold text-[#FCB116] hover:underline">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#502D6D]/40 border border-[#502D6D]/60 text-[#FCB116] flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#F7F8F8] mb-0.5">Email Us</span>
                      <span className="text-xs text-[#C6C2C1]">{COMPANY_INFO.email}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[10px] text-[#C6C2C1]/60 border-t border-[#544643]/40 font-medium">
                  Response guaranteed within 24 business hours.
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
