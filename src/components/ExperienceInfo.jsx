function ExperienceInfo({
  company,
  title,
  dateFrom,
  dateTill,
  responsibilities,
  companyHandle,
  positionHandle,
  dateFromHandle,
  dateTillHandle,
  responsibilitiesHandle,
}) {
  return (
    <>
      
      <label htmlFor="company">Company Name</label>
      <input
        type="text"
        id="company"
        value={company}
        onChange={companyHandle}
      />

      <label htmlFor="position">Position Title</label>
      <input
        type="text"
        id="position"
        value={title}
        onChange={positionHandle}
      />

      <label htmlFor="dateFrom">Date From</label>
      <input
        type="number"
        id="dateFrom"
        value={dateFrom}
        onChange={dateFromHandle}
      />

      <label htmlFor="dateTill">Date Till</label>
      <input
        type="number"
        id="dateTill"
        value={dateTill}
        onChange={dateTillHandle}
      />

      <label htmlFor="responsibilities">Main Responsibilities ( Use '-' only to divide duties )</label>
      <textarea
        rows={5}
        id="responsibilities"
        value={responsibilities}
        onChange={responsibilitiesHandle}
      ></textarea>
      
    </>
  );
}

export default ExperienceInfo;
