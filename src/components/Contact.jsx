import React, { useState } from 'react';
import './Contact.css';

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

    // Construct mailto link with form data
    const mailtoLink = `mailto:owolabi8117@gmail.com?subject=Contact from ${formData.name}&body=Message: ${formData.message}%0AFrom: ${formData.name} (${formData.email})`;
    
    // Open the mailto link
    window.location.href = mailtoLink;
    
    // Show a confirmation message
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    alert('Your message has been prepared in your email client!');
  };

  return (
    <section id='contact' className='contact'>
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
        {submitted && <p className="successMessage">Thank you! Your message is ready in your email client.</p>}
        <div className='links'>
          <a href='https://facebook.com' target='_blank' rel='noreferrer' className='link'>
            {/* Facebook Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="100%" height="100%">
              <path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/>
              <path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.92 108 99.8V128H75.5v37H108v89.445a128.042 128.042 0 0 0 40 0V165h29.825Z"/>
            </svg>
          </a>
          <a href='https://twitter.com' target='_blank' rel='noreferrer' className='link'>
            {/* Twitter Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="100%" height="100%">
              <path fill="#1da1f2" d="M256 49.22a105.57 105.57 0 0 1-30.36 8.32a52.83 52.83 0 0 0 23.17-29.07a106.14 106.14 0 0 1-33.66 12.86a52.76 52.76 0 0 0-89.78 48.06A149.64 149.64 0 0 1 17.6 37.94a52.76 52.76 0 0 0 16.33 70.33A52.27 52.27 0 0 1 10.2 103v.67a52.72 52.72 0 0 0 42.28 51.67a52.87 52.87 0 0 1-23.81.9a52.78 52.78 0 0 0 49.27 36.6a105.83 105.83 0 0 1-65.57 22.6a106.7 106.7 0 0 1-12.61-.74a149.23 149.23 0 0 0 80.78 23.67c96.86 0 149.88-80.25 149.88-149.88q0-3.43-.15-6.82a106.6 106.6 0 0 0 26.15-27.18Z"/>
            </svg>
          </a>
          <a href='https://youtube.com' target='_blank' rel='noreferrer' className='link'>
            {/* YouTube Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="100%" height="100%">
              <path fill="#ff0000" d="M549.655 124.083c-6.281-23.61-24.771-42.18-48.396-48.486C457.479 64 288 64 288 64s-169.479 0-213.259 11.597c-23.625 6.306-42.115 24.876-48.396 48.486C16 171.821 16 256 16 256s0 84.179 10.345 131.917c6.281 23.61 24.771 42.18 48.396 48.486C118.521 448 288 448 288 448s169.479 0 213.259-11.597c23.625-6.306 42.115-24.876 48.396-48.486C560 340.179 560 256 560 256s0-84.179-10.345-131.917ZM232 334V178l142 78-142 78Z"/>
            </svg>
          </a>
          <a href='https://instagram.com' target='_blank' rel='noreferrer' className='link'>
            {/* Instagram Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
              <path fill="#e1306c" d="M349.33 69.33H162.67A93.45 93.45 0 0 0 69.33 162.67v186.66A93.45 93.45 0 0 0 162.67 442.67h186.66A93.45 93.45 0 0 0 442.67 349.33V162.67a93.45 93.45 0 0 0-93.34-93.34Zm61.53 36.75a20.75 20.75 0 1 1-20.75 20.75a20.75 20.75 0 0 1 20.75-20.75ZM256 181.25A74.75 74.75 0 1 1 181.25 256A74.75 74.75 0 0 1 256 181.25ZM388.17 349.33A49.67 49.67 0 0 1 338.5 399H173.5a49.67 49.67 0 0 1-49.67-49.67V173.5a49.67 49.67 0 0 1 49.67-49.67h165a49.67 49.67 0 0 1 49.67 49.67v175.83Z"/>
            </svg>
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
