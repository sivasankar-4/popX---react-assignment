import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    // Email validation
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate successful login
      navigate('/profile');
    }
  };

  return (
    <div className="flex flex-col h-full px-5 pt-8 bg-white justify-between pb-8">
      {/* Top Section: Header & Form */}
      <div className="flex-1">
        {/* Back navigation button if desired, or just clean title */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#1d1d1d] tracking-tight leading-tight mb-2">
            Signin to your PopX account
          </h2>
          <p className="text-[#808080] text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Inputs Form */}
        <form onSubmit={handleLogin} className="mt-8 space-y-2">
          <Input
            id="login-email"
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            required
          />

          <Input
            id="login-password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            required
          />

          {/* Submit Trigger inside form (hidden, so pressing Enter submits) */}
          <button type="submit" className="hidden" aria-hidden="true" />
        </form>
      </div>

      {/* Bottom Section: Primary Button */}
      <div className="mt-6">
        <Button 
          type="button" 
          variant="primary" 
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
