import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import emailJS from './EmailJS.json'



function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailJS.YOUR_SERVICE_ID,
        emailJS.YOUR_TEMPLATE_ID,
        form.current,
        emailJS.YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent successfully");
          alert('Enquiry submitted successfully.')
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="contact d-flex justify-content-between pt-5">
      <div className="contact-details ">
        <h1>Have Questions?</h1>
        <p>
          Please feel free to call or email us, <br /> or use our contact form
          to get in touch with us.
          <br /> We look forward to hearing from you!
        </p>
        <div className="contact-details-data">
          <h4>Call Us:</h4>
          <p>+91 6366750011</p>

          <h4>Send Us Mail</h4>
          <p>rupayapaisagurukul@gmail.com</p>

          <h4>Office Address:</h4>
          <p>
          4257, Dayanand Marg, Handi Pura, Badi Chaupar, Jaipur, Rajasthan 302002
          </p>
        </div>
      </div>
      <div className="enquiry-form">
        <h1>Fill this form to get a call back from us.</h1>
        <div className="form-area">
          <form ref={form} onSubmit={sendEmail} className="form">
            <label className="mb-1">Name</label>
            <input
              className="mb-3 p-1"
              type="text"
              name="user_name"
              placeholder="Enter your name"
            />
            <label className="mb-1">Email</label>
            <input
              className="mb-3 p-1"
              type="email"
              name="user_email"
              placeholder="Enter your email"
            />
            <label className="mb-1 p-1">Message</label>
            <textarea
              className="mb-3"
              name="message"
              placeholder="Enter your query here"
            />
            <input type="submit" value="Send Message" className="contact-btn p-2 rounded border"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
