import { FaCircleCheck } from "react-icons/fa6"

const WorkExperience = () => {
  return (
    <>
      <h2 className='text-3xl font-bold text-accent'>Work <span className="font-light text-base-content">Experience</span></h2>
      <h3 className="text-md font-black">"Bridging Innovation and Technology in My Professional Journey"</h3>

      <p className="text-justify text-base-content/75">
        With experience as an IT Programmer, Network Operations, and IT Support, I have contributed to application development, network management, 
        and technology strategies in various companies and businesses I have managed.
      </p>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-start">
        <li>
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-end mb-10 md:text-start">
            <time className="font-mono italic text-base-content/35">2021-Present</time>
            <div className="text-lg font-black text-accent">Gunung Sari Productions</div>
            Enterpreneur
          </div>
          <hr className="bg-base-content"/>
        </li>
        <li>
          <hr className="bg-base-content"/>
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-start md:mb-10 md:text-end">
            <time className="font-mono italic text-base-content/35">2020-2021</time>
            <div className="text-lg font-black text-accent">PT Artha Graha Samudera</div>
            IT Programmer
          </div>
          <hr className="bg-base-content"/>
        </li>
        <li>
          <hr className="bg-base-content"/>
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-end mb-10 md:text-start">
            <time className="font-mono italic text-base-content/35">2019-2020</time>
            <div className="text-lg font-black text-accent">PT Artha Graha Samudera</div>
            Network Operations
          </div>
          <hr className="bg-base-content"/>
        </li>
        <li>
          <hr className="bg-base-content"/>
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic text-base-content/35">2018-2019</time>
            <div className="text-lg font-black text-accent">PT Artha Graha Samudera</div>
            IT Support
          </div>
          <hr className="bg-base-content"/>
        </li>
        <li>
          <hr className="bg-base-content"/>
          <div className="timeline-middle">
            <FaCircleCheck />
          </div>
          <div className="timeline-end md:text-start">
            <time className="font-mono italic text-base-content/35">2018</time>
            <div className="text-lg font-black text-accent">PT Telkom Indonesia Tbk</div>
            Internship (IT Support)
          </div>
        </li>
      </ul>
    </>
  )
}

export default WorkExperience