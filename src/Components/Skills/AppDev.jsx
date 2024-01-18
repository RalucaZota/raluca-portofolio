export const Appdev = () => {
    const Appdev = [
      {
        name: "Dart",
        experience: "Intermediate",
      },
      {
        name: "Flutter",
        experience: "Intermediate",
      },
      {
        name: "React Native",
        experience: "Advanced",
      },
      {
        name: "React Native UI Libraries",
        experience: " Advanced",
      },
      {
        name: "Widget-based Development",
        experience: "Intermediate",
      },
      {
        name: "Provider",
        experience: "Intermediate",
      },
    ];
  
    return (
      <div className="skills-content">
        <h3 className="skills-title">App developer</h3>
        <div className="skills-box">
          <div className="skills-group">
            {Appdev.map((item, index) => {
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
  