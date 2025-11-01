import React, { useEffect } from 'react';
import DigitalBanner from '../DigitalBanner/DigitalBanner';
import DigitalInterface from '../DigitalInterface/DigitalInterface';
import PreviewProject from '../PreviewProject/PreviewProject';
import DevFAQ from '../../DevFAQ/DevFAQ';
import Experiences from '../../Experiences/Experiences';
import GetTouch from '../../../About/GetTouch/GetTouch';

const DigitalMarketer = () => {

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
            <DigitalBanner></DigitalBanner>
            <DigitalInterface></DigitalInterface>
            <PreviewProject></PreviewProject>
            <DevFAQ></DevFAQ>
            <Experiences></Experiences>
            <GetTouch></GetTouch>
        </div>
    );
};

export default DigitalMarketer;