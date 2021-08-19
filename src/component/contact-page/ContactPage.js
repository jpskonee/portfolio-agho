import React from "react";
import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";

const ContactPage = () => {
  return (
    <div>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              Schooling, college, degrees, or intellect will not do you much
              good if you can't get other people to cooperate with you in order
              to create opportunities for yourself. - Napoleon Hill{" "}
              <strong> Let's Connect! </strong>
            </p>
          </div>

          <div className="row" data-aos="fade-in">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="email">
                  <i className="icofont-envelope"></i>
                  <h4>Email:</h4>
                  <p>wapemma@yahoo.com</p>
                </div>

                <div className="address">
                  <i className="icofont-google-map"></i>
                  <h4>Telegram: </h4>
                  <p>https://t.me/aghodotwork</p>
                </div>

                <div className="phone">
                  <i className="icofont-globe-alt"></i>
                  <h4>
                    <a
                      target="_blanc"
                      href="https://www.upwork.com/freelancers/agho"
                    >
                      {" "}
                      Upwork
                    </a>
                  </h4>
                </div>

                <GoogleMap />
              </div>
            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
