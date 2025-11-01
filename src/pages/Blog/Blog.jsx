import React, { useEffect } from 'react';
import BlogBanner from './BlogBanner/BlogBanner';
import BlogService from './BlogService/BlogService';
import DevFAQ from '../Services/DevFAQ/DevFAQ';
import Experiences from '../Services/Experiences/Experiences';
import GetTouch from '../About/GetTouch/GetTouch';
import TabBlog from './TabBlog/TabBlog';

const Blog = () => {

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
            {/* here start  */}
            <BlogBanner></BlogBanner>
            <BlogService></BlogService>
            <TabBlog></TabBlog>

            {/*  */}
            <DevFAQ></DevFAQ>
            <Experiences></Experiences>
            <GetTouch></GetTouch>
        </div>
    );
};

export default Blog;