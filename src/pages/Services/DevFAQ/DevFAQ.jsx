import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqs = [
  {
    question: "How can Alraayida Tech Ltd help my business grow?",
    answer:
      "Alraayida Tech Ltd focuses on creating custom, results-driven solutions tailored to your business needs. Whether you need a new website, a digital marketing strategy, or a custom CRM system, our goal is to increase user engagement, improve conversions, and boost overall business performance.",
  },
  {
    question: "What services does Alraayida Tech Ltd offer?",
    answer: `At Alraayida Tech Ltd, we specialize in a range of digital solutions, including: 
      <ul>
        <li>1. UI/UX Design: Creating user-friendly, intuitive, and visually appealing designs.</li>
        <li>2. Web Design & Development: Custom websites, e-commerce platforms, and content management systems.</li>
        <li>3. CRM & SaaS Development: Tailored CRM systems and SaaS solutions to streamline your business operations.</li>
        <li>4. Fintech Support & System Development**: Secure, scalable fintech solutions with expert support.</li>
        <li>5. Graphic Design: Logo Design, Branding, Marketing Materials, and more.</li>
      </ul>`,
  },
  {
    question: "How long does it take to complete a project?",
    answer: `
      The timeline for each project depends on its scope and complexity. On average:
      <ul className="pl-5 list-disc">
        <li>1. Web Design & Development: 4-12 weeks</li>
        <li>2. UI/UX Design: 3-8 weeks</li>
        <li>3. Digital Marketing Campaigns: Ongoing, with initial results seen in 1-3 months</li>
      </ul>
      We’ll provide you with a detailed timeline at the start of your project.
    `,
  },
  {
    question: "How much do Alraayida Tech Ltd services cost?",
    answer:
      "Our services are tailored to your specific needs, so the cost will vary depending on factors such as project complexity, size, and duration. We provide custom quotes based on a thorough consultation, ensuring you receive the best value for your investment.",
  },
  {
    question: "What industries does Alraayida Tech Ltd specialize in?",
    answer: `
      Alraayida Tech Ltd works with businesses across various industries, including:
      <ul>
        <li>1. E-commerce</li>
        <li>2. Finance & Fintech</li>
        <li>3. Healthcare</li>
        <li>4. Real Estate</li>
        <li>5. Education</li>
        <li>6. Technology</li>
      </ul>
      No matter your industry, we have the expertise to deliver effective, tailored solutions that meet your goals.
    `,
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes! All the websites we design are fully responsive, meaning they will look great and function seamlessly on any device, whether desktop, tablet, or mobile phone.",
  },
];

const DevFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full font-sans bg-[#111] py-16 px-5 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="w-full mb-10 md:mb-16">
          <h1 className="text-xl font-bold text-center md:text-5xl">
            Ask <span className="text-blue-500">Anything</span>
          </h1>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-5 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-700"
            >
              {/* Question Header */}
              <div
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between mb-3 cursor-pointer"
              >
                <h2 className="text-lg font-semibold md:text-xl">
                  {faq.question}
                </h2>
                <span className="text-blue-400">
                  {openIndex === index ? (
                    <FaMinus size={18} />
                  ) : (
                    <FaPlus size={18} />
                  )}
                </span>
              </div>

              {/* Answer Section */}
              <div
                className={`mt-3 text-sm text-gray-300 transition-all duration-500 overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevFAQ;
