
import { FiMap } from 'react-icons/fi';
import { MdInfo, MdClose } from 'react-icons/md';

const AtlasPage = () => {
  //const [infoPanelOpen, setInfoPanelOpen] = useState(false); // ✅ State is defined

  return (
    <div className="flex flex-col lg:flex-row h-full gap-6">
      {/* Left Panel - Filters (commented out for now) */}

      {/* Center Panel - Map */}
      <div className="w-full h-full lg:flex-1 bg-white rounded-xl shadow-md p-6 relative">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Interactive Map</h3>
        
        <iframe
          src="http://localhost:8000/api/map/"  // Your backend endpoint
          width="100%"
          height="90%"
          style={{ border: "none" }}
          title="SentinelX Map"
        ></iframe>

        
      </div>

      {/* Right Panel - Information Drawer */}
      {/* <div className={`w-full lg:w-1/4 bg-white rounded-xl shadow-md transition-all duration-300 ${
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
            <div className="pt-4 border-t border-slate-200">
              <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
                View Full Details
              </button>
            </div>
          </div>
        </div>

      </div> */}
    </div>
  );
};

export default AtlasPage;