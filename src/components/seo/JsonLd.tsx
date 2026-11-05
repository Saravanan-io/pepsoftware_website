import React from "react";
import { SEO_CONFIG } from "@/lib/seo-config";

interface JsonLdProps {
  schema: Record<string, unknown> | Array<Record<string, unknown>>;
}

/**
 * Renders a script tag with application/ld+json.
 * Safe for server components.
 */
export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

/**
 * Root Organization Schema
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "Corporation"],
    "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    name: SEO_CONFIG.siteName,
    legalName: SEO_CONFIG.legalName,
    url: SEO_CONFIG.siteUrl,
    logo: {
      "@type": "ImageObject",
      "@id": `${SEO_CONFIG.siteUrl}/#logo`,
      url: SEO_CONFIG.logoUrl,
      caption: `${SEO_CONFIG.siteName} Logo`,
    },
    image: SEO_CONFIG.defaultOgImage,
    description: SEO_CONFIG.shortDescription,
    foundingDate: SEO_CONFIG.foundingYear,
    founder: {
      "@type": "Person",
      name: SEO_CONFIG.founder.name,
      jobTitle: SEO_CONFIG.founder.jobTitle,
    },
    sameAs: [
      SEO_CONFIG.socials.linkedin,
      SEO_CONFIG.socials.instagram,
      SEO_CONFIG.socials.facebook,
      SEO_CONFIG.socials.youtube,
      SEO_CONFIG.socials.github,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SEO_CONFIG.contact.phone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Tamil"],
      },
    ],
    knowsAbout: SEO_CONFIG.regionalEntities.knowsAbout,
    alternateName: SEO_CONFIG.regionalEntities.alternateNamesTamil,
  };
}

/**
 * Root LocalBusiness Schema (Erode Headquarters)
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${SEO_CONFIG.siteUrl}/#localbusiness`,
    name: SEO_CONFIG.headquarters.name,
    parentOrganization: {
      "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    },
    url: SEO_CONFIG.siteUrl,
    telephone: SEO_CONFIG.contact.phone,
    email: SEO_CONFIG.contact.email,
    priceRange: SEO_CONFIG.headquarters.priceRange,
    image: SEO_CONFIG.defaultOgImage,
    hasMap: SEO_CONFIG.headquarters.googleMapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: SEO_CONFIG.headquarters.streetAddress,
      addressLocality: SEO_CONFIG.headquarters.locality,
      addressRegion: SEO_CONFIG.headquarters.region,
      postalCode: SEO_CONFIG.headquarters.postalCode,
      addressCountry: SEO_CONFIG.headquarters.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SEO_CONFIG.headquarters.geo.latitude,
      longitude: SEO_CONFIG.headquarters.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    areaServed: SEO_CONFIG.regionalEntities.serviceArea,
  };
}

/**
 * WebSite Schema with Search & Sitelinks
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SEO_CONFIG.siteUrl}/#website`,
    url: SEO_CONFIG.siteUrl,
    name: SEO_CONFIG.siteName,
    description: SEO_CONFIG.shortDescription,
    publisher: {
      "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    },
    inLanguage: "en",
    alternateName: SEO_CONFIG.regionalEntities.alternateNamesTamil,
  };
}

/**
 * Service Schema Generator
 */
export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    url: service.url,
    provider: {
      "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    },
    areaServed: SEO_CONFIG.regionalEntities.serviceArea,
  };
}

/**
 * SoftwareApplication Schema Generator (for Product Pages)
 */
export function getSoftwareApplicationSchema(product: {
  name: string;
  description: string;
  url: string;
  category: string;
  features?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: product.category,
    operatingSystem: "Web, Android, iOS, Cloud",
    description: product.description,
    url: product.url,
    author: {
      "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": `${SEO_CONFIG.siteUrl}/#organization`,
      },
    },
    featureList: product.features?.join(", "),
  };
}

/**
 * FAQPage Schema Generator
 */
export function getFAQSchema(faqs: { q: string; a: string }[]) {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/**
 * BreadcrumbList Schema Generator
 */
export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

