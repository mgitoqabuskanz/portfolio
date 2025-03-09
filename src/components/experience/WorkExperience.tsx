import { FaCircleCheck } from "react-icons/fa6"

const WorkExperience = () => {
  return (
    <>
      <h2 className='text-3xl font-bold'>Work <span className="font-light">Experience</span></h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur tempore cupiditate corrupti magnam qui, 
        optio pariatur fugiat vel repellendus animi distinctio. Provident minus architecto eveniet, accusamus eos assumenda id?
      </p>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-start">
        <li>
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-end mb-10 md:text-start">
            <time className="font-mono italic">2021-Present</time>
            <div className="text-lg font-black">Gunung Sari Productions</div>
            Enterpreneur
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-start md:mb-10 md:text-end">
            <time className="font-mono italic">2020-2021</time>
            <div className="text-lg font-black">PT Artha Graha Samudera</div>
            IT Programmer
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-end mb-10 md:text-start">
            <time className="font-mono italic">2019-2020</time>
            <div className="text-lg font-black">PT Artha Graha Samudera</div>
            Network Operations
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-start md:mb-10 md:text-end">
            <time className="font-mono italic">2018-2019</time>
            <div className="text-lg font-black">PT Artha Graha Samudera</div>
            IT Support
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-end md:text-start">
            <time className="font-mono italic">2018</time>
            <div className="text-lg font-black">PT Telkom Indonesia Tbk</div>
            Internship (IT Support)
          </div>
        </li>
      </ul>
    </>
  )
}

export default WorkExperience