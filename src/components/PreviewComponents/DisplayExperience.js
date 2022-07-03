import React from 'react'
export const DisplayExperience = ({company_name, job_title,start,end,description}) => {
    return(
        <div>
            <div>
                <div className='title-display'>{job_title}</div>
                <div className='name-display'>{company_name}</div>
                {start?<div className='date'>{start} - {end===""?"Present":end}</div>:""}
            </div>
            <div className='descriptions-display'>
                <ul>
                    {description.map(x=><li style={x.wantDot?{}:{listStyleType:"none"}}>{x.desc}</li>)}
                </ul>
            </div>
        </div>
    )
}