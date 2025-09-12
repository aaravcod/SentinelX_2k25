import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, useUser, useAuth } from '@clerk/clerk-react';
import "./index.css"

import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

import Home from './components/pages/Home';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import DashboardPage from './components/pages/DashboardPage';
import AtlasPage from './components/pages/AtlasPage';
import DSSPage from './components/pages/DSSPage';
import OCRDigitizationPage from './components/pages/OCRDigitizationPage';
import ReportsPage from './components/pages/ReportsPage';

// Clerk publishable key from environment variables
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const AppContent = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isSignedIn } = useUser();
  const auth = useAuth();

  // Extract current path
  const currentPath = location.pathname;
  const activePage = currentPath === '/' ? 'home' : currentPath.slice(1);

  // Page configuration with auth requirement and layout visibility
  const pageConfig = {
    home: { title: 'Welcome to FRA Drishti', showLayout: false, requireAuth: false },
    login: { title: 'Login', showLayout: false, requireAuth: false },
    signup: { title: 'Sign Up', showLayout: false, requireAuth: false },
    dashboard: { title: 'Dashboard Overview', showLayout: true, requireAuth: true },
    atlas: { title: 'FRA Atlas', showLayout: true, requireAuth: true },
    dss: { title: 'Decision Support System', showLayout: true, requireAuth: true },
    ocr: { title: 'OCR Data Digitization', showLayout: true, requireAuth: true },
    reports: { title: 'Reports & Analytics', showLayout: true, requireAuth: true }
  };

  const currentPageConfig = pageConfig[activePage] || pageConfig.home;
  const showLayout = currentPageConfig.showLayout;
  const requiresAuth = currentPageConfig.requireAuth;

  // Redirect if page requires auth but user is not signed in
  useEffect(() => {
    if (requiresAuth && !isSignedIn) {
      navigate('/login');
    }
  }, [requiresAuth, isSignedIn, navigate]);

  // Navigation handler
  const handlePageChange = (page) => {
    navigate(page === 'home' ? '/' : `/${page}`);
  };

  // Render public pages (home, login, signup) without sidebar/header
  if (!showLayout) {
    return (
      <div className="min-h-screen bg-slate-50 font-inter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    );
  }

  // Render protected pages with sidebar and header
  return (
    <SignedIn>
      <div className="flex h-screen bg-slate-50 font-inter">
        <Sidebar 
          activePage={activePage} 
          setActivePage={handlePageChange}
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
          user={user}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header title={currentPageConfig.title} user={user} />
          <main className="flex-1 overflow-auto p-6">
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/atlas" element={<AtlasPage />} />
              <Route path="/dss" element={<DSSPage />} />
              <Route path="/ocr" element={<OCRDigitizationPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="*" element={<DashboardPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </SignedIn>
  );
};

const App = () => {
  if (!clerkPubKey) {
    throw new Error("Missing Clerk Publishable Key. Set VITE_CLERK_PUBLISHABLE_KEY in your environment.");
  }

  return (
    <ClerkProvider publishableKey={clerkPubKey} afterSignOutUrl="/">
      <Router>
        <AppContent />
      </Router>
    </ClerkProvider>
  );
};

export default App;
