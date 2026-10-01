"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select an area of interest"),
  budget: z.string().optional(),
  message: z.string().min(10, "Please provide more details (at least 10 characters)"),
});

type FormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      serviceType: "Website Design & Development",
      budget: "$5,000 - $15,000 / Growth",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit request.");
      }

      // Success
      setIsSubmitted(true);
      reset();

      // Trigger celebratory confetti in brand palette
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#502D6D", "#FCB116", "#8A3DA8", "#151515"],
      });
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="relative overflow-hidden p-8 sm:p-12 rounded-3xl bg-white/95 backdrop-blur-xl border border-[#502D6D]/15 text-center shadow-[0_20px_60px_-15px_rgba(80,45,109,0.12)] space-y-5">
        <div className="h-1.5 w-full absolute top-0 left-0 bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116]" />
        
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#502D6D]/10 to-[#FCB116]/20 text-[#502D6D] border border-[#502D6D]/20 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-8 h-8 text-[#502D6D]" />
        </div>
        <h3 className="text-2xl font-extrabold text-[#151515] tracking-tight">
          Project Inquiry Received!
        </h3>
        <p className="text-sm text-[#544643] max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to PEP Software. Our engineering and design leads will review your inquiry and get back to you within 24 business hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 px-7 py-3 rounded-full bg-gradient-to-r from-[#502D6D] to-[#68358F] text-white font-bold text-xs hover:shadow-lg hover:shadow-[#502D6D]/25 transition-all cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative overflow-hidden p-8 sm:p-11 rounded-3xl bg-white/95 backdrop-blur-xl border border-[#502D6D]/15 shadow-[0_20px_60px_-15px_rgba(80,45,109,0.08)] space-y-6"
    >
      {/* Brand Gradient Accent Line on Top */}
      <div className="h-1.5 w-full absolute top-0 left-0 bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116]" />

      {/* Ambient Inner Corner Glow */}
      <div className="absolute -top-16 -right-16 w-44 h-44 bg-[radial-gradient(circle,rgba(252,177,22,0.12)_0%,transparent_70%)] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="border-b border-[#E2E4E9] pb-5 relative">
        <div className="inline-flex items-center gap-2 mb-1.5">
          <span className="w-3.5 h-[2px] rounded-full bg-gradient-to-r from-[#502D6D] to-[#FCB116]" />
          <span className="font-syne text-[11px] font-extrabold uppercase tracking-[0.22em] bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent">
            DIRECT INQUIRY DESK
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#151515] tracking-tight">
          Start a Project
        </h3>
        <p className="text-sm text-[#544643] mt-1.5">
          Tell us about your product vision, timeline, and goals.
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-2">
            Full Name <span className="text-[#FCB116]">*</span>
          </label>
          <input
            type="text"
            placeholder="John Doe"
            {...register("fullName")}
            className="w-full px-4 py-3.5 rounded-xl bg-[#F8F9FA] hover:bg-[#F3F4F6] border border-[#E2E4E9] text-sm text-[#151515] placeholder:text-[#544643]/50 outline-none focus:bg-white focus:border-[#502D6D] focus:ring-4 focus:ring-[#502D6D]/10 transition-all duration-200 shadow-2xs"
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-1 font-medium">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-2">
            Work Email <span className="text-[#FCB116]">*</span>
          </label>
          <input
            type="email"
            placeholder="john@company.com"
            {...register("email")}
            className="w-full px-4 py-3.5 rounded-xl bg-[#F8F9FA] hover:bg-[#F3F4F6] border border-[#E2E4E9] text-sm text-[#151515] placeholder:text-[#544643]/50 outline-none focus:bg-white focus:border-[#502D6D] focus:ring-4 focus:ring-[#502D6D]/10 transition-all duration-200 shadow-2xs"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Phone & Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-2">
            Phone / WhatsApp <span className="text-[#FCB116]">*</span>
          </label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            {...register("phone")}
            className="w-full px-4 py-3.5 rounded-xl bg-[#F8F9FA] hover:bg-[#F3F4F6] border border-[#E2E4E9] text-sm text-[#151515] placeholder:text-[#544643]/50 outline-none focus:bg-white focus:border-[#502D6D] focus:ring-4 focus:ring-[#502D6D]/10 transition-all duration-200 shadow-2xs"
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1 font-medium">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-2">
            Service Required <span className="text-[#FCB116]">*</span>
          </label>
          <select
            {...register("serviceType")}
            className="w-full px-4 py-3.5 rounded-xl bg-[#F8F9FA] hover:bg-[#F3F4F6] border border-[#E2E4E9] text-sm text-[#151515] outline-none focus:bg-white focus:border-[#502D6D] focus:ring-4 focus:ring-[#502D6D]/10 transition-all duration-200 cursor-pointer shadow-2xs"
          >
            {SERVICES_DATA.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Design Training Academy">Design Training Academy</option>
            <option value="Other Consultation">Other Custom Consultation</option>
          </select>
          {errors.serviceType && (
            <p className="text-xs text-red-500 mt-1 font-medium">
              {errors.serviceType.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Budget Range */}
      <div>
        <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-2">
          Estimated Budget (Optional)
        </label>
        <select
          {...register("budget")}
          className="w-full px-4 py-3.5 rounded-xl bg-[#F8F9FA] hover:bg-[#F3F4F6] border border-[#E2E4E9] text-sm text-[#151515] outline-none focus:bg-white focus:border-[#502D6D] focus:ring-4 focus:ring-[#502D6D]/10 transition-all duration-200 cursor-pointer shadow-2xs"
        >
          <option value="< $5k">&lt; $5,000 / Starter</option>
          <option value="$5k - $15k">$5,000 - $15,000 / Growth</option>
          <option value="$15k - $50k">$15,000 - $50,000 / Scale</option>
          <option value="$50k+">$50,000+ / Enterprise</option>
        </select>
      </div>

      {/* Row 4: Message */}
      <div>
        <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-2">
          Project Brief / Message <span className="text-[#FCB116]">*</span>
        </label>
        <textarea
          rows={4}
          placeholder="Briefly describe your project, target audience, timeline, or key objectives..."
          {...register("message")}
          className="w-full px-4 py-3.5 rounded-xl bg-[#F8F9FA] hover:bg-[#F3F4F6] border border-[#E2E4E9] text-sm text-[#151515] placeholder:text-[#544643]/50 outline-none focus:bg-white focus:border-[#502D6D] focus:ring-4 focus:ring-[#502D6D]/10 transition-all duration-200 resize-y shadow-2xs"
        />
        {errors.message && (
          <p className="text-xs text-red-500 mt-1 font-medium">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button with Signature Gradient & Hover Effects */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-gradient-to-r from-[#502D6D] via-[#68358F] to-[#502D6D] text-white font-bold text-sm sm:text-base hover:shadow-xl hover:shadow-[#502D6D]/25 hover:-translate-y-0.5 active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none transition-all duration-200 cursor-pointer shadow-md group"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin text-[#FCB116]" />
            <span>Sending Inquiry...</span>
          </>
        ) : (
          <>
            <span>Submit Project Inquiry</span>
            <Send className="w-4 h-4 ml-1 text-[#FCB116] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
          </>
        )}
      </button>

      {/* Security Reassurance */}
      <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-[#544643]">
        <ShieldCheck className="w-3.5 h-3.5 text-[#502D6D]" />
        <span>Strict confidentiality guaranteed. We protect your IP with mutual NDA.</span>
      </div>
    </form>
  );
}
