import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import contact_img_1 from './profpic_gmail.jpg'
import contact_img_2 from './profpic_whatsapp.jpg'
import contact_img_3 from './profpic_linkedin.jpg'
import contact_img_4 from './profpic_github.jpg'

const contact_data = [
  {
    contact_id: "GMail",
    contact_icon: SiGmail,
    contact_name: "Muhammad Gito Qabus Kanz",
    contact_uname: "mgitoqabuskanz@gmail.com",
    contact_url: "https://mail.google.com/mail/u/0/?fs=1&to=mgitoqabuskanz@gmail.com&tf=cm",
    contact_img: contact_img_1
  },
  {
    contact_id: "Whatsapp",
    contact_icon: SiWhatsapp,
    contact_name: "Muhammad Gito Qabus Kanz",
    contact_uname: "(+62)8-222-333-2860",
    contact_url: "https://api.whatsapp.com/send/?phone=6282223332860&text=Hello%20there!&type=phone_number&app_absent=0",
    contact_img: contact_img_2
  },
  {
    contact_id: "LinkedIn",
    contact_icon: SiLinkedin,
    contact_name: "Muhammad Gito Qabus Kanz",
    contact_uname: "linkedin.com/in/mgitoqabuskanz",
    contact_url: "https://www.linkedin.com/in/mgitoqabuskanz",
    contact_img: contact_img_3
  },
  {
    contact_id: "Github",
    contact_icon: SiGithub,
    contact_name: "Muhammad Gito Qabus Kanz",
    contact_uname: "github.com/mgitoqabuskanz",
    contact_url: "https://github.com/mgitoqabuskanz",
    contact_img: contact_img_4
  },
]

export default contact_data;