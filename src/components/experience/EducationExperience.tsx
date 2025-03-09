import { FaCircleCheck } from "react-icons/fa6"

const EducationExperience = () => {
  return (
    <>
      <h2 className='text-3xl font-bold'>Education <span className="font-light">Experience</span></h2>
      <blockquote class="border-l-4 border-gray-500 italic my-8 pl-4 md:pl-8 py-4 mx-4 md:mx-10 max-w-md">
        <p class="text-sm font-medium">"Building a Strong Technological Foundation Through Quality Education"</p>
        <cite class="block text-right mt-4 text-gray-600">- Kanz Muhammad</cite>
      </blockquote>
      <p className="text-justify">
        I pursued my education at Institut Teknologi Sepuluh Nopember (ITS) and earned a Bachelor’s Degree in Informatics. 
        Throughout my studies, I specialized in programming, system development, and network security, which laid the foundation for my career in the IT industry.
      </p>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-start">
        <li>
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2015-2021</time>
            <div className="text-lg font-black">Institut Teknologi Sepuluh Nopember (ITS)</div>
            <span className="font-bold">Bachelor's Degree in Informatics</span> - Faculty of Information and Communication Technology (FTIK)
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-end mb-10 md:text-start">
            <time className="font-mono italic">2012-2015</time>
            <div className="text-lg font-black">Senior High School of 15 Surabaya</div>
            Science - SBI
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2009-2012</time>
            <div className="text-lg font-black">Junior High School of 6 Surabaya</div>
            SBI
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-end md:mb-10 md:text-start">
            <time className="font-mono italic">2003-2009</time>
            <div className="text-lg font-black">Dr. Soetomo Elementary School V/327 Surabaya</div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-start md:text-end">
            <time className="font-mono italic">2001-2003</time>
            <div className="text-lg font-black">Islamic Centre Kindergarten School</div>
          </div>
        </li>
      </ul>
    </>
  )
}

export default EducationExperience