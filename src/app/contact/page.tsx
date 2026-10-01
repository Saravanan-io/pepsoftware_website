import Image from "next/image";
import { Metadata } from "next";
import {
  MessageCircle,
  ArrowDown,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { ContactForm } from "@/components/contact/ContactForm";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { WordReveal, ParagraphReveal } from "@/components/shared/WordReveal";
import { Contact3DVisual } from "@/components/contact/Contact3DVisual";

export const metadata: Metadata = {
  title: "Contact Us | PEP Software",
  description:
    "Get in touch with PEP Software. Marappa Street 1, Surampatti, Erode, TN-638009. Call +91 638-1010-282. Start your digital project today.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#F7F8F8] select-none">
      {/* 3D Cinematic Hero Header */}
      <section className="pt-20 sm:pt-24 pb-16 lg:pb-20 bg-[#F7F8F8] border-b border-[#C6C2C1]/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

        {/* Ambient Brand Glow Orbs */}
        <div className="absolute -top-24 -right-20 w-[550px] h-[550px] bg-[#502D6D]/[0.07] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 w-[550px] h-[550px] bg-[#FCB116]/[0.08] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <RevealOnScroll>
                <div className="inline-flex items-center gap-2.5 mb-2">
                  <span className="w-4 h-[2px] rounded-full bg-gradient-to-r from-[#502D6D] to-[#FCB116]" />
                  <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent">
                    GET IN TOUCH
                  </span>
                </div>

                <WordReveal
                  as="h1"
                  text="Let's build something extraordinary together."
                  gradientWords="extraordinary together."
                  gradientClassName="bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent"
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#151515] leading-[1.08] mt-4"
                />

                <ParagraphReveal
                  text="Have a new project, need a redesign, or want to discuss design training? Reach out directly to our engineering and design team."
                  delay={0.15}
                  className="text-base sm:text-lg text-[#544643] leading-relaxed max-w-xl mx-auto lg:mx-0 mt-4"
                />

                <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-[#544643]">
                  <a
                    href="#contact-form-section"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#502D6D] hover:text-[#8A3DA8] transition-colors"
                  >
                    <span>Jump to Inquiry Form</span>
                    <ArrowDown className="w-3.5 h-3.5 text-[#FCB116]" />
                  </a>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right: Realistic 3D Floating Communication Centerpiece */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <RevealOnScroll delay={0.2}>
                <Contact3DVisual />
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact-form-section" className="py-20 bg-[#F7F8F8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7">
              <RevealOnScroll>
                <ContactForm />
              </RevealOnScroll>
            </div>

            {/* Right Column: Contact Details, Studio Card, and Map */}
            <div className="lg:col-span-5 space-y-6">
              {/* Studio Information Card */}
              <RevealOnScroll delay={0.15}>
                <div className="relative overflow-hidden p-8 sm:p-9 rounded-3xl bg-white/95 backdrop-blur-xl border border-[#502D6D]/15 shadow-[0_20px_60px_-15px_rgba(80,45,109,0.08)] space-y-6">
                  {/* Brand Gradient Accent Line on Top */}
                  <div className="h-1.5 w-full absolute top-0 left-0 bg-gradient-to-r from-[#FCB116] via-[#8A3DA8] to-[#502D6D]" />

                  {/* Header */}
                  <div className="border-b border-[#E2E4E9] pb-4">
                    <div className="mb-1">
                      <div className="inline-flex items-center gap-2">
                        <span className="w-3.5 h-[2px] rounded-full bg-gradient-to-r from-[#FCB116] to-[#502D6D]" />
                        <span className="font-syne text-[11px] font-extrabold uppercase tracking-[0.22em] bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent">
                          STUDIO HEADQUARTERS
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#151515] tracking-tight">
                      Studio Information
                    </h3>
                  </div>

                  <div className="space-y-4 text-sm text-[#544643]">
                    {/* Office Address */}
                    <div className="flex items-start gap-4 p-2.5 -mx-2.5 rounded-2xl hover:bg-[#502D6D]/5 transition-colors group">
                      <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-white via-[#FAF7FD] to-[#F5EEFB] border border-[#502D6D]/15 shadow-sm p-1.5 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-300">
                        <div className="relative w-full h-full">
                          <Image
                            src="/images/contact/icon-pin-3d.png"
                            alt="Office Address 3D Icon"
                            fill
                            sizes="48px"
                            className="object-contain drop-shadow-[0_4px_8px_rgba(80,45,109,0.22)]"
                          />
                        </div>
                      </div>
                      <div>
                        <span className="font-bold text-[#151515] block">
                          Office Address
                        </span>
                        <span className="leading-relaxed text-xs sm:text-sm">
                          {COMPANY_INFO.address}
                        </span>
                      </div>
                    </div>

                    {/* Phone / WhatsApp */}
                    <div className="flex items-start gap-4 p-2.5 -mx-2.5 rounded-2xl hover:bg-[#FCB116]/10 transition-colors group">
                      <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-white via-[#FFFBF2] to-[#FFF6E5] border border-[#FCB116]/25 shadow-sm p-1.5 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-300">
                        <div className="relative w-full h-full">
                          <Image
                            src="/images/contact/icon-phone-3d.png"
                            alt="Phone 3D Icon"
                            fill
                            sizes="48px"
                            className="object-contain drop-shadow-[0_4px_8px_rgba(200,106,40,0.22)]"
                          />
                        </div>
                      </div>
                      <div>
                        <span className="font-bold text-[#151515] block">
                          Phone / WhatsApp
                        </span>
                        <a
                          href={`tel:${COMPANY_INFO.phoneRaw}`}
                          className="hover:text-[#502D6D] font-bold text-[#151515] text-xs sm:text-sm transition-colors"
                        >
                          {COMPANY_INFO.phone}
                        </a>
                      </div>
                    </div>

                    {/* Inquiries */}
                    <div className="flex items-start gap-4 p-2.5 -mx-2.5 rounded-2xl hover:bg-[#502D6D]/5 transition-colors group">
                      <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-white via-[#FAF7FD] to-[#F5EEFB] border border-[#502D6D]/15 shadow-sm p-1.5 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-300">
                        <div className="relative w-full h-full">
                          <Image
                            src="/images/contact/icon-mail-3d.png"
                            alt="Email Inquiries 3D Icon"
                            fill
                            sizes="48px"
                            className="object-contain drop-shadow-[0_4px_8px_rgba(80,45,109,0.22)]"
                          />
                        </div>
                      </div>
                      <div>
                        <span className="font-bold text-[#151515] block">
                          Inquiries
                        </span>
                        <a
                          href={`mailto:${COMPANY_INFO.email}`}
                          className="hover:text-[#502D6D] font-semibold text-[#151515] text-xs sm:text-sm transition-colors"
                        >
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-4 p-2.5 -mx-2.5 rounded-2xl hover:bg-[#8A3DA8]/5 transition-colors group">
                      <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-white via-[#FAF7FD] to-[#F5EEFB] border border-[#502D6D]/15 shadow-sm p-1.5 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-300">
                        <div className="relative w-full h-full">
                          <Image
                            src="/images/contact/icon-clock-3d.png"
                            alt="Working Hours 3D Icon"
                            fill
                            sizes="48px"
                            className="object-contain drop-shadow-[0_4px_8px_rgba(80,45,109,0.22)]"
                          />
                        </div>
                      </div>
                      <div>
                        <span className="font-bold text-[#151515] block">
                          Working Hours
                        </span>
                        <span className="text-xs sm:text-sm">{COMPANY_INFO.workingHours}</span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Action Button with Brand / WhatsApp Styling */}
                  <div className="pt-4 border-t border-[#E2E4E9]">
                    <a
                      href={COMPANY_INFO.whatsappCommunityLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs font-bold hover:shadow-lg hover:shadow-[#25D366]/25 hover:-translate-y-0.5 active:scale-[0.99] transition-all shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span>Join WhatsApp Community</span>
                    </a>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Official Google Maps Location Card matching pepsoftwares.com/contact-us/ */}
              <RevealOnScroll delay={0.25}>
                <div className="relative overflow-hidden p-6 sm:p-7 rounded-3xl bg-white/95 backdrop-blur-xl border border-[#502D6D]/15 shadow-[0_20px_60px_-15px_rgba(80,45,109,0.08)] space-y-4">
                  {/* Brand Gradient Accent Line on Top */}
                  <div className="h-1.5 w-full absolute top-0 left-0 bg-gradient-to-r from-[#502D6D] to-[#FCB116]" />

                  <div className="inline-flex items-center gap-2">
                    <Navigation className="w-3.5 h-3.5 text-[#502D6D]" />
                    <span className="font-syne text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#544643]">
                      LOCATION PIN
                    </span>
                  </div>

                  {/* Real Embedded Google Map from pepsoftwares.com/contact-us/ */}
                  <div className="relative rounded-2xl overflow-hidden border border-[#502D6D]/20 shadow-inner group">
                    <iframe
                      src="https://maps.google.com/maps?q=8PJ8%2BC5%20Surampatty%2C%20Tamil%20Nadu&t=m&z=14&output=embed&iwloc=near"
                      title="8PJ8+C5 Surampatty, Tamil Nadu - PEP Software Head Office"
                      aria-label="8PJ8+C5 Surampatty, Tamil Nadu"
                      className="w-full h-52 sm:h-56 rounded-2xl border-0 filter contrast-[1.02] saturate-[1.05]"
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>

                  {/* Head Office Address & Direct Directions */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-[#E2E4E9]">
                    <div>
                      <span className="text-xs font-extrabold text-[#151515] block">
                        Head Office
                      </span>
                      <span className="text-[11px] text-[#544643] leading-relaxed">
                        Marappa Street 1, Surampatti, Erode - 638009
                      </span>
                    </div>
                    <a
                      href="https://maps.google.com/maps?q=8PJ8%2BC5+Surampatty,+Tamil+Nadu"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#502D6D] hover:text-[#8A3DA8] transition-colors shrink-0"
                    >
                      <span>Get Directions</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#FCB116]" />
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
