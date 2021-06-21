import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  animText: {
    fontSize: "3rem",
    marginTop: "1.5rem",
    color: "#8CD5FB",
    fontFamily: "cursive",
    borderRadius: " 1rem",
    [theme.breakpoints.only("md")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.8rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.5rem",
    },
  },
}));

const NameAnimation = () => {
  const classes = useStyles();
  return (
    <div>
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Emmanuel Agho</h1>
          <div className={classes.animText}>
            <ReactTypingEffect
              text={[
                "Software Engineer.",
                "Product Developer.",
                "IT Consultant.",
                "STEM Educator.",
                "Technopreneur.",
              ]}
            />
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            ></span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NameAnimation;
