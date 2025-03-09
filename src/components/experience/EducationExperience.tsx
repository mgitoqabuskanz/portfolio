import { FaCircleCheck } from "react-icons/fa6"

const EducationExperience = () => {
  return (
    <>
      <h2 className='text-3xl font-bold'>Education <span className="font-light">Experience</span></h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur tempore cupiditate corrupti magnam qui, 
        optio pariatur fugiat vel repellendus animi distinctio. Provident minus architecto eveniet, accusamus eos assumenda id?
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