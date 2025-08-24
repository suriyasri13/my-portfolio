import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./Contact.css";
import contact from "../assets/xx.jpg"; // Your contact image

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vhzuib2",    // Your EmailJS Service ID
        "template_i3348ua",   // Your EmailJS Template ID
        form.current,
        "IvDsoLt-mLoA_IoL-"  // Your EmailJS Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch(() => {
        alert("Failed to send message, please try again later.");
      });

    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <h2>
        <span className="colored-title">Contact</span> Me
      </h2>
      <p>Feel free to reach out by filling this form.</p>
      <div className="contact-content">
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Name" required />
          <input type="email" name="user_email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required />
          <motion.button
            type="submit"
            className="contact-submit"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            Send
          </motion.button>
        </form>
        <div className="contact-details">
          <img src={contact} alt="Contact" className="contact-img" />
          <div className="contact-info">
            <span>Chennai</span>
            <span>+91 9087199939</span>
            <span>suriyasricse@gmail.com</span>
            <a
              href="https://github.com/suriyasri13"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <footer className="contact-footer">
        © 2025 Suriya Sri. All Rights Reserved.
      </footer>
    </section>
  );
};

export default Contact;
