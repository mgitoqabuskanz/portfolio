import services_data from "../../assets/about/services_data"
import { FILE_PATHS } from "../../assets/constants"
import './style.css'

const AboutSection = () => {
  return (
    <div id="about" className='flex items-center justify-center'>
      <div className="p-10 max-w-7xl text-center md:mx-25 space-y-3">
        <h1 className='text-5xl font-bold text-accent'>About <span className='font-light text-base-content'>Me</span></h1>
        <img src={FILE_PATHS.PROFILE_IMG} className="max-h-103 block md:hidden" alt="Profile_Image" />
        <h2 className='text-2xl font-black mt-5'>Full-Stack Developer | Network Operations Center (NOC) Engineer | Cybersecurity Specialist</h2>
        <p className="text-justify text-indent mt-10 text-base-content/65">
          I am a dedicated IT professional with a Bachelor's degree in Informatics from Institut Teknologi Sepuluh Nopember (ITS), bringing extensive experience in IT support, network operations, and full-stack development for both mobile and web applications. 
          With a strong background in IT support, I have effectively diagnosed and resolved hardware, software, and network issues, ensuring seamless IT operations and minimizing downtime. My experience in network operations has equipped me with the ability to monitor, maintain, and optimize network infrastructures, enhancing system reliability and security. 
          On the development side, I specialize in full-stack programming for mobile apps and websites, leveraging modern technologies such as React, Tailwind CSS, JavaScript (Node.js, Express), and databases like MySQL and MongoDB. I have successfully built and deployed responsive, high-performance applications with intuitive user interfaces and optimized backend architectures.
          My ability to bridge IT operations and software development allows me to design, implement, and maintain end-to-end solutions that enhance productivity and user experience. Passionate about technology and problem-solving, I continuously explore innovative approaches to improve system efficiency, security, and scalability.
        </p>
        <div className="hidden md:flex items-start justify-center pt-10">
          <div className="flex-1 flex flex-col space-y-3 pr-4 text-end">
            {services_data.slice(0, Math.ceil(services_data.length / 2)).map(service => (
              <div key={service.s_no} className="card bg-gradient-to-r from-slate-500/0 to-slate-500/50 w-full mb-4">
                <div className="card-body text-base-content/65">
                  <h2 className="text-xl font-semibold text-base-content">{service.s_name}</h2>
                  <p>{service.s_desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-col">
            <img src={FILE_PATHS.PROFILE_IMG} className="max-h-103" alt="Profile_Image" />
          </div>

          <div className="flex-1 flex flex-col space-y-3 pl-4 text-start">
            {services_data.slice(Math.ceil(services_data.length / 2)).map(service => (
              <div key={service.s_no} className="card bg-gradient-to-r from-slate-500/50 to-slate-500/0 w-full mb-4">
                <div className="card-body text-base-content/65">
                  <h2 className="text-xl font-semibold text-base-content">{service.s_name}</h2>
                  <p>{service.s_desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection