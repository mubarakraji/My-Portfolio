import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import l1 from '../assets/l1.jpg';
import l2 from '../assets/l2.jpg';
import l3 from '../assets/l3.jpg';
import l4 from '../assets/l4.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      formData,            
      'YOUR_USER_ID'       
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); 
      })
      .catch((error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div className='contact'>
      <h1 className='contactTitle'>Contact Me</h1>
      <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
      <form className='contactForm' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          className='name'
          placeholder='Your Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type='email'
          name='email'
          className='email'
          placeholder='Your Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name='message'
          className='msg'
          rows='5'
          placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type='submit' className='submitBtn'>Submit</button>
        {submitted && <p className="successMessage">Thank you! Your message has been sent.</p>}
        <div className='links'>
          <img src={l1} alt='Facebook' className='link' />
          <img src={l2} alt='Twitter' className='link' />
          <img src={l3} alt='YouTube' className='link' />
          <img src={l4} alt='Instagram' className='link' />
        </div>
      </form>
    </div>
  );
};

export default Contact;
