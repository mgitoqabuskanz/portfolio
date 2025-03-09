import project1_img from './project_1.svg'
import project2_img from './project_2.svg'
import project3_img from './project_3.svg'
import project4_img from './project_4.svg'
import project5_img from './project_5.svg'
import project6_img from './project_6.svg'

export const project_data = [
  {
    w_no: 1,
    w_name: "Project Management App",
    w_img: project1_img,
    w_desc: "A task management application with Kanban-style boards, real-time collaboration, and drag-and-drop functionality.",
    w_category: ["React", "TypeScript", "Firebase"],
    w_link: "https://github.com/mgitoqabuskanz/project1"
  },
  {
    w_no: 2,
    w_name: "E-Commerce Platform",
    w_img: project2_img,
    w_desc: "An online marketplace with product listings, shopping cart, and secure payment integration.",
    w_category: ["Next.js", "React", "Tailwind"],
    w_link: "https://github.com/mgitoqabuskanz/project2"
  },
  {
    w_no: 3,
    w_name: "Portfolio Website",
    w_img: project3_img,
    w_desc: "A personal portfolio website showcasing projects, experience, and contact information with smooth animations.",
    w_category: ["React", "Framer Motion"],
    w_link: "https://github.com/mgitoqabuskanz/project3"
  },
  {
    w_no: 4,
    w_name: "Company Landing Page",
    w_img: project4_img,
    w_desc: "A modern, responsive company landing page with interactive UI and SEO optimization.",
    w_category: ["Tailwind", "Next.js"],
    w_link: "https://github.com/mgitoqabuskanz/project4"
  },
  {
    w_no: 5,
    w_name: "Blog CMS",
    w_img: project5_img,
    w_desc: "A content management system for blogging with markdown support and user authentication.",
    w_category: ["Next.js", "GraphQL", "MongoDB"],
    w_link: "https://github.com/mgitoqabuskanz/project5"
  },
  {
    w_no: 6,
    w_name: "Inventory Management System",
    w_img: project6_img,
    w_desc: "A full-stack inventory system with Laravel for backend and React for frontend, providing real-time tracking.",
    w_category: ["Laravel", "React", "MySQL"],
    w_link: "https://github.com/mgitoqabuskanz/project6"
  },
];

const prj_categories = Array.from(new Set(project_data.flatMap(project => project.w_category)))
  .sort();

export { prj_categories };
export default project_data;