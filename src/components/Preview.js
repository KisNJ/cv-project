import React from "react";
import '../Preview.css'
import { DisplayExperience } from "./PreviewComponents/DisplayExperience";
import { DisplayEducation } from "./PreviewComponents/DisplayEducation";
import {DisplayContact} from './PreviewComponents/DisplayContact'
import {DisplayLanguages} from './PreviewComponents/DisplayLanguages'
import { DisplayTechnologies } from "./PreviewComponents/DisplayTechnologies";
export default function Preview({ recievedData }) {
  let {
    name,
    job_title,
    experience,
    education,
    contact,
    languages,
    technologies,
  } = recievedData;
  return (
    <div id="left-side">
      <div>
        <header>
          <h1>{name}</h1>
          <h2>{job_title}</h2>
        </header>
        <div className="experiences">
          {experience.length > 0 ? <div className="prev-title">Experience</div> : ""}
          {experience.map((x) => (
            <DisplayExperience
              company_name={x.company_name}
              job_title={x.job_title}
              start={x.start}
              end={x.end}
              description={x.description}
            />
          ))}
        </div>
        <div>
          {education.length > 0 ? <div className="prev-title">Education</div> : ""}
          {education.map((x) => (
            <DisplayEducation
              school_name={x.school_name}
              major={x.major}
              start={x.start}
              end={x.end}
              description={x.description}
            />
          ))}
        </div>
      </div>
      <div id="right-side">
        <div>
          <div className="prev-title">Contact</div>
          {<DisplayContact gmail={contact.gmail} github={contact.github} location={contact.location} linkedin={contact.linkedin}/>}
        </div>
        <div>
          {languages.length>0?<div className="prev-title second">Programming languages</div>:""}
         
          {languages.map(x=> <DisplayLanguages content={x.content}/>)}
        </div>
        <div>
        {technologies.length>0?<div className="prev-title second">Technologies</div>:""}
          {technologies.map(x=><DisplayTechnologies content={x.content}/>)}
        </div>
      </div>
    </div>
  );
}
