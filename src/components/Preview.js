import React from "react";
import { DisplayExperience } from "./PreviewComponents/DisplayExperience";
import { DisplayEducation } from "./PreviewComponents/DisplayEducation";
export default function Preview({ recievedData }) {
    let {name,job_title,experience,education,contanct,langauges,technologies}=recievedData
    return (
    <div id="left-side">
      {JSON.stringify(recievedData)}
      <div>
      <header>
        <h1>{name}</h1>
        <h2>{job_title}</h2>
      </header>
      <div>
        {experience.length>0?<div>Experience</div>:""}
        {experience.map(x=><DisplayExperience company_name={x.company_name} job_title={x.job_title} start={x.start} end={x.end} description={x.description}/>)}
      </div>
      <div>
      {education.length>0?<div>Education</div>:""}
        {education.map(x=><DisplayEducation school_name={x.company_name} major={x.job_title} start={x.start} end={x.end} description={x.description}/>)}
      </div>
      </div>
      <div id="right-side">

      </div>
    </div>
  );
}
