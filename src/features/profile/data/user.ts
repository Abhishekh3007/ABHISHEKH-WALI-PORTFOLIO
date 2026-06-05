import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Abhishek",
  lastName: "Wali",
  displayName: "Abhishek Wali",
  username: "abhishekwali",
  gender: "male",
  pronouns: "he/him",
  bio: "Software Engineer | Full-Stack Developer | Mentor",
  timeZone: "Asia/Kolkata",
  flipSentences: [
    "Software Engineer",
    "Full-Stack Developer",
    "Mentor",
    "AI Enthusiast",
  ],
  address: "Belgaum, Karnataka, India",
  phoneNumber: "",
  secondPhoneNumber: "",
  email: "d2FsaWFiaGlzaGVrMTIwQGdtYWlsLmNvbQ==", // base64 encoded waliabhishek120@gmail.com
  website: "https://abhishekwali.dev",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Software Engineer & Mentor At",
      company: "Dlithe Consultancy Services",
      website: "https://dlithe.com",
    },
  ],
  about: `
- **Software Engineer & Mentor** with experience building scalable full-stack applications, AI-powered systems, and automation tools.
- Expertise in **React.js**, **Node.js**, **PostgreSQL**, **MongoDB**, **Java**, and **AI integrations** including OpenAI and Claude APIs.
- Currently mentoring **120+ engineering students** at Dlithe Consultancy Services, leading R&D initiatives, and engineering scalable production systems.
- Previously delivered **medical image analysis modules** at ArkaCreatos, reduced API latency by **35%** through PostgreSQL optimization, and shipped production deployments in Agile workflows.
- Creator of [CodeClarity](https://github.com/Abhishekh3007/CodeClarity): AI-powered code review platform
  - Built with **React.js**, **Node.js**, **PostgreSQL**, **Redis**, **Docker**
  - GitHub OAuth integration, pull request review automation, CI/CD with Prometheus and Grafana
- **Passionate** about building production-grade systems, mentoring the next generation of engineers, and exploring AI automation pipelines.
- **Mission:** Creating impactful software solutions while empowering engineering students through hands-on mentorship.
`,
  avatar: "/images/me.png", // updated to brand avatar
  ogImage: "/images/og-image-light.png", // TODO_REPLACE_PROFILE_IMAGE
  namePronunciationUrl: "",
  keywords: [
    "abhishek wali",
    "abhishekwali",
    "software engineer",
    "full stack developer",
    "react developer",
    "node.js developer",
    "java developer",
    "ai developer",
    "mentor",
    "postgresql",
    "mongodb",
    "belgaum",
  ],
  dateCreated: "2026-06-05",
};
