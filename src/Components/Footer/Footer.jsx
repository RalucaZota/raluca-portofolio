import "./Footer.scss";

export const Footer = () => {
  const footerData = [
    [
      {
        about: "#about",
        name: "About",
      },
      {
        about: "#about",
        name: "Portfolio",
      },
      {
        about: "#testimonials",
        name: "Testimonials",
      },
    ],
    [
      {
        link: "https://www.linkedin.com/in/lorena-raluca-zota/",
        icon: "uil uil-linkedin",
      },
      {
        link: "https://github.com/RalucaZota",
        icon: "uil uil-github-alt",
      },
      {
        link: "https://www.facebook.com/ZotaLorena",
        icon: "uil uil-facebook",
      },
    ],
  ];

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Raluca</h1>
        <ul className="footer__list">
          {footerData[0].map((item, index) => {
            return (
              <li key={index}>
                <a href={item.about} className="footer__link">
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="footer__social">
          {footerData[1].map((item, index) => {
            return (
              <a
                key={index}
                target="_blank"
                rel="noreferrer"
                href={item.link}
                className="footer__social-link"
              >
                <i className={item.icon}></i>
              </a>
            );
          })}
        </div>
        <span className="footer__copy">
          &#169; All rights reserved by{" "}
          <a
            className="owner__name"
            href="https://www.linkedin.com/in/lorena-raluca-zota/"
          >
            Lorena Raluca Zota
          </a>
        </span>
      </div>
    </footer>
  );
};
