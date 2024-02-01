export const FrontendSkills = () => {
    const FrontendSkills = [
      {
        name: "npm",
        experience: "Advanced",
      },
      {
        name: "Clickup",
        experience: "Advanced",
      },
      {
        name: "React Router",
        experience: "Advanced",
      },
      {
        name: "Github/Gitlab",
        experience: " Advanced",
      },
      {
        name: "Vuetify",
        experience: "Intermediate",
      },
    ];
    const aditionalSkills = [
      {
        name: "Material UI",
        experience: "Proficient",
      },
      {
        name: "Git",
        experience: "Advanced",
      },
      {
        name: "Scrum/Agile",
        experience: "Advanced",
      } ]
  
    return (
      <div className="skills-content">
        <div className="skills-box">
          <div className="skills-group">
            {FrontendSkills.map((item, index) => {
              return (
                <div key={index} className="skills-data">
                  <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills-name">{item.name}</h3>
                    <span className="skills-level">{item.experience}</span>
                  </div>
                </div>
              );
            })}
            </div>
             <div className="skills-group">
            {aditionalSkills.map((item, index) => {
              return (
                <div key={index} className="skills-data">
                  <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills-name">{item.name}</h3>
                    <span className="skills-level">{item.experience}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  