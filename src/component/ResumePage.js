import React from "react";

const ResumePage = () => {
  return (
    <div>
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
            <p>
              {" "}
              I am an Experienced Fullstack Developer with a vast array of
              knowledge in many Frontend and Backend languages, responsive
              frameworks, databases and best code practices.{" "}
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Emmanuel Agho</h4>
                <p>
                  I seek a challenging role in any team/organisation committed
                  to excellence; So as to work, learn, and contribute towards
                  attaining co-operate goals. I am dedicated to perfecting my
                  craft by learning from more seasoned developers, building
                  projects, and making stides to learn all that i can about
                  Tech, and Software Development.
                </p>
                <ul>
                  <li>Work: Available </li>
                  <li>Language: English</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Complete Web Development </h4>
                <h5>Jan - Dec, 2018.</h5>
                <p>
                  <em>App Brewery, United State.</em>
                </p>
                <p>
                  <b>Frontend:</b> HTML, CSS, Javascript. <b>Backend: </b>
                  Node.js, Javascript. <br />
                  <b> Frameworks/Libraries: </b> JQuery, Bootstrap, EJS,
                  React.js. <br /> <b>Database:</b> MongoDB <br />
                </p>
              </div>
              <div className="resume-item">
                <h4>Bachelor of Engineering </h4>
                <h5>2011 - 2016</h5>
                <p>
                  <em>University of Benin, (Benin-City), NG</em>
                </p>
                <p>
                  Bachelors of Chemical Engineering (Process Engineering);
                  Specialized in: Process Control, Automation; Computer aided
                  designs and Instrumentation; Computer Programming.
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Freelancing </h4>
                <h5>2020 - Present</h5>
                <p>
                  <em> Upwork, Fiver, Remote etc </em>
                </p>
                <ul>
                  <li>
                    Over 30 jobs completed; Satisfied customers from over 15
                    different countries and Localities.
                  </li>
                  <li>
                    Working hours delivered: 1000+; <br />
                    Avarage Job Success Rating: Over 90% <br />
                  </li>
                  <li>
                    Project scope includes: Software Development and Debugging;
                    WordPress, Wix, and Shopify development and Debugging; Web
                    Scrapping, Scripting, Research, and Data Mining; Database
                    Setup Engineering; and Mobile Development.
                  </li>
                  <li> 100% Job Satisfaction.</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4> Lead Instructor </h4>
                <h5>2019 - Present</h5>
                <p>
                  <em> Software Engineering - Learn Now Africa</em>
                </p>
                <ul>
                  <li>
                    A shared digital work and Learning hub; For Learning,
                    Mentorship, Collabaration and Internship placements for
                    Digital and Tech Skills.
                  </li>
                  <li>
                    Over 50 comprehensive Digital Courses; 1000+ mini courses
                    and videos; 10,0000+ tutorial videos and Daily Tech Articles
                    and Tips.
                  </li>
                  <li>Project Based Learning.</li>
                  <li>24/7 learning hub</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
