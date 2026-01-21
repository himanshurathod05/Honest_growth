import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaUser, FaPhoneAlt, FaEnvelope, FaCommentDots } from "react-icons/fa";
import "./ContactForm.css";
import SocialIcons from "./SocialIcons";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",     // EmailJS Service ID
        "YOUR_TEMPLATE_ID",    // EmailJS Template ID
        form.current,
        "YOUR_PUBLIC_KEY"      // EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message!");
          console.error(error);
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="left">
        <h1>
          Let’s Talk <br />
          <span className="typewriter"> </span>
        </h1>
        <p>
          Let's discuss your project at{" "}
          <a href="mailto:honestgrowth07@gmail.com">honestgrowth07@gmail.com</a>
        </p>
        <SocialIcons></SocialIcons>
      </div>

      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="input-group">
          <FaUser />
          <input type="text" name="name" placeholder="Name*" required />
        </div>

        <div className="row">
          <div className="input-group">
            <FaPhoneAlt />
            <input type="tel" name="contact" placeholder="Contact*" required />
          </div>

          <div className="input-group">
            <FaEnvelope />
            <input type="email" name="email" placeholder="Email*" required />
          </div>
        </div>

        <div className="input-group">
          <FaCommentDots className="icon" />
          <textarea name="message" placeholder="Message*" required />
        </div>

        <button type="submit">SEND MESSAGE</button>
      </form>
    </section>
  );
};

export default ContactForm;