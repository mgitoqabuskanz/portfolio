import { FaCircleCheck } from "react-icons/fa6"

const WorkExperience = () => {
  return (
    <>
      <h2 className='text-3xl font-bold'>Work <span className="font-light">Experience</span></h2>
      <blockquote class="border-l-4 border-gray-500 italic my-8 pl-4 md:pl-8 py-4 mx-4 md:mx-10 max-w-md">
        <p class="text-sm font-medium">"Bridging Innovation and Technology in My Professional Journey"</p>
        <cite class="block text-right mt-4 text-gray-600">- Kanz Muhammad</cite>
      </blockquote>
      <p className="text-justify">
        With experience as an IT Programmer, Network Operations, and IT Support, I have contributed to application development, network management, 
        and technology strategies in various companies and businesses I have managed.
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