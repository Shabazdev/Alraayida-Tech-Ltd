import React, { useEffect } from 'react';
import VideoProductBanner from '../VideoProductBanner/VideoProductBanner';
import DevFAQ from '../../DevFAQ/DevFAQ';
import Experiences from '../../Experiences/Experiences';
import GetTouch from '../../../About/GetTouch/GetTouch';
import VideoSubBanner from '../VideoSubBanner/VideoSubBanner';
import ProductionSection from '../ProductionSection/ProductionSection';

const VideoProductions = () => {

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
            <VideoProductBanner></VideoProductBanner>
            <VideoSubBanner></VideoSubBanner>
            <ProductionSection></ProductionSection>

            {/*  */}
            <DevFAQ></DevFAQ>
            <Experiences></Experiences>
            <GetTouch></GetTouch>
        </div>
    );
};

export default VideoProductions;