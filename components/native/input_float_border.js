import React, { useState } from "react";

const InputComponent = ({ label, name }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="relative">
      <input
        type="text"
        name={name}
        className={`border rounded-lg p-1 outline-none border-sky-600`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <label
        className={`absolute left-2 text-gray-400 pointer-events-none transform transition-all duration-150 ease-in-out ${
          isFocused || inputValue
            ? "translate-y-[-50%] scale-75 bg-white text-sky-600 rounded px-2"
            : "translate-y-1 pl-1"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputComponent;
