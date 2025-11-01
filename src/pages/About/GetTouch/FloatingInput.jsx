import React, { useState } from "react";

const FloatingInput = ({ label, type = "text", isTextArea }) => {
  const InputTag = isTextArea ? "textarea" : "input";
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full">
      <InputTag
        type={type}
        rows={isTextArea ? 4 : undefined}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required
        className="peer w-full px-4 pt-6 pb-2 text-sm text-black dark:text-white bg-transparent border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent transition"
        placeholder={label}
      />
      <label
        className={`absolute left-4 top-2.5 text-sm text-gray-500 dark:text-gray-400 transition-all duration-200 pointer-events-none
        ${isFocused ? "opacity-0" : ""}
        ${!value && !isFocused ? "peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5" : ""}
      `}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
