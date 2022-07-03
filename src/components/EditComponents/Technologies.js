import React, { useEffect, useState } from "react";
import { GeneratedInput } from "./GeneratedInput";
export const Technologies = ({technologiesFromForm,updateTechnologies}) => {
  const[technologies,setTechnologies]=useState(technologiesFromForm)
  function addTechnology(e){
    e.preventDefault();
    setTechnologies(old=>[...old,{id:old.length,content:""}])
  }
  function dataChanged(data){
    let temp=[...technologies]
    for (let i = 0; i < temp.length; i++) {
        if(temp[i].id===data.id){
            temp[i]=data
        }
    }
    setTechnologies([...temp])
  }
  function deleteLanguage(id){
    let temp=[...technologies].filter(x=>x.id!==id)
    for (let i = 0; i < temp.length; i++) {
        temp[i].id=i
    }
    setTechnologies([...temp])
  }
  useEffect(()=>{
    updateTechnologies(technologies)
  },[technologies])
    return (
    <fieldset className="generated-container">
      <div className="title">Technologies</div>
      {technologies.map(x=><GeneratedInput id={x.id} content={x.content} dataChanged={dataChanged} deleteLanguage={deleteLanguage}/>)}
      <button onClick={addTechnology}>Add Technology</button>
    </fieldset>
  );
};
