import React, { useState } from "react";
import JobDescription from "./JobDescription";
export default function AddExperience({ id }) {
  const [expData, setExpData] = useState({
    id: id,
    company_name: "",
    job_title: "",
    start: "",
    end: "",
    description: [],
  });
  function addDesc(e) {
    e.preventDefault();
  }
  function deleteThisJob(e) {
    e.preventDefault();
  }
  function formChange(e) {
    setExpData((old) => ({
      ...old,
      [e.target.id]: e.target.value,
    }));
  }
  return (
    <form>
      <fieldset>
        <label htmlFor="job_title">Job Title</label>
        <input
          type="text"
          name="job_title"
          id="job_title"
          onChange={formChange}
          value={expData.job_title}
        />
        <label htmlFor="company_name">Company Name</label>
        <input
          type="text"
          name="company_name"
          id="company_name"
          onChange={formChange}
          value={expData.company_name}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="start">Beginning of work</label>
        <input
          type="date"
          name="start"
          id="start"
          onChange={formChange}
          value={expData.start}
        />
        <label htmlFor="end">End of work</label>
        <input
          type="date"
          name="end"
          id="end"
          onChange={formChange}
          value={expData.end}
        />
      </fieldset>
      <fieldset>
        <JobDescription />
        <button onCLick={addDesc}>Add Descripton</button>
      </fieldset>
      <button onClick={deleteThisJob}>DELETE</button>
    </form>
  );
}
