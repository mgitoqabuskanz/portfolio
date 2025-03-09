import { FaCircleCheck } from "react-icons/fa6"

const EducationExperience = () => {
  return (
    <>
      <h2 className='text-3xl font-bold text-accent'>Education <span className="font-light text-base-content">Experience</span></h2>
      <h3 className="text-md font-black">"Building a Strong Technological Foundation Through Quality Education"</h3>
      
      <p className="text-justify text-base-content/75">
        I pursued my education at Institut Teknologi Sepuluh Nopember (ITS) and earned a Bachelor’s Degree in Informatics. 
        Throughout my studies, I specialized in programming, system development, and network security, which laid the foundation for my career in the IT industry.
      </p>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-start">
        <li>
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic text-base-content/35">2015-2021</time>
            <div className="text-lg font-black text-accent">Institut Teknologi Sepuluh Nopember (ITS)</div>
            <span className="font-bold">Bachelor's Degree in Informatics</span> - Faculty of Information and Communication Technology (FTIK)
          </div>
          <hr className="bg-base-content"/>
        </li>
        <li>
          <hr className="bg-base-content"/>
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-end mb-10 md:text-start">
            <time className="font-mono italic text-base-content/35">2012-2015</time>
            <div className="text-lg font-black text-accent">Senior High School of 15 Surabaya</div>
            Science - SBI
          </div>
          <hr className="bg-base-content"/>
        </li>
        <li>
          <hr className="bg-base-content"/>
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic text-base-content/35">2009-2012</time>
            <div className="text-lg font-black text-accent">Junior High School of 6 Surabaya</div>
            SBI
          </div>
          <hr className="bg-base-content"/>
        </li>
        <li>
          <hr className="bg-base-content"/>
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-end md:mb-10 md:text-start">
            <time className="font-mono italic text-base-content/35">2003-2009</time>
            <div className="text-lg font-black text-accent">Dr. Soetomo Elementary School V/327 Surabaya</div>
          </div>
          <hr className="bg-base-content"/>
        </li>
        <li>
          <hr className="bg-base-content"/>
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-start md:text-end">
            <time className="font-mono italic text-base-content/35">2001-2003</time>
            <div className="text-lg font-black text-accent">Islamic Centre Kindergarten School</div>
          </div>
        </li>
      </ul>
    </>
  )
}

export default EducationExperience