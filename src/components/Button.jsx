import React from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  fullWidth = true,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseStyle = 'inline-flex items-center justify-center rounded-lg py-3 px-6 text-sm font-semibold tracking-wide transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:ring-offset-2 active:scale-[0.98] select-none';
  
  const variants = {
    primary: 'bg-[#6C25FF] text-white hover:bg-[#591adb] hover:shadow-md active:bg-[#4d13c7] disabled:bg-purple-300',
    secondary: 'bg-[#6C25FF1A] text-[#6C25FF] border border-[#6C25FF] hover:bg-[#6C25FF26] active:bg-[#6C25FF33] disabled:opacity-50'
  };

  const widthStyle = fullWidth ? 'w-full' : 'w-auto';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
