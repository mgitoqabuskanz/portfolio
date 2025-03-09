import { Link } from 'react-scroll'
import { assets } from '../../assets/assets'
import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from 'react-icons/si'

const HeroSection = () => {
  return (
    <>
      <div
      id='home'
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${assets.header_img})`,
      }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content flex-col lg:flex-row-reverse lg:backdrop-blur-sm text-white text-center md:text-start p-10 rounded-3xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl"></div>
          <img
          src={assets.profile_img}
          className="max-w-xs shadow-3xl relative rounded-2xl" 
          alt="profile_img" 
          />
          <div>
            <h1 className="text-5xl font-light z-1">Hi, i'm <br className='flex lg:hidden' /><span className="font-bold text-accent">Kanz</span> <span className="font-bold">Muhammad</span> <span className='text-sm font-extralight text-gray-300'>(He/Him)</span></h1>
            <p className="py-6 mr-30 text-gray-300 z-10">
              I am an IT professional with expertise in web and mobile development, IT support, and network operations. 
              Passionate about creating seamless digital solutions, I specialize in full-stack development, system optimization, and IT infrastructure management.
            </p>
            <div className="space-x-3 space-y-3 inline-block md:inline-flex">
              <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className='btn btn-accent hover:bg-transparent hover:text-accent btn-wide z-1 shadow' 
              >
                <a role='button'>Hire Me</a>
              </Link>

              <Link 
              to="resume" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className='btn btn-outline btn-accent btn-wide z-1' 
              >
                <a role='button'>Resume</a>
              </Link>
            </div>
            <div className="space-x-3 space-y-3 flex mt-5">
              <button className="btn btn-ghost btn-circle text-3xl p-2 bg-white/25 text-red-500 tooltip tooltip-bottom tooltip-accent" data-tip="GMail"><SiGmail /></button>
              <button className="btn btn-ghost btn-circle text-3xl p-2 bg-white/25 text-green-500 tooltip tooltip-bottom tooltip-accent" data-tip="WhatsApp"><SiWhatsapp /></button>
              <button className="btn btn-ghost btn-circle text-3xl p-2 bg-white/25 text-blue-500 tooltip tooltip-bottom tooltip-accent" data-tip="LinkedIn"><SiLinkedin /></button>
              <button className="btn btn-ghost btn-circle text-3xl p-2 bg-white/25 text-black tooltip tooltip-bottom tooltip-accent" data-tip="GitHub"><SiGithub /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection