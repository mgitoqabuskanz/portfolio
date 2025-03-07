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
      <div className="navbar hidden lg:flex lg:fixed z-10 bg-black/50 text-white shadow-sm">
        <div className="navbar-start">
          <a onClick={scrollToTop} className="btn btn-ghost text-xl">Kanz</a>
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
                  // className='cursor-pointer text-base-content hover:text-accent transition-all duration-500'
                  >
                    {link.link}
                  </Link>
                  {/* <div className="cursor-pointer mx-auto bg-accent w-0 group-hover:w-full h-0.5 rounded-full transition-all duration-500"></div> */}
                </li>
              );
            })}
            {/* <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Experience</a></li>
            <li><a>Project</a></li>
            <li><a>Resume</a></li>
            <li><a>Contact</a></li> */}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  )
}

export default NavbarSection