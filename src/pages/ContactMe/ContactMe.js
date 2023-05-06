import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h1ylpnl', 'template_riygdd6', form.current, 'NiSQPx9C7qKJB_3ZN')
      .then(() => {
          toast.success('Send Email Successfully')
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div data-aos="fade-up"
    data-aos-duration="1500">
      <form ref={form} onSubmit={sendEmail} className='my-16 md:w-1/3 mx-5 md:mx-auto border rounded p-8 '>
      <h3 className='text-2xl font-semibold  text-cyan-600 mb-3'>Send me a message</h3>
      <label>Name</label> <br />
      <input type="text" name="user_name" placeholder="Your Name" className="input input-bordered w-full" required/>
      <label>Email</label><br />
      <input type="email" name="user_email" placeholder="Your Email" className="input input-bordered w-full " required/>
      <label>Message</label><br />
      <textarea name="message" className="w-full textarea textarea-bordered mb-5" placeholder="Type Your Message" required></textarea>
      <input type="submit" value="Submit" className='w-full btn btn-accent text-white text-semibold text-lg'/>
    </form>
    </div>
  );
};

export default ContactMe;