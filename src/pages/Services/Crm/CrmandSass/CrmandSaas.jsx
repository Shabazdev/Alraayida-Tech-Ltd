import React, { useEffect } from 'react';
import CrmBanner from '../CrmBanner/CrmBanner';
import CrmWork from '../CrmWork/CrmWork';
import CrmShowcase from '../CrmShowcase/CrmShowcase';
import DevFAQ from '../../DevFAQ/DevFAQ';
import Experiences from '../../Experiences/Experiences';
import GetTouch from '../../../About/GetTouch/GetTouch';

const CrmandSaas = () => {

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
            <CrmBanner></CrmBanner>
            <CrmWork></CrmWork>
            <CrmShowcase></CrmShowcase>
            <DevFAQ></DevFAQ>
            <Experiences></Experiences>
            <GetTouch></GetTouch>
        </div>
    );
};

export default CrmandSaas;