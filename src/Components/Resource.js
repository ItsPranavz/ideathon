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
            <h1> {props.title} </h1>
            <h1> {props.Branch} </h1>
            <h1> {props.Sem} </h1>
            <p> {props.desc} </p>
            <a href={props.link}>
              <h3> Read more </h3>
            </a>
          </div>
        </>)
    }
  }
 
  
  else{
    return (
      <>
        <div className='resourcesCard'>
          <h1> {props.title} </h1>
          <h1> {props.Branch} </h1>
          <h1> {props.Sem} </h1>
          <p> {props.desc} </p>
          <a href={props.link}>
            <h3> Read more </h3>
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
  ];

  const handleChange = (event) => {
    setSem(event.target.value);
    setCount3(0);
    if(count1===0){
      setCount1(1);
    }
  };
  return (
    <div>
      <Dropdown
        label="Enter your Semester"
        options={options}
        value={seme}
        onChange={handleChange}
      />
      <p>Testing Semester: {seme}!  Count: {count1}  count3:{count3}</p>
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
  ];

  const handleChange = (event) => {
    setBranch(event.target.value);
    setCount3(0);
    if(count2===0){
      setCount2(1);
    }
  };
  return (
    <div>
      <Dropdown
        label="Enter your Semester"
        options={options}
        value={Branch}
        onChange={handleChange}
      />
      <p>Testing Branch: {Branch}! count2: {count2}</p>


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
  alert("works")
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
        {Takeinput1()}
        {Takeinput2()}
        <button className='button' onClick={handleSubmit}>Submit</button>
        <button className='button' onClick={handleReset}>Reset</button>

        <>
      <div className='resourcesCardSection'>
      {resources.map((el) => (
        <Card
          id={el.serialNo}
          title={el.name}
          Branch={el.Branch}
          Sem={el.Sem}
          desc={el.description}
          link={el.website}
        />
      ))}
    </div>
    </>

      </div>


    </>
  )
}
