import React, { useState } from 'react';

const CustomDropdown = ({ options = [], value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="mb-4 w-1/2 max-[469px]:w-full">
      <label className="font-medium text-base max-[402px]:text-sm gray-1">Payout Method</label>

      <div onClick={() => setIsOpen(!isOpen)} className="relative w-full mt-2 p-2 !pl-3 cursor-pointer bg-white/10 border border-white/20 rounded-[10px] flex items-center !pt-2 !pb-2 overflow-hidden shadow-[inset_0px_4px_10.8px_0px_rgba(255,255,255,0.25)] backdrop-blur-[10px] font-medium text-xl max-[402px]:text-lg">
        {value || 'Select'}
        <img src="src/assets/images/icons/arrow.png" alt="Arrow" className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <ul className="absolute z-1000 w-[256px] max-[1464px]:w-[353px] max-[1078px]:w-[200px] max-[469px]:!w-[calc(100%-36px)] max-[402px]:!w-[calc(100%-32px)] !mr-6 h-fit !mt-1 bg-[#2A446F] border border-white/20 rounded-[10px] backdrop-blur-[10px] shadow-[0px_3px_11.5px_rgba(0,0,0,0.2)] overflow-hidden">
          {options.map((option, index) => (
            <React.Fragment key={index}>
              <li onClick={() => handleSelect(option)} className={`px-4 py-3 !p-2 !pl-3 !mr-[32px] w-full h-fit hover:bg-[#45618f] cursor-pointer text-xl font-medium transition-all duration-100 ${
option === value ? 'bg-[#192a46] font-semibold' : '' }`}>
                {option}
              </li>
              {index < options.length - 1 && <hr className="border-white/20" />}
            </React.Fragment>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
