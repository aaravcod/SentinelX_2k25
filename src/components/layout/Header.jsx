import React, { useState } from 'react';
import { HiSearch, HiMenu, HiX } from 'react-icons/hi';
import { UserButton, useUser, SignedIn, SignedOut } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { FaTree } from 'react-icons/fa';

const Header = ({ title, user }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Logo + Title (Desktop) / Logo + Hamburger (Mobile) */}
        <div className="flex items-center gap-4">

          {/* Page Title*/}
          <div className="md:block">
            <h2 className="text-xl font-semibold text-slate-800">{title}</h2>
          </div>
        </div>

        {/* Center: Search (Desktop only) */}
        <div className="hidden lg:flex items-end">
          <div className="relative">
            <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-64"
            />
          </div>
        </div>

        {/* Right: User Info + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* User Profile - Desktop */}
          <SignedIn>
            <div className="hidden md:flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-slate-800">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-xs text-slate-500">
                  {user?.publicMetadata?.role || 'Hi user'}
                </p>
              </div>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                    userButtonPopoverCard: "shadow-xl border border-slate-200"
                  }
                }}
                afterSignOutUrl="/"
              />
            </div>
          </SignedIn>

          <SignedOut>
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => navigate('/login')}
                className="text-slate-600 hover:text-slate-800 font-medium"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </SignedOut>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100 mt-4 mb-8' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-slate-50 rounded-lg p-4 space-y-4">
          {/* Page Title - Mobile */}


          {/* Search - Mobile */}
          <div className="relative">
            <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* Navigation Links - Mobile */}
          <div className="space-y-2">
            <button
              onClick={() => handleNavigation('/dashboard')}
              className="w-full text-left px-3 py-2 text-slate-700 hover:bg-white hover:text-emerald-600 rounded-lg transition-colors"
            >
              Dashboard
            </button>
            <button
              onClick={() => handleNavigation('/ocr')}
              className="w-full text-left px-3 py-2 text-slate-700 hover:bg-white hover:text-emerald-600 rounded-lg transition-colors"
            >
              OCR Digitization
            </button>
            <button
              onClick={() => handleNavigation('/atlas')}
              className="w-full text-left px-3 py-2 text-slate-700 hover:bg-white hover:text-emerald-600 rounded-lg transition-colors"
            >
              FRA Atlas
            </button>
            <button
              onClick={() => handleNavigation('/dss')}
              className="w-full text-left px-3 py-2 text-slate-700 hover:bg-white hover:text-emerald-600 rounded-lg transition-colors"
            >
              Decision Support
            </button>
            <button
              onClick={() => handleNavigation('/reports')}
              className="w-full text-left px-3 py-2 text-slate-700 hover:bg-white hover:text-emerald-600 rounded-lg transition-colors"
            >
              Reports
            </button>
          </div>

          {/* User Profile - Mobile */}
          <SignedIn>
            <div className="pt-2 border-t border-slate-200">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10"
                    }
                  }}
                  afterSignOutUrl="/"
                />
                <div>
                  <p className="font-medium text-slate-800">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p className="text-sm text-slate-500">
                    {user?.publicMetadata?.role || 'Hi, user'}
                  </p>
                </div>
              </div>
            </div>
          </SignedIn>

          <SignedOut>
            <div className="pt-2 border-t border-slate-200 space-y-2">
              <button
                onClick={() => handleNavigation('/login')}
                className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => handleNavigation('/signup')}
                className="w-full border border-slate-300 text-slate-700 py-2 px-4 rounded-lg font-medium hover:bg-slate-50 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
