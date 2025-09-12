import React, { useState } from 'react';
import { FiX, FiUser, FiMapPin, FiFileText } from 'react-icons/fi';

const FlashDialog = () => {
  const [showDialog, setShowDialog] = useState(true);
  const [formData, setFormData] = useState({
    claimantID: '',
    name: '',
    district: '',
    block: '',
    village: '',
    schemeName: '',
    applied: '',
    received: '',
    satisfaction: '',
    issueFaced: '',
    suggestions: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => {
    setShowDialog(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      alert('Thank you for your feedback! Your response has been recorded.');
      setShowDialog(false);
      
    } catch (error) {
      alert('There was an error submitting your response. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showDialog) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-primary-600 text-white p-6 rounded-t-xl relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:text-primary-200 transition-colors"
            aria-label="Close dialog"
          >
            <FiX className="w-6 h-6" />
          </button>
          <div className="pr-10">
            <h2 className="text-2xl font-bold mb-2">FRA Beneficiary Survey</h2>
            <p className="text-primary-100">Help us improve our services by sharing your experience</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FiUser className="w-5 h-5 text-primary-600" />
              <h3 className="text-lg font-semibold text-secondary-800">Personal Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="claimantID" className="block text-sm font-medium text-secondary-700 mb-1">
                  Claimant ID *
                </label>
                <input
                  type="text"
                  id="claimantID"
                  name="claimantID"
                  value={formData.claimantID}
                  onChange={handleChange}
                  required
                  placeholder="Enter your Claimant ID"
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
          </div>

          {/* Location Information Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FiMapPin className="w-5 h-5 text-primary-600" />
              <h3 className="text-lg font-semibold text-secondary-800">Location Details</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="district" className="block text-sm font-medium text-secondary-700 mb-1">
                  District *
                </label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  placeholder="Enter district"
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label htmlFor="block" className="block text-sm font-medium text-secondary-700 mb-1">
                  Block *
                </label>
                <input
                  type="text"
                  id="block"
                  name="block"
                  value={formData.block}
                  onChange={handleChange}
                  required
                  placeholder="Enter block"
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label htmlFor="village" className="block text-sm font-medium text-secondary-700 mb-1">
                  Village *
                </label>
                <input
                  type="text"
                  id="village"
                  name="village"
                  value={formData.village}
                  onChange={handleChange}
                  required
                  placeholder="Enter village"
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
          </div>

          {/* Scheme Information Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FiFileText className="w-5 h-5 text-primary-600" />
              <h3 className="text-lg font-semibold text-secondary-800">Scheme Information</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="schemeName" className="block text-sm font-medium text-secondary-700 mb-1">
                  Scheme Name *
                </label>
                <select
                  id="schemeName"
                  name="schemeName"
                  value={formData.schemeName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select scheme</option>
                  <option value="Individual Forest Rights (IFR)">Individual Forest Rights (IFR)</option>
                  <option value="Community Forest Rights (CFR)">Community Forest Rights (CFR)</option>
                  <option value="Community Forest Resource Rights">Community Forest Resource Rights</option>
                  <option value="Other Traditional Rights">Other Traditional Rights</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Have you applied for this scheme? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="applied"
                        value="yes"
                        checked={formData.applied === 'yes'}
                        onChange={handleChange}
                        className="text-primary-600 focus:ring-primary-500"
                        required
                      />
                      <span className="ml-2 text-sm text-secondary-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="applied"
                        value="no"
                        checked={formData.applied === 'no'}
                        onChange={handleChange}
                        className="text-primary-600 focus:ring-primary-500"
                        required
                      />
                      <span className="ml-2 text-sm text-secondary-700">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Have you received benefits? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="received"
                        value="yes"
                        checked={formData.received === 'yes'}
                        onChange={handleChange}
                        className="text-primary-600 focus:ring-primary-500"
                        required
                      />
                      <span className="ml-2 text-sm text-secondary-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="received"
                        value="no"
                        checked={formData.received === 'no'}
                        onChange={handleChange}
                        className="text-primary-600 focus:ring-primary-500"
                        required
                      />
                      <span className="ml-2 text-sm text-secondary-700">No</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="satisfaction" className="block text-sm font-medium text-secondary-700 mb-1">
                  Satisfaction Level (1-5) *
                </label>
                <select
                  id="satisfaction"
                  name="satisfaction"
                  value={formData.satisfaction}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select satisfaction level</option>
                  <option value="1">1 - Very Dissatisfied</option>
                  <option value="2">2 - Dissatisfied</option>
                  <option value="3">3 - Neutral</option>
                  <option value="4">4 - Satisfied</option>
                  <option value="5">5 - Very Satisfied</option>
                </select>
              </div>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="space-y-4">
            <div>
              <label htmlFor="issueFaced" className="block text-sm font-medium text-secondary-700 mb-1">
                Issues Faced (if any)
              </label>
              <textarea
                id="issueFaced"
                name="issueFaced"
                value={formData.issueFaced}
                onChange={handleChange}
                rows="3"
                placeholder="Please describe any issues or challenges you faced"
                className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              ></textarea>
            </div>

            <div>
              <label htmlFor="suggestions" className="block text-sm font-medium text-secondary-700 mb-1">
                Suggestions for Improvement
              </label>
              <textarea
                id="suggestions"
                name="suggestions"
                value={formData.suggestions}
                onChange={handleChange}
                rows="3"
                placeholder="Please share your suggestions to improve our services"
                className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              ></textarea>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-secondary-200">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 ${
                isSubmitting 
                  ? 'bg-secondary-400 cursor-not-allowed' 
                  : 'bg-primary-600 hover:bg-primary-700'
              } text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Submitting...
                </>
              ) : (
                'Submit Survey'
              )}
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="sm:w-auto border border-secondary-300 text-secondary-700 px-6 py-3 rounded-lg font-semibold hover:bg-secondary-50 transition-colors"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlashDialog;
