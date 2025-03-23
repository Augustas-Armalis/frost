import React, { useState } from "react";

const CustomCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center justify-center">
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={handleChange}
      />
      <div
        className={`w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border border-white/20 ${
          isChecked ? "bg-green-500/40" : "bg-white/10"
        }`}
      >
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M10 17l5-5-1.41-1.41L10 14.17l-2.59-2.59L6 13l4 4z"
            />
          </svg>
        )}
      </div>
    </label>
  );
};

export default CustomCheckbox;
