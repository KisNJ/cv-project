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
    setFormData((old) => ({
      ...old,
      education: [
        ...old.education,
        {
          id: old.education.length,
          school_name: "",
          major: "",
          start: "",
          end: "",
          description: [],
        },
      ],
    }));
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
    temp.experience = temp.experience.filter((x) => x.id !== id);
    for (let i = 0; i < temp.experience.length; i++) {
      temp.experience[i].id = i;
    }
    setFormData({ ...temp });
  }
  function deleteThisEducation(id) {
    let temp = { ...formData };
    temp.education = temp.education.filter((x) => x.id !== id);
    for (let i = 0; i < temp.education.length; i++) {
      temp.education[i].id = i;
    }
    setFormData({ ...temp });
  }
  function updateEducation(data) {
    let temp = { ...formData };
    for (let i = 0; i < temp.education.length; i++) {
      if (temp.education[i].id === data.id) {
        temp.education[i] = data;
      }
    }
    for (let i = 0; i < temp.education.length; i++) {
      temp.education[i].id = i;
    }
    console.log(temp);
    setFormData({ ...temp });
  }
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
        {console.log(formData.experience)}
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
        <legend>EDUCATION</legend>
        {formData.education.map((x) => (
          <AddEducation
            id={x.id}
            school_name={x.school_name}
            major={x.major}
            start={x.start}
            end={x.end}
            deleteThisEducation={deleteThisEducation}
            description={x.description}
            updateEducation={updateEducation}
          />
        ))}

        <button onClick={addEdu}>Add Education</button>
      </fieldset>
      {/* contanct: [],
    languages: [],
    technologies: [], */}
      <fieldset>
        <fieldset>
          <div>
          <label htmlFor="email"></label>
          <input type="text" name="email" id="email" />
          </div>
          <div>
          <label htmlFor="location"></label>
          <input type="text" name="location" id="location" />
          </div>
          <div>
          <label htmlFor="github"></label>
          <input type="text" name="github" id="github" />
          </div>
          <div>
          <label htmlFor="linkedin"></label>
          <input type="text" name="linkedin" id="linkedin" />
          </div>
        </fieldset>
        <fieldset>
          <label htmlFor="languages">Programming languages</label>
        </fieldset>
        <fieldset>
        <label htmlFor="technologies">Technologies</label>
        </fieldset>
      </fieldset>
    </form>
  );
}
