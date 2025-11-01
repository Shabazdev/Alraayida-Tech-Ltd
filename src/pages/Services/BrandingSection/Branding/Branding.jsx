import React, { useEffect } from 'react';
import BrandingBanner from '../BrandingBanner/BrandingBanner';
import DevFAQ from '../../DevFAQ/DevFAQ';
import Experiences from '../../Experiences/Experiences';
import GetTouch from '../../../About/GetTouch/GetTouch';
import BrandingSection from '../BrandingSection/BrandingSection';

const Branding = () => {

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
            {/* start here */}
            <BrandingBanner></BrandingBanner>

            <BrandingSection></BrandingSection>

            {/*  */}
            <DevFAQ></DevFAQ>
            <Experiences></Experiences>
            <GetTouch></GetTouch>
        </div>
    );
};

export default Branding;