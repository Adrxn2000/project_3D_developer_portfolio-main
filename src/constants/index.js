import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  dvt,
  content1,
  Capaciti_Logo,
  Picture1,
  finance,
  kasi,
  deskflow,
  Skye,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developing",
    icon: web,
  },
  {
    title: "Software Developer Graduate",
    icon: mobile,
  },
 
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Software Developer intern",
    company_name: "CAPACITI",
    icon: Capaciti_Logo,
    iconBg: "#E6DEDD",
    date: "April 2026 - Present",
    points: [
        "Built DeskFlow, a full-stack internal IT ticketing system with role-based access control, using React, Node.js/Express, PostgreSQL, and Prisma ORM.",
        "Designed a relational schema and REST API enforcing server-side role separation between Employee and Admin users, verified with 401/403/404 test coverage across every protected route.",
        "Implemented JWT authentication with bcrypt password hashing, and built middleware-based route guards rather than relying on frontend-only access checks.",
        "Documented the API with both a Postman v2.1 collection and a live Swagger/OpenAPI interface, exceeding the project's documentation requirement.",
        "Deployed a production three-tier architecture across Netlify (frontend), Render (backend), and Neon (managed PostgreSQL), with CI-style auto-deploy from GitHub on every push.",
        "Debugged and resolved real cross-platform deployment issues, including Windows/Linux filesystem case-sensitivity bugs, BOM-related config parsing failures, and SPA routing on a CDN.",
        "Built a responsive UI with light/dark theming, an animated landing page, and component-driven architecture (Sidebar, TicketList, TicketForm, ProtectedRoute, etc.).",
  ],
},
  {
    title: "Full stack Developer intern",
    company_name: "DVT",
    icon: dvt,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Oct 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Adrian proved me wrong.",
    name: "Phindile Gamede",
    designation: "Graduate program Administrator",
    company: "DVT",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "BudgetBot",
    description:
      "A conversational AI chatbot that helps South Africans take control of their personal finances — no bank account access, no jargon, just practical guidance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Picture1,
    source_code_link: "https://github.com/Lerumo-Consulting/budgetbot-money-mentor",
  },

   {
    name: "ContentCraft",
    description:
      "ContentCraft is an AI-powered content generator built for South African professionals — marketers, entrepreneurs, students, and small business owners who need quality content fast. Pick a content type, fill in a few inputs, and get formatted, ready-to-use copy streamed back token-by-token.",
    tags: [
      {
        name: "TanStack Start v1 (React 19 + Vite 7)",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "	Tailwind CSS v4 with semantic OKLCH design tokens",
        color: "pink-text-gradient",
      },
    ],
    image: content1,
    source_code_link: "https://github.com/Adrxn2000/content-craft-sa",
  },

  {
    name: "DeskFlow Portal",
    description:
      "DeskFlow an Internal IT Service Request Portal Ticketing system where Employees submit IT tickets and Admins triage and resolve them.",
    tags: [
      {
        name: "HTML/CSS/JS",
        color: "blue-text-gradient",
      },
      {
        name: "PostgresQL + Prisma ORM",
        color: "green-text-gradient",
      },
      {
        name: "React + Nodejs/Express + Netlify + Render",
        color: "pink-text-gradient",
      },
    ],
    image: deskflow,
    source_code_link: "https://deskflowportal.netlify.app/",
  },

  {
    name: "FinanceIQ",
    description: "FinanceIQ pairs a deterministic, logistic-style risk scorer with a Gemini-powered conversational interface. Users can chat with the assistant about portfolio risk, assess new loan applicants, and explore a dashboard of 100 synthetic applicants — all in South African Rand (R).",
    tags: [
      {
        name: "React 19 + TanStack Start + Tailwind CSS (dark theme)",   
        color: "blue-text-gradient",
      },
      {
        name: "Gemini API",
        color: "green-text-gradient",
      },  
      {
        name: "Vite 7, TypeScript (strict), Bun",
        color: "pink-text-gradient",
      },
    ],
    image: finance,
    source_code_link: "https://github.com/Adrxn2000/financeIQ",
    
  },

  {
    name: "E-Commerce Web App",
    description:
      "Kasi Essentials 🧢 A full-featured streetwear e-commerce platform built to showcase and sell authentic South African Kasi fashion brands. Built with React, this project demonstrates a complete shopping experience from browsing to checkout.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: kasi,
    source_code_link: "https://github.com/Adrxn2000/KasiWebsite",
  },

  {
    name: "Weather Web App",
    description:
      "Interactive weather app with live forecasts, map-based search, and dynamic animations — built with React, Leaflet, and Framer Motion.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "open-meteo-api",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: Skye,
    source_code_link: "https://github.com/Adrxn2000/weather-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
