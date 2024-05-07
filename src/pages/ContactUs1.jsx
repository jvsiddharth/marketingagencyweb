// Import necessary dependencies
import { useState } from 'react';
import axios from 'axios';

// Import CSS module styles
import styles from "./ContactUs1.module.css";

const ContactUs = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send form data to backend
      await axios.post('/api/contact', formData);
      
      // Clear form fields after successful submission
      setFormData({ fullName: '', email: '', message: '' });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    }
  };

  return (
    <div className={styles.contactUs}>
      <a href="/" className={styles.embrace}>Marketing Hub</a>
      <div className={styles.contactUsInner}>
        <h1 className={styles.contactUs1}>Contact Us</h1>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            {/* Form */}
            <form className={styles.componentParent} onSubmit={handleSubmit}>
              {/* FrameComponent for Full Name */}
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
              />
              {/* FrameComponent for E-mail */}
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleInputChange}
              />
              {/* Textarea for Message */}
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
              />
              {/* Submit button */}
              <button type="submit" className={styles.contactUsWrapper}>
                <div className={styles.contactUs2}>Contact Us</div>
              </button>
            </form>
            {/* Additional content */}
            <div className={styles.frameGroup}>
              {/* Contact information */}
              <div className={styles.contactParent}>
                <b className={styles.contact}>Contact</b>
                <div className={styles.higreencom}>hi@green.com</div>
              </div>
              {/* Location */}
              <div className={styles.basedInParent}>
                <b className={styles.basedIn}>Based in</b>
                <div className={styles.losAngelesCaliforniaContainer}>
                  <p className={styles.losAngeles}>Los Angeles,</p>
                  <p className={styles.california}>California</p>
                </div>
              </div>
              {/* Social media icons */}
              <div className={styles.socialMediaIcons}>
                <img
                  className={styles.facebookNegative}
                  loading="lazy"
                  alt=""
                  src="/facebook--negative1.svg"
                />
                <img
                  className={styles.instagramNegative}
                  loading="lazy"
                  alt=""
                  src="/instagram--negative1.svg"
                />
                <img
                  className={styles.twitterNegative}
                  loading="lazy"
                  alt=""
                  src="/twitter--negative1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
