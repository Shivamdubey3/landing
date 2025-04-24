import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './EnquiryForm.css';

export default function EnquiryForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_t708coj',       // ✅ Your Service ID
      'template_fwac1pm',      // 🔁 Replace with your Template ID
      form.current,
      'aC1q9ql4JLA3mv7Jm'       // ✅ Your Public Key
    )
    .then(
      (result) => {
        alert('✅ Message sent successfully!');
        console.log(result.text);
      },
      (error) => {
        alert('❌ Failed to send message. Please try again.');
        console.error(error.text);
      }
    );

    e.target.reset(); // Reset the form fields
  };

  return (
    <div className="enquiry-card">
      <button className="enquiry-button instant-callback">
        Instant Call Back
      </button>
      <h3 className="enquiry-title">Get The Best Quote</h3>
      <form ref={form} onSubmit={sendEmail} className="enquiry-form">
        <input
          type="text"
          name="name"
          className="enquiry-input"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          className="enquiry-input"
          placeholder="Email Address"
          required
        />
        <div className="phone-group">
          <select className="enquiry-select" name="country_code">
            <option value="+91">(+91)</option>
          </select>
          <input
            type="tel"
            name="phone"
            className="enquiry-input enquiry-phone"
            placeholder="Phone number"
            required
          />
        </div>
        <button type="submit" className="enquiry-button">
          Get It Now
        </button>
      </form>
    </div>
  );
}
