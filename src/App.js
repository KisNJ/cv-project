import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Preview from './components/Preview';
function App() {
  const[recievedData,setRecievedData]=useState({
    name: "",
    job_title: "",
    experience: [],
    education: [],
    contact: {
      gmail: "",
      location: "",
      github: "",
      linkedin: "",
    },
    languages: [],
    technologies: [],
  })
  function giveDataToPreview(data){
    setRecievedData(data)
  }
  return (
    <div className="App">
      <Form giveDataToPreview={giveDataToPreview}/>
      <Preview recievedData={recievedData}/>
    </div>
  );
}

export default App;
