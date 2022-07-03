import React from "react";
import gmail_icon from "../../contact_img_folder/gmail_icon.webp";
import github_icon from "../../contact_img_folder/github.svg";
import location_icon from "../../contact_img_folder/location-sign.svg";
import linkedin_icon from "../../contact_img_folder/linkedin.png";
export const DisplayContact = ({ gmail, github, linkedin, location }) => {
  return (
    <div className="contacts">
      {gmail!==""?
      <div>
        <img src={gmail_icon} alt="" />
        <div>{gmail}</div>
      </div>:""}
      {location!==""?
      <div>
        <img src={location_icon} alt="" />
        <div>{location}</div>
      </div>:""}
       {github!==""?
      <div>
        <img src={github_icon} alt="" />
        <div>{github}</div>
      </div>:""}
      {linkedin!==""?
      <div>
        <img src={linkedin_icon} alt="" />
        <div>{linkedin}</div>
      </div>:""}
    </div>
  );
};
