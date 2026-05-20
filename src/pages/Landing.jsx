import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end h-full px-5 pb-8 bg-white">
      {/* Top Graphic Space (Empty/Neutral spacer to center layout visually) */}
      <div className="flex-1 flex flex-col justify-center items-center select-none animate-fade-in">
        {/* Sleek Minimal App Logo Vector Accent */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#6C25FF] to-[#aa7eff] flex items-center justify-center shadow-lg shadow-[#6C25FF33] mb-4">
          <span className="text-white text-3xl font-bold tracking-tight">P</span>
        </div>
      </div>

      {/* Content Container (Bottom-Aligned) */}
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1d1d1d] tracking-tight mb-2">
            Welcome to PopX
          </h1>
          <p className="text-[#808080] text-sm leading-relaxed max-w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-3">
          <Button 
            variant="primary" 
            onClick={() => navigate('/signup')}
          >
            Create Account
          </Button>
          
          <Button 
            variant="secondary" 
            onClick={() => navigate('/login')}
          >
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
