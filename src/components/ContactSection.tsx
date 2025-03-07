import { assets } from "../assets/assets"
import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si"

const ContactSection = () => {
  return (
    <div id="contact" className='flex items-center justify-center'>
      <div className="p-10 max-w-7xl text-center mx-10 md:mx-25 space-y-3">
        <h1 className='text-5xl font-bold'>Contact <span className='font-light'>Me</span></h1>
        <h2 className='text-2xl'>SubTitle About Section</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur tempore cupiditate corrupti magnam qui, 
          optio pariatur fugiat vel repellendus animi distinctio. Provident minus architecto eveniet, accusamus eos assumenda id?
        </p>
        <div className="container bg-black/50 w-full p-10 rounded-4xl">
          <div className="tabs tabs-lift">
            <span className="tab"></span>
              <label className="tab gap-1">
                <input type="radio" name="ContactTab" />
                <SiLinkedin />
                LinkedIn
              </label>
              <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
                <div className="avatar">
                  <div className="w-50 rounded-full">
                    <img src={assets.profile_img} />
                  </div>
                </div>
                <div className="flex w-full flex-col">
                  <div className="divider divider-neutral text-3xl">Muhammad Gito Qabus Kanz</div>
                </div>
                <div className="join">
                  <span className="join-item px-3 bg-gray-200 flex items-center">
                      <SiLinkedin className="text-gray-500" />
                  </span>
                  <a href="https://www.linkedin.com/in/mgitoqabuskanz" className="input input-bordered join-item w-60 cursor-pointer">
                    linkedin.com/in/mgitoqabuskanz
                  </a>
                </div>
              </div>

              <label className="tab gap-1">
                <input type="radio" name="ContactTab" defaultChecked />
                <SiGithub />
                Github
              </label>
              <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
                <div className="avatar">
                  <div className="w-50 rounded-full">
                    <img src={assets.profile_img} />
                  </div>
                </div>
                <div className="flex w-full flex-col">
                  <div className="divider divider-neutral text-3xl">Muhammad Gito Qabus Kanz</div>
                </div>
                <div className="join">
                  <span className="join-item px-3 bg-gray-200 flex items-center">
                      <SiGithub className="text-gray-500" />
                  </span>
                  <a href="https://github.com/mgitoqabuskanz" className="input input-bordered join-item w-60 cursor-pointer">
                    github.com/mgitoqabuskanz
                  </a>
                </div>
              </div>

              <label className="tab gap-1">
                <input type="radio" name="ContactTab" />
                <SiWhatsapp />
                Whatsapp
              </label>
              <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
                <div className="avatar">
                  <div className="w-50 rounded-full">
                    <img src={assets.profile_img} />
                  </div>
                </div>
                <div className="flex w-full flex-col">
                  <div className="divider divider-neutral text-3xl">Muhammad Gito Qabus Kanz</div>
                </div>
                <div className="join">
                  <span className="join-item px-3 bg-gray-200 flex items-center">
                      <SiWhatsapp className="text-gray-500" />
                  </span>
                  <a href="https://api.whatsapp.com/send/?phone=6282223332860&text&type=phone_number&app_absent=0" className="input input-bordered join-item w-60 cursor-pointer">
                    (+62)8-222-333-2860
                  </a>
                </div>
              </div>

              <label className="tab gap-1">
                <input type="radio" name="ContactTab" />
                <SiGmail />
                GMail
              </label>
              <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
                <div className="avatar">
                  <div className="w-50 rounded-full">
                    <img src={assets.profile_img} />
                  </div>
                </div>
                <div className="flex w-full flex-col">
                  <div className="divider divider-neutral text-3xl">Muhammad Gito Qabus Kanz</div>
                </div>
                <div className="join">
                  <span className="join-item px-3 bg-gray-200 flex items-center">
                      <SiGmail className="text-gray-500" />
                  </span>
                  <a href="https://mail.google.com/mail/u/0/?fs=1&to=mgitoqabuskanz@gmail.com&tf=cm" className="input input-bordered join-item w-60 cursor-pointer">
                    mgitoqabuskanz@gmail.com
                  </a>
                </div>
              </div>
            <span className="tab"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection