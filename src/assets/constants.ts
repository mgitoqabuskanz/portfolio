// Importing necessary icons
import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";

// Defining the footer data
export const FOOTER_LINKS = [
  {
    id: "1",
    url: "https://github.com/mgitoqabuskanz",
    icon: SiGithub,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "2",
    url: "https://www.linkedin.com/in/mgitoqabuskanz",
    icon: SiLinkedin,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "3",
    url: "https://mail.google.com/mail/u/0/?fs=1&to=mgitoqabuskanz@gmail.com&tf=cm",
    icon: SiGmail,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "4",
    url: "https://api.whatsapp.com/send/?phone=6282223332860&text=Hello%20there!&type=phone_number&app_absent=0",
    icon: SiWhatsapp,
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

// Resume Section Content
export const RESUME_CONTENT = {
  h1: "My",
  h1_span: "Resume",
  h2: "A Snapshot of My Skills, Experience, and Achievements",
  p: `Explore my professional journey, including my education, work experience, and technical expertise.
      Download my resume to learn more about how my skills and experience align with your needs.`,
  btn_DownResume: `Download My Resume`,
};

// Importing file paths
import HERO_IMG from './hero_img.jpg';
import LOGO from './logo.png';
import PROFILE_IMG from './profile_img.jpg';
import RESUME_PDF from '../assets/resume.pdf';

// File Paths
export const FILE_PATHS = {
  HERO_IMG,
  LOGO,
  PROFILE_IMG,
  RESUME_PDF,
};
