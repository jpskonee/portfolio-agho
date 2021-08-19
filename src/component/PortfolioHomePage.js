import React from "react";
import { Link } from "react-router-dom";

const PortfolioHomePage = () => {
  return (
    <div>
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Works</h2>
            <p>
              My goal is to be the best I can, and be able to always profer
              solution to people and humanity, <em> programmatically</em>.
            </p>
          </div>

          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">Web</li>
                <li data-filter=".filter-card">Mobile </li>
                <li data-filter=".filter-web">Projects</li>
              </ul>
            </div>
          </div>

          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="Learn Now Africa"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="/portfoliopage" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-2.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="CV Lord"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="/portfoliopage" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-3.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="Twitch Clone"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="/portfoliopage" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-4.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-4.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="Music Box"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="/portfoliopage" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-5.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-5.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="Kudi Bag"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="/portfoliopage" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-6.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-6.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="Personal Portfolio"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="/portfoliopage" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-7.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-7.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="Weather App"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="/portfoliopage" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-8.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-8.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="Barawo.com"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="/portfoliopage" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-9.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-9.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="Olorioko"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <Link to={`/portfoliopage`}>
                    <a href="/" title="View Page">
                      <i className="bx bx-link"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default PortfolioHomePage;
