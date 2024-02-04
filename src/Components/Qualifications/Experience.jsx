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
      date: "apr 2022 - oct 2022",
    },
    {
      role: "Computer Science",
      name: "Harvard CS50",
      date: "2022 - 2023",
    },
  ];

  const Experience = [
    {
      role: "German Speaking Financial Accountant",
      name: "Unicredit",
      date: "july 2021 - jan 2022",
    },  
    {
      role: "Digital Development Representative with German",
      name: "Lenovo",
      date: "jan 2022 - july 2022",
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
      <h2 className="section-title">Qualifications</h2>
      <span className="presentation-subtitle">My journey</span> 

      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div className="qualification-button qualification-active button--flex">
            <i className="uil uil-graduation-cap qualification-icon"></i>{" "}
            Education
          </div>
          <div className="qualification-button qualification-active button--flex">
            <i className="uil uil-briefcase-alt qualification-icon"></i>{" "}
            Experience
          </div>
        </div>
        <div className="qualification-sections">
          <div className="qualification-content qualification-content-active">
            {Education.map((item, index) => {
              return (
                <div key={index} className="qualification-data">
                  <div>
                    <h3 className="qualification-title">{item.role}</h3>
                    <span className="qualification_-ubtitle">{item.name}</span>
                    <div className="qualification-calendar">
                      <i className="uil uil-calendar-alt"></i> {item.date}
                    </div>
                  </div>
                  <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pos-abs qualification-content-active">
            {Experience.map((item, index) => {
              return (
                <div key={index} className="qualification-dataa">
                  <div>
                    <h3 className="qualification-titlee">{item.role}</h3>
                    <span className="qualification-subtitlee">
                      {item.name}
                    </span>
                    <div className="qualification-calendare">
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
