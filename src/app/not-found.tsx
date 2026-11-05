import Link from "next/link";
import { ArrowLeft, ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center bg-[#F7F8F8] px-4 py-24 select-none">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-[#502D6D]/10 text-[#502D6D] mx-auto">
          <Compass className="w-8 h-8 text-[#502D6D]" />
        </div>

        <div className="space-y-2">
          <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] text-[#502D6D]">
            ERROR 404
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-[#544643] max-w-md mx-auto leading-relaxed">
            The page you are looking for may have been moved, renamed, or is
            temporarily unavailable. Explore our services or return to our homepage.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#502D6D] hover:bg-[#3D2253] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#502D6D]/20 transition-all hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4 text-[#FCB116]" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#151515] border border-slate-200 text-xs sm:text-sm font-bold transition-all hover:-translate-y-0.5"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 text-[#502D6D]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

