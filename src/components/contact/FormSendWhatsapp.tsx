import { useState } from "react";

const FormSendWhatsapp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      if (/^\+?\d*$/.test(value)) {
        setFormData({
          ...formData,
          [name]: value
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    validateForm();
  };

  const validateForm = () => {
  const { name, email, phone, message } = formData;
  const isValid = 
    name.length >= 3 && 
    validateEmail(email) &&
    phone.length >= 10 && 
    message.length > 0;
    setIsFormValid(isValid);
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const Datas = {
    to_name: 'Muhammad Gito Qabus Kanz',
    from_name: formData.name,
    from_email: formData.email,
    to_phone: '6282223332860',
    from_phone: formData.phone,
    message: formData.message,
  };
  
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!isFormValid) {
      alert('Please fill in all fields correctly.');
      return;
    }
    
    const greetings = `Hello ${Datas.to_name},`;
    const sender_pre = `My contacts information : `;
    const sender_name = `-%20${Datas.from_name}`;
    const sender_phone = `-%20${Datas.from_phone}`;
    const sender_email = `-%20${Datas.from_email}`;
    const sender_post = `%0A%0A${encodeURIComponent(sender_pre)}%0A${sender_name}%0A${sender_phone}%0A${sender_email}`;
    const message = `%0A>%20${Datas.message}`;
    
    const compose_message = `${encodeURIComponent(greetings)}${sender_post}${message}`;
    const whatsappURL = `https://wa.me/${Datas.to_phone}?text=${compose_message}`;
    
    window.open(whatsappURL, '_blank');
    alert('Opening a new window for whatsapp! Please check it out. \nThanks to reaching out to me, i will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setIsFormValid(false);
  }
  return (
    <>
      <fieldset className="fieldset legend-none w-full bg-base-200 pt-0 p-4 rounded-box mx-auto">
        <legend className="fieldset-legend"></legend>

        <label className="fieldset-label">Name</label>
        <input
          type="text"
          name="name"
          className="input validator w-full"
          required
          placeholder="Name"
          minLength={3}
          maxLength={30}
          value={formData.name}
          onChange={handleChange}
        />
        <div className="validator-hint">Please enter your name</div>
        
        <label className="fieldset-label">E-Mail</label>
        <input
          type="email"
          name="email"
          className="input validator w-full"
          required
          placeholder="E-Mail"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="validator-hint">Please enter your valid email address</div>

        <label className="fieldset-label">Phone Number</label>
        <input
          type="text"
          name="phone"
          className="input validator tabular-nums w-full"
          required
          placeholder="Phone Number"
          pattern="[0-9()+]*"
          minLength={5}
          maxLength={20}
          value={formData.phone}
          onChange={handleChange}
        />
        <div className="validator-hint">Please enter your valid phone number</div>
        
        <legend className="fieldset-label">Message</legend>
        <textarea
          name="message"
          className="textarea validator h-fit w-full"
          required
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <div className="fieldset-label">Please add a note before sending the message.</div>
        
        <button
          className="btn btn-outline btn-success hover:btn-success mt-4 shadow"
          disabled={!isFormValid}
          onClick={handleSubmit}
        >
          {isFormValid ? "Send Message" : "Please fill form above to send Whatsapp"}
        </button>
      </fieldset>
    </>
  )
}

export default FormSendWhatsapp