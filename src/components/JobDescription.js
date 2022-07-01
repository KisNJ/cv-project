import React, { useEffect, useState } from 'react'
export default function JobDescription({jd_id,wantDot,desc,updateDescriptions,deleteDescription}){
    const[descData,setDescData]=useState({
        jd_id:jd_id,
        wantDot:false,
        desc:""
    })
    useEffect(()=>{
        setDescData({
            jd_id:jd_id,
            wantDot:wantDot,
            desc:desc
        })
    },[jd_id,desc,wantDot])
    function descDataChange(e){
        setDescData(old=>({
            ...old,
            [e.target.id]:e.target.type==="checkbox"?e.target.checked:e.target.value
        }))
    }
    useEffect(()=>{
        updateDescriptions(descData)
    },[descData])
    function deleteThisDescription(e){
        e.preventDefault()
        deleteDescription(descData.jd_id)
    }
    return(
        <div>
            <input type="checkbox" id="wantDot" name="wantDot" onChange={descDataChange} value={wantDot}/>
            <input type="text" placeholder='Description' name="desc" id="desc" onChange={descDataChange} value={desc}/>
            <button onClick={deleteThisDescription}>Delete</button>
        </div>
    )
}