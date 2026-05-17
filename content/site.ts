type ProjectLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

type ProjectCaseStudyItem = {
  label: string;
  text: string;
};

type ProjectVisual = {
  status: string;
  title: string;
  caption: string;
};

export const profile = {
  name: "Wang Jiawei",
  heroGreeting: "Hi, I’m Jiawei Wang.",
  roleLine: "Computer Engineering student at NUS",
  headline:
    "Computer Engineering student building practical systems across embedded hardware, robotics, and AI-enabled software.",
  valueProposition:
    "I like turning messy real-world workflows into prototypes that are understandable, testable, and useful.",
  about:
    "I’m interested in the places where physical systems meet software: sensors, circuits, algorithms, interfaces, and the humans trying to use them.",
  aboutFocus:
    "At NUS, I’m building a computer engineering foundation while working on embedded systems, robotics, FPGA design, AI web apps, and workflow automation.",
  email: "E1398498@u.nus.edu",
  github: "https://github.com/wjw55",
  linkedin: "https://linkedin.com/in/jiawei-wang-3878a9336",
  // TODO: add the PDF at public/resume/Wang_Jiawei_Resume.pdf.
  resumeHref: "/resume/Wang_Jiawei_Resume.pdf",
  contactIntro:
    "Open to internships, research opportunities, and practical engineering projects across embedded systems, robotics, AI tools, and workflow automation.",
  currentStatus: {
    label: "Currently",
    summary:
      "Splitting my time between workflow automation, wearable sensing research, and computer engineering coursework.",
    items: [
      {
        label: "Internship",
        title: "Workflow Automation Intern at MPA",
        detail: "Low-code workflows, intake forms, validation logic",
      },
      {
        label: "Research",
        title: "Research Assistant at iHealthtech, NUS",
        detail: "Wearable sensing, embedded modules, PCB layouts",
      },
      {
        label: "Study",
        title: "Computer Engineering student at NUS",
        detail: "Embedded systems, robotics, FPGA, AI/web apps",
      },
    ],
  },
} as const;

export const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Resume", href: profile.resumeHref },
  { label: "Contact", href: "#contact" },
] as const;

export const skills = [
  "C/C++",
  "Python",
  "JavaScript",
  "React",
  "Next.js",
  "Firebase",
  "Firestore",
  "OpenRouter",
  "LLM API integration",
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

export const skillGroups = [
  {
    title: "Embedded & Hardware",
    skills: [
      "C/C++",
      "Verilog (HDL)",
      "FPGA design",
      "Arduino",
      "Raspberry Pi",
      "STM32",
      "ESP32",
      "PCB design",
    ],
  },
  {
    title: "Software & AI",
    skills: [
      "Python",
      "JavaScript",
      "React",
      "Next.js",
      "Firebase",
      "Firestore",
      "OpenRouter",
      "LLM API integration",
      "Git/GitHub",
    ],
  },
  {
    title: "Product & Workflow",
    skills: [
      "Workflow automation",
      "UI/UX prototyping",
      "Requirements gathering",
      "Validation logic",
      "Low-code workflows",
    ],
  },
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
    title: "OPTIMEAL: AI-Powered Meal Planning Web App",
    period: "May 2025 - Aug 2025",
    category: "AI web app",
    summary:
      "A React and Firebase meal-planning app for preference intake, AI-generated weekly plans, nutrition views, grocery lists, and saved recipes.",
    role: "Built core web-app flows across authentication, profile preferences, meal-plan generation, grocery management, and recipe storage.",
    challenge:
      "Turn user profile data into reliable AI prompts, parse structured model output, and persist plans in Firebase for repeat use.",
    caseStudy: [
      {
        label: "What I built",
        text: "Auth-backed dashboard, preference intake, weekly meal-plan generation, nutrition summaries, grocery workflow, and recipe storage.",
      },
      {
        label: "Constraints",
        text: "AI responses needed strict JSON parsing, fallback handling, and a simple user flow that kept meal planning understandable.",
      },
      {
        label: "Technical surface",
        text: "React Router, Firebase Auth, Firestore, OpenRouter chat completions, and a DeepSeek R1 model.",
      },
    ] satisfies readonly ProjectCaseStudyItem[],
    stack: ["React", "Firebase Auth", "Firestore", "OpenRouter", "DeepSeek R1"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/wjw55/optimeal",
        ariaLabel: "Open the OPTIMEAL GitHub repository",
      },
      {
        label: "Live App",
        href: "https://optimeal-bbabb.web.app/",
        ariaLabel: "Open the deployed OPTIMEAL app in a new tab",
      },
    ] as ProjectLink[],
    linkNote: "Public repo and deployed app",
    visual: {
      status: "Dashboard screenshot",
      title: "OPTIMEAL planning hub",
      caption:
        "Weekly meal-plan dashboard with nutrition targets, grocery counts, and generated plan status.",
    } satisfies ProjectVisual,
  },
  {
    title: "FPGA-Based Multifunctional Calculator",
    period: "Sep 2025 - Nov 2025",
    category: "FPGA systems",
    summary:
      "A constrained hardware calculator with OLED and mouse input, designed around FPGA logic rather than a general-purpose runtime.",
    role: "Implemented the calculator logic and integrated display, input, computation, and peripheral-control surfaces on a Basys 3 FPGA.",
    challenge:
      "Coordinate OLED output, PS/2 mouse input, arithmetic and bitwise operations, differentiation, and linear algebra within FPGA constraints.",
    caseStudy: [
      {
        label: "What I built",
        text: "Basys 3 FPGA calculator with OLED output, mouse input, arithmetic and bitwise operations, differentiation, and linear algebra functions.",
      },
      {
        label: "Constraints",
        text: "State, UI feedback, computation, and peripheral behavior had to be handled in a hardware-centric implementation.",
      },
      {
        label: "Technical surface",
        text: "Verilog modules spanning display control, input handling, calculator state, and operation logic. Code is private.",
      },
    ] satisfies readonly ProjectCaseStudyItem[],
    stack: ["Verilog", "Basys 3 FPGA", "OLED", "PS/2 mouse"],
    links: [] as ProjectLink[],
    linkNote: "Private code / case-study preview",
    // TODO: add FPGA calculator architecture diagram or hardware demo image.
    visual: {
      status: "Hardware demo image",
      title: "Basys 3 + OLED proof area",
      caption:
        "Board photo, OLED output, mouse interaction, or architecture diagram.",
    } satisfies ProjectVisual,
  },
  {
    title: "SLAM-Based Autonomous Rescue Robot",
    period: "Jan 2025 - May 2025",
    category: "Robotics",
    summary:
      "A rescue robot prototype coordinating Raspberry Pi, Arduino Mega, serial communication, sensors, navigation, and extraction behavior.",
    role: "Integrated control and navigation behavior across Raspberry Pi, Arduino Mega, sensors, and serial communication.",
    challenge:
      "Keep sensing, navigation, identification, and extraction behavior coordinated across separate controllers under system constraints.",
    caseStudy: [
      {
        label: "What I built",
        text: "Robot software and integration paths for SLAM-based navigation, astronaut identification, and timed extraction tasks.",
      },
      {
        label: "Constraints",
        text: "The system had to balance sensor input, serial communication, real-time control, and higher-level navigation decisions.",
      },
      {
        label: "Technical surface",
        text: "Python navigation logic, C/C++ control code, Raspberry Pi, Arduino Mega, sensors, and serial communication.",
      },
    ] satisfies readonly ProjectCaseStudyItem[],
    stack: [
      "C/C++",
      "Python",
      "Raspberry Pi",
      "Arduino Mega",
      "Serial communication",
      "SLAM",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/wjw55/CG2111A_Alex",
        ariaLabel: "Open the SLAM rescue robot GitHub repository",
      },
    ] as ProjectLink[],
    linkNote: "Public repository available",
    // TODO: add rescue robot photo.
    visual: {
      status: "Robot system photo",
      title: "Robot build proof area",
      caption: "Robot photo, wiring, sensor setup, or field-test view.",
    } satisfies ProjectVisual,
  },
] as const;

export const robotSystemDiagram = [
  {
    label: "Sensors / LiDAR / Camera",
    description: "Collects distance and environment data for navigation.",
  },
  {
    label: "Raspberry Pi",
    description: "Runs higher-level logic, mapping, and decision-making.",
  },
  {
    label: "Serial Communication",
    description: "Passes commands between compute and control layers.",
  },
  {
    label: "Arduino Mega",
    description: "Handles motor control and hardware actuation.",
  },
  {
    label: "Motors / Arm / Dispenser",
    description: "Executes movement, extraction, and delivery actions.",
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
      "Translated manual intake paths into low-code workflows with explicit approval states, routing, and validation rules.",
      "Built conditional forms and server-side JavaScript checks to make request data clearer before review.",
      "Clarified requirements with stakeholders and converted process logic into proof-of-concept automations.",
      "Organized portal migration assumptions around content relationships, roles, and access paths.",
      // TODO: add true counts later, such as number of workflows, forms, approval paths, or users supported.
    ],
  },
  {
    role: "Research Assistant",
    organization: "iHealthtech, National University of Singapore",
    period: "Aug 2025 - Present",
    summary:
      "Undergraduate Research Opportunities Program role focused on wearable sensing for heat stress assessment.",
    highlights: [
      "Prototyped embedded wearable sensing modules for wireless, multi-site data collection.",
      "Designed compact PCB layouts and assembled miniaturized sensor modules with microsoldering.",
      "Integrated sensor, power, and wireless components into research prototypes for testing workflows.",
      // TODO: add true counts later, such as number of boards, prototypes, or test iterations.
    ],
  },
  {
    role: "Captain",
    organization: "NUS Raffles Hall Squash Team",
    period: "Mar 2025 - Present",
    summary:
      "Leading training routines and representing Raffles Hall in inter-hall competition.",
    highlights: [
      "Set weekly training structure and practice expectations for the team.",
      "Coordinated competition preparation, communication, and shared accountability.",
    ],
  },
] as const;
