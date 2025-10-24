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
    title: "Hệ thống Quản lý Bệnh viện (HMS - Microservices)",
    desc: "Xây dựng hệ thống quản lý bệnh viện đa người dùng (Admin, Bác sĩ, Bệnh nhân) theo kiến trúc microservices. Backend bao gồm các service riêng biệt cho User, Profile, Appointment, Pharmacy, Media, được quản lý bởi Eureka Server và API Gateway. Frontend React cung cấp giao diện dashboard và chức năng tương ứng cho từng vai trò.",
    image: "image/MS.png", // Thay bằng đường dẫn ảnh của bạn
    live: "", // Thêm link demo (nếu có)
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Cloud (Eureka, Gateway)",
      "Spring Security",
      "JWT",
      "Spring Data JPA",
      "MySQL",
      "Feign Client",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Axios",
      "Mantine UI",
      "Tailwind CSS",
    ],
    link: "", // Thêm link demo
    github: "https://github.com/daoductam/hms-backend", // Link repo backend HMS
  },
  {
    title: "Ứng dụng Chat Real-time",
    desc: "Xây dựng ứng dụng chat full-stack (Java Spring Boot + React) hỗ trợ chat chung (public) và chat riêng tư (1-1) qua WebSocket. Tích hợp xác thực JWT, quản lý trạng thái online của người dùng và lưu trữ lịch sử tin nhắn.tend)",
    image: "image/chat.png", // Thay bằng đường dẫn ảnh của bạn
    live: "",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "WebSocket",
      "STOMP",
      "Spring Data JPA",
      "MySQL",
      "React",
      "React Hooks",
      "React Router",
      "Axios",
      "StompJS",
      "SockJS",
      "Docker",
    ],
    link: "https://chat-app-4-uji1.onrender.com",
    github: "https://github.com/daoductam/chat-app",
  },
  {
    title: "Hệ thống Bán vé Tàu hỏa (Desktop App)",
    desc: "Ứng dụng desktop (Java Swing) quản lý hệ thống bán vé tàu Metro. Cho phép quản lý người dùng, hành khách, vé tàu, tuyến đường (lines) và nhà ga (stations). Kết nối cơ sở dữ liệu MySQL bằng JDBC.",
    image: "image/ticket-train.png", // Thay bằng đường dẫn ảnh của bạn
    live: "", // Để trống vì là ứng dụng desktop
    technologies: [
      "Java",
      "Swing", // Thư viện UI Desktop
      "JDBC", // Kết nối DB
      "MySQL",
    ],
    link: "", // Để trống
    github: "https://github.com/daoductam/ticket-train-system", // Lấy từ tên repo
  },

  // ... các dự án khác
];

const SkillInfo = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "TypeScript", "Javascript"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Spring Boot",
      "Spring Cloud",
      "Spring Security",
      "React",
      "Redux Toolkit",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "Linux", "Jira"],
  },
  {
    title: "Others",
    skills: ["Kafka", "Redis", "RESTFUL API", "OOP"],
  },
];
const socialLinks = [
  { link: "https://github.com/daoductam", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/t%C3%A2m-%C4%91%E1%BB%A9c-%C4%91%C3%A0o-084a5431b/",
    icon: IconBrandLinkedin,
  },
  {
    link: "https://www.youtube.com/@HocCungTam",
    icon: IconBrandYoutube,
  },
  { link: "https://leetcode.com/u/Vibfm91sXV/", icon: IconBrandLeetcode },
];

const ExperienceInfo = [
  {
    role: "Freelancer", // Cập nhật vai trò
    company: "Team Project - Loyalty Program", // Cập nhật để phản ánh là dự án nhóm/freelance
    date: "6/2025 - 9/2025", // Bạn cần điền khoảng thời gian cụ thể (ví dụ: "Jun 2024 - Jul 2024")
    desc: "Tham gia phát triển hệ thống quản lý khách hàng thân thiết (Loyalty Program) với vai trò Freelancer trong team. Hệ thống bao gồm đăng ký/đăng nhập (JWT & OTP), quản lý thông tin người dùng (upload avatar qua MinIO), tạo/thanh toán đơn hàng, tích điểm, và theo dõi đơn hàng. Chịu trách nhiệm triển khai các API RESTful, áp dụng clean code, ACID, Idempotency, audit logging (MongoDB), quản lý secrets (Vault), và đóng gói Docker. Thực hiện tối ưu hóa truy vấn SQL và viết Unit Test (>80% coverage) cho module tích điểm.", // Điều chỉnh mô tả
    skills: [
      "Java",
      "Spring Boot 3",
      "Spring Security (JWT)",
      "Spring Data JPA",
      "PostgreSQL",
      "Docker",
      "MinIO",
      "SMTP",
      "MongoDB",
      "Vault",
      "REST API",
      "Kafka",
      "Redis",
      "Unit Testing", // JUnit (suy luận)
      "SQL Optimization",
      "Design Patterns (Factory, Singleton)",
      "Jira", // Quản lý dự án
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
