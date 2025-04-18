import React from 'react';

const SettingsInput = React.forwardRef(({ title, placeholder }, ref) => {
  return (
    <>
      <div ref={ref}>
        <p className="text-[24px] font-bold max-[402px]:text-xl !mb-2">
          {title}
        </p>
        
        <input
          type="text"
          id="username"
          placeholder={placeholder}
          className="mt-2 w-full p-2 !pl-4 bg-white/10 border border-white/20 rounded-[10px] flex items-center !pt-2 !pb-2 overflow-hidden relative shadow-[inset_0px_0px_10.8px_0px_rgba(255,255,255,0.25)] custom-input backdrop-blur-[10px] font-medium text-xl max-[402px]:text-lg"
        />
      </div>
    </>
  );
});

export default SettingsInput;