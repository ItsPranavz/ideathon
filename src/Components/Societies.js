import React from 'react';
import Card from './Card';
import { clubs } from './assets/clubs-societies-info';
import { useState } from 'react';
import './Societies.css';

export default function Societies() {
  const [query, setQuery] = useState("");

  return (
    <div className='pageContainer'>
      <div className="societiesSubHeader">
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <h2 className='faqSubHeaderTitle'> Get to know more about the various technical and cultural <br/> clubs and societies which are part of our college. </h2>
      </div>

      <div id="cover">
        <form method="get" action="">
          <div class="tb">
            <div class="td"><input onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Crystal ball of fortune, which club should I join?" required/></div>
            <div class="td" id="s-cover">
              <button type="button">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
            </div>
          </form>
        </div>

      <div className='societiesCardSection'>
        {clubs.filter((club)=>club.name.toLowerCase().includes(query)).map((el)=>(
          <Card 
          id={el.serialNo} 
          title={el.name} 
          logo={el.logo} 
          desc={el.description}
          link={el.website}
          />
        ))}
      </div>
    </div>
  )
}