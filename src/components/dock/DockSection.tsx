import { TbBriefcase, TbCode, TbFile, TbHome, TbMessage, TbUser } from "react-icons/tb"
import { Link } from "react-scroll";

const DockSection = () => {
  return (
    <div className="dock max-w-screen flex lg:hidden">
      <Link
        to="home"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="dock-active"
        className="dock-item"
      >
        <TbHome size={24} />
        <span className="dock-label">Home</span>
      </Link>

      <Link
        to="about"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="dock-active"
        className="dock-item"
      >
        <TbUser size={24} />
        <span className="dock-label">About</span>
      </Link>

      <Link
        to="experience"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="dock-active"
        className="dock-item"
      >
        <TbBriefcase size={24} />
        <span className="dock-label">Experience</span>
      </Link>

      <Link
        to="project"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="dock-active"
        className="dock-item"
      >
        <TbCode size={24} />
        <span className="dock-label">Projects</span>
      </Link>

      <Link
        to="resume"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="dock-active"
        className="dock-item"
      >
        <TbFile size={24} />
        <span className="dock-label">Resume</span>
      </Link>

      <Link
        to="contact"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="dock-active"
        className="dock-item"
      >
        <TbMessage size={24} />
        <span className="dock-label">Contact</span>
      </Link>
    </div>
  )
}

export default DockSection