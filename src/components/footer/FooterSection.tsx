import React from "react"
import footer_data from "../../assets/footer/footer_data"

const FooterSection = () => {
  return (
    <footer className="bg-neutral/50 md:py-6 md:px-4 pt-10 pb-20 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        
        <div>
          <h2 className="text-xl font-black text-base-content/50">Kanz Muhammad</h2>
          <p className="text-sm text-base-content/25">Full-Stack Developer | IT Enthusiast</p>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          {footer_data.map((f_data, index) => (
            <a
              key={index}
              href={f_data.f_url}
              target={f_data.f_target}
              rel={f_data.f_rel}
              className="hover:text-base-content text-base-content/50 transition text-2xl"
            >
              {React.createElement(f_data.f_icon)}
            </a>
          ))}
        </div>

        <div className="mt-4 md:mt-0 text-base-content/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Kanz Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection