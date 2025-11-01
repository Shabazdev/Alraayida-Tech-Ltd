import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

import logo from "../../../../assets/logo.png"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#122154]  text-white px-6 md:px-12 py-10 font-sans">
      <div className="grid grid-cols-1 gap-10 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* 1st Column - Logo and Social */}
        <div>
          <img className="w-[130px] mb-4" src={logo} alt="Logo" />
          <p className="mb-5 text-sm opacity-85">
            Alraayida crafts innovative digital solutions through design,
            strategy, and technology.
          </p>
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.facebook.com/alraayidatechltd"
              target="_blankj"
              className="transition hover:text-blue-400"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/Alraayidaitsoln?t=vY5ruhEtJ-Qyy5k2UZ7-Kw&s=09"
              target="_blank"
              className="transition hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/alraayidatechltd?igsh=MXZtZTM3eGJ3OWI5YQ=="
              target="_blank"
              className="transition hover:text-pink-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/alraayidatechltd/posts/?feedView=all"
              target="_blank"
              className="transition hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://pin.it/1hzXgWTZa"
              target="_blank"
              className="transition hover:text-red-500"
            >
              <FaPinterest />
            </a>
          </div>
        </div>

        {/* 2nd Column - Contact */}
        <div>
          <h2 className="mb-4 text-xl font-bold">Contact Us</h2>
          <p className="mb-3 text-sm opacity-85">
            Bathua, Hathazari
            <br />
            Chottogram
          </p>
          <p className="mb-3 text-sm opacity-85">
            contact: alraayidatechltd@gmail.com
          </p>
          <p className="text-sm opacity-85">Join Our Team</p>
        </div>

        {/* 3rd Column - Services */}
        <div className="flex flex-col gap-1">
          <h2 className="mb-4 text-xl font-bold">Services</h2>
          <Link to="/service/web" className="mb-3 text-sm opacity-85">
            Web Development
          </Link>
          <Link to="/service/uiux" className="mb-3 text-sm opacity-85">
            Ui/ux
          </Link>
          <Link
            to="/service/GraphicsDesign"
            className="mb-3 text-sm opacity-85"
          >
            Graphics Design
          </Link>
          <Link
            to="/service/digitalMarketing"
            className="mb-3 text-sm opacity-85"
          >
            Digital Marketing
          </Link>
          <Link to="/service/crm" className="mb-3 text-sm opacity-85">
            CRM and saas
          </Link>
          <Link to="/service/video" className="mb-3 text-sm opacity-85">
            Video Production
          </Link>
          <Link to="/service/branding" className="mb-3 text-sm opacity-85">
            Branding
          </Link>
        </div>

        {/* 4th Column - Legal */}
        <div>
          <h2 className="mb-4 text-xl font-bold">Privacy & Terms</h2>
          <p className="mb-3 text-sm opacity-85">Privacy Policy</p>
          <p className="text-sm opacity-85">Terms and Conditions</p>
        </div>
      </div>

      <div className="pt-6 mt-10 text-sm font-semibold text-center text-white border-t border-white/20 ">
        © {new Date().getFullYear()} Alraayida Tech Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
