import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "codeclarity",
    title: "CodeClarity - AI-Powered Code Review Platform",
    period: { start: "2026" },
    link: "https://github.com/Abhishekh3007/CodeClarity",
    skills: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "GitHub OAuth",
      "OpenAI",
      "Claude",
    ],
    isExpanded: true,
    description: `An AI-powered code review platform for automated repository analysis and pull request reviews.
- AI-powered code reviews using **OpenAI** and **Claude** APIs
- **Repository analysis** and pull request review automation
- **GitHub OAuth** integration for seamless authentication
- CI/CD pipeline with **Prometheus** and **Grafana** monitoring
- Containerized with **Docker** for consistent deployments`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=CodeClarity",
  },
  {
    id: "smartdine",
    title: "SmartDine - QR-Based Digital Menu System",
    period: { start: "2025" },
    link: "https://smartdine.onrender.com",
    skills: ["React.js", "Node.js", "MongoDB", "QR Integration", "Render"],
    isExpanded: true,
    description: `A digital menu platform for restaurants with QR-based ordering and real-time management.
- **QR-based ordering** system for contactless dining experience
- **Real-time menu updates** for restaurant management
- Restaurant management dashboard with analytics
- Deployed on **Render** for production availability

**Live Demo:** [SmartDine](https://smartdine.onrender.com)`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=SmartDine",
  },
  {
    id: "seed-germination-yolo",
    title: "Seed Germination Analysis using YOLO",
    period: { start: "2025" },
    link: "https://github.com/Abhishekh3007",
    skills: ["Python", "YOLO", "Computer Vision", "Deep Learning"],
    description: `A research project using YOLO object detection for automated seed germination analysis.
- **Seed germination detection** using YOLO object detection model
- **Automated grading** system for germination quality assessment
- Applied **computer vision** and **deep learning** for agricultural AI
- Research-oriented project with practical agricultural applications`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Seed+Germination+YOLO",
  },
];
