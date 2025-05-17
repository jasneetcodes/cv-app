import EducationInfo from "./EducationInfo";
import GeneralInfo from "./GeneralInfo";
import "../styles/formStyles.css"
import ExperienceInfo from "./ExperienceInfo";
import { useState } from "react";
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

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
    <div className="form-container">
      <h1>Resume Builder</h1>
      <GeneralInfo name={name} email={email} number={number} nameHandle={handleName} emailHandle={handleEmail} numberHandle={handleNumber}/>
      <EducationInfo />
      <ExperienceInfo/>
      <button>Create Resume</button>
    </div>
  );
}

export default Form;
