import React, { useEffect, useState } from "react";
import { GeneratedInput } from "./GeneratedInput";
export const Languages = ({languagesFromForm,updateLanguages}) => {
  const[languages,setLanguages]=useState(languagesFromForm)
  function addLanguage(e){
    e.preventDefault();
    setLanguages(old=>[...old,{id:old.length,content:""}])
  }
  function dataChanged(data){
    let temp=[...languages]
    for (let i = 0; i < temp.length; i++) {
        if(temp[i].id===data.id){
            temp[i]=data
        }
    }
    setLanguages([...temp])
  }
  function deleteLanguage(id){
    let temp=[...languages].filter(x=>x.id!==id)
    for (let i = 0; i < temp.length; i++) {
        temp[i].id=i
    }
    setLanguages([...temp])
  }
  useEffect(()=>{
    updateLanguages(languages)
  },[languages])
    return (
    <fieldset className="generated-container">
      <div className="title">Programming languages</div>
      {languages.map(x=><GeneratedInput id={x.id} content={x.content} dataChanged={dataChanged} deleteLanguage={deleteLanguage}/>)}
      <button onClick={addLanguage}>Add Language</button>
    </fieldset>
  );
};
