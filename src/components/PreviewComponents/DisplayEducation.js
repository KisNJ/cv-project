import React from "react";
export const DisplayEducation = ({
  school_name,
  major,
  start,
  end,
  description,
  logo,
}) => {
  return (
    <div>
      <div>
        <div className="logo-container">
          <div>
          {logo?
            <img src={logo} className="logo" alt="" />
            :""}
          </div>
          <div>
            <div className="title-display">{major}</div>
            <div className="name-display">{school_name}</div>
          </div>
        </div>
        {start ? (
          <div className="date">
            {start} - {end === "" ? "Present" : end}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="descriptions-display">
        <ul>
          {description.map((x) => (
            <li style={x.wantDot ? {} : { listStyleType: "none" }}>{x.desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
