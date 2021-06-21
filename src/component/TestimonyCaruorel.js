import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  testimonyDiv: {
    width: "30rem",
    margin: "2rem auto 3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));
const TestimonyCaruorel = () => {
  const classes = useStyle();
  return (
    <Carousel className="testimonials-carousel">
      <div className="testimonial-item" data-aos="fade-up">
        <div className={classes.testimonyDiv}>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Proin iaculis purus consequat sem cure digni ssim donec porttitora
            entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam
            eget nibh et. Maecen aliquam, risus at semper.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
        <img
          src="assets/img/testimonials/testimonials-1.jpg"
          className="testimonial-img"
          alt=""
        />
        <h3>Saul Goodman</h3>
        <h4>Ceo &amp; Founder</h4>
      </div>

      <div className="testimonial-item" data-aos="fade-up" data-aos-delay="100">
        <div className={classes.testimonyDiv}>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Proin iaculis purus consequat sem cure digni ssim donec porttitora
            entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam
            eget nibh et. Maecen aliquam, risus at semper.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
        <img
          src="assets/img/testimonials/testimonials-2.jpg"
          className="testimonial-img"
          alt=""
        />
        <h3>Sara Wilsson</h3>
        <h4>Designer</h4>
      </div>

      <div className="testimonial-item" data-aos="fade-up" data-aos-delay="200">
        <div className={classes.testimonyDiv}>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Proin iaculis purus consequat sem cure digni ssim donec porttitora
            entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam
            eget nibh et. Maecen aliquam, risus at semper.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
        <img
          src="assets/img/testimonials/testimonials-3.jpg"
          className="testimonial-img"
          alt=""
        />
        <h3>Jena Karlis</h3>
        <h4>Store Owner</h4>
      </div>

      <div className="testimonial-item" data-aos="fade-up" data-aos-delay="300">
        <div className={classes.testimonyDiv}>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Proin iaculis purus consequat sem cure digni ssim donec porttitora
            entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam
            eget nibh et. Maecen aliquam, risus at semper.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
        <img
          src="assets/img/testimonials/testimonials-4.jpg"
          className="testimonial-img"
          alt=""
        />
        <h3>Matt Brandon</h3>
        <h4>Freelancer</h4>
      </div>

      <div className="testimonial-item" data-aos="fade-up" data-aos-delay="400">
        <div className={classes.testimonyDiv}>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Proin iaculis purus consequat sem cure digni ssim donec porttitora
            entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam
            eget nibh et. Maecen aliquam, risus at semper.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
        <img
          src="assets/img/testimonials/testimonials-5.jpg"
          className="testimonial-img"
          alt=""
        />
        <h3>John Larson</h3>
        <h4>Entrepreneur</h4>
      </div>
    </Carousel>
  );
};

export default TestimonyCaruorel;

//      <Carousel className="owl-carousel testimonials-carousel">
//        <div className="testimonial-item" data-aos="fade-up">
//          <p>
//            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
//            Proin iaculis purus consequat sem cure digni ssim donec porttitora
//            entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam
//            eget nibh et. Maecen aliquam, risus at semper.
//            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
//          </p>
//          <img
//            src="assets/img/testimonials/testimonials-1.jpg"
//            className="testimonial-img"
//            alt=""
//          />
//          <h3>Saul Goodman</h3>
//          <h4>Ceo &amp; Founder</h4>
//        </div>

//    <div
//      className="testimonial-item"
//      data-aos="fade-up"
//      data-aos-delay="100"
//    >
//      <p>
//        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
//        Export tempor illum tamen malis malis eram quae irure esse labore
//        quem cillum quid cillum eram malis quorum velit fore eram velit sunt
//        aliqua noster fugiat irure amet legam anim culpa.
//        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
//      </p>
//      <img
//        src="assets/img/testimonials/testimonials-2.jpg"
//        className="testimonial-img"
//        alt=""
//      />
//      <h3>Sara Wilsson</h3>
//      <h4>Designer</h4>
//    </div>

//    <div
//      className="testimonial-item"
//      data-aos="fade-up"
//      data-aos-delay="200"
//    >
//      <p>
//        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
//        Enim nisi quem export duis labore cillum quae magna enim sint quorum
//        nulla quem veniam duis minim tempor labore quem eram duis noster aute
//        amet eram fore quis sint minim.
//        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
//      </p>
//      <img
//        src="assets/img/testimonials/testimonials-3.jpg"
//        className="testimonial-img"
//        alt=""
//      />
//      <h3>Jena Karlis</h3>
//      <h4>Store Owner</h4>
//    </div>

//    <div
//      className="testimonial-item"
//      data-aos="fade-up"
//      data-aos-delay="300"
//    >
//      <p>
//        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
//        Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos
//        export minim fugiat minim velit minim dolor enim duis veniam ipsum
//        anim magna sunt elit fore quem dolore labore illum veniam.
//        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
//      </p>
//      <img
//        src="assets/img/testimonials/testimonials-4.jpg"
//        className="testimonial-img"
//        alt=""
//      />
//      <h3>Matt Brandon</h3>
//      <h4>Freelancer</h4>
//    </div>

//    <div
//      className="testimonial-item"
//      data-aos="fade-up"
//      data-aos-delay="400"
//    >
//      <p>
//        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
//        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam
//        tempor noster veniam enim culpa labore duis sunt culpa nulla illum
//        cillum fugiat legam esse veniam culpa fore nisi cillum quid.
//        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
//      </p>
//      <img
//        src="assets/img/testimonials/testimonials-5.jpg"
//        className="testimonial-img"
//        alt=""
//      />
//      <h3>John Larson</h3>
//      <h4>Entrepreneur</h4>
//    </div>
// </Carousel>;