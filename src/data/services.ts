import { ServiceItem } from "@/types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design Services",
    tagline: "Beautiful Interfaces. Meaningful Experiences.",
    badge: "User Centered",
    iconName: "Layout",
    shortDescription:
      "Pep Software provides expert UI UX design services that help businesses build beautiful, user-friendly digital products. As a leading UI UX design company, we focus on both how your product looks and how it feels to use.",
    fullDescription:
      "UI (User Interface) covers visuals like layout, colors, typography, and buttons—the elements users interact with. UX (User Experience) ensures the product is easy to use, with smooth navigation and logical flow that keeps users engaged. Together, UI and UX shape the overall experience—good UI grabs attention, great UX keeps users coming back.",
    features: [
      "User Research & Journey Mapping",
      "Wireframing & Interactive Prototyping",
      "Atomic Design Systems & Component Libraries",
      "Usability Testing & Conversion Rate Optimization",
      "Micro-interactions & Motion UX Design",
      "Accessibility (WCAG 2.1 AA) Compliance",
    ],
    deliverables: [
      "Layered Figma Files & Design Documentation",
      "Interactive High-Fidelity Clickable Prototypes",
      "Comprehensive Design Systems & Component Libraries",
      "Developer-Ready Asset Packages with Tokens",
    ],
    subServices: [
      {
        title: "User Research & Insights",
        description:
          "We explore user behavior, pain points, and goals through surveys, interviews, and competitor analysis to design meaningful experiences.",
      },
      {
        title: "UX Strategy & Wireframing",
        description:
          "From journey mapping to wireframing, we build intuitive flows and logical structures that form the backbone of usable products.",
      },
      {
        title: "UI Design & Visual Identity",
        description:
          "We design clean, responsive, and visually stunning interfaces that reflect your brand with pixel-perfect precision.",
      },
      {
        title: "Prototyping & Interaction Design",
        description:
          "Interactive prototypes and smooth micro-interactions bring your product to life and offer early user feedback before development.",
      },
      {
        title: "Design Systems",
        description:
          "We develop scalable, reusable design systems to ensure consistent UI patterns across all digital touchpoints.",
      },
      {
        title: "UX Writing & Microcopy",
        description:
          "Clear, concise, and helpful copy that enhances user interactions—from CTAs to form validation messages.",
      },
      {
        title: "Web & App UI/UX",
        description:
          "We design custom UI/UX for mobile apps, web platforms, SaaS tools, and enterprise solutions—focused on flow, performance, and engagement.",
      },
      {
        title: "Developer Handoff & Collaboration",
        description:
          "We deliver developer-friendly design files using Figma, XD, and Photoshop—ensuring smooth, pixel-perfect execution.",
      },
    ],
    timeline: [
      {
        step: "01",
        title: "Empathize",
        description:
          "Understand users deeply through research, user interviews, and behavior analysis to uncover real needs and pain points.",
      },
      {
        step: "02",
        title: "Define",
        description:
          "Craft clear user personas and problem statements to shape focused, user-centric design goals.",
      },
      {
        step: "03",
        title: "Ideate",
        description:
          "Generate innovative UI/UX ideas, user flows, and wireframes by brainstorming creative, solution-driven experiences.",
      },
      {
        step: "04",
        title: "Prototype",
        description:
          "Build interactive design prototypes and UI mockups in Figma to visualize functionality and user interaction early on.",
      },
      {
        step: "05",
        title: "Test",
        description:
          "Validate designs through usability testing and real user feedback to refine UX and boost product performance.",
      },
    ],
    tools: ["Figma", "FigJam", "Balsamiq", "Photoshop", "Miro", "Hotjar", "Maze", "Uizard"],
    whyChooseUs: [
      {
        title: "First Impression Counts",
        description: "A visually polished, modern interface builds immediate credibility and trust with your users.",
      },
      {
        title: "Higher Conversion",
        description: "Intuitive flows and clear call-to-actions eliminate friction and drive higher signups and sales.",
      },
      {
        title: "User Retention",
        description: "Smooth navigation and delightful micro-interactions keep users engaged and returning.",
      },
      {
        title: "Boost Credibility",
        description: "Professional, accessible design establishes your product as an industry authority.",
      },
    ],
    faqs: [
      {
        q: "Can you redesign my existing website or app?",
        a: "Yes. We specialize in modernizing outdated platforms for better usability and performance.",
      },
      {
        q: "Are your designs mobile-optimized?",
        a: "Absolutely. All designs are responsive and tested across devices.",
      },
      {
        q: "What industries do you serve?",
        a: "We serve healthcare, SaaS, finance, logistics, eCommerce, and more.",
      },
      {
        q: "Will you collaborate with our developers?",
        a: "Yes. We provide dev-ready files and support your frontend and backend teams.",
      },
      {
        q: "How long does a typical UI/UX project take?",
        a: "Timelines vary depending on complexity, but most UI/UX design projects take between 2 to 8 weeks. We share a detailed timeline after our initial discovery session.",
      },
      {
        q: "Do you conduct user research as part of your process?",
        a: "Yes, user research is essential to our design process. We use interviews, surveys, analytics, and usability testing to create experiences backed by real user data.",
      },
      {
        q: "What file formats and deliverables will I receive?",
        a: "You will get layered Figma files, design documentation, and design systems. We also provide assets optimized for developers.",
      },
      {
        q: "Can I request changes after the design is completed?",
        a: "Absolutely. We offer a revision window after project completion and can support future design updates or A/B testing as needed.",
      },
    ],
  },
  {
    id: "website-design-development",
    slug: "website-design-development",
    title: "Web Design & Development",
    tagline: "Inspired Design. Intelligent Development.",
    badge: "High Performance",
    iconName: "Code2",
    shortDescription:
      "Web design and development services are the foundation of a powerful online presence. At Pep Software, we offer a seamless blend of creativity and technology to craft websites that are visually appealing, lightning-fast, and search engine optimized.",
    fullDescription:
      "Responsive web design & development that works seamlessly across devices. Design defines how your website looks—its layout, typography, color scheme, and overall feel—while development ensures it functions flawlessly across all devices. We engineer custom web solutions tailored to elevate your business.",
    features: [
      "Custom Next.js & React Web Application Development",
      "Responsive Mobile-First & Cross-Browser Execution",
      "Custom WordPress Development with Flexible CMS",
      "Shopify & WooCommerce E-Commerce Storefronts",
      "High-Impact Single Page Landing Websites",
      "Technical SEO & Core Web Vitals Optimization",
    ],
    deliverables: [
      "Fully Responsive Web Architecture across all devices",
      "Clean, Documented Codebase with Modern Standards",
      "Lighthouse Performance & SEO Score > 95",
      "SSL Certificate & Production Server Deployment",
    ],
    subServices: [
      {
        title: "Custom Website Design",
        description:
          "We create customized website designs that combine the aesthetics of visual branding with the functionality of user-centered interfaces. Every website we craft is tailored to reflect your brand, engage your audience, and support your business goals.",
      },
      {
        title: "Front-end Development",
        description:
          "We develop responsive websites using HTML, CSS, JavaScript, Bootstrap, Next.js, and React JS—delivering fast, pixel-perfect performance across all devices.",
      },
      {
        title: "Custom WordPress Websites",
        description:
          "We design and build custom WordPress websites—combining creative layouts with powerful CMS flexibility so you can manage content effortlessly.",
      },
      {
        title: "One-Page Websites",
        description:
          "Perfect for portfolios, startups, and small businesses—our single page websites are fast, focused, and built for simplicity and impact.",
      },
      {
        title: "E-Commerce Websites",
        description:
          "We build customized, scalable e-commerce websites using Shopify and WooCommerce. From sleek storefront design to secure checkout and mobile optimization, we ensure a smooth shopping experience that drives sales.",
      },
    ],
    timeline: [
      {
        step: "01",
        title: "Requirement Gathering",
        description: "We understand your business goals, target audience, and functional requirements.",
      },
      {
        step: "02",
        title: "UI/UX Design",
        description:
          "We create sitemaps, plan navigation flows, organize content hierarchy, and design wireframes and high-fidelity mockups in Figma.",
      },
      {
        step: "03",
        title: "Development",
        description:
          "Convert designs to clean code with React/Next.js or platforms like WordPress/Elementor, Shopify, and modern web builders.",
      },
      {
        step: "04",
        title: "Testing & QA",
        description:
          "Cross-browser testing, mobile device responsiveness, speed optimization, and technical SEO checks for flawless delivery.",
      },
      {
        step: "05",
        title: "Launch & Support",
        description:
          "Deploy to live server, connect domain and SSL, monitor performance, provide backups, and recommend future improvements.",
      },
    ],
    tools: ["Figma", "Shopify", "WordPress", "GitHub", "VS Code", "Lighthouse", "WooCommerce", "React"],
    whyChooseUs: [
      {
        title: "Tailored Solutions",
        description: "Custom built from the ground up for your specific business goals, audience, and industry.",
      },
      {
        title: "User-Centered Design",
        description: "Beautiful, intuitive layouts that turn visitors into loyal customers.",
      },
      {
        title: "Innovation-Driven Approach",
        description: "Cutting-edge web technologies providing unmatched speed, security, and scalability.",
      },
      {
        title: "Transparent Workflow",
        description: "Clear communication, regular milestone updates, and dependable delivery timelines.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between web design and web development?",
        a: "Web design is about how your website looks and feels, including layout, colors, and user experience. Web development is the coding part that makes the design work properly on browsers.",
      },
      {
        q: "How long does it take to build a website?",
        a: "It depends on complexity. A simple website takes 1 to 2 weeks, while a larger one with custom features may take a few weeks to a couple of months.",
      },
      {
        q: "Will my website be mobile-friendly?",
        a: "Yes, every website we build is fully responsive, meaning it looks and works great on phones, tablets, and desktops.",
      },
      {
        q: "Can I update the website myself after it’s done?",
        a: "Yes. When built with a CMS like WordPress or Shopify, you can easily update text, images, and products without coding knowledge.",
      },
      {
        q: "Will my website show up on Google?",
        a: "Yes, we follow SEO best practices while building your site so it can be indexed and found on Google.",
      },
      {
        q: "Do you offer website maintenance and support?",
        a: "Yes, we offer ongoing maintenance to keep your site updated, secure, and running smoothly even after launch.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Absolutely. We give outdated websites a fresh modern look, improving speed, structure, and conversion rates.",
      },
    ],
  },
  {
    id: "mobile-app-design-development",
    slug: "mobile-app-design-development",
    title: "Mobile App Development",
    tagline: "Design with Purpose. Develop with Precision. Deliver with Impact.",
    badge: "iOS & Android",
    iconName: "Smartphone",
    shortDescription:
      "Transform your ideas into powerful mobile apps. At Pep Software, we craft intuitive, high-performance mobile app development services that engage your audience and drive business growth.",
    fullDescription:
      "Whether it’s Android, iOS, or cross-platform, our apps are built for speed, security, and seamless user experience. We specialize in native Swift and Kotlin engineering as well as high-velocity Flutter and React Native cross-platform apps.",
    features: [
      "Native Android App Development (Kotlin & Java)",
      "Native iOS App Development (Swift & SwiftUI)",
      "Cross-Platform Flutter & React Native Engineering",
      "Progressive Web Apps (PWA) with Offline Support",
      "Pixel-Perfect Mobile UI/UX & Touch Ergonomics",
      "Google Play & Apple App Store Submission Management",
    ],
    deliverables: [
      "Production-Ready iOS & Android Store Binaries",
      "Full Source Code Ownership & Architecture Specs",
      "Backend REST / GraphQL API Services & Admin Panel",
      "App Store Optimization (ASO) & Publishing Setup",
    ],
    subServices: [
      {
        title: "Android App Development",
        description: "Native applications tailored for the Google Play ecosystem with robust performance and material UI.",
      },
      {
        title: "iOS App Development",
        description: "High-quality, secure apps engineered for Apple devices following strict Apple guidelines.",
      },
      {
        title: "Cross-Platform App Development",
        description:
          "Fast, cost-effective apps built with Flutter and React Native that share a single codebase across iOS and Android.",
      },
      {
        title: "Progressive Web Apps (PWA)",
        description: "Fast, installable web apps that deliver native-like experiences with offline capabilities.",
      },
      {
        title: "UI/UX Design for Apps",
        description: "Pixel-perfect, user-friendly mobile interfaces focused on ergonomics, gestures, and fluid transitions.",
      },
      {
        title: "App Maintenance & Updates",
        description: "Continuous version updates, bug fixes, performance monitoring, and OS compatibility patches.",
      },
    ],
    timeline: [
      {
        step: "01",
        title: "Requirement Analysis",
        description: "Understanding your goals, feature matrix, and native platform requirements.",
      },
      {
        step: "02",
        title: "Wireframing & UI/UX Design",
        description: "Visualizing the user journey, screen flows, and interactive mobile prototype in Figma.",
      },
      {
        step: "03",
        title: "Development & Coding",
        description: "Writing clean, optimized code using Flutter, React Native, Swift, or Kotlin.",
      },
      {
        step: "04",
        title: "Testing & Quality Assurance",
        description: "Device fragmentation testing, network resilience, battery optimization, and QA testing.",
      },
      {
        step: "05",
        title: "Deployment & Launch",
        description: "Publishing to Google Play Store and Apple App Store with full guidelines compliance.",
      },
      {
        step: "06",
        title: "Maintenance & Support",
        description: "Long-term monitoring, post-launch analytics, and regular feature updates.",
      },
    ],
    tools: [
      "Flutter",
      "React Native",
      "Dart",
      "Swift",
      "Kotlin",
      "JavaScript",
      "Node.js",
      "Firebase",
      "Laravel",
      "Figma",
      "MySQL",
      "MongoDB",
    ],
    whyChooseUs: [
      {
        title: "End-to-End Expertise",
        description: "From concept design and prototyping to store submission and cloud backend infrastructure.",
      },
      {
        title: "Custom Solutions",
        description: "Tailored specifically for your business workflow, security requirements, and scale.",
      },
      {
        title: "Scalable & Future-Ready",
        description: "Engineered with modular code to accommodate rapid user growth and new feature rollouts.",
      },
      {
        title: "Proven Track Record",
        description: "Delivering stable, high-performance apps trusted by businesses in retail, pharma, and finance.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to develop a mobile app?",
        a: "A simple app takes 4–6 weeks, while complex, feature-rich apps may take 3–6 months. We provide a detailed project plan after our initial consultation.",
      },
      {
        q: "Do you build apps for both Android and iOS?",
        a: "Yes! We develop native apps for Android and iOS as well as cross-platform apps using Flutter and React Native.",
      },
      {
        q: "Will I own the app and its source code?",
        a: "Absolutely. Once the project is completed and payment is made, you have full ownership of the app, source code, and all related assets.",
      },
      {
        q: "Can you help me publish the app to the Play Store and App Store?",
        a: "Yes. We handle the entire app submission process, including developer accounts, build uploads, and guidelines compliance.",
      },
      {
        q: "Do you provide post-launch support and maintenance?",
        a: "Yes. We offer maintenance packages to keep your app updated, fix bugs, and add new features as your business grows.",
      },
      {
        q: "Will my app be secure?",
        a: "Yes. We follow industry-standard security practices, including data encryption, secure authentication, and regular security testing.",
      },
    ],
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    title: "Graphic Design & AR/VR",
    tagline: "Captivating Visuals. Immersive Realities.",
    badge: "Creative & Spatial",
    iconName: "Palette",
    shortDescription:
      "Enhance your brand with captivating visuals and stunning designs that leave a lasting impact. Our professional graphic design and AR services bring your ideas to life.",
    fullDescription:
      "In a crowded digital ecosystem, visual distinction is your greatest competitive moat. We forge iconic brand identities, bespoke marketing collateral, 3D motion assets, and boundary-pushing Augmented & Virtual Reality spatial experiences.",
    features: [
      "Brand Identity & Visual Guidelines",
      "3D Modeling, Motion Graphics & WebGL Assets",
      "Augmented Reality (AR) Filters & WebAR Experiences",
      "Marketing Collateral & High-Conversion Ad Creatives",
      "Packaging Design & Vector Illustration Systems",
      "Interactive 3D Product Viewers & Configurator",
    ],
    deliverables: [
      "Comprehensive Brand Styleguide PDF & Assets",
      "3D Asset Packages (GLTF / GLB / USDZ)",
      "High-Resolution Print & Digital Vector Files",
      "Social Media & Campaign Creative Kits",
    ],
    subServices: [
      {
        title: "Brand Identity Design",
        description: "Logos, brand guidelines, color palettes, and typographic hierarchies that make your business unforgettable.",
      },
      {
        title: "Marketing & Print Collateral",
        description: "Brochures, flyers, business cards, banner designs, and trade show displays.",
      },
      {
        title: "3D Product Visualization",
        description: "Photorealistic 3D product renders and interactive 3D web models.",
      },
      {
        title: "Augmented Reality (AR) Experiences",
        description: "Interactive WebAR filters and immersive brand engagements that wow customers on mobile.",
      },
    ],
    timeline: [
      {
        step: "01",
        title: "Creative Moodboarding",
        description: "Visual benchmarking, color psychology, and spatial concept explorations.",
      },
      {
        step: "02",
        title: "Concept Iteration",
        description: "Drafting varied creative directions, 3D clay renders, and interaction mockups.",
      },
      {
        step: "03",
        title: "Asset Refinement",
        description: "Fine-tuning shaders, vector geometry, lighting setups, and typography systems.",
      },
      {
        step: "04",
        title: "Format Optimization",
        description: "Packaging assets for web performance, multi-resolution print, and AR engines.",
      },
    ],
    tools: ["Figma", "Photoshop", "Illustrator", "Blender", "After Effects", "Spark AR"],
    whyChooseUs: [
      {
        title: "Distinctive Branding",
        description: "Stand out in crowded markets with memorable, high-craft visual assets.",
      },
      {
        title: "Immersive Engagement",
        description: "Interactive 3D and AR experiences that captivate users and boost dwell time.",
      },
      {
        title: "Multi-Format Excellence",
        description: "From 4K digital displays to print-ready packaging, crafted with utmost precision.",
      },
    ],
  },
];
