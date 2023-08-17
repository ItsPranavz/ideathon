import React from 'react';
import Lottie from 'lottie-react';
import Books from './assets/books-animation.json';
import Discussion from './assets/discussion-animation.json';
import Community from './assets/community-animation.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

AOS.init({
    delay: 350
});

export default function Home() {
    return (
        <div className='pageContainer'>
            <div className='homeHeader'>
                <h1 className='homeHeaderTitle'> Singularity </h1>
                <pre className='homeHeaderText'> The endpoint of your search <br/> for college resources and information. </pre>
            </div>
            <div className='spaceDivider'></div>
            <div className='HomeCard' id="homeCard1" data-aos="zoom-in">
                <Lottie className='bookAnimation' animationData={Books} />
                <div className='HomeCardInfo'>
                    <h1 className='HomeCardTitle'> College Resources <br/> at your <u>Fingertips</u></h1>
                    <p className='HomeCardText'> Now have all the study material, previous year question papers and other resources in a single place. </p>
                </div>
            </div>
            <div className='HomeCard' data-aos="zoom-in">
                <div className='HomeCardInfo'>
                    <h1 className='HomeCardTitle'> Your College Doubts, <br/> all of them <u>Answered</u></h1>
                    <p className='HomeCardText'> Have all your college related doubts, academic queries and curiosities answered in the blink of an eye. </p>
                </div>
                <Lottie className='discussionAnimation' animationData={Discussion} />
            </div>
            <div className='HomeCard' data-aos="zoom-in">
                <Lottie className='communityAnimation' animationData={Community} />
                <div className='HomeCardInfo'>
                    <h1 className='HomeCardTitle'> A Community that <br/> cares for <u>each other</u></h1>
                    <p className='HomeCardText'> The content on this website is for the students and made by the students, you can also contribute! </p>
                </div>
            </div>
        </div>
    );
};