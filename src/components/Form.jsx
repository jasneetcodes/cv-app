import EducationInfo from "./EducationInfo";
import GeneralInfo from "./GeneralInfo";
import "../styles/formStyles.css"
import ExperienceInfo from "./ExperienceInfo";
function Form() {
  return (
    <div className="form-container">
      <h1>Resume Builder</h1>
      <GeneralInfo />
      <EducationInfo />
      <ExperienceInfo/>
      <button>Create Resume</button>
    </div>
  );
}

export default Form;
