import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

const Signup = () => {
  const navigate = useNavigate();
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'no'
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({ ...prev, isAgency: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    let valid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone.trim().replace(/[-\s]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit number';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company Name is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate successful signup and pass details to profile
      navigate('/profile', { state: { user: formData } });
    }
  };

  return (
    <div className="flex flex-col h-full bg-white px-5 pt-8 pb-4 relative justify-between">
      
      {/* Scrollable Form Body */}
      <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar pb-18">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#1d1d1d] tracking-tight leading-tight mb-2">
            Create your PopX account
          </h2>
          <p className="text-[#808080] text-sm leading-relaxed">
            Fill in the details to setup your professional profile.
          </p>
        </div>

        {/* Inputs */}
        <form onSubmit={handleSubmit} className="space-y-1">
          <Input
            id="fullName"
            name="fullName"
            label="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            required
          />

          <Input
            id="phone"
            name="phone"
            label="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />

          <Input
            id="email"
            name="email"
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />

          <Input
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            required
          />

          <Input
            id="companyName"
            name="companyName"
            label="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            error={errors.companyName}
            required
          />

         
          <div className="pt-2">
            <span className="block text-sm font-semibold text-[#1d1d1d] mb-2 select-none">
              Are you an Agency?<span className="text-[#e20000] ml-0.5">*</span>
            </span>
            <div className="flex items-center gap-6">
              <label 
                className="flex items-center gap-2 text-sm text-[#1d1d1d] font-medium cursor-pointer select-none"
                onClick={() => handleRadioChange('yes')}
              >
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={formData.isAgency === 'yes'}
                    onChange={() => {}}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-150 ${
                    formData.isAgency === 'yes' ? 'border-[#6C25FF]' : 'border-neutral-300'
                  }`}>
                    {formData.isAgency === 'yes' && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#6C25FF]" />
                    )}
                  </div>
                </div>
                <span>Yes</span>
              </label>

              <label 
                className="flex items-center gap-2 text-sm text-[#1d1d1d] font-medium cursor-pointer select-none"
                onClick={() => handleRadioChange('no')}
              >
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={formData.isAgency === 'no'}
                    onChange={() => {}}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-150 ${
                    formData.isAgency === 'no' ? 'border-[#6C25FF]' : 'border-neutral-300'
                  }`}>
                    {formData.isAgency === 'no' && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#6C25FF]" />
                    )}
                  </div>
                </div>
                <span>No</span>
              </label>
            </div>
          </div>
        </form>
      </div>

      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent pt-6 pb-6 px-5 border-t border-neutral-100">
        <Button 
          type="button" 
          variant="primary" 
          onClick={handleSubmit}
        >
          Create Account
        </Button>
      </div>

    </div>
  );
};

export default Signup;
