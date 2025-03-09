import { Link, animateScroll as scroll } from 'react-scroll';

const NavbarSection = () => {

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
      <div className="navbar hidden lg:flex lg:fixed z-10 bg-black/50 backdrop-blur-md text-white shadow-sm">
        <div className="navbar-start">
          <a onClick={scrollToTop} className="btn-ghost text-xl cursor-pointer transition-all duration-500 hover:bg-black/10 rounded py-2 px-4">Kanz</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link, index) => {
              return ( 
                <li key={index} className='cursor-pointer group'>
                  <Link 
                  to={link.section}
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-70}
                  className='cursor-pointer transition-all duration-500'
                  >
                    {link.link}
                  </Link>
                  {/* <div className="cursor-pointer mx-auto bg-accent w-0 group-hover:w-full h-0.5 rounded-full transition-all duration-500"></div> */}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <Link 
          to="contact" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500}
          className='cursor-pointer transition-all duration-500 hover:bg-black/10 rounded py-2 px-4' 
          >
            <a className='' role='button'>Hire Me</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default NavbarSection