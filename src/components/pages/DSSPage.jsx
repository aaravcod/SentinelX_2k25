import React, { useState } from 'react';

const DSSPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Define Your Goal</h3>
            <div className="space-y-4 max-w-md mx-auto">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Select Area of Interest</label>
                <select className="w-full border border-slate-200 rounded-lg px-3 py-2">
                  <option>Mayurbhanj District</option>
                  <option>Keonjhar District</option>
                  <option>Sundargarh District</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Select Development Objective</label>
                <select className="w-full border border-slate-200 rounded-lg px-3 py-2">
                  <option>Livelihood Enhancement</option>
                  <option>Forest Conservation</option>
                  <option>Water Resource Management</option>
                </select>
              </div>
              <button
                onClick={() => setCurrentStep(2)}
                className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Analyze Data
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">System Analysis</h3>
            <div className="bg-slate-50 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="space-y-3 text-left">
                <p className="text-slate-700">🔍 <strong>Found 450 FRA farm pattas</strong> in Mayurbhanj District</p>
                <p className="text-slate-700">📊 <strong>68% have potential</strong> for livelihood enhancement</p>
                <p className="text-slate-700">🌱 <strong>12 intervention schemes</strong> identified as suitable</p>
                <p className="text-slate-700">👥 <strong>2,340 potential beneficiaries</strong> across 89 villages</p>
              </div>
            </div>
            <div className="flex gap-4 justify-center mt-8">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                View Recommendations
              </button>
            </div>
          </div>
        );

      case 3:
        const recommendations = [
          {
            priority: 'High',
            what: 'MGNREGA-FRA Integration',
            where: '15 villages in Rairangpur block',
            why: 'High unemployment + suitable land availability',
            scheme: 'MGNREGA + NTFP Development'
          },
          {
            priority: 'Medium',
            what: 'Agroforestry Promotion',
            where: '23 villages across 3 blocks',
            why: 'Degraded land + farmer interest',
            scheme: 'RKVY-RAFTAAR + Mission for Integrated Development of Horticulture'
          },
          {
            priority: 'Medium',
            what: 'Water Harvesting',
            where: '12 drought-prone villages',
            why: 'Water scarcity + community participation',
            scheme: 'Pradhan Mantri Krishi Sinchai Yojana'
          }
        ];

        return (
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">Priority Recommendations</h3>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-6 shadow-md ${
                    rec.priority === 'High' ? 'border-l-4 border-emerald-500' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-slate-800">{rec.what}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      rec.priority === 'High' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {rec.priority} Priority
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-slate-600 mb-1">Where:</p>
                      <p className="text-slate-800">{rec.where}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-600 mb-1">Why:</p>
                      <p className="text-slate-800">{rec.why}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-slate-600 mb-1">Recommended Scheme:</p>
                    <p className="text-slate-800">{rec.scheme}</p>
                  </div>
                  
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 transition-colors">
                    Export Beneficiary List
                  </button>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Start New Analysis
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep >= step 
                ? 'bg-emerald-600 text-white' 
                : 'bg-slate-200 text-slate-600'
            }`}>
              {step}
            </div>
            {step < 3 && (
              <div className={`w-12 h-0.5 mx-2 ${
                currentStep > step ? 'bg-emerald-600' : 'bg-slate-200'
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-xl shadow-md p-8">
        {renderStep()}
      </div>
    </div>
  );
};

export default DSSPage;
