import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import  Interio from "@/public/project2.png"
import  RBStepUp from "@/public/project1.png"
import  EduWave from "@/public/project3.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Online, India",
    description:
      "Worked as a UI Developer Intern in a private company, gaining hands-on exprerience in coding. Contributed to front-end development task collaborating with the team to deliver efficient and
user-friendly solutions",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2021",
  },
  {
    title: "Front-End Developer",
    location: "Lucknow, India",
    description:
      "I worked as a front-end developer for 3 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    title: "Full Stack Developer",
    location: "Jamnagar, India",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "EduWave",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: EduWave,
    siteUrl: "https://eduwave-ruddy.vercel.app",
  },
  {
    title: "RB Step-Up",
    description:
      "An Ecommerce website. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: RBStepUp,
    siteUrl: "https://rb-shoes.vercel.app/",
  },
  {
    title: "Interio",
    description:
      "A stunning landing page for interior design company. It shows the company's work.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: Interio,
    siteUrl: "https://interio-chi.vercel.app/",
  },
  {
    title: "Interio",
    description:
      "A stunning landing page for interior design company. It shows the company's work.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: Interio,
    siteUrl: "https://interio-chi.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
