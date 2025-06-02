import EducationInfo from "./EducationInfo";
import GeneralInfo from "./GeneralInfo";
import "../styles/formStyles.css"
import ExperienceInfo from "./ExperienceInfo";
import { useState } from "react";
function Form() {
  const [active, setActive] = useState(0);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  
  const [school, setSchool] = useState('');
  const [studyTitle, setStudyTitle] = useState('');
  const [studyTime, setStudyTime] = useState('');

  const [company, setCompany] = useState('');
  const [companyPosition, setCompanyPosition] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTill, setDateTill] = useState('');
  const [responsibilities, setResponsibilities] = useState('');

  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleNumber(e) {
    setNumber(e.target.value);
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
      schoolHandle = {(e) => setSchool(e.target.value)}
      titleHandle = {(e) => setStudyTitle(e.target.value)}
      timeHandle = {(e) => setStudyTime(e.target.value)}
      />
      <ExperienceInfo
        company={company} 
        title={companyPosition} 
        dateFrom={dateFrom}
        dateTill={dateTill}
        responsibilities={responsibilities}

        companyHandle = {(e) => setCompany(e.target.value)}
        positionHandle = {(e) => setCompanyPosition(e.target.value)}
        dateFromHandle = {(e) => setDateFrom(e.target.value)}
        dateTillHandle = {(e) => setDateTill(e.target.value)}
        responsibilitiesHandle = {(e) => setResponsibilities(e.target.value)}
      
        />
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
      <p>Company Name:{company}</p>
      <p>Position Title:{companyPosition}</p>
      <p>From:{dateFrom} Till:{dateTill}</p>
      <p>Duties:{responsibilities}</p>
      <button onClick={() => setActive(0)}>Edit Resume</button>
    </div>
    )}

  </>

  );
}

export default Form;
