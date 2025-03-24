import React, { useState } from 'react';

const RequestPayoutBox = ({ ref }) => {
  const [amount, setAmount] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [selectedPreset, setSelectedPreset] = useState('');

  const presets = ['PayPal', 'Crypto'];

  return (
    
    <div ref={ref} className="glass-box w-[563px] h-fit !gap-3 flex flex-col !p-5 max-[1078px]:w-full min-w-[370px] max-[402px]:min-w-full max-[402px]:!p-4 max-[402px]:!pt-3 max-[402px]:!pr-[8px] opacity-0 overflow-hidden max-[1464px]:w-full relative">
      <p className="text-3xl font-bold max-[402px]:text-2xl">Request Payout</p>

      <div className="flex flex-col gap-2 !mb-1">
        <div className="flex gap-2 w-full max-[469px]:flex-col">
          
          {/* input for the amount */}
          <div className="mb-4 w-1/2 max-[469px]:w-full">
            <label htmlFor="amount" className="font-medium gray-1 text-base max-[402px]:text-sm !mb-2">Amount</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl font-medium">$</span>
              <input type="text" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-2 p-2 !pl-8 bg-white/10 border border-white/20 rounded-[10px] flex items-center !pt-2 !pb-2 overflow-hidden relative shadow-[inset_0px_4px_10.8px_0px_rgba(255,255,255,0.25)] backdrop-blur-[10px] font-medium text-xl max-[402px]:text-lg w-full" placeholder="Enter amount" />
            </div>
          </div>

          {/* dropdown */}
          <div className="mb-4 w-1/2 max-[469px]:w-full">
            <label htmlFor="dropdown" className="font-medium text-base max-[402px]:text-sm gray-1">Payout Method</label>
            <div className="relative w-full">
              <select id="dropdown" value={selectedPreset} onChange={(e) => setSelectedPreset(e.target.value)} className="mt-2 p-2 !pl-3 cursor-pointer bg-white/10 border border-white/20 rounded-[10px] flex items-center !pt-2 !pb-2 overflow-hidden relative shadow-[inset_0px_4px_10.8px_0px_rgba(255,255,255,0.25)] backdrop-blur-[10px] font-medium text-xl max-[402px]:text-lg w-full appearance-none">
                <option value="" disabled>Select</option>
                {presets.map((preset, index) => (
                  <option key={index} value={preset}>{preset}</option>
                ))}
              </select>
              <img src="src/assets/images/icons/arrow.png" alt="Arrow" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* email or wallet adress input */}
        {selectedPreset && (
          <div className="mb-4">
            <label htmlFor="secondInput" className="font-medium text-base max-[402px]:text-sm !mb-2 gray-1">
              {selectedPreset === 'PayPal' ? 'Email' : selectedPreset === 'Crypto' ? 'Crypto Wallet Address' : ''}
            </label>
            <div className="relative">
              <input type="text" id="secondInput" value={secondInput} onChange={(e) => setSecondInput(e.target.value)} className="mt-2 p-2 w-full !pl-3 bg-white/10 border border-white/20 rounded-[10px] flex items-center !pt-2 !pb-2 overflow-hidden relative shadow-[inset_0px_4px_10.8px_0px_rgba(255,255,255,0.25)] backdrop-blur-[10px] font-medium text-xl max-[402px]:text-lg" placeholder={selectedPreset === 'PayPal' ? 'your@email.com' : selectedPreset === 'Crypto' ? '0x12345...' : ''} />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center gap-1 !pl-5 !pt-2 !pb-2 !pr-4 w-full cursor-pointer transition-all duration-100 ease-linear border border-cyan-400 bg-gradient-to-b from-cyan-400 to-blue-600 shadow-[0px_3px_11.5px_rgba(0,0,0,0.12),0px_1px_12.8px_rgba(255,255,255,0.51)_inset] rounded-[10px] hover:opacity-80">
        <span className="font-medium text-[18px]">Request Payout</span>
        <img src="src/assets/images/icons/Copy.png" alt="icon" className="w-[20px] h-[20px]" />
      </div>
    </div>

  );
};

export default RequestPayoutBox;
