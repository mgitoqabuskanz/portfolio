import React from 'react';
import contact_data from "../../assets/contact/contact_data"
import FormMessage from './FormMessage';

const ContactSection = () => {  
  return (
    <div id="contact" className='flex items-center justify-center w-full'>
      <div className="md:p-10 max-w-7xl text-center md:mx-25 space-y-3 w-full">
        <h1 className='text-5xl font-bold text-accent'>Contact <span className='font-light text-base-content'>Me</span></h1>
        <h2 className='text-2xl font-black'>Let’s Connect and Collaborate</h2>
        <p className='text-base-content/65'>
          Have a question, project idea, or just want to say hello? Feel free to reach out to me via email, WhatsApp, LinkedIn, or GitHub. <br /> 
          I’m always open to new opportunities and collaborations!
        </p>
        <div className="container bg-black/50 w-full p-10 rounded-4xl mt-8">
          <div className="tabs tabs-lift">
            <span className="tab"></span>
            {contact_data.map((contact, index) => (
              <React.Fragment key={contact.c_id}>
                <label className="tab gap-3">
                  <contact.c_icon />
                  <input type="radio" name="my_tabs_4" defaultChecked={index === 0} />
                  <span className='hidden md:block'>{contact.c_id}</span>
                </label>
                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-4">
                  <div className="avatar">
                    <div className="max-w-50 rounded-full">
                      <img src={contact.c_img} alt={contact.c_name} />
                    </div>
                  </div>
                  <div className="flex w-full flex-col">
                    <div className="divider divider-base-content md:text-3xl">{contact.c_name}</div>
                  </div>
                  <div className="join">
                    <span className="join-item px-2 md:px-3 w-fit bg-gray-200 flex items-center border border-base-content">
                        <contact.c_icon className="text-gray-500"  />
                    </span>
                    <a href={contact.c_url} target="_blank" className="input input-bordered join-item w-55 md:w-60 cursor-pointer border border-base-content justify-center" rel="noopener noreferrer">
                      {contact.c_uname}
                    </a>
                  </div>
                </div>
              </React.Fragment>
            ))}
            <span className="tab"></span>
          </div>

          <div className="flex w-full flex-col py-10 text-white">
            <div className="divider divider-base-content text-base-content/50">OR</div>
          </div>

          <FormMessage />
        </div>
      </div>
    </div>
  )
}

export default ContactSection