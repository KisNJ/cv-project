import React from 'react'
export const DisplayExperience = ({company_name, job_title,start,end,description}) => {
    return(
        <div>
            <div>
                <div>{job_title}</div>
                <div>{company_name}</div>
                {start?<div>{start} - {end===""?"Present":end}</div>:""}
            </div>
            <div>
                <ul>
                    {description.map(x=><li style={x.wantDot?{}:{listStyleType:"none"}}>{x.desc}</li>)}
                </ul>
            </div>
        </div>
    )
}