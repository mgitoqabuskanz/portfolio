import { Link } from 'react-scroll'
import { FILE_PATHS } from '../../assets/constants'
import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from 'react-icons/si'
import { LuMoon, LuSun } from 'react-icons/lu'
import { useEffect, useState } from 'react'

const HeroSection = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <div
      id='home'
      className="hero min-h-screen w-full"
      style={{
        backgroundImage: `url(${FILE_PATHS.HERO_IMG})`,
      }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content flex-col lg:flex-row-reverse md:glass backdrop-blur-sm text-white text-center md:text-start md:p-10 rounded-3xl">
          
          <Link 
          to="about" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500}
          className='bg-transparent hidden lg:flex transition-all duration-500 z-10' 
          >
            <a role='button'>
              <img
              src={FILE_PATHS.PROFILE_IMG}
              className="max-w-xs shadow-3xl flex rounded-4xl hover:scale-110 transition-all duration-500 z-10" 
              alt="profile_img" 
              />
            </a>
          </Link>

          <div className='my-8'>
            <h1 className="md:text-3xl text-2xl font-light text-neutral-content/95">Hi, i'm</h1>
            <h1 className="md:text-5xl text-4xl font-black text-accent hover:text-neutral-content transition-all duration-500">Kanz <span className="font-light text-neutral-content">Muhammad</span></h1> 
            <h3 className='text-sm font-extralight text-neutral-content/50'>(He/Him)</h3>

            <Link 
            to="about" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}
            className='relative bg-transparent transition-all duration-500 md:hidden' 
            >
              <a>
                <img
                src={FILE_PATHS.PROFILE_IMG}
                className="w-75 h-75 object-cover mx-auto my-5 flex md:hidden mask mask-squircle transition-all duration-500" 
                alt="profile_img" 
                />
              </a>
            </Link>

            <p className="px-5 md:px-0 md:mt-5 md:mr-30 text-neutral-content/75">
              I am an IT professional with expertise in web and mobile development, IT support, and network operations. 
              Passionate about creating seamless digital solutions, I specialize in full-stack development, system optimization, and IT infrastructure management.
            </p>
            
            <div className="flex justify-center md:justify-start gap-3 my-4">
              <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className='btn btn-accent hover:scale-110 w-fit md:btn-wide px-10 shadow transition-all duration-500 m-0' 
              >
                <a role='button'>Hire Me</a>
              </Link>

              <Link 
              to="resume" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className='btn btn-outline btn-accent hover:scale-110 w-fit md:btn-wide px-10 shadow transition-all duration-500' 
              >
                <a role='button'>Resume</a>
              </Link>
            </div>
            <div className="flex justify-center md:justify-start gap-3 my-8">
              <button className="btn btn-outline hover:btn-accent btn-circle text-3xl p-2 tooltip tooltip-bottom tooltip-accent hover:scale-110 transition-all duration-500" data-tip="GMail"><SiGmail /></button>
              <button className="btn btn-outline hover:btn-accent btn-circle text-3xl p-2 tooltip tooltip-bottom tooltip-accent hover:scale-110 transition-all duration-500" data-tip="WhatsApp"><SiWhatsapp /></button>
              <button className="btn btn-outline hover:btn-accent btn-circle text-3xl p-2 tooltip tooltip-bottom tooltip-accent hover:scale-110 transition-all duration-500" data-tip="LinkedIn"><SiLinkedin /></button>
              <button className="btn btn-outline hover:btn-accent btn-circle text-3xl p-2 tooltip tooltip-bottom tooltip-accent hover:scale-110 transition-all duration-500" data-tip="GitHub"><SiGithub /></button>
            </div>
            <div className="flex md:hidden justify-center">
              <label className="flex cursor-pointer gap-4 items-center text-neutral-content opacity-50">
                <LuSun className="swap-off fill-current w-6 h-6" />
                <input 
                  type="checkbox" 
                  checked={theme === "dark"} 
                  onChange={toggleTheme} 
                  className="toggle theme-controller w-12 h-6 text-neutral-content border-2 border-neutral-content transition-all duration-500 ease-in-out"
                />
                <LuMoon className="swap-on fill-current w-6 h-6" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection