import React from "react";
import SkillsItem from "./SkillsItem";

const SkillsPage = () => {
  return (
    <div>
      <section id="skills" className="skills section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              <b>Frontend:</b> HTML, CSS, Javascript, XML. <b>Backend: </b>
              Node.js, Javascript, Typescript, Python. <br />
              <b> Frameworks/Libraries: </b> JQuery, Bootstrap, Next.js,
              GraphQL, SASS, EJS, React.js, Redux Material-UI, Ant-Designs.{" "}
              <br />
              <b> CMS: </b> Wordpress, Shopify, Wix. <b>Database:</b> MySQL,
              PostgreSQL, MongoDB, Firebase & Cassandra. <br />
              <b> Task & Project Management: </b> Jira, Git, Asana{" "}
              <b> Mobile: </b> React-Native
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <SkillsItem colour="SlateBlue" value={100} skill="HTML" />
            <SkillsItem colour="orange" value={98} skill="CSS" />
            <SkillsItem colour="red" value={95} skill="Bootstrap" />
            <SkillsItem colour="tomato" value={95} skill="SASS" />
            <SkillsItem colour="#148F77" value={98} skill="Javascript" />
            <SkillsItem colour="aqua" value={92} skill="Typescript" />
            <SkillsItem colour="dodgerblue" value={98} skill="React.js" />
            <SkillsItem colour="green" value={90} skill="Next.js" />
            <SkillsItem colour="peach" value={95} skill="Node.js" />
            <SkillsItem colour="Violet" value={90} skill="Python" />
            <SkillsItem colour="#BA4A00" value={88} skill="React-Native" />
            <SkillsItem colour="LightCoral" value={98} skill="Material-UI" />
            <SkillsItem colour="#239aff" value={99} skill="Wordpress" />
            <SkillsItem colour="#DE3163" value={97} skill="Shopify" />
            <SkillsItem colour="#1054F3" value={96} skill="Wix" />
            <SkillsItem colour="black" value={99} skill="Database" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
