// Replace values in this file first when turning the placeholder portfolio into a real site.
export const profile = {
  name: "Wang Jiawei",
  headline: "Computer Engineering student @ NUS | Embedded Systems, Robotics & AI",
  intro:
    "Placeholder intro: a concise, personal opening that explains what you make, how you think, and the kind of work you want visitors to notice first.",
  bio: "[SHORT BIO] Placeholder bio: write two or three grounded sentences about your work, interests, and the problems you like solving. Keep claims specific once real details are available.",
  email: "hello@example.com",
  github: "https://github.com/wjw55",
  linkedin: "https://linkedin.com/in/yourusername",
  currently:
    "Placeholder current focus: building thoughtful web experiences, improving documentation habits, and learning one practical tool at a time.",
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" },
] as const;

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Accessibility",
  "Content design",
  "Frontend architecture",
  "Technical writing",
  "Design systems",
  "Performance",
] as const;

export const projects = [
  {
    title: "Placeholder Project: Portfolio System",
    description:
      "A static-first portfolio structure with editable content, responsive sections, and deployment-friendly defaults.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/placeholder-portfolio-system",
    liveUrl: "https://example.com/placeholder-portfolio-system",
  },
  {
    title: "Placeholder Project: Insight Dashboard",
    description:
      "A polished dashboard concept for turning small data sets into clear status, trend, and decision views.",
    stack: ["React", "Charts", "Design systems"],
    githubUrl: "https://github.com/yourusername/placeholder-insight-dashboard",
    liveUrl: "https://example.com/placeholder-insight-dashboard",
  },
  {
    title: "Placeholder Project: Notes Library",
    description:
      "A lightweight writing archive designed to grow into MDX-backed essays, bookmarks, and field notes.",
    stack: ["MDX-ready", "Content strategy", "SEO"],
    githubUrl: "https://github.com/yourusername/placeholder-notes-library",
    liveUrl: "https://example.com/placeholder-notes-library",
  },
  {
    title: "Placeholder Project: Launch Checklist",
    description:
      "A practical checklist interface for planning releases, tracking tasks, and reviewing quality gates.",
    stack: ["TypeScript", "UX writing", "Accessibility"],
    githubUrl: "https://github.com/yourusername/placeholder-launch-checklist",
    liveUrl: "https://example.com/placeholder-launch-checklist",
  },
] as const;

export const experience = [
  {
    role: "Placeholder Role",
    organization: "Placeholder Organization",
    period: "Month YYYY - Present",
    summary:
      "Replace with a short description of scope, responsibilities, and concrete outcomes once real information is available.",
  },
  {
    role: "Placeholder Previous Role",
    organization: "Placeholder Team or Company",
    period: "Month YYYY - Month YYYY",
    summary:
      "Add concise context about the work, collaborators, tools, and impact. Avoid private employment details unless you intend to publish them.",
  },
  {
    role: "Placeholder Early Experience",
    organization: "Placeholder Community, School, or Project",
    period: "Month YYYY - Month YYYY",
    summary:
      "Use this entry for earlier work, learning programs, independent projects, or volunteer experience that belongs on the public site.",
  },
] as const;

export const notes = [
  {
    title: "Placeholder Note: Designing a Useful Portfolio",
    date: "Placeholder date",
    excerpt:
      "A draft note about choosing projects, writing grounded case studies, and making a personal site easier to maintain.",
    href: "#notes",
  },
  {
    title: "Placeholder Note: Keeping Static Sites Simple",
    date: "Placeholder date",
    excerpt:
      "A short technical note about static-first architecture, local content files, and when a CMS is actually worth it.",
    href: "#notes",
  },
  {
    title: "Placeholder Note: Accessibility Checks I Reuse",
    date: "Placeholder date",
    excerpt:
      "A practical checklist for semantic structure, keyboard navigation, contrast, focus states, and readable copy.",
    href: "#notes",
  },
] as const;
