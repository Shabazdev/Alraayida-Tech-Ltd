import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'What services do you offer?',
      answer:
        'I specialize in web development, UI/UX design, and Mern-stack development. Feel free to reach out for collaborations!',
    },
    {
      question: 'How can I contact you?',
      answer: 'You can contact me via phone, WhatsApp, or email. My contact details are provided above.',
    },
    {
      question: 'Do you work remotely?',
      answer: 'Yes, I work remotely and am available for projects worldwide.',
    },
    {
      question: 'What technologies do you use?',
      answer:
        'I use modern technologies like React, Tailwind CSS, Node.js, and more to build scalable and efficient applications.',
    },
  ];

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative w-full bg-black text-white py-20 px-4 sm:px-8 overflow-hidden">
      {/* ✅ Background image layer */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-10 blur-sm"
        style={{
          backgroundImage: `url(https://png.pngtree.com/thumb_back/fh260/back_pic/04/15/94/285823f61c7ed73.jpg)`,
        }}
      />

      <div className="max-w-6xl mx-auto">
        <h2 className="max-sm:text-xl md:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`group rounded-xl bg-white/5 backdrop-blur-md transition-all duration-300 p-[2px] ${
                  isOpen ? 'border-animated' : 'border border-white/20'
                }`}
              >
                <div
                  onClick={() => toggleFAQ(index)}
                  className="cursor-pointer rounded-xl bg-black/80 px-5 py-4"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg sm:text-xl font-semibold">{faq.question}</h3>
                    {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-300 text-base leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
