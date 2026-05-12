type ProjectLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export const profile = {
  name: "Wang Jiawei",
  headline:
    "Computer Engineering student at NUS building embedded systems, robotics, AI, and workflow automation.",
  intro:
    "I am a Computer Engineering student at the National University of Singapore with a second major in Innovation and Design. My work spans workflow automation at MPA, wearable sensing research at iHealthtech, and hands-on FPGA, robotics, and full-stack AI projects.",
  bio: "I enjoy translating complex requirements into systems people can actually use, from low-code workflow portals and server-side JavaScript filters to embedded sensor networks and autonomous robots. At NUS, I pair hardware fundamentals with product-minded design, using projects as a way to learn across electronics, software, and human workflows.",
  email: "E1398498@u.nus.edu",
  github: "https://github.com/wjw55",
  linkedin: "https://linkedin.com/in/jiawei-wang-3878a9336",
  currently:
    "Workflow Automation Intern at the Maritime and Port Authority of Singapore, building digitized SOP workflows, intake portals, and integration-ready automation proofs of concept.",
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const skills = [
  "C/C++",
  "Python",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Firebase",
  "OpenAI API",
  "Verilog (HDL)",
  "FPGA design",
  "Arduino",
  "Raspberry Pi",
  "STM32",
  "ESP32",
  "PCB design",
  "Workflow automation",
  "UI/UX prototyping",
  "Requirements gathering",
  "Git/GitHub",
  "Linux/Unix",
] as const;

export const education = [
  {
    degree: "B.Eng. in Computer Engineering",
    institution: "National University of Singapore",
    period: "Aug 2024 - Expected Jul 2028",
    details: ["Second Major in Innovation and Design", "GPA: 4.39/5"],
  },
  {
    degree: "GCE A-Level: AAB/A",
    institution: "Nanyang Junior College",
    period: "Jan 2020 - Dec 2021",
    details: [],
  },
] as const;

export const projects = [
  {
    title: "FPGA-Based Multifunctional Calculator",
    period: "Sep 2025 - Nov 2025",
    description:
      "Engineered a multifunctional calculator on a Basys 3 FPGA, integrating an OLED screen and mouse interface for arithmetic, bitwise operations, differentiation, and linear algebra.",
    stack: ["Verilog", "Basys 3 FPGA", "OLED", "PS/2 mouse"],
    links: [] as ProjectLink[],
  },
  {
    title: "OPTIMEAL: AI-Powered Meal Planning Web App",
    period: "May 2025 - Aug 2025",
    description:
      "Built an AI-powered meal planning web app with authentication, a planning dashboard, grocery list features, and AI recipe generation.",
    stack: ["React", "Next.js", "Firebase", "Node.js", "OpenAI API"],
    links: [] as ProjectLink[],
  },
  {
    title: "SLAM-Based Autonomous Rescue Robot",
    period: "Jan 2025 - May 2025",
    description:
      "Built a remotely operated rescue robot using Raspberry Pi and Arduino Mega for SLAM-based navigation, astronaut identification, and timed extractions in a lunar simulation.",
    stack: ["C/C++", "Python", "Raspberry Pi", "Arduino Mega", "SLAM"],
    links: [] as ProjectLink[],
  },
] as const;

export const experience = [
  {
    role: "Workflow Automation Intern",
    organization: "Maritime and Port Authority of Singapore (MPA)",
    period: "May 2026 - Present",
    summary:
      "Architecting low-code workflow automations and user intake portals that translate manual SOPs into digitized service flows.",
    highlights: [
      "Designed dynamic front-end intake portals with conditional logic to streamline service requests and improve user experience.",
      "Engineered custom server-side JavaScript filtering logic to query databases, validate data inputs, and protect front-end data integrity.",
      "Supported migration from a legacy intranet to a centralized portal by mapping data relationships and user access roles.",
      "Collaborated with HR, Corporate Communications, and Hydrographic stakeholders to define business logic, map workflow requirements, and deliver technical proof of concepts.",
    ],
  },
  {
    role: "Research Assistant",
    organization: "iHealthtech, National University of Singapore",
    period: "Aug 2025 - Present",
    summary:
      "Undergraduate Research Opportunities Program role focused on a wireless, multi-site wearable sensor network for heat stress assessment.",
    highlights: [
      "Designed and prototyped embedded sensing modules for wireless data collection.",
      "Handled custom PCB design in Fusion 360 Electronics, microsoldering, and circuit assembly for miniaturized sensor modules.",
      "Gained hands-on experience with embedded systems and wireless sensor integration.",
    ],
  },
  {
    role: "Captain",
    organization: "NUS Raffles Hall Squash Team",
    period: "Mar 2025 - Present",
    summary:
      "Leading weekly training sessions and representing Raffles Hall in inter-hall competitions.",
    highlights: [
      "Supported team cohesion and performance through regular training and competition preparation.",
    ],
  },
] as const;
