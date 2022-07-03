import React, { useEffect, useState } from 'react'
export const GeneratedInput = ({id,content,dataChanged,deleteLanguage}) => {
    const[data,setData]=useState({
        id:id,
        content:content
    })
    function changeData(e){
        setData(old=>({
            ...old,
            content:e.target.value
        }))
    }
    useEffect(()=>{
        dataChanged(data)
    },[data])
    useEffect(()=>{
        setData({
            id:id,
            content:content
        })
    },[id,content])
    function deleteLanguageL(e){
        e.preventDefault();
        deleteLanguage(id)
    }
    return(
        <div className='generated'>
        <input type="text" name={id} value={content} id={id} onChange={changeData} />
        <button onClick={deleteLanguageL}>Delete</button>
        </div>
        )
}