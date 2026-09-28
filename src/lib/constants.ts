import { NavItem } from "@/types";

export const COMPANY_INFO = {
  name: "PEP Software",
  legalName: "Pep Softwares Pvt. Ltd.",
  tagline: "Digital Experiences, Engineered for Growth",
  subTagline: "Inspire Through Creative Design",
  description:
    "At Pep Softwares, we bring your ideas to life with boundless creativity. Our talented team of designers, artists, and professionals collaborate to deliver captivating visual designs and cutting-edge software solutions.",
  phone: "+91 638-1010-282",
  phoneRaw: "+916381010282",
  email: "contact@pepsoftwares.com",
  emailSupport: "info@pepsoftwares.com",
  address: "Perundurai Road, opposite Alayamani Mahal, Nalliyampalayam, Thindal, Erode, TN-638012",
  city: "Erode",
  state: "Tamil Nadu",
  country: "India",
  pincode: "638012",
  whatsappCommunityLink: "https://chat.whatsapp.com/pepsoftware-community",
  workingHours: "Mon - Sat: 9:30 AM - 6:30 PM IST",
  socials: {
    linkedin: "https://linkedin.com/company/pepsoftwares",
    instagram: "https://instagram.com/pepsoftwares",
    facebook: "https://facebook.com/pepsoftwares",
    youtube: "https://youtube.com/@pepsoftwares",
    github: "https://github.com/pepsoftwares",
  },
  stats: [
    { value: "20+", label: "Years Established / Industry Experience" },
    { value: "150+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Global Clients" },
    { value: "30+", label: "Expert Designers & Engineers" },
    { value: "4.9", label: "Client Satisfaction Rating", isRating: true },
    { value: "100%", label: "Client Focused Commitment" },
  ],
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Website Design & Development",
        href: "/services/website-design-development",
        description: "Stunning websites built with modern web technologies",
        icon: "Globe",
      },
      {
        label: "UI/UX Design",
        href: "/services/ui-ux-design",
        description: "User-centered design that enhances engagement and conversion",
        icon: "Layout",
      },
      {
        label: "Mobile App Development",
        href: "/services/mobile-app-design-development",
        description: "Cross-platform iOS and Android apps with native performance",
        icon: "Smartphone",
      },
      {
        label: "Graphic Design & AR/VR",
        href: "/services/graphic-design",
        description: "Captivating visual identities and immersive digital reality",
        icon: "Palette",
      },
    ],
  },
  { label: "Portfolio", href: "/work" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];
