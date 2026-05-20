import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Camera } from 'lucide-react';

const Profile = () => {
  const location = useLocation();
  const fileInputRef = useRef(null);
  
  // Dynamic User Data (from Signup state or default fallback)
  const signupUser = location.state?.user;
  
  const defaultUser = {
    fullName: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '9876543210',
    companyName: 'PopX Studio',
    isAgency: 'no'
  };

  const user = signupUser || defaultUser;

  // Custom Avatar upload state
  const [avatarUrl, setAvatarUrl] = useState(
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop'
  );

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
    }
  };

  return (
    <div className="flex flex-col h-full bg-neutral-50 relative select-none">
      
      {/* Header bar */}
      <div className="w-full bg-white px-5 py-4 border-b border-neutral-100 flex items-center">
        <h1 className="text-lg font-bold text-[#1d1d1d] tracking-tight">
          Account Settings
        </h1>
      </div>

      {/* Main Profile Info Section */}
      <div className="flex-1 bg-white p-5 space-y-6">
        
        {/* User Card Area (Avatar Left, Credentials Right) */}
        <div className="flex items-center gap-4">
          
          {/* Avatar with Camera Badge */}
          <div className="relative cursor-pointer" onClick={handleAvatarClick}>
            <img
              src={avatarUrl}
              alt={user.fullName}
              className="w-20 h-20 rounded-full object-cover border-2 border-purple-100 shadow-sm transition-transform duration-200 hover:scale-[1.02]"
            />
            {/* Camera Overlay Icon */}
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#6C25FF] hover:bg-[#591adb] rounded-full border-2 border-white flex items-center justify-center text-white shadow transition-all duration-150 active:scale-90">
              <Camera size={11} className="stroke-[2.5]" />
            </div>
            
            {/* Invisible File Input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
          </div>

          {/* Credentials */}
          <div className="flex-1 min-w-0">
            <h2 className="text-base font-bold text-[#1d1d1d] truncate tracking-tight">
              {user.fullName}
            </h2>
            <p className="text-xs text-[#808080] truncate mt-0.5 font-medium">
              {user.email}
            </p>
          </div>
        </div>

        {/* Bio description paragraph */}
        <div className="space-y-4">
          <p className="text-[#1d1d1d] text-sm leading-relaxed font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Dashed Separator Line */}
        <div className="border-t border-dashed border-[#cbcbcb] my-6 w-full" />
        
        {/* Additional Professional Details (Premium addition for UI completeness) */}
        <div className="space-y-4 pt-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
            Professional Profile Details
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-100">
              <span className="block text-[10px] text-neutral-400 font-semibold uppercase">Company</span>
              <span className="text-xs font-bold text-[#1d1d1d] mt-0.5 block truncate">
                {user.companyName}
              </span>
            </div>
            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-100">
              <span className="block text-[10px] text-neutral-400 font-semibold uppercase">Agency Role</span>
              <span className="text-xs font-bold text-[#1d1d1d] mt-0.5 block capitalize">
                {user.isAgency === 'yes' ? 'Agency Partner' : 'Standard Member'}
              </span>
            </div>
            <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-100 col-span-2">
              <span className="block text-[10px] text-neutral-400 font-semibold uppercase">Contact Phone</span>
              <span className="text-xs font-bold text-[#1d1d1d] mt-0.5 block">
                {user.phone}
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Profile;
