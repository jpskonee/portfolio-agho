import React from "react";

const ServicesPage = () => {
  return (
    <div>
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>
              A Lifetime to committment to Humanity; to engineer, support, and
              contribute towards making life easy for the common out there -
              Sustainable Development - Programmitically; as a stetegy for
              Sustainble Development accross africa, and the World at large.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon">
                <i className="icofont-code-alt"></i>
              </div>
              <h4 className="title">
                <a href="www.google.com">Software Development</a>
              </h4>
              <p className="description">
                Experienced Fullstack Developer; With over 5 years experience in
                building edge-cutting Web Applications, API dashboard,
                Management Systems, E-commerce, and various Content Management
                Systems. eg. Wordpress, Wix, Shopify etc..
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon">
                <i className="icofont-iphone"></i>
              </div>
              <h4 className="title">
                <a href="www.google.com">Mobile Development</a>
              </h4>
              <p className="description">
                Experienced mobile-developer; with over 3years of rigorous
                React-Native Designing, Coding, testing, debugging, documenting,
                and developing mobile experiences that work across various
                platforms (phones, tablets, etc.)
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon">
                <i className="icofont-chart-growth"></i>
              </div>
              <h4 className="title">
                <a href="www.google.com">IT Consultancy</a>
              </h4>
              <p className="description">
                Top-notch product Designing and Development skills; With over
                6years industry experience in Tech start-ups, STEM Education
                integration, IT support and Digital literacy
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
