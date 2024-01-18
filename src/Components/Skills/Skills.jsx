import { Appdev } from './AppDev.jsx';
import { Frontend } from "./Frontend";
import "./Skills.scss";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My technical level</span>
      <div className="skills-container container grid">
        <Frontend />
        <Appdev />
      </div>
    </section>
  );
};

export default Skills;
