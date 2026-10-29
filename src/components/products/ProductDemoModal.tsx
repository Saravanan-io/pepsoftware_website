"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import {
  X,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Calendar,
} from "lucide-react";

const demoSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  organization: z.string().min(2, "Please enter your organization or company name"),
  serviceType: z.string().min(1, "Please select the product of interest"),
  message: z.string().min(10, "Please provide brief requirements (at least 10 characters)"),
});

type DemoFormData = z.infer<typeof demoSchema>;

interface ProductDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export function ProductDemoModal({
  isOpen,
  onClose,
  productName,
}: ProductDemoModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      serviceType: `Demo: ${productName}`,
      message: `I would like to schedule a product demonstration for the ${productName} to explore its features and discuss our organization's requirements.`,
    },
  });

  useEffect(() => {
    if (productName) {
      setValue("serviceType", `Demo: ${productName}`);
      setValue(
        "message",
        `I would like to schedule a product demonstration for the ${productName} to explore its features and discuss our organization's requirements.`
      );
    }
  }, [productName, setValue]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          serviceType: data.serviceType,
          message: `[Organization: ${data.organization}] ${data.message}`,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit demo request.");
      }

      setIsSubmitted(true);
      reset();

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-9 shadow-2xl border border-[#502D6D]/20 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Brand Accent Top Line */}
        <div className="h-1.5 w-full absolute top-0 left-0 bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F7F8F8] hover:bg-[#EFF0EF] text-[#544643] hover:text-[#151515] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-[#502D6D]/10 text-[#502D6D] border border-[#502D6D]/20 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-[#502D6D]" />
            </div>
            <h3 className="text-2xl font-black text-[#151515] tracking-tight">
              Demo Request Received!
            </h3>
            <p className="text-sm text-[#544643] leading-relaxed max-w-md mx-auto">
              Thank you for requesting a demonstration of the <strong>{productName}</strong>. Our product specialist will contact you within 24 business hours to schedule a session.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="mt-4 px-8 py-3.5 rounded-full bg-[#502D6D] hover:bg-[#3D2253] text-white font-bold text-sm shadow-md hover:shadow-xl hover:shadow-[#502D6D]/20 transition-all cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6 pb-4 border-b border-[#E2E4E9]">
              <div className="inline-flex items-center gap-2 mb-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#FCB116]" />
                <span className="font-syne text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#502D6D]">
                  REQUEST A DEMO
                </span>
              </div>
              <h3 className="text-2xl font-black text-[#151515] tracking-tight">
                {productName}
              </h3>
              <p className="text-xs sm:text-sm text-[#544643] mt-1">
                Schedule a guided walkthrough with our engineering leads to review available workflows and discuss your requirements.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-[#FCB116]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    {...register("fullName")}
                    className="w-full px-3.5 py-3 rounded-xl bg-[#F8F9FA] border border-[#E2E4E9] text-xs sm:text-sm text-[#151515] outline-none focus:bg-white focus:border-[#502D6D] transition-colors"
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-1.5">
                    Work Email <span className="text-[#FCB116]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    {...register("email")}
                    className="w-full px-3.5 py-3 rounded-xl bg-[#F8F9FA] border border-[#E2E4E9] text-xs sm:text-sm text-[#151515] outline-none focus:bg-white focus:border-[#502D6D] transition-colors"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-[#FCB116]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    {...register("phone")}
                    className="w-full px-3.5 py-3 rounded-xl bg-[#F8F9FA] border border-[#E2E4E9] text-xs sm:text-sm text-[#151515] outline-none focus:bg-white focus:border-[#502D6D] transition-colors"
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-1.5">
                    Organization / Company <span className="text-[#FCB116]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Enterprises"
                    {...register("organization")}
                    className="w-full px-3.5 py-3 rounded-xl bg-[#F8F9FA] border border-[#E2E4E9] text-xs sm:text-sm text-[#151515] outline-none focus:bg-white focus:border-[#502D6D] transition-colors"
                  />
                  {errors.organization && (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.organization.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-1.5">
                  Product of Interest
                </label>
                <input
                  type="text"
                  readOnly
                  {...register("serviceType")}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 border border-[#E2E4E9] text-xs text-[#502D6D] font-bold cursor-not-allowed select-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#151515] uppercase tracking-wider mb-1.5">
                  Brief Requirements / Message <span className="text-[#FCB116]">*</span>
                </label>
                <textarea
                  rows={3}
                  {...register("message")}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F9FA] border border-[#E2E4E9] text-xs sm:text-sm text-[#151515] outline-none focus:bg-white focus:border-[#502D6D] transition-colors resize-y"
                />
                {errors.message && (
                  <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#502D6D] hover:bg-[#3D2253] text-white font-bold text-sm hover:shadow-xl hover:shadow-[#502D6D]/25 active:scale-[0.99] disabled:opacity-70 transition-all cursor-pointer shadow-md"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#FCB116]" />
                    <span>Scheduling Demo...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Demo Request</span>
                    <Send className="w-4 h-4 text-[#FCB116]" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#544643] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#502D6D]" />
                <span>Strict NDA & IP Confidentiality Guaranteed.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
