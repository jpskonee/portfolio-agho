import React from "react";
import Footer from "./Footer";
import HeaderWithNav from "./HeaderWithNav";

const PortfolioPage = () => {
  return (
    <div>
      <HeaderWithNav />

      <main id="main">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Portfoio Details</h2>
              <ol>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Portfoio Details</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="portfolio-details-container">
              <div className="owl-carousel portfolio-details-carousel">
                <img
                  src="/assets/img/portfolio-details-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <img
                  src="assets/img/portfolio-details-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <img
                  src="assets/img/portfolio-details-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: Web design
                  </li>
                  <li>
                    <strong>Client</strong>: ASU Company
                  </li>
                  <li>
                    <strong>Project date</strong>: 01 March, 2020
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="https://www.twitter.com/Agho_Dev?s=09">
                      www.example.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="portfolio-description">
              <h2>This is an example of portfolio detail</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                itaque inventore commodi labore quia quia. Exercitationem
                repudiandae officiis neque suscipit non officia eaque itaque
                enim. Voluptatem officia accusantium nesciunt est omnis tempora
                consectetur dignissimos. Sequi nulla at esse enim cum deserunt
                eius.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <a href="/home" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
    </div>
  );
};

export default PortfolioPage;
