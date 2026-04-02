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
  Picture1,
  kasi,
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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Phindile Gamede",
    designation: "Graduate program Administrator",
    company: "DVT",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Employee Portal",
    description:
      "Web-based platform The DVT Talent Portal aims to solve the problem of inefficient talent discovery and management within the organization. Stakeholders, including managers and clients, often struggle to quickly identify available employees based on skills, location, experience, and availability for projects. The goal was to create a secure, user-friendly platform that allows users to view, search, and manage employee profiles while ensuring data privacy and ease of use.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Picture1,
    source_code_link: "https://github.com/NKukame/DVT-Trainee-Portfolio",
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
