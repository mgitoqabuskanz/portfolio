import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si"

const socialLinks = [
  {
    href: "https://github.com/mgitoqabuskanz",
    icon: <SiGithub size={24} />,
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    href: "https://www.linkedin.com/in/mgitoqabuskanz",
    icon: <SiLinkedin size={24} />,
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    href: "https://mail.google.com/mail/u/0/?fs=1&to=mgitoqabuskanz@gmail.com&tf=cm",
    icon: <SiGmail size={24} />,
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    href: "https://api.whatsapp.com/send/?phone=6282223332860&text=Hello%20there!&type=phone_number&app_absent=0",
    icon: <SiWhatsapp size={24} />,
    target: "_blank",
    rel: "noopener noreferrer"
  }
];

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        
        {/* Left Side - Branding */}
        <div>
          <h2 className="text-xl font-bold">Kanz Muhammad</h2>
          <p className="text-sm text-gray-400">Full-Stack Developer | IT Enthusiast</p>
        </div>

        {/* Center - Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.target}
              rel={link.rel}
              className="hover:text-gray-400 transition"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Right Side - Copyright */}
        <div className="mt-4 md:mt-0 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Kanz Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection