import React, { useEffect } from 'react';
import MeetOurTeam from './MeetOurTeam/MeetOurTeam';
import MeetAlrayida from './MeetAlrayida/MeetAlrayida';
import MomentsAlrayida from './MomentsAlrayida/MomentsAlrayida';
import WeFrom from './WeFrom/WeFrom';
import Employers from './Employers/Employers';
import GetTouch from './GetTouch/GetTouch';

const About = () => {

    useEffect(() => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100); // Delay ensures component is mounted
    }, []);  
    
    return (
        <div className='pt-24'>
            <MeetOurTeam></MeetOurTeam>
            <MeetAlrayida></MeetAlrayida>
            <MomentsAlrayida></MomentsAlrayida>
            <WeFrom></WeFrom>
            <Employers></Employers>
            <GetTouch></GetTouch>
        </div>
    );
};

export default About;