import React from "react";

const AboutPage = () => {
  return (
    <div>
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About Me</h2>
            <p>
              I am an Experienced Fullstack Developer with a vast array of
              knowledge in many Frontend and Backend languages, responsive
              frameworks, databases and best code practices. I am dedicated to
              perfecting my craft by learning from more seasoned developers,
              building projects, and making stides to learn all that i can about
              Tech, and Software Development.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="assets/img/profile-img.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Fullstack Developer | Mobile Developer </h3>
              <p className="font-italic"></p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Birthday:</strong> 5<sup>th</sup> August
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Website:</strong> www.agho.work
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Phone:</strong> +2348-955-471-52
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Degree: </strong> Bachelors Of Engineering
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Email:</strong> wapemma@yahoo.com
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Work Status</strong> Available
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                During me Under-graduate days in University of Benin, I studied
                <b> Engineering</b>; and I believe that my understanding of
                enigeering, problem solving and algorithms are also skills that
                have and will continue to contribute to my overall success as a
                Product developer.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
