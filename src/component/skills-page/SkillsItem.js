import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const SkillsItem = (props) => {
  const { value, skill, colour } = props;
  return (
    <div className="col-lg-6" data-aos="fade-up">
      <div className="progress">
        <span className="skill">{skill}</span>
        <div className="progress-bar-wrap">
          <ProgressBar
            completed={value}
            transitionDuration="2s"
            baseBgColor="gray"
            labelColor="white"
            bgColor={`${colour}`}
            borderRadius="2rem"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;

//  <div
//    className="progress-bar"
//    role="progressbar"
//    aria-valuenow="100"
//    aria-valuemin="0"
//    aria-valuemax="100"
//    style={{ background: "red" }}
//  ></div>;
