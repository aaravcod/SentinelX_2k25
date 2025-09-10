import React, { useEffect } from 'react';
import { SignUp, useAuth } from '@clerk/clerk-react';
import { useNavigate, Link } from 'react-router-dom';
import { FaTree, FaLeaf } from 'react-icons/fa';
import { MdSecurity, MdVerifiedUser } from 'react-icons/md';
import { FiUsers, FiCheckCircle, FiUserPlus } from 'react-icons/fi';

const departments = [
  { label: 'Ministry of Tribal Affairs', icon: MdVerifiedUser },
  { label: 'District-level Tribal Welfare Departments', icon: FiUsers },
  { label: 'Forest and Revenue Departments', icon: FaTree },
  { label: 'Planning & Development Authorities', icon: FiCheckCircle },
  { label: 'NGOs working with tribal communities', icon: FiCheckCircle }
];

const SignupPage = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard');
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Left: Branding & Info Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-emerald-600 to-emerald-800 p-12 text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <FaLeaf className="absolute top-20 left-20 w-32 h-32 rotate-12" />
          <FaTree className="absolute bottom-20 right-20 w-28 h-28 -rotate-12" />
        </div>
        <div className="relative z-10 flex flex-col h-full">
          {/* Branding */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
              <FaTree className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">FRA Drishti</h1>
              <p className="text-emerald-100 text-lg">Govt. Forest Rights Data Portal</p>
            </div>
          </div>
          {/* Headline */}
          <h2 className="text-4xl font-bold mb-4">Join FRA Drishti</h2>
          <p className="text-emerald-100 mb-6 text-lg max-w-xl">
            Create your secure account for data-driven forest rights governance and collaboration.
          </p>
          {/* Compliance & Security */}
          <div className="flex gap-4 mb-8">
            <div className="flex items-center gap-2">
              <MdSecurity className="w-5 h-5" />
              <span className="text-sm">Govt. compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCheckCircle className="w-5 h-5" />
              <span className="text-sm">ISO 27001 Certified</span>
            </div>
          </div>
          {/* Department/Organization Audience */}
          <div className="mb-8">
            <h3 className="font-semibold mb-2 text-lg">Who can register?</h3>
            <ul className="space-y-2 opacity-90 text-base">
              {departments.map((dept, idx) => (
                <li key={dept.label} className="flex gap-2 items-center">
                  <dept.icon className="w-4 h-4" />
                  {dept.label}
                </li>
              ))}
            </ul>
          </div>
          {/* CTA */}
          <div className="mt-auto">
            <div className="bg-emerald-500 bg-opacity-20 rounded-lg p-4 flex items-center gap-3">
              <FiUserPlus className="w-6 h-6 flex-shrink-0" />
              <span className="text-lg font-medium">
                Register today for secure data access and collaboration
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Clerk Sign-up Widget */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6 text-center">Create an Account</h2>
          <SignUp
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "shadow-none border-0",
                formButtonPrimary: "bg-emerald-600 hover:bg-emerald-700",
                formFieldInput: "border-slate-200 focus:ring-emerald-500 focus:border-emerald-500",
              },
            }}
            signInUrl="/login"
          />
          <p className="mt-6 text-center text-sm">
            <Link to="/" className="text-black-600 hover:text-emerald-800 font-medium">Back Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
