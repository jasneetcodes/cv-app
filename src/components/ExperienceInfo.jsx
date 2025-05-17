function ExperienceInfo(){

    return(
        <>
        <label htmlFor="company">Company Name</label>
        <input type="text" id="company" />

        <label htmlFor="position">Position Title</label>
        <input type="text" id="position" />

        <label htmlFor="dateFrom">Date From</label>
        <input type="number" id="dateFrom" />

        <label htmlFor="dateTill">Date Till</label>
        <input type="number" id="dateTill" />

        <label htmlFor="responsibilities">Main Responsibilities</label>
        <textarea id="responsibilities"></textarea>
        </>
    )
}

export default ExperienceInfo