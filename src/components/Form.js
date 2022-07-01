import React, { useState } from "react";
import AddEducation from "./AddEducation";
import AddExperience from "./AddExperience";
export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    job_title: "",
    exerience: [],
    education: [],
    contanct: [],
    languages: [],
    technologies: [],
  });
  function addExp(e) {
    e.preventDefault();
  }
  function addEdu(e) {
    e.preventDefault();
  }
  return (
    <form>
      <fieldset>
        <label htmlFor="name">Enter your name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="job_title">Enter your job title</label>
        <input type="text" name="job_title" id="job_title" />
      </fieldset>
      <fieldset>
        <legend>EXPERIENCE</legend>
        <AddExperience />
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