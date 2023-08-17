import React from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  delay: 250
});

export default function About() {
  return (
    <div className='pageContainer'>
      <div className="aboutSubHeader">
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-2"><path d="M14 19a6 6 0 0 0-12 0"/><circle cx="8" cy="9" r="4"/><path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"/></svg>
        <h2 className='aboutSubHeaderTitle'> Learn more about our mission at singularity, <br/> and what lies ahead for you and our team. </h2>
      </div>

      <div class="baseAboutContainer">

        <div className="aboutContainer" data-aos="zoom-in-left">
          <div className="subox1" id="aboutBox1">
            <h1>A one stop solution for <u>Everything</u></h1>
            <p>
              The brutal confusion regarding where to study from, what to do, what not to has been and continues
              trouble every college student. Not any longer! Singularity is a one stop solution. Your search for every college resource ends here. Books, notes, previous
              year papers, everything! No scrolling between links, no messing up bewtween notes, the end of all
              confusion and difficulty a PEC undergrad could face. We have everything you need, just
              a click away.
            </p>
          </div>
          <div className="subox2" id="aboutBox2"> <img src="https://www.stonybrook.edu/commcms/advising/_undeclared/_images/atas%20card.jpg"></img> </div>
        </div>


        <div className="aboutContainer" data-aos="zoom-in-right">
          <div className="subox1" id="aboutBox3"> <img src="https://www.ice.org.uk/media/jy4nzd52/engaging-communities-a-role-for-engineers.jpg"></img> </div>
          <div className="subox2" id="aboutBox4">
            <h1>Unleashing power of <u>Community</u></h1>
            <p> Contribute. Collaborate. Coact This platform brings to you a chance to make full use of the PEC community
              and to be a part of it. While you use the resources arranged by your seniors, don't forget to
              make valuable contributions for your up-coming juniors as well. Be it resources, questions,
              information, advice, any contribution helps in strengthening the structure of this platform and in the
              same way promotes the idea behind it's working. One primary reason to bring-up this platform was the
              lack of any such platform in PEC and also the problem of scattered resources and the problems faced by
              individual students as a whole.
            </p>
          </div>
        </div>

        <div class="aboutContainer" data-aos="zoom-in-left">
          <div class="subox1" id="aboutBox5">
              <h1> The future of <u>Singularity</u> </h1>
              <p> No website is perfect, and no platform is complete in itself. There are always better features and
                  upgardes, and we at Singularity believe in the same. In order to make the platform more
                  interactive, we soon plan to introduce discussions - an open platform where like minded people can
                  discuss on various topics from the college. Also, we plan to introduce a separate portal for
                  contributors in order to make the platform more efficient and resourceful. We also plan to enhance searchibilty in order to make the platform more accessible to all.
                </p>
          </div>
          <div class="subox2" id="aboutBox6"> <img src="https://media.istockphoto.com/id/1200990118/photo/next-level-loading-concept.jpg?s=612x612&w=0&k=20&c=-cFwNebV3pe4eJu9MgQVeH_7D50M-2fedNHL-XO7yiw="></img> </div>
      </div>
      </div>
    </div>
  )
}