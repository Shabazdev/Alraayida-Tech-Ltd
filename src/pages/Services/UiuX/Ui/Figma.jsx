import React, { useEffect } from 'react';
import UiuxBanner from './UxBanner/UiuxBanner';
import Video from './UxVideo/Video';
import DevFAQ from '../../DevFAQ/DevFAQ';
import Experiences from '../../Experiences/Experiences';
import GetTouch from '../../../About/GetTouch/GetTouch';
import UiInterface from '../UiInterface/UiInterface';
import SkillShowroom from '../UiShowcase/SkillShowroom';

const Figma = () => {

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
            <UiuxBanner></UiuxBanner>
            {/* <Video></Video> */}
            <UiInterface></UiInterface>
            <SkillShowroom></SkillShowroom>
            <DevFAQ></DevFAQ>
            <Experiences></Experiences>
            <GetTouch></GetTouch>
        </div>
    );
};

export default Figma;