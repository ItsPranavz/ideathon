import React from 'react';
import './Footer.css';
import reactlogo from "./my-logo.png";
 

export default function Footer() {
  return (
    <div className="footer">

      <ul className="footbar">
        
        <li className="logo"><img src={reactlogo} alt="react logo" /></li>
        <li className="name ">Singularity.com</li>
        <li className="Copyright"> Copyright ©</li>
        <li className="rights">All Rights Reserved ®</li>
      </ul>
    </div>
    

  
  )
}