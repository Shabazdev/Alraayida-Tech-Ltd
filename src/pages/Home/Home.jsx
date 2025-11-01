import React, { useEffect } from 'react';
import Banner from '../../Components/Banner/Banner';
import Brands from '../../Components/Brands/Brands';
import OurService from '../../Components/OurService/OurService';
import WhyAlrayida from '../../Components/WhyAlrayida/WhyAlrayida';
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs ";
import AgencyDriving from '../../Components/AgencyDriving/AgencyDriving';
import Technology from '../../Components/Technology/Technology';
import Ourwork from '../../Components/OurWorks/Ourwork';

import ClientTestimonials from '../../Components/ClientTestimonials/ClientTestimonials';
import AnimatedCursor from '../../components/AnimatedCursor';
import DevFAQ from '../Services/DevFAQ/DevFAQ';

const Home = () => {

    useEffect(() => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100); // Delay ensures component is mounted
    }, []);  
    

    return (
        <div>
            <AnimatedCursor></AnimatedCursor>
            <Banner></Banner>
            <Brands></Brands>
            <OurService></OurService>
            <WhyAlrayida></WhyAlrayida>
            <AgencyDriving></AgencyDriving>
            <Technology></Technology>
            <WhyChooseUs></WhyChooseUs>
            <Ourwork></Ourwork>
            <ClientTestimonials></ClientTestimonials>
            <DevFAQ></DevFAQ>
        </div>
    );
};

export default Home;