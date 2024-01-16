/* eslint-disable react/jsx-no-target-blank */
const Social = () => {
    return (
      <div className="social-container">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/lorena-raluca-zota/"
          className="social-icon"
        >
          <i className="uil uil-linkedin"></i>
        </a>
        <a
          target="_blank"
          href="https://github.com/RalucaZota"
          className="social-icon"
        >
          {" "}
          <i className="uil uil-github-alt"></i>
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/ZotaLorena"
          className="social-icon"
        >
          {" "}
          <i className="uil uil-facebook"></i>
        </a>
      </div>
    );
  };
  
  export default Social;
  