import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import image from "../../../assets/carrerinterface.jpg"
import image2 from "../../../assets/blogsimage.png";
import gsap from 'gsap';

const BlogService = () => {
    const imageRef = useRef(null);
    useEffect(() => {
      gsap.to(imageRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, []);
    return (
      <div className="text-white flex max-sm:flex-col items-center justify-center h-auto py-10 md:p-5 bg-[#111] ">
        {/* left section */}
        <div className="max-w-3xl p-3 text-start ">
          <h1 className="text-2xl font-bold leading-tight md:text-5xl">
            Discovering Top IT <br /> services in Bangladesh{" "}
          </h1>

          <p className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            dolores voluptates voluptas provident labore qui beatae expedita
            nisi commodi veniam?
          </p>

          {/* btn */}
          <a href="https://calendly.com/alraayida/alraayida-tech-ltd-atlconsulation" target='_blank'>
            <button className="flex items-center gap-2 p-3 mt-5 text-white bg-blue-500 border border-none rounded-2xl ">
              Work With Us{" "}
              <span className="p-2 text-black bg-white border rounded-full">
                <FaArrowRight size={20}></FaArrowRight>
              </span>
            </button>
          </a>
        </div>

        {/* right section */}
        <div>
          <div className="relative">
            <img src={image} alt="" className="rounded-xl" />
            <Link to="/anotherBlog">
              <img
                src={image2}
                ref={imageRef}
                alt=""
                className="absolute w-10 cursor-pointer bottom-3 right-5"
              />
            </Link>
          </div>
        </div>
      </div>
    );
};

export default BlogService;