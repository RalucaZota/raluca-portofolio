import "./Experience.scss";

const Experience = () => {
  const Education = [
    {
      role: "Social Science",
      name: "High-School",
      date: "2014 - 2018",
    },
    {
      role: "Translation and Interpretation English-German",
      name: "A.I.Cuza Univ",
      date: "2018 - 2021",
    },
    {
      role: "Frontend-Dev.",
      name: "IT-School",
      date: "2019 - 2020",
    },
    {
      role: "Computer Science",
      name: "Harvard CS50",
      date: "2022 - 2023",
    },
  ];

  const Experience = [
    {
      role: "",
      name: "",
      date: "",
    },
    {
      role: "Frontend-Dev.",
      name: "Super Dev",
      date: "july 2022 - jan 2023",
    },
    {
        role: "Frontend-Dev.",
        name: "Newroco",
        date: "feb 2023 - present",
      },
  ];

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            {Education.map((item, index) => {
              return (
                <div key={index} className="qualification__data">
                  <div>
                    <h3 className="qualification__title">{item.role}</h3>
                    <span className="qualification__subtitle">{item.name}</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i> {item.date}
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pos-abs qualification__content-active">
            {Experience.map((item, index) => {
              return (
                <div key={index} className="qualification__dataa">
                  <div>
                    <h3 className="qualification__titlee">{item.role}</h3>
                    <span className="qualification__subtitlee">
                      {item.name}
                    </span>
                    <div className="qualification__calendare">
                      <i className="uil uil-calendar-alt"></i> {item.date}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
