export const site = {
  name: "Shulammite Peralta",
  shortName: "Shulammite",
  monogram: "SP",
  role: "Web Developer & UI/UX Designer",
  tagline:
    "I craft elegant websites and visual identities that blend thoughtful design with clean, performant code — helping brands stand out with a soft, premium presence online.",
  email: "peraltashulammite@gmail.com",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  socials: {
    linkedin: {
      label: "Shulammite Peralta",
      href: "https://www.linkedin.com/in/shulammite-peralta/",
    },
    github: {
      label: "GitHub",
      href: "https://github.com/peralta-shulammite",
    },
    email: {
      label: "Email",
      href: "mailto:peraltashulammite@gmail.com",
    },
  },
  hero: {
    greeting: "Hi There!",
    headlineLine1: "I'm",
    headlineLine2: "Shulammite",
    roleBadge: "Frontend Web Developer & UI/UX Designer",
    intro:
      "Passionate about designing and developing modern web experiences that combine creativity, functionality, and seamless user interaction to deliver impactful digital solutions.",
    hireCta: "Hire Me",
    hireHref: "#contact",
    workCta: "View My Work",
    workHref: "#work",
    image: "/images/Shulammite Peralta.png",
    imageAlt:
      "Shulammite Peralta — professional portrait in a navy suit",
    floatingBadges: [
      { label: "Frontend Developer", position: "top-right", delay: 0 },
      { label: "UI/UX Designer", position: "mid-left", delay: 0.2 },
      { label: "Creative Thinker", position: "bottom-left", delay: 0.4 },
    ],
    techTags: [
      { label: "React", position: "tech-top-left", delay: 0 },
      { label: "Next.js", position: "tech-bottom-right", delay: 0.15 },
      { label: "Figma", position: "tech-mid-right", delay: 0.3 },
    ],
  },
  services: {
    title: "What I Do",
    items: [
      {
        id: "web-dev",
        title: "Web Development",
        description:
          "Building responsive, accessible, and user-friendly websites using modern web technologies and best practices.",
        icon: "code",
      },
      {
        id: "ui-ux-design",
        title: "UI/UX & Visual Design",
        description:
          "Creating intuitive user experiences, wireframes, prototypes, and visually engaging designs using Figma and Canva while focusing on usability, accessibility, and user-centered design principles.",
        icon: "pen-tool",
      },
      {
        id: "design-to-code",
        title: "Design to Code",
        description:
          "Transforming Figma mockups and design concepts into clean, responsive, and maintainable frontend code with attention to detail, consistency, and performance.",
        icon: "layers",
      },
    ],
  },
  about: {
    title: "About Me",
    paragraph:
      "I'm passionate about crafting digital experiences that feel intentional from the first glance to the final interaction. With a creative mindset and a careful eye for detail, I focus on blending aesthetics with functionality—building work that is visually refined, thoughtfully structured, and genuinely meaningful for the people who use it.",
    philosophyLabel: "My Philosophy",
    philosophy:
      "I believe great design is not only seen but felt through every interaction.",
    signature: "— Shulammite Peralta",
    image: "/images/peralta-portraitgrad.png",
    imageAlt:
      "Shulammite Peralta — graduation portrait at Faith Colleges",
  },
  education: {
    title: "Education & Experience",
    honor: "Magna Cum Laude",
    degree: "Bachelor of Science in Information Technology",
    classOf: "Class of 2026",
    awardsTitle: "Awards & Recognition",
    awards: [
      "Jonathan Gay Award",
      "Special Academic Award",
      "Lovelace Award",
      "Distinguished Member of Circulo Sobresaliente",
    ],
    experience: [
      {
        id: 1,
        startYear: 2021,
        period: "September – December 2021",
        title: "Bookkeeper",
        company: "Levine and Associates",
        badge: "Part-timer",
      },
      {
        id: 2,
        startYear: 2023,
        period: "July 2023",
        title: "Virtual Assistant",
        company: "Mullins PC",
        badge: "Part-timer",
      },
      {
        id: 3,
        startYear: 2025,
        period: "2025 – 2026",
        title: "OJT",
        company: "La Visionario",
      },
    ],
  },
  certifications: {
    title: "Certifications & Professional Development",
    intro:
      "Continuous learning and professional development through certifications, workshops, and industry-focused training programs.",
    certificationsTitle: "Certifications",
    trainingsTitle: "Trainings & Seminars",
    certifications: [
      {
        id: 1,
        icon: "ux",
        title: "UXPH Certification",
        issuer: "User Experience Philippines (UXPH)",
        description:
          "Recognized credential affirming knowledge of user-centered design, usability principles, and UX practices within the Philippine design community.",
      },
      {
        id: 2,
        icon: "analytics",
        title: "Certiport IT Specialist Certification",
        issuer: "Data Analytics",
        description:
          "Industry-validated certification demonstrating applied skills in data analysis concepts, interpretation, and analytics-focused problem solving.",
      },
    ],
    trainings: [
      {
        id: 1,
        icon: "ai",
        title: "AI Webinar",
        issuer: "Attendee",
        description:
          "Participated in sessions exploring artificial intelligence trends, practical applications, and emerging tools shaping modern digital workflows.",
      },
      {
        id: 2,
        icon: "python",
        title: "Python Guessing Game Webinar",
        issuer: "Attendee",
        description:
          "Engaged in a hands-on webinar focused on Python fundamentals through interactive exercises and guided development of a guessing game project.",
      },
    ],
  },
  portfolio: {
    title: "Featured Works",
    cta: "View My Projects",
    ctaHref: "#work",
    projects: [
      {
        id: 1,
        title: "DishCovery",
        subtitle: "Food Discovery Platform",
        category: "Web Development",
        location: "Remote",
        duration: "2024",
        tags: ["REACT", "NEXT.JS", "TAILWIND CSS", "REST API"],
        image: "/images/DishCovery - Logo (2).png",
        description:
          "As Frontend Developer, I built responsive interfaces for restaurant discovery and filtering, implemented interactive search and navigation components, and integrated REST API data flows — delivering a seamless, mobile-first dining exploration experience in collaboration with the development team.",
        href: "https://dishcovery-frontend-tau.vercel.app/user/home",
        linkType: "external",
      },
      {
        id: 2,
        title: "HF Boutique",
        subtitle: "Fashion E-Commerce Website",
        category: "Web Development",
        location: "Philippines",
        duration: "2024",
        tags: ["HTML", "CSS", "JAVASCRIPT", "RESPONSIVE DESIGN"],
        image: "/images/HFBotique-Logo.png",
        description:
          "Contributed as Frontend Developer by translating UI/UX designs into polished, responsive web layouts, building interactive product showcase interfaces, and ensuring elegant cross-device presentation — collaborating closely with designers to bring the boutique brand identity online.",
        href: "https://drive.google.com/file/d/1FGkphwOlQSQXLnbjJKXW6SNfp6XKU_FG/view?usp=sharing",
        linkType: "external",
      },
      {
        id: 3,
        title: "La Visionario",
        subtitle: "Funeral Services E-Commerce Platform",
        category: "Web Development",
        location: "Metro Manila",
        duration: "2025 – 2026",
        tags: ["REACT", "JAVASCRIPT", "CSS", "UI/UX"],
        image: "/images/Lavisionario-Logo.jpeg",
        description:
          "Developed during my OJT as Frontend Developer — I implemented responsive page layouts, built interactive UI components, and collaborated with the development team on feature integration and design handoffs. This confidential project showcases my work on modern web interfaces without public deployment.",
        linkType: "gallery",
        gallery: [
          {
            src: "/images/LV-LandingPage.png",
            alt: "La Visionario landing page with hero section and navigation",
            label: "Landing Page",
            description:
              "Hero section with full-width imagery, dual-tier navigation, and a prominent call-to-action — establishing the brand's dignified, modern visual identity.",
          },
          {
            src: "/images/LV-ShopCategory.png",
            alt: "La Visionario shop by category carousel",
            label: "Shop by Category",
            description:
              "Interactive category carousel with swipe navigation, letting families browse cremation, memorial planning, and traditional burial services at a glance.",
          },
          {
            src: "/images/LV-Shop.png",
            alt: "La Visionario service listing with filters and product grid",
            label: "Service Shop",
            description:
              "Filterable service grid with sidebar categories, location search, provider ratings, and responsive product cards — built for seamless cross-device browsing.",
          },
          {
            src: "/images/LV-Checkout.png",
            alt: "La Visionario product detail page with booking options",
            label: "Product Detail",
            description:
              "Service detail view with image gallery, pricing, quantity controls, and dual CTAs — translating complex booking flows into a clear, trustworthy interface.",
          },
          {
            src: "/images/LV-Cart.png",
            alt: "La Visionario shopping cart with order summary",
            label: "Shopping Cart",
            description:
              "Multi-item cart with quantity management, provider details, and an order summary sidebar — designed for transparent pricing and a smooth checkout path.",
          },
          {
            src: "/images/LV-UserLogin.png",
            alt: "La Visionario split-screen login and sign-up page",
            label: "User Authentication",
            description:
              "Split-screen auth layout with social login, email/password forms, and password visibility toggle — a polished, accessible entry point for new and returning users.",
          },
          {
            src: "/images/LV-SellerDashBoard.png",
            alt: "La Visionario seller centre dashboard with KPI cards",
            label: "Seller Dashboard",
            description:
              "Seller Centre with revenue KPIs, quick-action cards, and sales analytics — a data-rich workspace I helped structure for provider-side order and listing management.",
          },
          {
            src: "/images/LV-AdminDashboard.png",
            alt: "La Visionario admin portal with charts and activity feed",
            label: "Admin Dashboard",
            description:
              "Admin Portal featuring commission charts, escrow tracking, dispute alerts, and recent activity — demonstrating my work on complex, role-based dashboard interfaces.",
          },
        ],
      },
    ],
  },
  skills: {
    title: "Skills",
    items: [
      {
        id: "frontend-web",
        title: "Frontend & Web Development",
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "React.js",
          "Responsive Web Design",
          "PHP",
          "Java",
          "Node.js",
        ],
        icon: "code",
      },
      {
        id: "ui-ux-design",
        title: "UI/UX & Design",
        skills: [
          "UI/UX Design",
          "Figma",
          "Canva",
          "Wireframing",
          "Prototyping",
          "Graphic Design",
          "Design-to-Code Implementation",
        ],
        icon: "palette",
      },
      {
        id: "tools-tech",
        title: "Tools & Technologies",
        skills: [
          "Git",
          "GitHub",
          "VS Code",
          "Vercel",
          "MySQL",
          "Database Management",
        ],
        icon: "settings",
      },
      {
        id: "it-foundations",
        title: "IT & Technical Foundations",
        skills: [
          "Cisco Networking Fundamentals",
          "Data Analytics Fundamentals",
        ],
        icon: "network",
      },
      {
        id: "admin-support",
        title: "Administrative & Client Support",
        skills: [
          "Email Management",
          "Document Processing",
          "Data Entry",
          "Client Communication",
          "Administrative Support",
          "Organization",
        ],
        icon: "briefcase",
      },
      {
        id: "professional",
        title: "Professional Competencies",
        skills: [
          "Problem-Solving",
          "Team Collaboration",
          "Adaptability",
          "Attention to Detail",
          "Time Management",
        ],
        icon: "users",
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle:
      "Have a project in mind? I'd love to hear from you. Reach out and let's build something great together.",
    email: "peraltashulammite@gmail.com",
    hireCta: "Hire Me",
    hireHref: "mailto:peraltashulammite@gmail.com",
    workCta: "View My Work",
    workHref: "#work",
  },
  footer: {
    tagline:
      "Frontend developer crafting clean interfaces and thoughtful user experiences.",
    designedBy: "Designed & Developed by Me.",
    copyright: "All rights reserved.",
  },
};
