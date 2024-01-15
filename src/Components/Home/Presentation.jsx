import hand from "../../assets/hand.svg";
import send from "../../assets/send.svg";


const Presentation = () => {
    return (
        <div className="home-presentation">
        <h1 className="presentation-title">
          Lorena Raluca Zota <img className="presentation-hand" src={hand} alt="" />
        </h1>
        <h3 className="presentation-subtitle">Frontend Developer</h3>
        <p className="presentation-description">
          Proficient Frontend Developer skilled in JavaScript, React, and Vue,
          crafting clean and intuitive interfaces to enhance user experiences.
          Meticulously blending design and functionality for seamless, engaging
          digital landscapes.
        </p>
        <a href="#contact" className="button button--flex">
          {" "}
          Say Hi!
          <img className="img" src={send} alt="" />
        </a>
      </div>   
    );
};

export default Presentation;