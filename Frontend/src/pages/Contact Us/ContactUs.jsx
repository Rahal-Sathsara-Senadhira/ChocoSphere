import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./ContactUs.css"; // Import CSS
import { DefaultAssets } from "../../assets/assets";

const ContactUs = () => {
  return (
    <>
      <div className="spacer"></div>
      <div className="contactus">
        <div className="contactus_dark"></div>
        <div className="contactus_head">
          <img src={DefaultAssets.contactUsbg} alt="" />
          <p>Contact Us</p>
        </div>
      </div>

      <div className="our_story">
        <div className="row">
          <div className="content">
            <div className="home-title">
              <h3>We Are Right Here</h3>
            </div>
            <p>
              ChocoSphere began as a small dream—a passion for crafting the
              finest chocolates with love and precision. From our humble
              beginnings, where every chocolate was handmade in a tiny kitchen,
              we have grown into a beloved brand known for its rich flavors and
              premium ingredients. As word spread, we expanded, introducing new
              creations and opening our doors to more chocolate lovers. With the
              launch of our online store, we made indulgence just a click away.
              Today, ChocoSphere continues its journey, blending tradition with
              innovation to bring joy, one chocolate at a time. Join us and
              taste the magic!
            </p>
          </div>
          <div className="image">
            <div className="imgholder">
              <img src={DefaultAssets.contactside} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          {/* Google Map Section */}
          <div className="map-container">
            <h2>Find Us Here</h2>
            <iframe
              title="Google Maps"
              className="map-embed"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098473!2d144.95373531531688!3d-37.81720974202165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df0b0b0b7%3A0xe3d93e55792fefb1!2sYour%20Company!5e0!3m2!1sen!2sus!4v1629987085934!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            
          </div>
          <div className="contact-card-holder">
            {/* Address Card */}
            <div className="contact-card">
              <h2>Our Address</h2>
              <p>123 Tech Street, Silicon Valley, CA, USA</p>
              <p>Phone: +1 234 567 890</p>
              <p>Email: contact@yourcompany.com</p>
            </div>

            {/* Social Media Card */}
            <div className="contact-card">
              <h2>Connect with Us</h2>
              <div className="social-icons">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://instagram.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://x.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="twitter"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
