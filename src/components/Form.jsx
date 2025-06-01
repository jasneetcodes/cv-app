import EducationInfo from "./EducationInfo";
import GeneralInfo from "./GeneralInfo";
import "../styles/formStyles.css"
import ExperienceInfo from "./ExperienceInfo";
import { useState } from "react";
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [active, setActive] = useState(0);

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
 
      <button onClick={() => setActive(1)}>Create Resume</button>
    </div>
    ) : (
      <div className="form-container">
      <h1>{name}</h1>
      
 
      <button onClick={() => setActive(0)}>Edit Resume</button>
    </div>
    )}

  </>

  );
}

export default Form;
