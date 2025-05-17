import EducationInfo from "./EducationInfo";
import GeneralInfo from "./GeneralInfo";
import "../styles/formStyles.css"
import ExperienceInfo from "./ExperienceInfo";
function Form() {
  return (
    <div className="form-container">
      <GeneralInfo />
      <EducationInfo />
      <ExperienceInfo/>
    </div>
  );
}

export default Form;
