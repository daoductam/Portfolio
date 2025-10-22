import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { link } from "fs";
import { title } from "process";

const Info = {
  name: "Đào Đức Tâm",
  stack: ["Software Engineer", "Freelancer", "Backend Developer"],
  bio: "I'm a passionate third-year Software Engineering student at Hanoi University of Industry (HaUI), specializing in Java backend development. I focus on building efficient, scalable solutions and am available for freelance work, aiming to exceed expectations. Let's connect and build something great!",
};

const ProjectInfo = [
  {
    title: "Website Thương mại điện tử",
    desc: "Một trang web e-commerce được xây dựng bằng React và Node.js. Các tính năng bao gồm giỏ hàng, xác thực người dùng và cổng thanh toán (giả lập).",
    image: "/images/project-ecommerce.png", // Đường dẫn tới ảnh của bạn
    live: "https://ten-mien-demo-cua-ban.com", // Link demo trực tiếp
    technologies: ["React", "Node.js", "Express", "MongoDB", "CSS"],
    link: "", // Có thể để trống hoặc link tới bài viết mô tả chi tiết dự án
    github: "https://github.com/ten-nguoi-dung/repo-ecommerce",
  },
  {
    title: "Trang quản lý (Dashboard) Phân tích Dữ liệu",
    desc: "Một dashboard tương tác để trực quan hóa dữ liệu bán hàng. Sử dụng Python (Flask) cho backend và Chart.js để vẽ biểu đồ ở frontend.",
    image: "/images/project-dashboard.jpg",
    live: "https://ten-mien-demo-dashboard.com",
    technologies: ["Python", "Flask", "Pandas", "Chart.js", "HTML"],
    link: "",
    github: "https://github.com/ten-nguoi-dung/repo-dashboard",
  },
  {
    title: "Ứng dụng Ghi chú (Note App)",
    desc: "Một ứng dụng ghi chú đơn giản (PWA - Progressive Web App) sử dụng JavaScript thuần và LocalStorage để lưu trữ dữ liệu trực tiếp trên trình duyệt.",
    image: "/images/project-note-app.png",
    live: "https://ten-mien-demo-note-app.com",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    link: "",
    github: "https://github.com/ten-nguoi-dung/repo-note-app",
  },
  {
    title: "", // Thêm dự án của bạn ở đây
    desc: "",
    image: "",
    live: "",
    technologies: [""],
    link: "",
    github: "",
  },
  // ... các dự án khác
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Javascript", "React JS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Springboot", "MySQL", "MongoDB", "PostgresSQL"],
  },
  {
    title: "Languages",
    skills: ["Java", "Python", "Javascript", "Typescript", "C++"],
  },
  {
    title: "Tool",
    skills: ["Git", "Github", "VS Code", "Postman", "IntelliJ"],
  },
];

const socialLinks = [
  { link: "https://github.com/Code-Mars", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/chandrabhan-maurya",
    icon: IconBrandLinkedin,
  },
  { link: "https://www.instagram.com/code.marshal_", icon: IconBrandInstagram },
  {
    link: "https://www.youtube.com/channel/UC1ki6jaFvFiH_E79b9FYptw",
    icon: IconBrandYoutube,
  },
  { link: "https://www.leetcode.com/u/CodeMars", icon: IconBrandLeetcode },
];

const ExperienceInfo = [
  {
    role: "Specialist Programmer",
    company: "Infosys",
    date: "Oct 2023 - Present",
    desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
    skills: [
      "Springboot",
      "React JS",
      "Angular",
      "Node JS",
      "MySQL",
      "MongoDB",
      "Microservices",
    ],
  },
  {
    role: "System Engineer",
    company: "Infosys",
    date: "Nov 2022 - Sep 2023",
    desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
    skills: [
      "Java",
      "MySQL",
      "Hibernate",
      "Selenium",
      "Jenkins",
      "JIRA",
      "Automation Testing",
    ],
  },
];
const Slugs = [
  "typescript",
  "spring",
  "javascript",
  "dart",
  "java",
  "react",
  "angular",
  "flutter",
  "android",
  "html5",
  "css3",
  "springboot",
  "mongodb",
  "selenium",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "mysql",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };
