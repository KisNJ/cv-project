import React from 'react'
export const DisplayEducation = ({school_name, major,start,end,description}) => {
    return(
        <div>
            <div>
                <div>{major}</div>
                <div>{school_name}</div>
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