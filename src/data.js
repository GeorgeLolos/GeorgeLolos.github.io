export const PROFILE = {
    name: "George Lolos",
    title: "Engineering Leadership & Digital Strategy",
    email: "georgios.lolos.91@gmail.com",
    subtitle: "Ex-Google, Uber, Bain | Fractional CTO & Trusted Tech Advisor",
    summary: "Engineering Executive with 15+ years of leadership experience at Google, Uber, and Bain. Rapidly promoted to Expert Senior Manager at Bain for leading large-scale AI transformations and venture builds. Inaugural Google Chrome Advisory Board member with deep expertise in scaling high-performance teams, executing technical due diligence, and architecting resilient web solutions.",
    location: "Europe & Middle East | Remote or On-site",
    linkedin: "https://www.linkedin.com/in/george-lolos",
};

export const EXPERIENCE = [
    {
        company: "Bain & Company Inc.",
        role: "Expert Senior Manager, Software Engineering",
        period: "Jan 2019 – Oct 2025",
        location: "Berlin, Germany",
        description: "Leading large-scale AI transformations, venture builds, and technical due diligence.",
        highlights: [
            "Venture & Product Leadership: Led the end-to-end venture build of an insurtech start-up.",
            "Private Equity & Due Diligence: Executed multiple technology due diligences for financial investors (fintech/payment).",
            "Digital Transformation: Developed large-scale tech transformation budgets and programs.",
            "AI Leadership: Served as AI Champion for the Berlin office.",
            "Talent Strategy: Established structured interviewing for engineering roles."
        ]
    },
    {
        company: "Home24 AG",
        role: "Web Chapter Lead",
        period: "Jan 2017 – Dec 2018",
        location: "Berlin, Germany",
        description: "Directed 4 cross-functional teams to modernize e-commerce infrastructure.",
        highlights: [
            "Scaled Frontend Guild from 2 to 12 engineers.",
            "Led multiple initiatives for the platform modernization and consolidation of services",
            "Scaled Agility in the Organization by introducing Scrum and Kanban as frameworks and software engineering teams in Sales and Marketing."
        ]
    },
    {
        company: "Fashion for Home GmbH",
        role: "Staff Software Engineer",
        period: "Aug 2016 – Dec 2016",
        location: "Berlin, Germany",
        description: "Lead architect for Frontend Platform",
        highlights: [
            "Orchestrated the technical consolidation of Fashion For Home into the Home24 ecosystem after it's acquisition.",
            "Co-Lead Frontend re-architecture from Backbone.js and PHP templates to React"
        ]
    },
    {
        company: "Uber",
        role: "Staff Software Engineer",
        period: "Aug 2014 – Nov 2015",
        location: "New York / Berlin",
        description: "Founding member of Berlin Innovation Hub.",
        highlights: [
            "Spearheaded migration from microservices to macroservices.",
            "Technical Lead for multiple web platform teams.",
            "Hired for the Berlin Innovation Hub."
        ]
    },
    {
        company: "Google",
        role: "Software Engineer / Tech Lead (Chrome V8)",
        period: "Jan 2011 – Jul 2014",
        location: "San Francisco, CA",
        description: "Tech Lead for Chrome V8 Engine.",
        highlights: [
            "Promoted to Tech Lead for V8 optimization team.",
            "Contributed core code to Blink rendering engine and V8."
        ]
    }
];

export const SERVICES = [
    {
        title: "Fractional CTO",
        description: "Strategic technology leadership on a fractional basis to guide your engineering vision and scale your team.",
        icon: "Cpu",
        gradient: "from-indigo-500 to-purple-600"
    },
    {
        title: "Technical Due Diligence",
        description: "Deep-dive assessment of software architecture, code quality, and engineering risks for investors and acquirers.",
        icon: "Search",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "Venture Building",
        description: "End-to-end technical execution for new ventures, from prototype to scalable product.",
        icon: "Rocket",
        gradient: "from-orange-500 to-red-500"
    },
    {
        title: "AI Transformation",
        description: "Integrating AI/ML strategies into existing business processes to drive innovation and efficiency.",
        icon: "BrainCircuit",
        gradient: "from-purple-500 to-pink-500"
    }
];

// Featured projects shown on landing page
export const FEATURED_PROJECTS = [
    {
        id: "fintech-due-diligence",
        title: "Fintech Due Diligence for PE Acquisition",
        category: "Private Equity",
        outcome: "€120M+ Deal Closed",
        description: "Led comprehensive technology assessment for a major private equity firm evaluating a European payments infrastructure company. Analyzed codebase health, architecture scalability, and technical debt across 2M+ lines of code.",
        impact: "Identified €4M in hidden technical debt and recommended a 18-month remediation roadmap. The investor proceeded with the acquisition with adjusted valuation and clear integration strategy.",
        role: "Tech Lead & Principal Analyst",
        featured: true
    },
    {
        id: "regional-bank-transformation",
        title: "Regional Bank Digital Transformation",
        category: "Banking",
        outcome: "€50M Budget Approved",
        description: "Developed a large-scale technology transformation budget and multi-year roadmap for a regional bank transitioning from legacy mainframe systems to cloud-native architecture.",
        impact: "Created detailed business cases for C-suite, securing board approval for the largest IT investment in the bank's history. Reduced projected implementation risk by 40% through phased migration strategy.",
        role: "Strategy Lead & Technical Architect",
        featured: true
    },
    {
        id: "insurtech-venture-build",
        title: "Insurtech Venture Build",
        category: "Venture Building",
        outcome: "MVP to Market in 6 Months",
        description: "End-to-end venture build for an insurtech startup from concept to launch. Defined operating model, selected technology stack, onboarded vendor partners, and built the founding engineering team.",
        impact: "Delivered fully functional B2B2C insurance platform processing 10K+ policies monthly. Established engineering culture and hiring playbook that scaled team from 0 to 15 engineers.",
        role: "Fractional CTO & Venture Lead",
        featured: true
    }
];

// All blog posts / case studies
export const BLOG_POSTS = [
    ...FEATURED_PROJECTS,
    {
        id: "ai-real-estate-platform",
        title: "AI-Powered Real Estate Platform",
        category: "AI & Digital",
        outcome: "30% Efficiency Gain",
        description: "Designed and implemented AI-driven automation for a leading real estate company's property valuation and customer matching workflows using LLMs and computer vision.",
        impact: "Reduced manual valuation time by 30% and improved lead-to-conversion rates by 22%. Successfully integrated with existing CRM and ERP systems without business disruption.",
        role: "AI Strategy Lead",
        featured: false
    },
    {
        id: "transportation-logistics",
        title: "Transportation Logistics Optimization",
        category: "AI & Digital",
        outcome: "€8M Annual Savings",
        description: "Led digital transformation initiative for a transportation conglomerate, implementing predictive maintenance and route optimization algorithms across a fleet of 2,000+ vehicles.",
        impact: "Achieved €8M in annual operational savings through reduced downtime and fuel optimization. Created data infrastructure that enabled real-time decision making at scale.",
        role: "Digital Transformation Lead",
        featured: false
    },
    {
        id: "saas-platform-assessment",
        title: "SaaS Platform Technical Assessment",
        category: "Private Equity",
        outcome: "Investment Decision Supported",
        description: "Conducted comprehensive technical due diligence for a growth equity investment in a B2B SaaS platform. Evaluated engineering team capabilities, technology stack modernity, and scalability potential.",
        impact: "Provided detailed technical risk assessment that informed negotiation strategy. Identified key engineering hires needed post-acquisition and created 100-day plan for technical improvements.",
        role: "Technical Advisor",
        featured: false
    },
    {
        id: "ecommerce-modernization",
        title: "E-Commerce Platform Modernization",
        category: "Digital Transformation",
        outcome: "3x Performance Improvement",
        description: "Led the complete frontend rewrite of a major European e-commerce platform from legacy monolith to modern React-based micro-frontends architecture.",
        impact: "Achieved 3x improvement in page load times, resulting in 15% increase in conversion rates. Established component library and design system adopted across 4 international markets.",
        role: "Web Chapter Lead",
        featured: false
    },
    {
        id: "startup-cto-advisory",
        title: "Startup CTO Advisory Program",
        category: "Advisory",
        outcome: "Series A Secured",
        description: "Provided ongoing technical advisory to a seed-stage fintech startup preparing for Series A fundraising. Guided architecture decisions, hiring strategy, and technical due diligence preparation.",
        impact: "Company successfully closed €8M Series A with strong technical validation from investors. Built engineering team from 3 to 12 developers with clear career progression framework.",
        role: "Fractional CTO Advisor",
        featured: false
    }
];
