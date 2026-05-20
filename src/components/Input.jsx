import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Input = ({
  label,
  id,
  type = 'text',
  value,
  onChange,
  required = false,
  error = '',
  placeholder = ' ',
  className = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={`relative mb-5 w-full ${className}`}>
      <input
        id={id}
        type={inputType}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`peer w-full rounded-lg border border-[#cbcbcb] bg-white px-4 py-3 text-sm text-[#1d1d1d] outline-none transition-colors duration-200 focus:border-[#6C25FF] ${
          error ? 'border-red-500 focus:border-red-500' : ''
        } ${isPassword ? 'pr-11' : ''}`}
        {...props}
      />
      
      <label
        htmlFor={id}
        className={`absolute left-3 top-[-8px] z-10 origin-[0] transform bg-white px-1.5 text-xs text-[#808080] transition-all duration-200 select-none pointer-events-none
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-3.5 
          peer-placeholder-shown:left-4 
          peer-placeholder-shown:text-sm 
          peer-placeholder-shown:text-[#808080]
          peer-focus:scale-100 
          peer-focus:translate-y-0 
          peer-focus:left-3 
          peer-focus:text-xs 
          peer-focus:text-[#6C25FF]
          peer-focus:bg-white`}
      >
        {label}
        {required && <span className="text-[#e20000] ml-0.5">*</span>}
      </label>

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-[#808080] hover:text-[#6C25FF] focus:outline-none transition-colors duration-150 cursor-pointer"
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      )}

      {error && <span className="mt-1 text-xs text-red-500 block px-1">{error}</span>}
    </div>
  );
};

export default Input;
