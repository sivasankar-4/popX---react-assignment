import React from 'react';

const MobileLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f5f5f5] p-0 md:p-6 overflow-hidden">
      {/* Smartphone Device Frame (Mockup) for Desktop, Fullscreen for Mobile */}
      <div className="relative w-full h-screen md:w-[375px] md:h-[812px] bg-white md:rounded-[40px] md:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] md:border-[10px] md:border-[#1d1d1d] flex flex-col overflow-hidden transition-all duration-300">
        
        
        <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[25px] bg-[#1d1d1d] rounded-b-2xl z-50 items-center justify-center gap-2">
          
          <div className="w-[45px] h-[3px] bg-[#333] rounded-full"></div>
         
          <div className="w-[6px] h-[6px] bg-[#1a1a2e] rounded-full border border-neutral-800"></div>
        </div>

        
        <div className="hidden md:block absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[110px] h-[4px] bg-[#b5b5b5] rounded-full z-50"></div>

        
        <div className="flex-1 flex flex-col h-full overflow-y-auto custom-scrollbar bg-white select-none relative pt-0 md:pt-4 pb-0 md:pb-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
