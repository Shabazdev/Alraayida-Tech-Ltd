import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollPercentage(scrollPercent);

      // Visibility Logic
      if (scrollTop > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const size = 60;
  const stroke = 2;
  const radius = size / 2 - stroke;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercentage / 100) * circumference;

  if (!isVisible) return null;

  return (
    <div className="fixed z-50 bottom-8 left-8">
      <button
        onClick={scrollToTop}
        className="relative w-[60px] h-[60px] rounded-full text-blue-600 shadow-lg flex items-center justify-center"
      >
        {/* SVG Progress Circle */}
        <svg className="absolute top-0 left-0" width={size} height={size}>
          <circle
            stroke="#e5e7eb9a" // background circle (gray-200)
            fill="transparent"
            strokeWidth={stroke}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            stroke="#3b83f6da" // progress color (blue-500)
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            r={radius}
            cx={size / 2}
            cy={size / 2}
            style={{
              transition: "stroke-dashoffset 0.3s ease",
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
        </svg>

        {/* Up Arrow Icon */}
        <FaArrowUp className="z-10 text-xl" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;