import React, { useEffect, useState } from "react";
import JobDescription from "./JobDescription";
export default function AddEducation({
  id,
  school_name,
  major,
  start,
  end,
  description,
  updateEducation,
  deleteThisEducation,
}) {
  const [eduData, setEduData] = useState({
    id: id,
    school_name: school_name,
    major: major,
    start: start,
    end:end,
    description: description,
  });
  useEffect(()=>{
    setEduData({
      id,
      school_name,
      major,
      start,
      end,
      description,
    })
  },[id,major,school_name,start,end,description])
  useEffect(() => {
    updateEducation(eduData);
  }, [eduData]);
  function formChange(e) {
    setEduData((old) => ({
      ...old,
      [e.target.id]: e.target.value,
    }));
  }
  function updateDescriptions(data) {
    let temp = { ...eduData };
    for (let i = 0; i < temp.description.length; i++) {
      if (data.jd_id === temp.description[i].jd_id) {
        temp.description[i] = data;
      }
    }
    for (let i = 0; i < temp.description.length; i++) {
      temp.description[i].jd_id = i;
    }
    setEduData({ ...temp });
  }
  function deleteDescription(id) {
    let temp = { ...eduData };
    temp.description = temp.description.filter((x) => x.jd_id !== id);
    setEduData({ ...temp });
  }
  function addDesc(e) {
    e.preventDefault();
    setEduData((old) => ({
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
  function deleteThisEducationL(e) {
    e.preventDefault();
    deleteThisEducation(id);
  }
  return (
    <div className="experience">
      <fieldset className="properties">
        <div>
        <label htmlFor="school">School name</label>
        <input
          type="text"
          name="school"
          id="school_name"
          value={school_name}
          onChange={formChange}
        />
        </div>
        <div>
        <label htmlFor="major">Major</label>
        <input
          type="text"
          name="major"
          id="major"
          value={major}
          onChange={formChange}
        />
        </div>
        <div>
        <label htmlFor="start">Start</label>
        <input
          type="month"
          name="start"
          id="start"
          value={start}
          onChange={formChange}
        />
        </div>
        <div>
        <label htmlFor="end">End</label>
        <input
          type="month"
          name="end"
          id="end"
          value={end}
          onChange={formChange}
        />
        </div>
      </fieldset>
      <fieldset className="descriptions">
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
      <button className='deleteBtn' onClick={deleteThisEducationL}>DELETE</button>
    </div>
  );
}
