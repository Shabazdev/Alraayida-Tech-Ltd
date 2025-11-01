import React, { useEffect } from 'react';
import CareerBanner from '../CareerBanner/CareerBanner';
import DevFAQ from '../../Services/DevFAQ/DevFAQ';
import Experiences from '../../Services/Experiences/Experiences';
import GetTouch from '../../About/GetTouch/GetTouch';
import CareerMoments from '../CareerMoments/CareerMoments';
import CarrerInterface from '../CarrerInterface/CarrerInterface';
import CurrentOpening from '../CurrentOpenning/CurrentOpening';
import AlraayidaMemorable from '../AlraayidaMemoriable/AlraayidaMemorable';
import TeamAbility from '../TeamAbility/TeamAbility';

const Career = () => {

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
            <CareerBanner></CareerBanner>
            <CareerMoments></CareerMoments>
            <CurrentOpening></CurrentOpening>
            <CarrerInterface></CarrerInterface>
            <AlraayidaMemorable></AlraayidaMemorable>
            <TeamAbility></TeamAbility>
            {/*  */}
            <DevFAQ></DevFAQ>
            <Experiences></Experiences>
            <GetTouch></GetTouch>
        </div>
    );
};

export default Career;