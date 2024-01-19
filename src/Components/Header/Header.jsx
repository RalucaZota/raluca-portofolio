import { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false); //Toggle Menu

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Raluca
        </a>
        <div className={toggle ? "nav__menu show__menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="" className="nav__link active__link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link active__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link active__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link active__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link active__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            onClick={() => {
              setToggle(!toggle);
            }}
            className="uil uil-times nav__close"
          ></i>
        </div>
        <div className="nav__toggle" onClick={handleToggle}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </div>
  );
};

export default Header;
