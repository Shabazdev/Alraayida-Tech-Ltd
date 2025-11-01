import React, { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const AnotherBlog = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100); // Delay ensures component is mounted
  }, []);

  return (
    <div className="relative pt-24 text-gray-800 bg-white">
      <div className="flex flex-col gap-6 p-6 mx-auto lg:flex-row max-w-7xl">
        {/* Left Sidebar Navigation */}
        <aside className="lg:w-1/4">
          <div className="sticky space-y-6 top-24">
            {/* Read Time */}
            <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md shadow-sm">
              ⏱️ 11 Min Read
            </div>

            {/* Scroll Progress */}
            <div className="h-2 overflow-hidden bg-gray-300 rounded">
              <div
                className="h-full transition-all duration-200 bg-blue-600"
                style={{ width: `${scrollProgress}%` }}
              ></div>
            </div>

            {/* Quick Navigation */}
            <nav className="space-y-2">
              <a href="#" className="block font-medium text-blue-600">
                Who is Alraayida IT Solutions?
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                What Alraayida Brings to the Table
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                Why Alraayida Stands Out
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                How Alraayida Helps Businesses Grow
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                The Bangladesh Advantage
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                Client Case Studies
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                Conclusion
              </a>
            </nav>

            {/* Author Info */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-1">
                <div className="flex mt-2 space-x-2">
                  <a href="#" className="text-blue-600">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://i.ibb.co/k68qQhqL/download-11.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="font-medium">Author: Shabaz Mahamood</div>
                <h1>CEO</h1>
              </div>

              <div className="flex items-center gap-3 ">
                <a
                  href="https://www.facebook.com/CAUFSK4701111"
                  target="_blank"
                >
                  <FaFacebook size={30}></FaFacebook>
                </a>
                <FaLinkedin size={30}></FaLinkedin>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Blog Content */}
        <main className="space-y-6 leading-relaxed lg:w-2/4">
          <p>
            Imagine you're a startup founder with a big idea but a small
            budget... That’s where a company like{" "}
            <strong>Alraayida IT Solutions</strong> comes in.
          </p>
          <p>
            Alraayida is an IT company in Bangladesh. It helps businesses grow
            with smart, affordable tech solutions.
          </p>
          <p>Bangladesh is quickly becoming a hub for quality IT services.</p>
          <p>
            Startups love the prices here. I’ve built websites and apps for many
            new companies.
          </p>
          <p>
            In this article, I’ll explain who Alraayida is and how they can make
            your business real.
          </p>

          <h2 className="text-2xl font-bold">Who is Alraayida IT Solutions?</h2>
          <p>
            Alraayida is an IT company from Bangladesh that builds digital tools
            to help businesses succeed. Whether it's websites, mobile apps, or
            custom software — they make your ideas real.
          </p>

          <h2 className="text-2xl font-bold">
            What Alraayida Brings to the Table
          </h2>
          <p>
            Alraayida offers everything a modern business needs — from branding
            to automation, all in one place.
          </p>

          <h3 className="text-xl font-semibold">1. Web Development</h3>
          <p>
            They build fast, scalable, and reliable websites tailored to startup
            needs.
          </p>

          <h3 className="text-xl font-semibold">2. Digital Marketing</h3>
          <p>
            Whether it's SEO, social media, or ads — they ensure your brand
            reaches the right audience.
          </p>

          <h3 className="text-xl font-semibold">3. CRM Development</h3>
          <p>
            Need to manage leads, sales, or customer service? Alraayida creates
            custom CRM solutions that organize and automate your workflow.
          </p>

          <h3 className="text-xl font-semibold">
            4. SaaS Application Development
          </h3>
          <p>
            Want to build your own platform or subscription-based tool? Their
            team specializes in full-stack SaaS products — ready to scale.
          </p>

          <h3 className="text-xl font-semibold">5. Graphics Design</h3>
          <p>
            From logos to social posts, their designers craft modern, clean
            visuals that resonate with your audience.
          </p>

          <h3 className="text-xl font-semibold">6. Video Production</h3>
          <p>
            Video sells. Whether it's animated explainers, product promos, or
            corporate videos — they deliver high-quality productions.
          </p>

          <h3 className="text-xl font-semibold">7. Branding</h3>
          <p>
            Great brands are built, not born. Alraayida helps shape your
            identity with naming, color strategy, typography, and voice.
          </p>
        </main>

        {/* Right Sidebar / CTA Section */}
        <aside className="space-y-6 lg:w-1/4">
          <div className="p-4 space-y-3 bg-gray-100 shadow-sm rounded-xl">
            <h3 className="text-lg font-bold">
              Find the Ideal Web Design Agency
            </h3>
            <p className="text-sm text-gray-600">
              Unlock innovative solutions, streamlined processes, and expert
              strategies.
            </p>
            <button className="px-4 py-2 text-white bg-blue-600 rounded-md">
              Hire the Ultimate Team
            </button>
          </div>

          <div className="p-4 space-y-3 bg-gray-100 shadow-sm rounded-xl">
            <h3 className="text-lg font-bold">Stay Ahead with Alraayida</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md"
            />
            <button className="w-full py-2 text-white bg-blue-600 rounded-md">
              Subscribe
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AnotherBlog;
