import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wartafenoImg from "@/public/images/project/wartefeno/1.png";
import siakadImg from "@/public/images/project/siakad/1.png";
import amikomImg from "@/public/images/project/amikom/1.png";
import hrtoolsImg from "@/public/images/project/hr-tools/1.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const experiencesData = [
  {
    title: "IT Assistant",
    location: "PT Bank Rakyat Indonesia (Branch Office Jakarta Fatmawati)",
    description:
      "Responsible for the implementation, maintenance, and management of information technology and network systems, ensuring smooth operations and optimal system performance 24/7. Proactively monitor telecommunication networks and e-channel systems to detect and resolve issues quickly, increasing network uptime by up to 99.9%. Manage and implement IT infrastructure that includes telecommunication networks, e-channel systems, and installation and maintenance of CCTV systems to support the company's operational security and ensure optimal device availability. Implement regular backup procedures on the master system and data of electronic banking devices, ensuring operational continuity by reducing the risk of data loss and system downtime to 0%. Provides IT help desk support to handle technical issues and system and network related questions, resolving more than 100 cases per month with a user satisfaction rate above 95%.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023 - Present",
  },
  {
    title: "Junior Staff IT",
    location: "Junior High School Muhammadiyah 29",
    description:
      "Designing and developing a website-based accreditation document archiving system, which facilitates the management of more than 100 accreditation documents and school documents. Develop and implement a website-based exam system that allows online exams for more than 200 participants in one exam session, with an exam success rate of 99%, as well as zero downtime during the exam. Manage the creation and maintenance of the school profile website, presenting content information that includes history, curriculum, extracurricular activities, and school facilities. Contributed to the development of creative content, including graphic design, promotional videos, and engaging written content for the school website, which helped increase visitor engagement by 40% based on website visitor analytics.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - Jun 2023",
  },
  {
    title: "Event Coordinator",
    location: "Layanan Psikologi Penjurusan & Karir",
    description:
      "Responsible for every event organized. Arrange the event schedule and assign tasks to team members. Coordinate with all parties involved in the event. Ensure that the event runs smoothly and according to the planned schedule.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2022 - Des 2022",
  },
  {
    title: "IT Support Event",
    location: "Layanan Psikologi Penjurusan & Karir",
    description:
      "Responsible for the technical success of events, ensuring that the technological infrastructure functioned at 100%. Planned and organized detailed event schedules and assigned appropriate tasks to IT team members and other teams. Communicated effectively with all relevant parties, including event organizers, vendors, and participants, to ensure all technical needs were met. Monitored events live and quickly responded to any technical issues or challenges that arose to ensure the smooth running and success of the events.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2021 - Desc 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Filament CRUD",
    description:
      "I developed a simple project with CRUD (Create, Read, Update, Delete) functionality using Laravel as the backend framework and Filament as the administrative interface. In this project, I utilized Laravel's strengths for data management and business logic, as well as Filament's advantages in creating an intuitive and responsive interface. The project was designed with clean, structured code, optimizing Laravel’s architecture and the ease of Filament integration. As a result, this administrative application is efficient, flexible, and easy to expand further.",
    screenshots: [
      "images/project/cekresi/1.png",
      "images/project/cekresi/3.png",
      "images/project/cekresi/4.png",
      "images/project/cekresi/2.png",
      "images/project/cekresi/6.png",
    ],
    image: "images/project/cekresi/1.png",
    tech: [ ],
    demoUrl: null,
    githubUrl: "https://github.com/azrielarhn",
    features: [],
    languages: ["Laravel 10", "Filament", "MYSQL 8.0",],
  },
  {
    title: "Iventory",
    description:
      "I developed an inventory application project using Laravel, Bootstrap, PHP, and jQuery. This application is equipped with various features to facilitate stock management and product transactions, offering an intuitive and responsive interface. It is ideal for companies that require efficient, flexible, and user-friendly inventory management. With its advanced features and benefits, this application can help enhance productivity and operational efficiency.",
    screenshots: [
      "images/project/ikanme/1.png",
      "images/project/ikanme/2.png",
      "images/project/ikanme/3.png",
      "images/project/ikanme/4.png",
      "images/project/ikanme/5.png",
      "images/project/ikanme/6.png",
      "images/project/ikanme/7.png",
    ],
    image: "images/project/ikanme/1.png",
    tech: [ ],
    demoUrl: null,
    githubUrl: "https://github.com/azrielarhn",
    features: [
      "Dashboard: Displays a summary of important information in one view",
      "Product Type: Manages categories or types of available products",
      "Unit of Measurement: Stores units of measurement, such as unit, kg, or liter.",
      "Brand: Manages data on existing brands.",
      "Product Data: Stores and manages complete information about products.",
      "Customer Data: Stores information about customers.",
      "Incoming Goods Transactions: Records transactions of goods coming into the warehouse.",
      "Outgoing Goods Transactions: Records transactions of goods leaving the warehouse.",
      "Incoming Goods Reports: Presents detailed reports on goods received.",
      "Outgoing Goods Reports: Presents detailed reports on goods dispatched.",
      "Stock Reports: Displays complete information on remaining stock.",
      "Settings for Logo, Website Name & Description: Allows customization of the application's identity.",
      "User Access Settings per Role: Manages user access and roles within the application.",
      "Menu Settings: Dynamic menus that can be added or removed as needed.",
      "Menu Layout Settings: Defines the layout of menus (horizontal or vertical).",
      "Display Mode: Options for Light Mode or Dark Mode.",
    ],
    languages: ["Laravel 9", "php", "Bootstrap 5", "MYSQL 8.0", "Jquery"],
  },
  {
    title: "MARBABU (Mari Baca Buku)",
    description:
      "I developed a simple library project using PHP, CodeIgniter, MySQL, and Bootstrap. This application is designed to facilitate the management of library data, including the management of books, members, and borrowing. With a responsive and intuitive interface, this application is suitable for small to medium-sized libraries. With all these features, the simple library application I developed can help enhance the efficiency of library management and provide convenience for its users.",
    screenshots: [
      "images/project/mpl/2.png",
      "images/project/mpl/3.png",
      "images/project/mpl/4.png",
      "images/project/mpl/5.png",
      "images/project/mpl/6.png",
      "images/project/mpl/7.png",
    ],
    image: "images/project/mpl/1.png",
    tech: [ ],
    demoUrl: "",
    githubUrl: "https://github.com/azrielarhn",
    features: [
      "Dashboard - Displays a summary of important information about books, members, and borrowing.",
      "Book Management - Manages book data, including title, author, publisher, and year of publication.",
      "Member Management - Stores and manages information about library members.",
      "Book Borrowing - Records transactions of book borrowing by members.",
      "Book Return - Records transactions of book returns.",
      "Borrowing Reports - Presents detailed reports on borrowing and returning books.",
      "Book Search - Helps users easily search for books based on specific criteria.",
    ],
    languages: ["PHP", "Codelnteger", "Bootstrap", "MySQL"],
  },
  {
    title: "School Accreditation Digital Archive",
    description:
      "The implementation of the Rapid Application Development (RAD) method in the web-based digital archive system for school accreditation can help improve the efficiency and effectiveness of archive management. With the existence of a digital archive system, the management and administration of archives become easier, faster, and more accurate, while also facilitating the search for documents and information related to school accreditation. The implementation of the web-based digital archive system for school accreditation provides benefits in terms of efficiency, effectiveness, and quality of service for users and relevant stakeholders. The benefits include ease and speed of information access, improved data security, space savings, and enhanced quality and accountability in education.",
    screenshots: [
      "images/project/siakad/2.png",
      "images/project/siakad/3.png",
      "images/project/siakad/4.png",
      "images/project/siakad/5.png",
    ],
    image: "images/project/siakad/1.png",
    tech: [ ],
    demoUrl: null,
    githubUrl: "null",
    features: [],
    languages: ["PHP", "Codelnteger", "Bootstrap", "MySQL"],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "Bootstrap",
  "Codeigneter",
  "Laravel",
  "React",
  "MYSQL",
  "Git",
  // "Framer Motion",
] as const;

export const skilss = [
  {
    id: 2,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    id: 3,
    imgUrl: "/images/icon/bootstrap.svg",
  },
  {
    id: 8,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
  },
  {
    id: 4,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },
  {
    id: 5,
    imgUrl: "/images/icon/codeigniter.svg",
  },
  {
    id: 7,
    imgUrl: "/images/icon/mysql.svg",
  },

  {
    id: 9,
    imgUrl: "/images/icon/trobeleshot.svg",
  },
  {
    id: 10,
    imgUrl: "/images/icon/javascript.svg",
  },
  {
    id: 1,
    imgUrl: "/images/icon/filament.svg",
  },
  {
    id: 6,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  // {
  //   id: 10,
  //   imgUrl:
  //     "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
  // },
] as const;
