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
      <GeneralInfo name={name} email={email} number={number} nameHandle={handleName} emailHandle={handleEmail} numberHandle={handleNumber}/>
      <EducationInfo 
      school={school} 
      title={studyTitle} 
      time={studyTime}
      schoolHandle = {(e) => setSchool(e.target.value)}
      titleHandle = {(e) => setStudyTitle(e.target.value)}
      timeHandle = {(e) => setStudyTime(e.target.value)}
      />
      <button onClick={() => setActive(1)}>Create Resume</button>
    </div>
    ) : (
      <div className="form-container">
      <h1>Name:{name}</h1>
      <h1>Email:{email}</h1>
      <h1>Number:{number}</h1>
      <hr />
      <h1>school:{school}</h1>
      <h1>studyTitle:{studyTitle}</h1>
      <h1>studyTime:{studyTime}</h1>
      <button onClick={() => setActive(0)}>Edit Resume</button>
    </div>
    )}

  </>

  );
}

export default Form;
