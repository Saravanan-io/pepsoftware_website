import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "w-5 h-5 shrink-0" }: TechIconProps) {
  const norm = name.trim().toLowerCase();

  switch (norm) {
    // ── Node.js ──────────────────────────────────────────────────────────
    case "node.js":
    case "nodejs":
    case "node":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z"
            fill="#339933"
          />
          <path
            d="M12 4.5l6.5 3.75v7.5L12 19.5l-6.5-3.75v-7.5L12 4.5z"
            fill="#5FA04E"
          />
          <path
            d="M10 9v6l5-3-5-3z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // ── Python ───────────────────────────────────────────────────────────
    case "python":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M11.9 2c-3.1 0-5 1.4-5 3.3v2.4h5.2v.7H4.4C2.5 8.4 1 9.9 1 12.3c0 2.4 1.5 3.7 3.4 3.7h1.7v-2.3c0-1.9 1.6-3.4 3.5-3.4h5.2V7.9c0-3-3-5.9-2.9-5.9zm-2.1 1.7c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"
            fill="#3776AB"
          />
          <path
            d="M12.1 22c3.1 0 5-1.4 5-3.3v-2.4h-5.2v-.7h7.7c1.9 0 3.4-1.5 3.4-3.9 0-2.4-1.5-3.7-3.4-3.7h-1.7v2.3c0 1.9-1.6 3.4-3.5 3.4H8.7v2.4c0 3 3 5.9 3.4 5.9zm2.1-1.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
            fill="#FFD43B"
          />
        </svg>
      );

    // ── PostgreSQL ───────────────────────────────────────────────────────
    case "postgresql":
    case "postgres":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3.2c2.4 0 4.4 1.4 5.3 3.5-.8-.5-1.8-.8-2.9-.8-2.4 0-4.3 1.5-5 3.7-.4-1.1-.6-2.3-.6-3.6 0-1.6 1.4-2.8 3.2-2.8zm-5 5.6c.7-1.8 2.3-3 4.2-3 1.3 0 2.5.5 3.4 1.4-1.3.8-2.2 2.1-2.4 3.7h-3.6c-.6 0-1.1-.3-1.6-.7-.2-.4-.2-.9 0-1.4zm7.2 8c-1.4 0-2.6-.7-3.4-1.8.8-.4 1.7-.6 2.6-.6 2.1 0 3.8 1.4 4.3 3.3-.9.7-2.1 1.1-3.5 1.1z"
            fill="#336791"
          />
        </svg>
      );

    // ── AWS ──────────────────────────────────────────────────────────────
    case "aws":
    case "amazon web services":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <text
            x="2"
            y="13"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="9"
            letterSpacing="-0.3px"
            fill="#232F3E"
          >
            AWS
          </text>
          <path
            d="M3 17.5c4 2.2 11 2.2 15 0"
            stroke="#FF9900"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M17.5 16l1.8 1.5-1.5 1.5"
            stroke="#FF9900"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    // ── Docker ───────────────────────────────────────────────────────────
    case "docker":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M2 13.5c.3 4.1 3.8 7.5 8 7.5 5.5 0 9.8-3.9 10.8-9.2.3-.2.9-.6 1.2-1.1-.5-.2-1.2-.2-1.6 0-.3-.5-.8-1-1.4-1.2-.9-.4-2.1-.2-2.8.5-1.1-.7-2.6-.9-3.8-.5-.3-.5-.8-.9-1.4-1-.7-.1-1.4.1-1.9.6V8H7v1.5H5.5V8H4v1.5H2.5V8H1v3.5c.3.7.6 1.4 1 2zM9 9.5h1.5V11H9V9.5zm3 0h1.5V11H12V9.5zm-6 0h1.5V11H6V9.5z"
            fill="#2496ED"
          />
        </svg>
      );

    // ── Redis ────────────────────────────────────────────────────────────
    case "redis":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M21 7.5l-9-5.2-9 5.2v9l9 5.2 9-5.2v-9z"
            fill="#DC382D"
          />
          <path
            d="M12 2.3l9 5.2-9 5.2-9-5.2 9-5.2z"
            fill="#A41E11"
          />
          <circle cx="12" cy="7.5" r="1.5" fill="#FFFFFF" />
          <circle cx="8" cy="12.5" r="1" fill="#FFFFFF" opacity="0.8" />
          <circle cx="16" cy="12.5" r="1" fill="#FFFFFF" opacity="0.8" />
        </svg>
      );

    // ── Next.js ──────────────────────────────────────────────────────────
    case "next.js":
    case "nextjs":
    case "next":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="11" fill="#000000" />
          <path
            d="M8 7v10h2V9.4l6.5 7.6h1.5V7h-2v7.6L9.5 7H8z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // ── React / React Native ─────────────────────────────────────────────
    case "react":
    case "react.js":
    case "react native":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4.2"
            stroke="#61DAFB"
            strokeWidth="1.5"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4.2"
            transform="rotate(60 12 12)"
            stroke="#61DAFB"
            strokeWidth="1.5"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4.2"
            transform="rotate(120 12 12)"
            stroke="#61DAFB"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      );

    // ── TypeScript ───────────────────────────────────────────────────────
    case "typescript":
    case "ts":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M5 8h6v2H9v7H7v-7H5V8zm7.5 4.5c.5-.7 1.3-1.1 2.2-1.1 1.6 0 2.5.9 2.5 2.2 0 1.5-.9 2.1-2.1 2.6l-.6.3c-.6.3-.9.5-.9.9 0 .4.4.7 1 .7.6 0 1.1-.3 1.5-.7l1.1 1.2c-.7.8-1.6 1.2-2.7 1.2-1.8 0-2.8-1-2.8-2.4 0-1.4.9-2.1 2.1-2.6l.6-.3c.5-.2.8-.4.8-.8 0-.4-.3-.6-.8-.6-.5 0-.9.2-1.3.6l-1-1.2z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // ── Tailwind CSS ─────────────────────────────────────────────────────
    case "tailwind css":
    case "tailwind":
    case "tailwindcss":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M6 10.5c1-2 2.5-3 4.5-3 3 0 3.75 3 5.25 3 1.2 0 2.25-.9 3-2.5-.9 2-2.4 3-4.5 3-3 0-3.75-3-5.25-3-1.2 0-2.25.9-3 2.5zm-4 5c1-2 2.5-3 4.5-3 3 0 3.75 3 5.25 3 1.2 0 2.25-.9 3-2.5-.9 2-2.4 3-4.5 3-3 0-3.75-3-5.25-3-1.2 0-2.25.9-3 2.5z"
            fill="#06B6D4"
          />
        </svg>
      );

    // ── WordPress ────────────────────────────────────────────────────────
    case "wordpress":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" fill="#21759B" />
          <path
            d="M3.5 12c0 2.8 1.3 5.3 3.3 6.9L3.7 9.8c-.1.7-.2 1.4-.2 2.2zm13.7-.8c0-1.2-.4-2-1-2.8-.7-.8-1.4-1.4-1.4-2.2 0-.9.7-1.7 1.6-1.7h.2c-1.3-1-3-1.6-4.9-1.6-2.6 0-4.9 1.1-6.5 2.9l5.1 14.1c.1 0 .2-.1.3-.2l3.4-9.9c.7-1.9 1.2-3.3 1.2-4.5zm-5.7 3.3l-2.6 7.6c1 .4 2.1.6 3.2.6.9 0 1.7-.1 2.5-.4l-3.1-7.8zm8-4.5c0-.7 0-1.3-.1-1.9-.3 2.1-1.3 4.8-2.6 8.3l2.4 6.7c2.1-1.7 3.4-4.2 3.4-7.1 0-2.5-1.2-4.8-3.1-6z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // ── Shopify ──────────────────────────────────────────────────────────
    case "shopify":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M19.5 6.5l-2.2-1.3-2.8-1.7c-.2-.1-.5 0-.6.2l-1 2.4-2.4-.7c-.3-.1-.6.1-.7.4L7 11.2l-.7-.2c-.3-.1-.6.1-.7.4L3.2 20c-.1.3.1.6.4.7l13.5 4c.1 0 .2 0 .3-.1l5.5-3.3c.2-.1.3-.4.3-.6l-3.7-14.2zm-6.2-1.8l1.6 1-1 2.4-1.8-.5 1.2-2.9z"
            fill="#95BF47"
          />
          <path
            d="M13.3 4.7l1.6 1-1 2.4-1.8-.5 1.2-2.9zm-2.8 8.1c-.2.1-.4 0-.5-.2l-1.3-3.1 1.9.6-.1 2.7zm4.3 1.9c-.8.8-2 1.3-3.3 1.3-.7 0-1.4-.2-2-.5l.4-1.6c.4.2.9.4 1.5.4.8 0 1.5-.3 2-.8.5-.5.7-1.2.7-1.9 0-1.1-.7-1.8-1.8-2.3l-.7-.3c-1.3-.6-2.1-1.4-2.1-2.8 0-1.1.4-2.1 1.3-2.8.8-.7 1.9-1.1 3-1.1.7 0 1.3.1 1.9.4l-.4 1.6c-.4-.2-.9-.3-1.4-.3-.7 0-1.3.2-1.8.6-.4.4-.7 1-.7 1.6 0 .9.6 1.5 1.7 2l.7.3c1.5.7 2.3 1.6 2.3 3.1 0 1.2-.4 2.1-1.3 2.7z"
            fill="#5E8E3E"
          />
        </svg>
      );

    // ── Swift ────────────────────────────────────────────────────────────
    case "swift":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M21.5 15.8c-.8 2-2.6 3.9-4.8 5.1 4.5-3.6 4.6-9.1 1.6-13.6 1.4 2.2 1.9 4.8 1.4 7.2-.5-1.5-1.4-2.8-2.6-3.8-3.3-2.7-7.8-3.4-12.4-1.7 4.2-.6 8.7.4 11.5 3.3.4.4.8.9 1.1 1.4-1.8-.9-3.9-1.2-5.9-.9-4.1.7-7.6 3.4-9.5 7.1 2.4-1.7 5.2-2.6 8.2-2.4 2.3.1 4.5 1 6.3 2.4-3.1.6-6.4 0-9-1.7 3.5 2.8 8.1 3.8 12.5 2.5 1-.3 1.9-.8 2.7-1.4l-.1-.5z"
            fill="#FA7343"
          />
        </svg>
      );

    // ── Kotlin ───────────────────────────────────────────────────────────
    case "kotlin":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <defs>
            <linearGradient id="kt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C757BC" />
              <stop offset="50%" stopColor="#7F52FF" />
              <stop offset="100%" stopColor="#E24462" />
            </linearGradient>
          </defs>
          <path d="M22 2H2v20h20L12 12l10-10z" fill="url(#kt-grad)" />
        </svg>
      );

    // ── Flutter ──────────────────────────────────────────────────────────
    case "flutter":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M14.2 2.5L4 12.7l3.6 3.6L21.4 2.5h-7.2z" fill="#02569B" />
          <path d="M14.2 13.9L8.4 19.7l3.6 3.6L21.4 14h-7.2z" fill="#0175C2" />
          <path d="M11.6 16.5l2.6 2.6-2.6 2.6-2.6-2.6 2.6-2.6z" fill="#29B6F6" />
        </svg>
      );

    // ── Firebase ─────────────────────────────────────────────────────────
    case "firebase":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M4.5 18.2l2.6-13.8c.1-.4.6-.5.8-.2l3.4 5.9-6.8 8.1zm15-2.2l-2.4-11.7c-.1-.4-.6-.5-.8-.1l-11.8 14 7.6 4.3c.7.4 1.5.4 2.2 0l5.2-6.5z"
            fill="#FFA000"
          />
          <path
            d="M12.8 11.2l-2.2-4.1c-.2-.4-.8-.4-1 0L4.5 18.2l8.3-7z"
            fill="#F57C00"
          />
          <path
            d="M19.5 16l-2.4-11.7c-.1-.4-.6-.5-.8-.1L4.5 18.2l7.6 4.3c.7.4 1.5.4 2.2 0L19.5 16z"
            fill="#FFCA28"
          />
        </svg>
      );

    // ── App Store Connect / Apple ─────────────────────────────────────────
    case "app store connect":
    case "apple":
    case "ios":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M18.7 17.5c-.5 1.1-1.1 2.2-2 3.1-.9.9-1.8 1.4-2.8 1.4-.7 0-1.6-.3-2.6-.7-.9-.4-1.8-.7-2.6-.7-.8 0-1.7.3-2.6.7-.9.4-1.8.7-2.5.7-1 0-2-.5-2.9-1.4-1.1-1.1-2-2.7-2.6-4.5-.6-1.8-.9-3.6-.9-5.3 0-2.3.7-4.1 2.1-5.4 1.4-1.3 3-2 5-2 .9 0 1.9.3 2.9.8.9.5 1.6.8 2 .8.4 0 1.1-.3 2.1-.8 1-.5 1.9-.8 2.8-.7 1.6.1 2.9.8 3.9 2-1.4.9-2.1 2.1-2.1 3.6 0 1.2.5 2.3 1.4 3.1.9.8 2 1.3 3.3 1.4-.4 1.3-1 2.5-1.6 3.6zm-4.3-13.8c0-.9.3-1.8 1-2.6.7-.8 1.5-1.3 2.5-1.5.1.4.1.7.1 1.1 0 .9-.3 1.8-1 2.6-.7.8-1.5 1.3-2.5 1.5-.1-.4-.1-.7-.1-1.1z"
            fill="#151515"
          />
        </svg>
      );

    // ── Google Analytics 4 ───────────────────────────────────────────────
    case "google analytics 4":
    case "google analytics":
    case "ga4":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M19 4h2v16h-2V4zm-7 6h2v10h-2V10zM5 15h2v5H5v-5z" fill="#F9AB00" />
          <circle cx="6" cy="18" r="3" fill="#E37400" />
        </svg>
      );

    // ── Meta Ads ─────────────────────────────────────────────────────────
    case "meta ads":
    case "meta":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M17.4 6c-1.9 0-3.6 1.1-4.7 2.8-1.1-1.7-2.8-2.8-4.7-2.8C4.4 6 1.5 9 1.5 12.8c0 3.7 2.9 6.8 6.5 6.8 2.2 0 4.1-1.2 5.1-3 1 1.8 2.9 3 5.1 3 3.6 0 6.5-3.1 6.5-6.8 0-3.8-2.9-6.8-6.5-6.8zm-9.4 11.4c-2.4 0-4.3-2.1-4.3-4.6s1.9-4.6 4.3-4.6c1.6 0 3 1 3.7 2.4l.2.4-.2.4c-.7 1.4-2.1 2.4-3.7 2.4zm10.2 0c-1.6 0-3-1-3.7-2.4l-.2-.4.2-.4c.7-1.4 2.1-2.4 3.7-2.4 2.4 0 4.3 2.1 4.3 4.6s-1.9 4.6-4.3 4.6z"
            fill="#0668E1"
          />
        </svg>
      );

    // ── Google Search Console ─────────────────────────────────────────────
    case "google search console":
    case "gsc":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" fill="#4285F4" />
          <path
            d="M12 6v6l4.5 4.5"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"
            stroke="#34A853"
            strokeWidth="1.5"
          />
        </svg>
      );

    // ── SEMrush ──────────────────────────────────────────────────────────
    case "semrush":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" fill="#FF642D" />
          <path
            d="M16 11.5c-1-1.8-3.5-2.8-5-1.5l3.5 1.5c-1.5 2-4 1.5-5.5 0l-.5 2c2 2 6 2.5 8.5-.5l-1-1.5z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // ── HubSpot ──────────────────────────────────────────────────────────
    case "hubspot":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M17.5 10V7.5a2 2 0 1 0-1.5 0V10a5 5 0 0 0-2.8 1.4l-4.4-3.4a2 2 0 1 0-1 1.2l4.3 3.3a5 5 0 1 0 5.4-2.5zm-5.5 6.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
            fill="#FF7A59"
          />
        </svg>
      );

    // ── Default Fallback ─────────────────────────────────────────────────
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="9" stroke="#FCB116" strokeWidth="2" />
          <path d="M8 12l3 3 5-5" stroke="#FCB116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}
