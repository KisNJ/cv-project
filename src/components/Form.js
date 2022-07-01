import React, { useState } from "react";
import AddEducation from "./AddEducation";
import AddExperience from "./AddExperience";
export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    job_title: "",
    experience: [],
    education: [],
    contanct: [],
    languages: [],
    technologies: [],
  });
  function addExp(e) {
    e.preventDefault();
    setFormData((old) => ({
      ...old,
      experience: [
        ...old.experience,
        {
          id: old.experience.length,
          company_name: "",
          job_title: "",
          start: "",
          end: "",
          description: [],
        },
      ],
    }));
  }
  function addEdu(e) {
    e.preventDefault();
    // setFormData(old=>({
    //   ...old,

    // }))
  }
  function updateExperience(data) {
    let temp = { ...formData };
    for (let i = 0; i < temp.experience.length; i++) {
      if (temp.experience[i].id === data.id) {
        temp.experience[i] = data;
      }
    }
    for (let i = 0; i < temp.experience.length; i++) {
      temp.experience[i].id = i;
    }
    setFormData({ ...temp });
  }
  function formChange(e) {
    setFormData((old) => ({
      ...old,
      [e.target.id]: e.target.value,
    }));
  }
  function deleteThisJob(id) {
    let temp = { ...formData };
   console.log(id)
    temp.experience = temp.experience.filter((x) => x.id !== id);
    console.log(temp)
    for (let i = 0; i < temp.experience.length; i++) {
      temp.experience[i].id = i;
    }
    setFormData({...temp})
  }
  console.log(formData)
  return (
    <form>
      <fieldset>
        <label htmlFor="name">Enter your name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={formChange}
          value={formData.name}
        />
        <label htmlFor="job_title">Enter your job title</label>
        <input
          type="text"
          name="job_title"
          id="job_title"
          onChange={formChange}
          value={formChange.job_title}
        />
      </fieldset>
      <fieldset>
        <legend>EXPERIENCE</legend>
        {formData.experience.map((x) => (
          <AddExperience
            id={x.id}
            company_name={x.company_name}
            job_title={x.job_title}
            start={x.start}
            end={x.end}
            deleteThisJob={deleteThisJob}
            description={x.description}
            updateExperience={updateExperience}
          />
        ))}

        <button onClick={addExp}>Add Exerience</button>
      </fieldset>
      <fieldset>
        <legend>EDUCATION</legend>,
        <AddEducation />
        <button onClick={addEdu}>Add Education</button>
      </fieldset>
    </form>
  );
}
