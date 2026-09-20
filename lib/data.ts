import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiDocker,
  SiVercel,
  SiLinux,
  SiGooglesheets,
  SiClaude,
  SiN8N,
  SiNotion,
} from "react-icons/si";
import { LuGithub, LuLinkedin } from "react-icons/lu";

export const siteConfig = {
  name: "NJA Systems",
  fullName: "Nestor Jr. Agnis",
  role: "Full-Stack Developer",
  tagline: "I design and build web systems from interface to database.",
  location: "Philippines · Remote-friendly",
  email: "njagnis@gmail.com",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type SkillCategory = {
  index: string;
  title: string;
  description: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  icon?: IconType;
  color?: string; // official brand hex — omitted for logos that are just black/white
};

export const skillCategories: SkillCategory[] = [
  {
    index: "01",
    title: "Frontend",
    description: "Interfaces that stay fast and predictable as they grow.",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs }, // black/white mark — inherits theme color
    ],
  },
  {
    index: "02",
    title: "Styling & Design",
    description: "Design systems, layout, and visual polish.",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Photoshop" },
    ],
  },
  {
    index: "03",
    title: "Backend",
    description: "APIs and services built for correctness under load.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    index: "04",
    title: "Database",
    description: "Schemas and queries that hold up as data scales.",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
    ],
  },
  {
    index: "05",
    title: "Tools & DevOps",
    description: "The pipeline that gets code from commit to production.",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub }, // black/white mark — inherits theme color
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", icon: SiVercel }, // black triangle — inherits theme color
      { name: "Linux (Ubuntu)", icon: SiLinux, color: "#FCC624" },
      { name: "VS Code" }, // no logo available in this icon set
    ],
  },
  {
    index: "06",
    title: "Productivity & AI Tools",
    description: "The tools around the code — data, docs, and AI assistance.",
    skills: [
      { name: "Microsoft Excel" }, // no logo available in this icon set
      { name: "Google Sheets", icon: SiGooglesheets, color: "#34A853" },
      { name: "Claude AI", icon: SiClaude, color: "#D97757" },
      { name: "Codex" }, // no distinct logo yet
    ],
  },
];

// Shown separately from the categories above — tools you're learning,
// not tools you'd claim proficiency in yet.
export const exploringSkills: Skill[] = [
  { name: "n8n", icon: SiN8N, color: "#EA4B71" },
  { name: "Notion", icon: SiNotion }, // black mark — inherits theme color
];

export type Project = {
  index: string;
  name: string;
  description: string;
  tags: string[];
  status?: string; // e.g. "In progress" — shown as a small badge next to the name
  href?: string;
  repoHref?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Procurement Management Information System (PMIS)",
    description:
      "A procurement platform built for the Local Government of Sorsogon, staff submit and manage procurement requests through a structured workflow, with public visibility into active procurements for transparency.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
    status: "In progress",
    // href: "", // add once there's a public URL
    repoHref: "https://github.com/sgxtract/pmis-core.git",
  },
  {
    index: "02",
    name: "Online Parking Management System (OPMS)",
    description:
      "A parking reservation system that lets users book a specific slot in advance, backed by a PHP/Laravel REST API returning JSON, consumed by a native Android app built in Java.",
    tags: ["PHP", "Laravel", "MySQL", "REST API", "JSON", "Java", "Android"], // we'll add React Native here once you confirm
    // href: "",
    repoHref: "https://github.com/sgxtract/uparking2.git",
  },
];

export const aboutStats = [
  { label: "Based in", value: "Philippines · Remote-friendly" },
  { label: "Focus", value: "Full-stack web systems" },
  { label: "Currently", value: "Building PMIS for LGU Sorsogon" },
  { label: "Stack", value: "TypeScript, Next.js, Laravel, PostgreSQL" },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/sgxtract", icon: LuGithub },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tonagnis",
    icon: LuLinkedin,
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  employmentType: string;
  location: string;
  startDate: string; // "YYYY-MM-DD"
  endDate?: string; // omit if it's your current role
  highlights: string[];
  tags?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "IT System Analyst",
    company: "Local Government of Sorsogon",
    employmentType: "Contract",
    location: "Sorsogon City, Bicol Region, Philippines",
    startDate: "2024-08-01",
    highlights: [
      "Develop and maintain web-based applications and database-driven systems for local government operations.",
      "Gather requirements from stakeholders and translate them into practical technical solutions.",
      "Own testing, debugging, and quality assurance across deployed systems.",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "PostgreSQL",
      "TailwindCSS",
      "System Administration",
    ],
  },
  {
    role: "Co-Owner / Operations & IT Support",
    company: "The Rig Builders",
    employmentType: "Self-employed",
    location: "Makati, NCR, Philippines",
    startDate: "2020-07-01",
    highlights: [
      "Co-run day-to-day business operations, staff coordination, and internal workflows.",
      "Manage the company's website, Shopify store, and core business tooling.",
    ],
    tags: ["Leadership", "Operations", "Shopify"],
  },
  {
    role: "DevOps Engineer",
    company: "Chevron Holdings Inc. (Manila Shared Services Center)",
    employmentType: "Internship",
    location: "NCR, Philippines",
    startDate: "2019-12-01",
    endDate: "2020-03-01",
    highlights: [
      "Built automated test scripts with Selenium (C#/.NET) and Worksoft Certify.",
      "Supported Selenium Grid setup and Java-based test automation.",
      "Ran automated testing across enterprise systems including SAP, Salesforce, and Maximo.",
    ],
    tags: ["Selenium", "Test Automation", "C#/.NET"],
  },
  {
    role: "Software Quality Assurance Engineer",
    company: "Samsung Electronics",
    employmentType: "Internship",
    location: "Metro Manila, Philippines",
    startDate: "2019-08-01",
    endDate: "2019-11-01",
    highlights: [
      "Developed mobile test automation scripts using Selenium and Java.",
      "Performed QA testing and documented findings across test cycles.",
    ],
    tags: ["QA", "Selenium", "Java"],
  },
];
