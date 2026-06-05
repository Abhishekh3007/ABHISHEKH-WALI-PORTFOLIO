import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "dlithe",
    companyName: "Dlithe Consultancy Services Pvt. Ltd.",
    companyLogo:
      "https://ui-avatars.com/api/?name=Dlithe&background=6366F1&color=fff&size=200",
    positions: [
      {
        id: "dlithe-se-mentor",
        title: "Software Engineer & Mentor",
        employmentPeriod: {
          start: "04.2026",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Mentoring **120+ engineering students** in full-stack development, guiding them through real-world project building and industry best practices.
- Leading **R&D initiatives** to explore and integrate emerging technologies into internal tooling and training programs.
- Building **automation solutions** to streamline internal workflows and improve operational efficiency.
- Engineering **scalable systems** using React.js, Node.js, PostgreSQL, and cloud services.
- Conducting **technical workshops** on modern web development, API design, and deployment strategies.`,
        skills: [
          "React.js",
          "Node.js",
          "PostgreSQL",
          "Mentoring",
          "R&D",
          "Automation",
          "Technical Workshops",
          "Full-Stack Development",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
    theme: true,
  },
  {
    id: "arkacretos",
    companyName: "ArkaCreatos Pvt. Ltd.",
    companyLogo:
      "https://ui-avatars.com/api/?name=ArkaCreatos&background=10B981&color=fff&size=200",
    positions: [
      {
        id: "arkacretos-asd",
        title: "Associate Software Developer",
        employmentPeriod: {
          start: "07.2025",
          end: "03.2026",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Delivered **medical image analysis modules** for healthcare clients, processing diagnostic imaging data with high accuracy.
- Reduced **API latency by 35%** through PostgreSQL query optimization and caching strategies.
- Collaborated in **Agile development** workflows with cross-functional teams for iterative delivery.
- Managed **production deployments** ensuring system reliability and minimal downtime.
- Built and maintained **RESTful APIs** using Node.js and Express.js for backend services.`,
        skills: [
          "React.js",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "REST APIs",
          "Agile",
          "Medical Image Analysis",
          "Production Deployments",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "kle-mca",
        title: "KLE Technological University",
        employmentPeriod: {
          start: "2023",
          end: "2025",
        },
        icon: "education",
        description: `- Master of Computer Applications (MCA)
- CGPA: **8.95**
- Focused on advanced software engineering, AI/ML, and distributed systems.`,
        skills: [
          "Software Engineering",
          "AI/ML",
          "Distributed Systems",
          "Data Structures & Algorithms",
          "Database Management",
        ],
      },
      {
        id: "gogte-bca",
        title: "Gogte College of Commerce",
        employmentPeriod: {
          start: "2020",
          end: "2023",
        },
        icon: "education",
        description: `- Bachelor of Computer Applications (BCA)
- CGPA: **8.50**
- Strong foundation in programming, web development, and computer science fundamentals.`,
        skills: [
          "Java",
          "Web Development",
          "Programming Fundamentals",
          "Database Management",
          "Computer Networks",
        ],
      },
    ],
  },
];
