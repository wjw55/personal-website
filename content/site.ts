type ProjectLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export const profile = {
  name: "Wang Jiawei",
  roleLine: "Computer Engineering student at NUS",
  headline: "Building usable systems across hardware, software, and workflows.",
  valueProposition:
    "I connect embedded engineering, robotics, AI, and workflow automation to turn messy requirements into prototypes people can operate, test, and improve.",
  about:
    "I am drawn to the crossover between physical systems and software interfaces: the point where sensors, circuits, algorithms, and users all have to cooperate. My best work starts with a concrete problem, then moves through fast prototypes, careful constraints, and interfaces that make the system easier to use.",
  aboutFocus:
    "At NUS, I am building a foundation in computer engineering while exploring embedded systems, FPGA design, robotics, AI applications, and product-minded engineering. I care about systems that are technically solid and understandable to the people who depend on them.",
  email: "E1398498@u.nus.edu",
  github: "https://github.com/wjw55",
  linkedin: "https://linkedin.com/in/jiawei-wang-3878a9336",
  contactIntro:
    "Open to internship conversations, research opportunities, collaborations, and practical engineering projects.",
  currentStatus: {
    label: "Currently",
    title: "Workflow Automation Intern at MPA",
    description:
      "Building low-code workflow automations, intake portals, and validation logic for clearer digital processes.",
  },
} as const;

export const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
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
    category: "FPGA systems",
    problem:
      "Explore how a hardware-based calculator can support multiple interaction modes and computation types on a constrained FPGA platform.",
    built:
      "Implemented a Basys 3 FPGA calculator with OLED output, mouse input, arithmetic and bitwise operations, differentiation, and linear algebra functions.",
    highlights: [
      "Managed system-level integration across display, input, computation, and peripheral control.",
      "Designed logic around FPGA constraints rather than relying on a general-purpose runtime.",
      "Worked through hardware/software boundary decisions for a more interactive calculator experience.",
    ],
    stack: ["Verilog", "Basys 3 FPGA", "OLED", "PS/2 mouse"],
    links: [] as ProjectLink[],
    linkNote: "Private / case study coming soon",
  },
  {
    title: "OPTIMEAL: AI-Powered Meal Planning Web App",
    period: "May 2025 - Aug 2025",
    category: "AI web app",
    problem:
      "Make meal planning less fragmented by combining recipe ideas, grocery planning, and user preferences in one web experience.",
    built:
      "Built a Next.js app with authentication, a meal-planning dashboard, grocery list flows, and AI-assisted recipe generation.",
    highlights: [
      "Structured a full-stack React experience around practical planning workflows.",
      "Integrated Firebase and server-side Node.js logic with AI generation features.",
      "Designed dashboard and intake flows to keep the planning loop clear for users.",
    ],
    stack: ["React", "Next.js", "Firebase", "Node.js", "OpenAI API"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/wjw55/optimeal",
        ariaLabel: "Open the OPTIMEAL GitHub repository",
      },
    ],
    linkNote: "Live demo not published",
  },
  {
    title: "SLAM-Based Autonomous Rescue Robot",
    period: "Jan 2025 - May 2025",
    category: "Robotics",
    problem:
      "Coordinate sensing, navigation, and remote operation for a rescue robot working in a simulated lunar environment.",
    built:
      "Built a Raspberry Pi and Arduino Mega robot for SLAM-based navigation, astronaut identification, and timed extraction tasks.",
    highlights: [
      "Programmed real-time control in C/C++ and higher-level navigation logic in Python.",
      "Integrated serial communication across multiple sensors and controllers.",
      "Balanced navigation, identification, and extraction behavior under tight system constraints.",
    ],
    stack: ["C/C++", "Python", "Raspberry Pi", "Arduino Mega", "SLAM"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/wjw55/CG2111A_Alex",
        ariaLabel: "Open the SLAM rescue robot GitHub repository",
      },
    ],
    linkNote: "Case study coming soon",
  },
] as const;

export const experience = [
  {
    role: "Workflow Automation Intern",
    organization: "Maritime and Port Authority of Singapore (MPA)",
    period: "May 2026 - Present",
    summary:
      "Building workflow automation prototypes that translate SOP-heavy processes into clearer digital request paths.",
    highlights: [
      "Mapped manual steps into low-code workflows with explicit states, approvals, and intake rules.",
      "Implemented conditional form behavior and server-side JavaScript validation for cleaner request routing.",
      "Supported portal migration planning by organizing content relationships and access-role assumptions at a high level.",
      "Worked with cross-functional teams to clarify requirements and turn business logic into proof-of-concept automations.",
    ],
  },
  {
    role: "Research Assistant",
    organization: "iHealthtech, National University of Singapore",
    period: "Aug 2025 - Present",
    summary:
      "Undergraduate Research Opportunities Program role focused on wearable sensing for heat stress assessment.",
    highlights: [
      "Prototyped embedded sensing modules for wireless, multi-site data collection.",
      "Designed compact PCB layouts and assembled miniaturized sensor modules with microsoldering.",
      "Integrated embedded components and wireless sensing workflows for research testing.",
    ],
  },
  {
    role: "Captain",
    organization: "NUS Raffles Hall Squash Team",
    period: "Mar 2025 - Present",
    summary:
      "Leading training routines and representing Raffles Hall in inter-hall competition.",
    highlights: [
      "Led weekly training sessions with consistent practice structure and preparation.",
      "Supported team cohesion through competition planning and shared accountability.",
    ],
  },
] as const;
