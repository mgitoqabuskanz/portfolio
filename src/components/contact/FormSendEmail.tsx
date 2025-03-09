import emailjs from '@emailjs/browser';
import { useState } from 'react'

const FormSendEmail = () => {
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

  const reset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!isFormValid) {
      alert('Please fill in all fields correctly.');
      return;
    }

    const serviceId: string = 'service_7rrk3uw';
    const templateId: string = 'template_xj7pqxh';
    const publicKey: string = '2IT3vT2f1PWrHAYxu';

    const TemplateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      to_name: 'Muhammad Gito Qabus Kanz',
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, TemplateParams, publicKey)
    .then(() => {
        alert('Thanks for reaching out to me, I will get back to you soon!');
        reset();
        setIsFormValid(false);
    })
    .catch((error) => {
        alert(`Error Sending Message: ${error}`);
    });
  }
  return (
    <>
      <fieldset className="fieldset legend-none w-full bg-base-200 border border-base-300 p-4 rounded-box mx-auto">
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
          className="btn btn-outline btn-accent hover:btn-accent mt-4"
          disabled={!isFormValid}
          onClick={handleSubmit}
        >
          {isFormValid ? "Send Message" : "Please fill form above to send Email"}
        </button>
      </fieldset>
    </>
  )
}

export default FormSendEmail