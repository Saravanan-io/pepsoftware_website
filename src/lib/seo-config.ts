/**
 * Central SEO, Entity & LocalBusiness Configuration for PEP Software
 * Official Production Domain: https://pepsoftwares.com
 * Single source of truth for metadata, JSON-LD schemas, and business citations.
 */

export const SEO_CONFIG = {
  domain: "https://pepsoftwares.com",
  siteUrl: "https://pepsoftwares.com",
  siteName: "PEP Software",
  legalName: "Pep Softwares Pvt. Ltd.",
  foundingYear: "2020",
  founder: {
    name: "Shri Gowtham",
    role: "CEO & Founder",
    jobTitle: "Chief Executive Officer",
  },
  tagline: "Digital Experiences, Engineered for Growth",
  shortDescription:
    "PEP Software is a top software development company in Erode & Coimbatore, Tamil Nadu. We engineer custom enterprise software, high-speed web applications, and iOS/Android mobile apps.",
  defaultOgImage: "https://pepsoftwares.com/hero-brain-showcase.png",
  logoUrl: "https://pepsoftwares.com/pep-logo.png",
  iconUrl: "https://pepsoftwares.com/pep-icon.png",

  // Verified Physical Office & Local SEO Information
  headquarters: {
    name: "PEP Software - Head Office",
    streetAddress: "47, Marappa 1st Street, Main Rd, Surampatty",
    locality: "Erode",
    region: "Tamil Nadu",
    postalCode: "638009",
    country: "IN",
    countryName: "India",
    fullAddress:
      "47, Marappa 1st Street, Main Rd, Surampatty, Erode, Tamil Nadu 638009",
    geo: {
      latitude: 11.3285,
      longitude: 77.7188,
    },
    plusCode: "8PJ8+C5 Surampatty, Tamil Nadu",
    googleMapsUrl: "https://maps.google.com/maps?q=8PJ8%2BC5+Surampatty,+Tamil+Nadu",
    openingHours: ["Mo-Sa 09:30-18:30"],
    priceRange: "$$",
  },

  // Regional Physical & Remote Presence
  regionalPresence: {
    coimbatore: {
      city: "Coimbatore",
      state: "Tamil Nadu",
      country: "India",
      status: "Physical Office",
      description: "Coimbatore Branch Office, Tamil Nadu",
    },
    salem: {
      city: "Salem",
      state: "Tamil Nadu",
      country: "India",
      status: "Remote Service Delivery Hub",
      description: "Remote Software Services in Salem, Tamil Nadu",
    },
    tamilNadu: {
      region: "Tamil Nadu",
      country: "India",
      status: "Statewide Technology Solutions",
    },
  },

  // Contact Channels
  contact: {
    phone: "+91 98841 41911",
    phoneRaw: "+919884141911",
    email: "contact@pepsoftwares.com",
    emailSupport: "info@pepsoftwares.com",
    whatsappNumber: "6381010282",
    whatsappDisplay: "+91 6381010282",
    whatsappLink: "https://wa.me/916381010282",
    workingHoursDisplay: "Mon - Sat: 9:30 AM - 6:30 PM IST",
  },

  // Social Links for Schema sameAs & External Validation
  socials: {
    linkedin: "https://linkedin.com/company/pepsoftwares",
    instagram: "https://www.instagram.com/pep_software/",
    facebook: "https://www.facebook.com/pepsoftware",
    youtube: "https://www.youtube.com/@pep_software",
    github: "https://github.com/pepsoftwares",
  },

  // Tamil & Regional Search Transliterations
  regionalEntities: {
    alternateNamesTamil: [
      "பெப் சாப்ட்வேர்",
      "பெப் சாஃப்ட்வேர்",
      "Pep Software Erode",
    ],
    knowsAbout: [
      "Software Development",
      "Custom Software Engineering",
      "Web Application Development",
      "Mobile App Development",
      "Flutter Development",
      "Next.js Development",
      "Workforce & Attendance Management Systems",
      "Business Club Management Software",
      "Matrimony Application Development",
      "மென்பொருள் உருவாக்கம் (Software Development)",
      "வலைத்தள வடிவமைப்பு (Website Design)",
      "மொபைல் ஆப் உருவாக்கம் (Mobile App Development)",
    ],
    serviceArea: [
      {
        "@type": "City",
        name: "Erode",
      },
      {
        "@type": "City",
        name: "Coimbatore",
      },
      {
        "@type": "City",
        name: "Salem",
      },
      {
        "@type": "AdministrativeArea",
        name: "Tamil Nadu",
      },
    ],
  },
} as const;

