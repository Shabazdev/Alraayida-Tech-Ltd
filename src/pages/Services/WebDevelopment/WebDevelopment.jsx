import React, { useEffect } from 'react';

import WebBanner from './WebBanner/WebBanner';
import WithWork from '../WithWork/WithWork';
import ShowCaseProject from '../ShowCaseProject/ShowCaseProject';
import DevFAQ from '../DevFAQ/DevFAQ';
import GetTouch from '../../About/GetTouch/GetTouch';
import Experiences from '../Experiences/Experiences';

const WebDevelopment = () => {

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
     <WebBanner></WebBanner>
     <WithWork></WithWork>
     <ShowCaseProject></ShowCaseProject>
     <DevFAQ></DevFAQ>
     <Experiences></Experiences>
     <GetTouch></GetTouch>
    </div>
  );
};

export default WebDevelopment;
