import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <>
<body>
  <header class="header">
    <div class="mid">
      <ul class="navbar">
        <li><Link to="/contribute">Contribute</Link></li>
        <li><Link to="/societies">Societies</Link></li>
        <li><Link to='/faqs'>FAQ's</Link></li>
        <li><Link to='/resources'>Resources</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/'>Home</Link></li>
      </ul>
    </div>
  </header>
  
</body>
</>
  )
}
