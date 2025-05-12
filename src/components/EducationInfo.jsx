

function EducationInfo(){

    return(
        <>
        <label htmlFor="studySchool">School</label>
        <input type="text" id="studySchool" />

        <label htmlFor="studyTitle">Education Title</label>
        <input type="text" id="studyTitle" />

        <label htmlFor="studyDate">Graduation Date</label>
        <input type="number" id="studyDate" />
        </>
    )
}

export default EducationInfo