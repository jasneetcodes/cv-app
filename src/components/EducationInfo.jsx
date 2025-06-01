

function EducationInfo({school, title, time, schoolHandle, titleHandle, timeHandle}){

    return(
        <>
        <h2>Education Info</h2>
        <label htmlFor="studySchool">School</label>
        <input type="text" id="studySchool" value={school} onChange={schoolHandle} />

        <label htmlFor="studyTitle">Education Title</label>
        <input type="text" id="studyTitle" value={title} onChange={titleHandle}/>

        <label htmlFor="studyDate">Graduation Date</label>
        <input type="number" id="studyDate" value={time} onChange={timeHandle}/>
        </>
    )
}

export default EducationInfo