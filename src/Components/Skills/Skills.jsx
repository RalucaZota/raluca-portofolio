import { FrontendSkills } from './FrontendSkills.jsx';
import { Frontend } from "./Frontend";
import "./Skills.scss";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="presentation-subtitle">My technical level</span>
      <h2 className="section-title-frontend">Frontend development</h2>
      <div className="skills-container container grid">
        <Frontend />
        <FrontendSkills />
      </div>
    </section>
  );
};

export default Skills;
