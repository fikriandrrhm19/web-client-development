import {
  Figma,
  GitBranch,
  Database,
  Server,
  Cloud,
  Code,
  AppWindow,
  Layout,
  Atom,
  Palette,
  FileText,
  LifeBuoy,
  Settings,
  Search,
  Globe,
  Monitor,
  Container,
  ClipboardList,
  Terminal
} from 'lucide-react';

export const techIcons = {
  Linux: Terminal,
  Figma: Figma,
  Git: GitBranch,
  SQL: Database,
  Nginx: Server,
  Docker: Container,
  Bash: Code,
  React: Atom,
  TailwindCSS: Palette,
  UIUX: Layout,
  WebDevelopment: AppWindow,
  LifeBuoy: LifeBuoy,
  Markdown: FileText,
  SEO: Search,
  WordPress: Globe,
  Strapi: Database,
  "Control Panel": Settings,
  VPS: Monitor,
  "Server Service": Server,
  "Internal Wiki": ClipboardList,
  "Cloud Hosting": Cloud
};

export const whatIDo = [
  {
    id: "what-i-do-1",
    title: "Linux System Management",
    icon: "Server Service",
    points: [
      "Managing and securing Linux-based servers for web, mail, and database hosting",
      "Configuring control panels, DNS, SSL, and performance tuning",
      "Implementing basic monitoring, backups, and automation scripts"
    ],
    technologies: ["Linux", "VPS", "Nginx", "SQL", "Bash", "Control Panel"]
  },
  {
    id: "what-i-do-2",
    title: "UX Design & Front-End Development",
    icon: "WebDevelopment",
    points: [
      "Designing user-centric interfaces focused on clarity and responsiveness",
      "Translating wireframes into interactive, accessible layouts",
      "Exploring Tailwind and React for modern UI implementation"
    ],
    technologies: ["Figma", "TailwindCSS", "React", "Git"]
  },
  {
    id: "what-i-do-3",
    title: "Technical Documentation & Support",
    icon: "LifeBuoy",
    points: [
      "Writing clear and structured KB articles and tutorials",
      "Providing technical support and problem-solving guidance",
      "Bridging user needs and technical solutions"
    ],
    technologies: ["Markdown", "SEO", "WordPress", "Strapi", "Internal Wiki"]
  },
];