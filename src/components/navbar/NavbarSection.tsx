import { Link, animateScroll as scroll } from 'react-scroll';
import { assets } from '../../assets/assets';
import { LuMoon, LuSun } from 'react-icons/lu';
import { useEffect, useState } from 'react';

const NavbarSection = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navLinks = [
    { link: "About", section:"about"},
    { link: "Experience", section:"experience"},
    { link: "Project", section:"project"},
    { link: "Resume", section:"resume"},
    { link: "Contact", section:"contact"},
  ];

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className="navbar hidden lg:flex lg:fixed z-10 bg-black/50 backdrop-blur-md text-white shadow-sm items-center">
      
        <div className="navbar-start ml-5">
          <a onClick={scrollToTop} className="btn-ghost text-xl cursor-pointer transition-all duration-500 hover:bg-white/30 rounded py-2 px-4 flex items-center gap-3"><img src={assets.logo} className='w-8' alt="logo" />KANZ</a>
        </div>

        <div className="navbar-center">
          <ul className="menu menu-horizontal gap-2 p-0">
            {navLinks.map((link, index) => {
              return ( 
                <li key={index}>
                  <Link 
                  to={link.section}
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-70}
                  className='cursor-pointer transition-all duration-500 hover:bg-white/30 py-3 px-5'
                  >
                    {link.link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="navbar-end gap-3 mr-5">
          <Link 
          to="contact" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500}
          className='cursor-pointer transition-all duration-500 hover:bg-white/30 rounded py-3 px-4' 
          >
            <a role='button'>Hire Me</a>
          </Link>

          <label className="swap swap-rotate">
            <input type="checkbox" checked={theme === "light"} onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
            <LuSun className="swap-off fill-current w-6 h-6" />
            <LuMoon className="swap-on fill-current w-6 h-6" />
          </label>
        </div>

      </div>
    </>
  )
}

export default NavbarSection