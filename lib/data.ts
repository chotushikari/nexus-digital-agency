export interface Service {
  id: string;
  iconName: "Globe" | "Zap" | "Bot" | "TrendingUp" | "ShoppingCart" | "BarChart3";
  title: string;
  description: string;
  href: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  industry: string;
  service: string;
  result: string;
  resultMetric: string;
  gradient: string;
  tags: string[];
  challenge: string;
  solution: string[];
  results: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  industry: string;
  rating: number;
  avatarInitials: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export const services: Service[] = [
  {
    id: "websites",
    iconName: "Globe",
    title: "Website Development",
    description: "Custom business websites, landing pages, redesigns, and performance optimization that turn visitors into customers.",
    href: "/services#websites",
    features: ["Business Websites", "Landing Pages", "E-commerce Solutions", "Redesigns", "Speed & Performance Tuning"]
  },
  {
    id: "automation",
    iconName: "Zap",
    title: "Automation & Workflows",
    description: "CRM integration, lead management, automated email sequences, calendar bookings, and smooth internal operations.",
    href: "/services#automation",
    features: ["CRM Syncing", "Email & SMS Autoresponders", "Appointment Automation", "Custom Database Syncs", "Daily Tasks Automation"]
  },
  {
    id: "ai",
    iconName: "Bot",
    title: "AI System Integrations",
    description: "Customer service chatbots, custom trained knowledge bases, conversational assistants, and automated lead qualifiers.",
    href: "/services#ai",
    features: ["24/7 Customer AI Chatbots", "Support Knowledge Bases", "Lead Qualification bots", "AI Agent Integrations", "Natural Language FAQs"]
  },
  {
    id: "improvement",
    iconName: "TrendingUp",
    title: "Digital Improvement",
    description: "Conversion rate optimization, page speed improvements, mobile responsiveness audits, and client flow refining.",
    href: "/services#improvement",
    features: ["Conversion Audits", "Core Web Vitals Boost", "Mobile Experience Fine-tuning", "A/B Layout Testing", "UX Polish"]
  },
  {
    id: "saas",
    iconName: "ShoppingCart",
    title: "SaaS & Products",
    description: "Custom web applications, client portals, internal tracking dashboards, and software tool creation.",
    href: "/services#saas",
    features: ["Client Portals", "Admin Control Panels", "Custom Web Databases", "API Integrations", "Interactive Web Apps"]
  },
  {
    id: "transformation",
    iconName: "BarChart3",
    title: "Digital Transformation",
    description: "Complete digitization of physical businesses. Move from paper/spreadsheets to highly automated software systems.",
    href: "/services#transformation",
    features: ["Operations Auditing", "Software Stack Overhaul", "Team Onboarding & Guides", "AI Copilot Setup", "Analytics Dashboarding"]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "metro-clinic",
    slug: "metro-clinic",
    client: "Metro Clinic",
    industry: "Healthcare",
    service: "Website + AI Chatbot",
    result: "3x more appointment bookings",
    resultMetric: "3x",
    gradient: "from-emerald-500 to-teal-600",
    tags: ["Web Design", "AI Integration"],
    challenge: "Metro Clinic had an outdated, static website that did not support mobile bookings. Clinic reception staff spent upwards of 4 hours daily answering repetitive FAQs, leading to dropped calls and frustrated patients.",
    solution: [
      "Designed a modern, mobile-first patient interface with instant scheduling",
      "Implemented a custom AI chatbot trained on clinic procedures, hours, and policies",
      "Integrated booking records directly with the clinic's internal dental practice software"
    ],
    results: [
      "Online patient bookings tripled within the first 60 days",
      "Reception staff saved 20+ hours weekly on scheduling calls",
      "Patient satisfaction scores rose to an all-time high of 4.9/5"
    ],
    testimonial: {
      quote: "Nexus transformed our clinic's online presence. We went from 5 bookings a week to 20+ within two months. The AI chatbot handles patient questions 24/7.",
      author: "Dr. Sarah Chen",
      role: "Medical Director, Metro Clinic"
    }
  },
  {
    id: "bistro-42",
    slug: "bistro-42",
    client: "Bistro 42",
    industry: "Restaurants",
    service: "Automation & Reservations",
    result: "50% reduction in admin time",
    resultMetric: "50%",
    gradient: "from-orange-500 to-red-600",
    tags: ["Workflow Automation", "SMS Alerts"],
    challenge: "Bistro 42 relied on manual phone reservations and paper logs. During peak dinner rushes, staff struggled to manage check-ins, answer reservation queries, and handle delivery ordering, resulting in lost tables and errors.",
    solution: [
      "Created an automated reservation flow with real-time text confirmations",
      "Designed a smart digital table coordinator mapping layout",
      "Set up automatic review prompts sent via SMS 2 hours post-dining"
    ],
    results: [
      "Admin overhead cut by 50%, saving chefs and managers 15 hours weekly",
      "Table turnover rates improved by 18% due to automated seating alerts",
      "Google Business reviews increased by 140% in three months"
    ],
    testimonial: {
      quote: "The automation system they built saves me 15 hours every week. Orders, reservations, and inventory now run themselves. Best investment I've made.",
      author: "Marcus Johnson",
      role: "Owner, Bistro 42"
    }
  },
  {
    id: "summit-realty",
    slug: "summit-realty",
    client: "Summit Realty",
    industry: "Real Estate",
    service: "Lead Automation CRM",
    result: "2x lead conversion rate",
    resultMetric: "2x",
    gradient: "from-blue-500 to-indigo-600",
    tags: ["CRM Integration", "Websites"],
    challenge: "Summit Realty agents missed hot property leads because their outdated web inquiry form did not alert them. Leads sat in a raw spreadsheet for up to 48 hours, by which point clients had moved on to competitors.",
    solution: [
      "Rebuilt the site to include active property map search modules",
      "Implemented instant SMS and push routing alerts for local listing agents",
      "Set up automated email drip sequences matching lead property budgets"
    ],
    results: [
      "Agent response time cut from 24+ hours down to 4 minutes on average",
      "Lead-to-showing conversion rates doubled within 90 days",
      "Agent dashboard tracking centralized all active property deals"
    ],
    testimonial: {
      quote: "Our new website and lead system doubled our qualified leads in 90 days. The team understood real estate and built exactly what we needed.",
      author: "Elena Rodriguez",
      role: "Principal Broker, Summit Realty"
    }
  },
  {
    id: "greenfield-school",
    slug: "greenfield-school",
    client: "Greenfield School",
    industry: "Education",
    service: "Enrollment Landing Campaign",
    result: "40% increase in inquiries",
    resultMetric: "40%",
    gradient: "from-violet-500 to-purple-600",
    tags: ["Landing Page", "Lead Flow"],
    challenge: "Greenfield struggled to capture parent interest for open houses. Parents found it hard to locate admission criteria on their slow, 200-page legacy educational portal.",
    solution: [
      "Built high-speed, minimal landing pages dedicated to open house enrollment",
      "Integrated virtual virtual school-tour videos and student testimonials",
      "Developed a 3-step application inquiry wizard simplifying user details"
    ],
    results: [
      "Parent tour inquiry submissions increased by 40%",
      "Site loading speed cut from 5.4 seconds down to 1.1 seconds",
      "Self-guided virtual admissions saved registrar staff 12 hours weekly"
    ],
    testimonial: {
      quote: "Nexus created a landing system that made the enrollment process clear for families. The speed and visual polish represents our school beautifully.",
      author: "Arthur Pendelton",
      role: "Admissions Dean, Greenfield School"
    }
  },
  {
    id: "fitcore-gym",
    slug: "fitcore-gym",
    client: "FitCore Gym",
    industry: "Fitness",
    service: "Client Booking App",
    result: "65% increase in session bookings",
    resultMetric: "65%",
    gradient: "from-cyan-500 to-blue-600",
    tags: ["Mobile App", "Booking Flow"],
    challenge: "FitCore members had to call in or log in to a clunky desktop portal to book group classes and check trainer availability, causing member churn.",
    solution: [
      "Created a streamlined scheduling widget embedded in their page",
      "Developed SMS reminders for classes and cancellations",
      "Set up automatic member check-ins via QR codes"
    ],
    results: [
      "Group training attendance increased by 65% in 45 days",
      "Class booking drop-out rate decreased by 25%",
      "Front-desk staff report zero booking overlaps since launch"
    ],
    testimonial: {
      quote: "Our members love the ease of bookings. It has drastically reduced class drops and calls. Excellent work!",
      author: "Samantha Briggs",
      role: "Manager, FitCore Gym"
    }
  },
  {
    id: "techstart-hub",
    slug: "techstart-hub",
    client: "TechStart Hub",
    industry: "Professional Services",
    service: "Portal & Automation",
    result: "120+ hours saved monthly",
    resultMetric: "120h",
    gradient: "from-pink-500 to-rose-600",
    tags: ["Client Portal", "SaaS Tools"],
    challenge: "TechStart Hub manually processed membership applications, billing, and desk bookings. Coordinating these tasks required 3 full-time administrators.",
    solution: [
      "Developed a custom client onboarding portal and desk tracker",
      "Integrated Stripe automated recurring invoicing and collection",
      "Connected access-control systems with the onboarding portal"
    ],
    results: [
      "Saved 120+ hours monthly by automating billing and sign-ups",
      "Membership growth increased by 35% without adding admin staff",
      "Reduced invoice disputes to absolute zero with precise automated billing"
    ],
    testimonial: {
      quote: "Their custom portal has allowed us to scale our membership without increasing overhead. The operations run like clockwork.",
      author: "David Vance",
      role: "Co-Founder, TechStart Hub"
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Nexus transformed our clinic's online presence. We went from 5 bookings a week to 20+ within two months. The AI chatbot handles patient questions 24/7.",
    author: "Dr. Sarah Chen",
    company: "Metro Clinic",
    industry: "Healthcare",
    rating: 5,
    avatarInitials: "SC"
  },
  {
    id: "t2",
    quote: "The automation system they built saves me 15 hours every week. Orders, reservations, and inventory now run themselves. Best investment I've made.",
    author: "Marcus Johnson",
    company: "Bistro 42",
    industry: "Restaurants",
    rating: 5,
    avatarInitials: "MJ"
  },
  {
    id: "t3",
    quote: "Our new website and lead system doubled our qualified leads in 90 days. The team understood real estate and built exactly what we needed.",
    author: "Elena Rodriguez",
    company: "Summit Realty",
    industry: "Real Estate",
    rating: 5,
    avatarInitials: "ER"
  }
];

export const team: TeamMember[] = [
  {
    name: "Alex Mercer",
    role: "Founding Partner & Tech Director",
    bio: "Ex-SaaS Lead Engineer with 10+ years building high-scale architectures. Alex designs websites, automates operations, and trains AI systems.",
    initials: "AM"
  },
  {
    name: "Sophia Sterling",
    role: "Creative Director & UX Architect",
    bio: "Award-winning designer focusing on immersive digital products. Sophia designs the high-converting aesthetic visuals and dynamic interactions.",
    initials: "SS"
  },
  {
    name: "Devon Vance",
    role: "Operations & Automation Lead",
    bio: "Specialist in process mapping, API integrations, and CRM workflows. Devon removes manual friction to save businesses hundreds of hours.",
    initials: "DV"
  }
];

export const industries = ["All", "Healthcare", "Restaurants", "Real Estate", "Education", "Fitness", "Professional Services"];
