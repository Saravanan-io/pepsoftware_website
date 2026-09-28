export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
    icon?: string;
  }[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  badge: string;
  features: string[];
  deliverables: string[];
  subServices?: {
    title: string;
    description: string;
  }[];
  tools?: string[];
  whyChooseUs?: {
    title: string;
    description: string;
  }[];
  timeline: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs?: {
    q: string;
    a: string;
  }[];
}

export interface CourseItem {
  id: string;
  slug: string;
  title: string;
  duration: string;
  days: number;
  hasInternship: boolean;
  internshipDays?: number;
  level: string;
  rating: number;
  reviewsCount: number;
  tagline: string;
  description: string;
  highlights: string[];
  tools: string[];
  modules: {
    week: string;
    title: string;
    topics: string[];
  }[];
  careerRoles: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Websites" | "Mobile Apps" | "UI/UX" | "AR/VR";
  client: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    label: string;
  }[];
  technologies: string[];
  image: string;
  secondaryImage?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  projectType: string;
}

export interface ClientItem {
  name: string;
  logo: string;
  industry: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  budget?: string;
  message: string;
}
