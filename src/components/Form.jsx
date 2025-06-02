import EducationInfo from "./EducationInfo";
import GeneralInfo from "./GeneralInfo";
import "../styles/formStyles.css";
import ExperienceInfo from "./ExperienceInfo";
import { useState } from "react";
function Form() {
  const [active, setActive] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [school, setSchool] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyTime, setStudyTime] = useState("");

  const [experiences, setExperiences] = useState([
    {
      company: "",
      title: "",
      dateFrom: "",
      dateTill: "",
      responsibilities: "",
    },
  ]);

  function handleExperienceChange(index, field, value) {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
  }

  function addExperience() {
    setExperiences([
      ...experiences,
      {
        company: "",
        title: "",
        dateFrom: "",
        dateTill: "",
        responsibilities: "",
      },
    ]);
  }

  return (
    <>
      {active == 0 ? (
        <div className="form-container">
          <h1>Resume Builder</h1>
          <GeneralInfo
            name={name}
            email={email}
            number={number}
            nameHandle={(e) => setName(e.target.value)}
            emailHandle={(e) => setEmail(e.target.value)}
            numberHandle={(e) => setNumber(e.target.value)}
          />
          <EducationInfo
            school={school}
            title={studyTitle}
            time={studyTime}
            schoolHandle={(e) => setSchool(e.target.value)}
            titleHandle={(e) => setStudyTitle(e.target.value)}
            timeHandle={(e) => setStudyTime(e.target.value)}
          />

          {experiences.map((exp, index) => (
            <ExperienceInfo
              key={index}
              company={exp.company}
              title={exp.title}
              dateFrom={exp.dateFrom}
              dateTill={exp.dateTill}
              responsibilities={exp.responsibilities}
              companyHandle={(e) =>
                handleExperienceChange(index, "company", e.target.value)
              }
              positionHandle={(e) =>
                handleExperienceChange(index, "title", e.target.value)
              }
              dateFromHandle={(e) =>
                handleExperienceChange(index, "dateFrom", e.target.value)
              }
              dateTillHandle={(e) =>
                handleExperienceChange(index, "dateTill", e.target.value)
              }
              responsibilitiesHandle={(e) =>
                handleExperienceChange(
                  index,
                  "responsibilities",
                  e.target.value
                )
              }
            />
          ))}

          <button onClick={addExperience}>Add more work experience</button>
          <button onClick={() => setActive(1)}>Create Resume</button>
        </div>
      ) : (
        <div className="form-container">
          <p>Name:{name}</p>
          <p>Email:{email}</p>
          <p>Number:{number}</p>
          <hr />
          <p>school:{school}</p>
          <p>studyTitle:{studyTitle}</p>
          <p>studyTime:{studyTime}</p>
          <hr />
          {experiences.map((exp) => (
            <>
              <p>Company Name:{exp.company}</p>
              <p>Position Title:{exp.companyPosition}</p>
              <p>
                From:{exp.dateFrom} Till:{exp.dateTill}
              </p>
              <p>Duties:{exp.responsibilities}</p>
            </>
          ))}

          <button onClick={() => setActive(0)}>Edit Resume</button>
        </div>
      )}
    </>
  );
}

export default Form;
