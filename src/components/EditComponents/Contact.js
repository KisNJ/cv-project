import React, { useEffect, useState } from "react";
import gmail_icon from "../../contact_img_folder/gmail_icon.webp";
import github_icon from "../../contact_img_folder/github.svg";
import location_icon from "../../contact_img_folder/location-sign.svg";
import linkedin_icon from "../../contact_img_folder/linkedin.png";
export const Contact = ({ gmail, location, github, linkedin,updateContactData }) => {
  const [contactData, setContactData] = useState({
    gmail: gmail,
    location: location,
    github: github,
    linkedin: linkedin,
  });
  function formChange(e){
    setContactData(old=>({
        ...old,
        [e.target.id]:e.target.value
    }))
  }
  useEffect(()=>{
    setContactData({
        gmail: gmail,
        location: location,
        github: github,
        linkedin: linkedin,
    })
  },[gmail,linkedin,location,github])
  useEffect(()=>{
    updateContactData(contactData)
  },[contactData])
  return (
    <fieldset>
    <div>Contact</div>
      <div>
        <label htmlFor="gmail"></label>
        <img src={gmail_icon} alt="" />
        <input type="text" name="gmail" id="gmail" value={gmail} onChange={formChange}/>
      </div>
      <div>
        <label htmlFor="location"></label>
        <img src={location_icon} alt="" />
        <input type="text" name="location" id="location" value={location} onChange={formChange}/>
      </div>
      <div>
        <label htmlFor="github"></label>
        <img src={github_icon} alt="" />
        <input type="text" name="github" id="github" value={github} onChange={formChange}/>
      </div>
      <div>
        <label htmlFor="linkedin"></label>
        <img src={linkedin_icon} alt="" />
        <input type="text" name="linkedin" id="linkedin" value={linkedin}onChange={formChange}/>
      </div>
    </fieldset>
  );
};
