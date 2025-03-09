import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import c_img_1 from './profpic_gmail.jpg'
import c_img_2 from './profpic_whatsapp.jpg'
import c_img_3 from './profpic_linkedin.jpg'
import c_img_4 from './profpic_github.jpg'

const c_data = [
  {
    c_id: "GMail",
    c_icon: SiGmail,
    c_name: "Muhammad Gito Qabus Kanz",
    c_uname: "mgitoqabuskanz@gmail.com",
    c_url: "https://mail.google.com/mail/u/0/?fs=1&to=mgitoqabuskanz@gmail.com&tf=cm",
    c_img: c_img_1
  },
  {
    c_id: "Whatsapp",
    c_icon: SiWhatsapp,
    c_name: "Muhammad Gito Qabus Kanz",
    c_uname: "(+62)8-222-333-2860",
    c_url: "https://api.whatsapp.com/send/?phone=6282223332860&text=Hello%20there!&type=phone_number&app_absent=0",
    c_img: c_img_2
  },
  {
    c_id: "LinkedIn",
    c_icon: SiLinkedin,
    c_name: "Muhammad Gito Qabus Kanz",
    c_uname: "linkedin.com/in/mgitoqabuskanz",
    c_url: "https://www.linkedin.com/in/mgitoqabuskanz",
    c_img: c_img_3
  },
  {
    c_id: "Github",
    c_icon: SiGithub,
    c_name: "Muhammad Gito Qabus Kanz",
    c_uname: "github.com/mgitoqabuskanz",
    c_url: "https://github.com/mgitoqabuskanz",
    c_img: c_img_4
  },
]

export default c_data;