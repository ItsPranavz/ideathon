import React from 'react'
import './Resources.css';
import { useState } from 'react';
import { resources } from './assets/resources';

export default function Resources() {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [seme, setSem] = useState(0);
  const [Branch, setBranch] = React.useState("None");
  const [isOpen, setOpen] = React.useState(false)
  
// function sortresources(){
//     if(count1 && count2 && count3){
//       {
//       resources.map((el) => {
//         if(em===el.Sem && Branch===el.Branch){
//           return(
//           <Card
//           id={el.serialNo}
//           title={el.name}
//           Branch={el.Branch}
//           Sem={el.Sem}
//           desc={el.description}
//           link={el.website}
//         /> )
//         }
//       })}
//     }
 
        
//       else{
//         return()
//     }
//       }

function Card(props) {
  if(count1 && count2 && count3){
    if(Branch==props.Branch && seme==props.Sem ) {
      return (
        <>
          <div className='resourcesCard'>
          <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" /></svg>
            <h1> {props.title} </h1>
            <h3> Branch : {props.Branch} </h3>
            <h3> Semester : {props.Sem} </h3>
            <a href={props.link}>
              <h3> Click to view resource </h3>
            </a>
          </div>
        </>)
    }
  }
 
  
  else{
    return (
      <>
        <div className='resourcesCard'>
        <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="#5B85AA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" /></svg>
          <h1> {props.title} </h1>
          <h2> Branch : {props.Branch} </h2>
          <h2> Semester : {props.Sem} </h2>
          <a href={props.link}>
            <h3> Click to view resource </h3>
          </a>
        </div>
      </>)
  }

}
function Takeinput1() {
  const options = [
    { label: 'None', value: 0 },
    { label: 'Semester 1', value: 1 },
    { label: 'Semester 2', value: 2 },
    { label: 'Semester 3', value: 3 },
    { label: 'Semester 4', value: 4 },
    { label: 'Semester 5', value: 5 },
    { label: 'Semester 6', value: 6 },
    { label: 'Semester 7', value: 7 },
    { label: 'Semester 8', value: 8 },
  ];

  const handleChange = (event) => {
    setSem(event.target.value);
    setCount3(0);
    if(count1===0){
      setCount1(1);
    }
  };
  return (
    <div className='resourcesSem'>
      <Dropdown
        label="Semester "
        options={options}
        value={seme}
        onChange={handleChange}
      />
    </div>
  );
};
const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange} defaultValue={options[0]}>
        {<>
          {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}</>}
      </select>
    </label>
  );
};
function Takeinput2() {
  const options = [
    { label: 'None', value: 'None' },
    { label: 'CSE', value: 'CSE' },
    { label: 'DS', value: 'DS' },
    { label: 'ECE', value: 'ECE' },
    { label: 'EE', value: 'EE' },
    { label: 'MECH', value: 'MECH' },
    { label: 'META', value: 'META' },
    { label: 'PROD', value: 'PROD' },
    { label: 'AERO', value: 'AERO' }
  ];

  const handleChange = (event) => {
    setBranch(event.target.value);
    setCount3(0);
    if(count2===0){
      setCount2(1);
    }
  };
  return (
    <div className='resourcesBranch'>
      <Dropdown
        label="Branch "
        options={options}
        value={Branch}
        onChange={handleChange}
      />


    </div>
  );
};
const handleSubmit = (event) => {

    setCount3(1);

  
}
const handleReset = (event) => {

  setCount3(0);
  
}

function handlesubmit() {
  if(count1 && count2){
    if(count3===0){
      setCount3(1);
  }
  else{
    alert("Fill all necessary fields")
  }

  }
};
  return (
    <>
      <div className='pageContainer'>
        <div className="resourcesSubHeader">
          <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" /></svg>
          <h2 className='resourcesSubHeaderTitle'> Find all resources you need for your classes, <br /> be it books, assignments, practice papers etc. </h2>
        </div>
        <div className="resourcesContainer">
          <div className='resourcesMain'>
            <div className='resourcesSecDiv'>
              <h3 id="resourcesControlsTitle">Apply Filters to Resources</h3>
              <p id="resourcesControlsPlus" onClick={()=>setOpen(!isOpen)}> + </p>
            </div>
            <div className={isOpen?"resourcesControls-show":"resourcesControls"}>
              <div className='resourcesInput'>
                {Takeinput1()} 
                {Takeinput2()}
              </div>
              <button className='resourcesButton' onClick={handleSubmit}>Apply</button>
              <button className='resourcesButton' onClick={handleReset}>Reset</button>
            </div>
          </div>
          <div className='resourcesCardSection'>
          {resources.map((el) => (
            <Card
              title={el.title}
              Branch={el.Branch}
              Sem={el.Sem}
              link={el.link}
            />
          ))}
          </div>
        </div>
      </div>
    </>
  )
}
