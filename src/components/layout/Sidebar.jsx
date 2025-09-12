import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDashboard, MdKeyboardArrowLeft, MdDocumentScanner, MdHome } from 'react-icons/md';
import { FiMap } from 'react-icons/fi';
import { HiChartBar } from 'react-icons/hi';
import { IoDocumentText } from 'react-icons/io5';
import { FaTree } from 'react-icons/fa';

const Sidebar = ({ activePage, setActivePage, collapsed, setCollapsed }) => {
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: 'Home', icon: MdHome },
    { id: 'dashboard', label: 'Dashboard', icon: MdDashboard },
    { id: 'ocr', label: 'OCR Digitization', icon: MdDocumentScanner },
    { id: 'atlas', label: 'FRA Atlas', icon: FiMap },
    { id: 'dss', label: 'Decision Support', icon: HiChartBar },
    { id: 'reports', label: 'Reports', icon: IoDocumentText }
  ];

  const handleNavClick = (pageId) => {
    if (pageId === 'home') {
      navigate('/');
    } else {
      navigate(`/${pageId}`);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className={`hidden md:flex bg-white border-r border-secondary-200 flex-col transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
      {/* Header */}
      <div className="p-6 border-b border-secondary-200">
        <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <FaTree className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-lg font-semibold text-secondary-800">SentinelX</h1>
              <p className="text-xs text-secondary-500">Data Portal</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${activePage === item.id
                      ? 'bg-primary-100 text-primary-700 font-semibold'
                      : 'text-secondary-600 hover:bg-secondary-50'
                    }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {!collapsed && <span>{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Collapse Button */}
      <div className="p-4 border-t border-secondary-200">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 text-secondary-600 hover:bg-secondary-50 rounded-lg transition-colors"
        >
          <MdKeyboardArrowLeft className={`w-5 h-5 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
          {!collapsed && <span className="text-sm">Collapse</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
