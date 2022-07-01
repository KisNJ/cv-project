import React, { useEffect, useState } from "react";
import JobDescription from "./JobDescription";
export default function AddExperience({
  id,
  company_name,
  job_title,
  start,
  end,
  description,
  updateExperience,
  deleteThisJob,
}) {
  const [expData, setExpData] = useState({
    id: id,
    company_name: company_name,
    job_title: job_title,
    start: start,
    end: end,
    description: description,
  });
  useEffect(()=>{
    setExpData({
      id,
      company_name,
      job_title,
      start,
      end,
      description,
    })
  },[id,job_title,company_name,start,end,description])
  useEffect(() => {
    updateExperience(expData);
  }, [expData]);
  function addDesc(e) {
    e.preventDefault();
    setExpData((old) => ({
      ...old,
      description: [
        ...old.description,
        {
          jd_id: old.description.length,
          wantDot: false,
          desc: "",
        },
      ],
    }));
  }
  function deleteThisJobL(e) {
    e.preventDefault();
    deleteThisJob(id);
  }
  function formChange(e) {
    setExpData((old) => ({
      ...old,
      [e.target.id]: e.target.value,
    }));
  }
  function updateDescriptions(data) {
    let temp = { ...expData };
    for (let i = 0; i < temp.description.length; i++) {
      if (data.jd_id === temp.description[i].jd_id) {
        temp.description[i] = data;
      }
    }
    for (let i = 0; i < temp.description.length; i++) {
      temp.description[i].jd_id = i;
    }
    setExpData({ ...temp });
  }
  function deleteDescription(id) {
    // console.log(id)
    let temp = { ...expData };
    temp.description = temp.description.filter((x) => x.jd_id !== id);
    setExpData({ ...temp });
  }
  return (
    <div>
      <fieldset>
        <label htmlFor="job_title">Job Title</label>
        <input
          type="text"
          name="job_title"
          id="job_title"
          onChange={formChange}
          value={job_title}
        />
        <label htmlFor="company_name">Company Name</label>
        <input
          type="text"
          name="company_name"
          id="company_name"
          onChange={formChange}
          value={company_name}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="start">Beginning of work</label>
        <input
          type="month"
          name="start"
          id="start"
          onChange={formChange}
          value={start}
        />
        <label htmlFor="end">End of work</label>
        <input
          type="month"
          name="end"
          id="end"
          onChange={formChange}
          value={end}
        />
      </fieldset>
      <fieldset>
        {description.map((x) => (
          <JobDescription
            jd_id={x.jd_id}
            wantDot={x.wantDot}
            desc={x.desc}
            updateDescriptions={updateDescriptions}
            deleteDescription={deleteDescription}
          />
        ))}
        <button onClick={addDesc}>Add Descripton</button>
      </fieldset>
      <button onClick={deleteThisJobL}>DELETE</button>
    </div>
  );
}
