import React from "react";
import TestimonyCaruorel from "./TestimonyCaruorel";

const TestimonialPage = () => {
  return (
    <div>
      <section id="testimonials" className="testimonials section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>
              I offer services both physically and remotely across the globe;
              But for the sake of verification, Below are a few comments from my
              satisfied clients on Upwork.
              <a target="_blanc" href="https://www.upwork.com/freelancers/agho">
                {" "}
                See On Upwork
              </a>
            </p>
          </div>

          <TestimonyCaruorel />
        </div>
      </section>
    </div>
  );
};

export default TestimonialPage;
