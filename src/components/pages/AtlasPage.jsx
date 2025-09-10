import React, { useState } from 'react';
import { FiMap } from 'react-icons/fi';
import { MdInfo, MdClose } from 'react-icons/md';

const AtlasPage = () => {
  const [infoPanelOpen, setInfoPanelOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row h-full gap-6">
      {/* Left Panel - Filters */}
      <div className="w-full lg:w-1/4 bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Filters & Layers</h3>
        
        <div className="space-y-4">
          {/* Location Filters */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
            <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm">
              <option>Select State</option>
              <option>Odisha</option>
              <option>Jharkhand</option>
              <option>Chhattisgarh</option>
            </select>
          </div>
          
          <div>
            <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm">
              <option>Select District</option>
              <option>Mayurbhanj</option>
              <option>Keonjhar</option>
            </select>
          </div>

          {/* Claim Status */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Claim Status</label>
            <div className="space-y-2">
              {['Approved', 'Pending', 'Rejected', 'Under Review'].map((status) => (
                <label key={status} className="flex items-center">
                  <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                  <span className="ml-2 text-sm text-slate-600">{status}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Map Layers */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Map Layers</label>
            <div className="space-y-2">
              {['IFR Boundaries', 'CFR Areas', 'Water Bodies', 'Forest Cover'].map((layer) => (
                <label key={layer} className="flex items-center">
                  <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                  <span className="ml-2 text-sm text-slate-600">{layer}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Center Panel - Map */}
      <div className="w-full lg:flex-1 bg-white rounded-xl shadow-md p-6 relative">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Interactive Map</h3>
        
        <div className="h-64 md:h-80 lg:h-full bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg relative overflow-hidden">
          {/* Map Placeholder */}
          <div className="absolute inset-4 bg-green-50 rounded border-2 border-dashed border-emerald-300 flex items-center justify-center">
            <div className="text-center">
              <FiMap className="w-16 md:w-20 h-16 md:h-20 text-emerald-400 mx-auto mb-4" />
              <p className="text-emerald-600 font-medium text-base lg:text-lg">FRA Claims Map</p>
              <p className="text-slate-500 text-xs md:text-sm mt-2">Click on features to view details</p>
            </div>
          </div>

          {/* Info Button */}
          <button
            onClick={() => setInfoPanelOpen(true)}
            className="absolute top-4 md:top-6 right-4 md:right-6 bg-emerald-600 text-white p-2 md:p-3 rounded-lg shadow-lg hover:bg-emerald-700 transition-colors"
          >
            <MdInfo className="w-4 md:w-5 h-4 md:h-5" />
          </button>
        </div>
      </div>

      {/* Right Panel - Information Drawer */}
      <div className={`w-full lg:w-1/4 bg-white rounded-xl shadow-md transition-all duration-300 ${
        infoPanelOpen 
          ? 'translate-x-0' 
          : 'translate-x-full lg:translate-x-0'
      } fixed lg:relative top-0 right-0 h-full lg:h-auto z-50 lg:z-auto`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-800">Claim Details</h3>
            <button
              onClick={() => setInfoPanelOpen(false)}
              className="text-slate-400 hover:text-slate-600 lg:hidden"
            >
              <MdClose className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-500 uppercase tracking-wide">Patta Holder</label>
              <p className="text-slate-800 font-medium">Ramesh Kumar Singh</p>
            </div>
            
            <div>
              <label className="block text-xs font-medium text-slate-500 uppercase tracking-wide">Area (Hectares)</label>
              <p className="text-slate-800 font-medium">2.34 Ha</p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 uppercase tracking-wide">Status</label>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                Approved
              </span>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 uppercase tracking-wide">Village</label>
              <p className="text-slate-800">Kendumundi</p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 uppercase tracking-wide">Block</label>
              <p className="text-slate-800">Rairangpur</p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 uppercase tracking-wide">District</label>
              <p className="text-slate-800">Mayurbhanj</p>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
                View Full Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtlasPage;
