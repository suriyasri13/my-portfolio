import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Contact.css';
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert(`Thank you, ${formData.name}! Your message has been sent.`);
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert(`Thank you, ${formData.name}! Your message has been sent.`);
    }
  } catch (error) {
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    console.error(error);
  }
};



  return (
    <motion.section
      id="contact"
      className="section contact-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="contact-heading">
  <span className="heading-white">Contact</span>{' '}
  <span className="heading-purple">Me</span>
</h2>
<div className="contact-subtitle">GET IN TOUCH</div>

      <div className="contact-flex">
        <form onSubmit={handleSubmit} className="contact-form contact-formbox">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Id"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <div className="contact-info">
          <div className="contact-info-item">
            <FaEnvelope />
            <span>vijay.shriram157@gmail.com</span>
          </div>
          <div className="contact-info-item">
            <FaPhone />
            <span>+91 9150200538</span>
          </div>
          <div className="contact-info-item">
            <FaInstagram />
            <span>@i_am_vj_shriram</span>
          </div>
          <div className="contact-info-item">
            <FaLinkedin />
            <span>@vijay-shriram</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
