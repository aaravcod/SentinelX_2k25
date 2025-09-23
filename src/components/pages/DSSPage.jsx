import React, { useState } from 'react';
import { 
  FiTarget, 
  FiDatabase, 
  FiTrendingUp, 
  FiMapPin, 
  FiUsers, 
  FiDollarSign,
  FiFileText,
  FiDroplet,
  FiMap
} from 'react-icons/fi';
import { MdAnalytics, MdRecommend } from 'react-icons/md';

const DSSPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    area: '',
    water_index: 0.5,
    forest_cover_pct: 50,
    scheme_history: '',
    is_ST: '',
    income_level: '',
    employment_status: '',
    claim_type: '',
    state: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTarget className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-secondary-800 mb-2">Define Analysis Parameters</h3>
              <p className="text-secondary-600">Provide the key parameters for intelligent decision support analysis</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Land Area */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  <FiMap className="w-4 h-4 inline mr-2" />
                  Land Area (Acres)
                </label>
                <select 
                  className="w-full border border-secondary-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.area}
                  onChange={(e) => handleInputChange('area', e.target.value)}
                >
                  <option value="">Select area range</option>
                  <option value="0-2">0-2 acres</option>
                  <option value="2-5">2-5 acres</option>
                  <option value="5-10">5-10 acres</option>
                  <option value="10-20">10-20 acres</option>
                  <option value="20+">20+ acres</option>
                </select>
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  <FiMapPin className="w-4 h-4 inline mr-2" />
                  State
                </label>
                <select 
                  className="w-full border border-secondary-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                >
                  <option value="">Select state</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Chhattisgarh">Tripura</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Telangana">Telangana</option>
                </select>
              </div>

              {/* Water Index Slider */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  <FiDroplet className="w-4 h-4 inline mr-2" />
                  Water Availability Index: {formData.water_index.toFixed(2)}
                </label>
                <div className="px-3">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={formData.water_index}
                    onChange={(e) => handleInputChange('water_index', parseFloat(e.target.value))}
                    className="w-full h-2 bg-secondary-200 rounded-lg appearance-none cursor-pointer slider-primary"
                  />
                  <div className="flex justify-between text-xs text-secondary-500 mt-1">
                    <span>0.00 (Low)</span>
                    <span>0.50 (Medium)</span>
                    <span>1.00 (High)</span>
                  </div>
                </div>
              </div>

              {/* Forest Cover Slider */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  <FiTrendingUp className="w-4 h-4 inline mr-2" />
                  Forest Cover Percentage: {formData.forest_cover_pct}%
                </label>
                <div className="px-3">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={formData.forest_cover_pct}
                    onChange={(e) => handleInputChange('forest_cover_pct', parseInt(e.target.value))}
                    className="w-full h-2 bg-secondary-200 rounded-lg appearance-none cursor-pointer slider-primary"
                  />
                  <div className="flex justify-between text-xs text-secondary-500 mt-1">
                    <span>1%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Claim Type */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  <FiFileText className="w-4 h-4 inline mr-2" />
                  Claim Type
                </label>
                <select 
                  className="w-full border border-secondary-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.claim_type}
                  onChange={(e) => handleInputChange('claim_type', e.target.value)}
                >
                  <option value="">Select claim type</option>
                  <option value="Individual">Individual Forest Rights (IFR)</option>
                  <option value="Community">Community Forest Rights (CFR)</option>
                  <option value="Community Resource">Community Forest Resource Rights</option>
                  <option value="Other Traditional">Other Traditional Rights</option>
                </select>
              </div>

              {/* ST Status */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  <FiUsers className="w-4 h-4 inline mr-2" />
                  Scheduled Tribe Status
                </label>
                <select 
                  className="w-full border border-secondary-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.is_ST}
                  onChange={(e) => handleInputChange('is_ST', e.target.value)}
                >
                  <option value="">Select ST status</option>
                  <option value="Yes">Yes - Scheduled Tribe</option>
                  <option value="No">No - Not Scheduled Tribe</option>
                  <option value="PVTG">PVTG - Particularly Vulnerable Tribal Groups</option>
                </select>
              </div>

              {/* Income Level */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  <FiDollarSign className="w-4 h-4 inline mr-2" />
                  Income Level
                </label>
                <select 
                  className="w-full border border-secondary-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.income_level}
                  onChange={(e) => handleInputChange('income_level', e.target.value)}
                >
                  <option value="">Select income level</option>
                  <option value="Below Poverty Line">Below Poverty Line (BPL)</option>
                  <option value="Above Poverty Line">Above Poverty Line (APL)</option>
                  <option value="Antyodaya">Antyodaya (Poorest of Poor)</option>
                  <option value="Middle Income">Middle Income</option>
                </select>
              </div>

              {/* Employment Status */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  <FiUsers className="w-4 h-4 inline mr-2" />
                  Employment Status
                </label>
                <select 
                  className="w-full border border-secondary-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.employment_status}
                  onChange={(e) => handleInputChange('employment_status', e.target.value)}
                >
                  <option value="">Select employment status</option>
                  <option value="Unemployed">Unemployed</option>
                  <option value="Self Employed">Self Employed</option>
                  <option value="Agricultural Worker">Agricultural Worker</option>
                  <option value="MGNREGA Worker">MGNREGA Worker</option>
                  <option value="Salaried">Salaried Employee</option>
                  <option value="Daily Wage">Daily Wage Laborer</option>
                </select>
              </div>

              {/* Scheme History */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  <MdAnalytics className="w-4 h-4 inline mr-2" />
                  Previous Scheme Participation
                </label>
                <select 
                  className="w-full border border-secondary-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.scheme_history}
                  onChange={(e) => handleInputChange('scheme_history', e.target.value)}
                >
                  <option value="">Select scheme history</option>
                  <option value="None">No Previous Participation</option>
                  <option value="MGNREGA">MGNREGA Beneficiary</option>
                  <option value="PMAY">PM Awas Yojana Beneficiary</option>
                  <option value="SHG">Self Help Group Member</option>
                  <option value="NTFP">NTFP Scheme Beneficiary</option>
                  <option value="Multiple">Multiple Scheme Beneficiary</option>
                </select>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => setCurrentStep(2)}
                disabled={!formData.area || !formData.state || !formData.claim_type}
                className="bg-primary-600 text-white py-3 px-8 rounded-lg hover:bg-primary-700 transition-colors disabled:bg-secondary-400 disabled:cursor-not-allowed font-semibold flex items-center gap-2 mx-auto"
              >
                <FiDatabase className="w-5 h-5" />
                Analyze Data
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MdAnalytics className="w-8 h-8 text-accent-600" />
            </div>
            <h3 className="text-2xl font-semibold text-secondary-800 mb-6">AI Analysis Results</h3>
            
            <div className="bg-secondary-50 rounded-xl p-8 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-white rounded-lg p-4 border-l-4 border-primary-500">
                  <div className="flex items-center gap-2 mb-2">
                    <FiMapPin className="w-5 h-5 text-primary-600" />
                    <h4 className="font-semibold text-secondary-800">Location Match</h4>
                  </div>
                  <p className="text-secondary-700">Found <strong>1,250 similar profiles</strong> in {formData.state || 'selected region'}</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-accent-500">
                  <div className="flex items-center gap-2 mb-2">
                    <FiTrendingUp className="w-5 h-5 text-accent-600" />
                    <h4 className="font-semibold text-secondary-800">Success Rate</h4>
                  </div>
                  <p className="text-secondary-700"><strong>78% success rate</strong> for similar profiles</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-primary-500">
                  <div className="flex items-center gap-2 mb-2">
                    <FiUsers className="w-5 h-5 text-primary-600" />
                    <h4 className="font-semibold text-secondary-800">Beneficiary Pool</h4>
                  </div>
                  <p className="text-secondary-700"><strong>3,400 potential beneficiaries</strong> across 120 villages</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-accent-500">
                  <div className="flex items-center gap-2 mb-2">
                    <MdRecommend className="w-5 h-5 text-accent-600" />
                    <h4 className="font-semibold text-secondary-800">Scheme Match</h4>
                  </div>
                  <p className="text-secondary-700"><strong>8 compatible schemes</strong> identified for intervention</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
                <h4 className="font-semibold text-primary-800 mb-2">Key Insights</h4>
                <ul className="text-sm text-primary-700 space-y-1">
                  <li>• Water index of {formData.water_index.toFixed(2)} suggests {"moderate"} irrigation potential</li>
                  <li>• {formData.forest_cover_pct}% forest cover indicates {"good"} NTFP opportunities</li>
                  <li>• {formData.is_ST === "Yes" ? "ST status qualifies" : "Profile qualifies"} for priority schemes</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center mt-8">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-6 py-3 border border-secondary-300 text-secondary-700 rounded-lg hover:bg-secondary-50 transition-colors font-semibold"
              >
                Back to Form
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold flex items-center gap-2"
              >
                <MdRecommend className="w-5 h-5" />
                View Recommendations
              </button>
            </div>
          </div>
        );

      case 3:
        const recommendations = [
          {
            priority: 'High',
            what: 'MGNREGA-FRA Convergence Program',
            where: `Villages with ${formData.area} acres in ${formData.state || 'selected state'}`,
            why: `${formData.employment_status === 'Unemployed' ? 'High unemployment' : 'Employment diversification'} + suitable land availability`,
            scheme: 'MGNREGA + NTFP Development',
            impact: '2,100 beneficiaries',
            budget: '₹15.2 Cr'
          },
          {
            priority: 'High',
            what: 'Agroforestry Development Initiative',
            where: `${formData.forest_cover_pct}% forest cover areas`,
            why: `Optimal forest-agriculture balance + ${formData.income_level || 'income enhancement'} potential`,
            scheme: 'RKVY-RAFTAAR + Horticulture Mission',
            impact: '1,850 beneficiaries',
            budget: '₹12.8 Cr'
          },
          {
            priority: 'Medium',
            what: 'Water Resource Management',
            where: `Areas with ${formData.water_index.toFixed(2)} water index`,
            why: `Water optimization potential + community participation readiness`,
            scheme: 'PM Krishi Sinchai Yojana',
            impact: '980 beneficiaries',
            budget: '₹8.5 Cr'
          }
        ];

        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MdRecommend className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-secondary-800 mb-2">AI-Powered Recommendations</h3>
              <p className="text-secondary-600">Prioritized interventions based on your parameters</p>
            </div>
            
            <div className="space-y-6">
              {recommendations.map((rec, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-lg ${
                    rec.priority === 'High' ? 'border-l-4 border-primary-500' : 'border-l-4 border-accent-400'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-secondary-800">{rec.what}</h4>
                    <div className="flex items-center gap-3 mt-2 sm:mt-0">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        rec.priority === 'High' 
                          ? 'bg-primary-100 text-primary-800' 
                          : 'bg-accent-100 text-accent-800'
                      }`}>
                        {rec.priority} Priority
                      </span>
                      <span className="text-sm font-medium text-secondary-600">{rec.budget}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-secondary-600 mb-2">Target Area:</p>
                      <p className="text-secondary-800">{rec.where}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary-600 mb-2">Rationale:</p>
                      <p className="text-secondary-800">{rec.why}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary-600 mb-2">Recommended Scheme:</p>
                      <p className="text-secondary-800 font-medium">{rec.scheme}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary-600 mb-2">Expected Impact:</p>
                      <p className="text-secondary-800 font-medium">{rec.impact}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700 transition-colors font-semibold flex items-center gap-2">
                      <FiFileText className="w-4 h-4" />
                      Export Detailed Report
                    </button>
                    <button className="border border-secondary-300 text-secondary-700 px-4 py-2 rounded-lg text-sm hover:bg-secondary-50 transition-colors font-semibold flex items-center gap-2">
                      <FiUsers className="w-4 h-4" />
                      View Beneficiary List
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8 pt-6 border-t border-secondary-200">
              <button
                onClick={() => {
                  setCurrentStep(1);
                  setFormData({
                    area: '',
                    water_index: 0.5,
                    forest_cover_pct: 50,
                    scheme_history: '',
                    is_ST: '',
                    income_level: '',
                    employment_status: '',
                    claim_type: '',
                    state: ''
                  });
                }}
                className="px-8 py-3 border border-secondary-300 text-secondary-700 rounded-lg hover:bg-secondary-50 transition-colors font-semibold"
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
    <div className="max-w-6xl mx-auto">
      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-8">
        {[
          { step: 1, label: 'Parameters', icon: FiTarget },
          { step: 2, label: 'Analysis', icon: MdAnalytics },
          { step: 3, label: 'Recommendations', icon: MdRecommend }
        ].map((item, index) => (
          <div key={item.step} className="flex items-center">
            <div className={`flex flex-col items-center ${
              currentStep >= item.step ? 'text-primary-600' : 'text-secondary-400'
            }`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium border-2 ${
                currentStep >= item.step 
                  ? 'bg-primary-600 text-white border-primary-600' 
                  : 'bg-white border-secondary-300 text-secondary-400'
              }`}>
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-xs mt-2 font-medium">{item.label}</span>
            </div>
            {index < 2 && (
              <div className={`w-16 h-0.5 mx-4 ${
                currentStep > item.step ? 'bg-primary-600' : 'bg-secondary-200'
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        {renderStep()}
      </div>

      {/* Custom CSS for sliders */}
      <style jsx>{`
        .slider-primary::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider-primary::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default DSSPage;