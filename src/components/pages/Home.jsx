import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FiArrowRight,
  FiMap,
  FiEye,
  FiBarChart2,
  FiFileText,
  FiUsers,
  FiShield,
  FiTrendingUp,
  FiCheckCircle,
  FiPlay
} from 'react-icons/fi';
import {
  MdDocumentScanner,
  MdDashboard,
  MdVerifiedUser,
  MdLocationOn,
  MdAnalytics,
  MdSpeed,
  MdSecurity
} from 'react-icons/md';
import { FaTree, FaLeaf } from 'react-icons/fa';

const Home = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const navigate = useNavigate();

  // Navigation helper
  const navigateTo = (page) => {
    navigate(`/${page}`);
  };

  const features = [
    {
      icon: MdDocumentScanner,
      title: "OCR Digitization",
      description: "Automated text extraction and entity recognition from scanned FRA documents using advanced AI",
      color: "orange"
    },
    {
      icon: MdDashboard,
      title: "Real-time Dashboard",
      description: "Monitor FRA implementation progress with interactive visualizations and key performance indicators",
      color: "emerald"
    },
    {
      icon: FiMap,
      title: "Interactive Atlas",
      description: "Explore geographical distribution of claims with advanced filtering and detailed information panels",
      color: "blue"
    },
    {
      icon: MdAnalytics,
      title: "Decision Support System",
      description: "AI-powered recommendations for policy interventions and scheme convergence optimization",
      color: "purple"
    },
    {
      icon: FiFileText,
      title: "Smart Reports",
      description: "Generate comprehensive reports with customizable parameters and multiple export formats",
      color: "indigo"
    },
    {
      icon: MdSecurity,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with role-based access control and audit trails",
      color: "red"
    }
  ];

  const stats = [
    { value: "1.2M+", label: "Claims Processed", icon: MdVerifiedUser },
    { value: "850+", label: "Villages Covered", icon: MdLocationOn },
    { value: "99.7%", label: "Uptime Reliability", icon: MdSpeed },
    { value: "24/7", label: "System Availability", icon: FiShield }
  ];

  const benefits = [
    "Reduce manual processing time by 80%",
    "Improve data accuracy and consistency",
    "Enable real-time monitoring and tracking",
    "Streamline inter-departmental coordination",
    "Generate insights for policy decisions",
    "Ensure transparent and accountable governance"
  ];

  //Feedback form 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10">
            <FaLeaf className="w-32 h-32 text-emerald-600 transform rotate-12" />
          </div>
          <div className="absolute top-40 right-20">
            <FaTree className="w-24 h-24 text-emerald-600 transform -rotate-12" />
          </div>
          <div className="absolute bottom-20 left-1/4">
            <FaLeaf className="w-20 h-20 text-emerald-600 transform rotate-45" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                <FaTree className="w-4 h-4 mr-2" />
                Government Data Portal
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  FRA Drishti
                </h1>
                <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 ">
                  Empowering
                  <span className="text-emerald-600 block">Forest Rights</span>
                  through Data
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  A comprehensive digital platform for Forest Rights Act implementation,
                  monitoring, and decision support with AI-powered insights.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/login')} // Changed to login first
                  className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <FiArrowRight className="w-5 h-5" />
                  Get Started
                </button>
                <button
                  onClick={() => navigate('/atlas')}
                  className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-emerald-500 hover:text-emerald-700 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <FiPlay className="w-4 h-4" />
                  View Demo
                </button>
              </div>


              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <FiShield className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm text-slate-600">Government Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm text-slate-600">ISO 27001 Compliant</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              {/* Main Dashboard Preview */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-emerald-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-3 bg-slate-100 rounded w-1/2"></div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                        <MdDashboard className="w-6 h-6 text-white" />
                      </div>
                      <div className="h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                        <FiMap className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-3 rounded-xl shadow-lg transform rotate-12">
                <MdAnalytics className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-xl shadow-lg transform -rotate-12">
                <FiTrendingUp className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive Digital Solution
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From data collection to policy insights, FRA Drishti provides end-to-end
              digitization of forest rights management processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isHovered = hoveredFeature === index;

              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform ${isHovered ? 'scale-105 -translate-y-2' : ''
                    }`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.color === 'emerald' ? 'bg-emerald-100' :
                    feature.color === 'blue' ? 'bg-blue-100' :
                      feature.color === 'purple' ? 'bg-purple-100' :
                        feature.color === 'orange' ? 'bg-orange-100' :
                          feature.color === 'indigo' ? 'bg-indigo-100' :
                            'bg-red-100'
                    }`}>
                    <IconComponent className={`w-7 h-7 ${feature.color === 'emerald' ? 'text-emerald-600' :
                      feature.color === 'blue' ? 'text-blue-600' :
                        feature.color === 'purple' ? 'text-purple-600' :
                          feature.color === 'orange' ? 'text-orange-600' :
                            feature.color === 'indigo' ? 'text-indigo-600' :
                              'text-red-600'
                      }`} />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
                  Transform Your
                  <span className="text-emerald-600 block">Operations</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Modernize forest rights administration with intelligent automation,
                  data-driven insights, and seamless digital workflows.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FiCheckCircle className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigateTo('dss')}
                className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-300 flex items-center gap-3"
              >
                Explore Features
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-6 text-white">
                    <FiUsers className="w-8 h-8 mb-4" />
                    <div className="text-2xl font-bold">2,340</div>
                    <div className="text-emerald-100">Active Users</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 text-white">
                    <FiBarChart2 className="w-8 h-8 mb-4" />
                    <div className="text-2xl font-bold">89%</div>
                    <div className="text-blue-100">Efficiency Gain</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 text-white">
                    <MdAnalytics className="w-8 h-8 mb-4" />
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-purple-100">Monitoring</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-6 text-white">
                    <FiTrendingUp className="w-8 h-8 mb-4" />
                    <div className="text-2xl font-bold">150%</div>
                    <div className="text-orange-100">ROI Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Report an Issue
            </h2>
            <p className="text-lg text-slate-600">
              Use this form to report land and water-related issues in your area so that they can be addressed promptly.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Success Message */}
            {submitted && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg">
                ✅ Thank you for your feedback! We'll review it shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name 
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* Number Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Contact Number 
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  placeholder="+91-85XXXXXXXX"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* district */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  District
                </label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your District Name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message 
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Share your feedback, suggestions, or report any issues..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <FiFileText className="w-5 h-5" />
                  Send 
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Ready to Modernize Forest Rights Management?
            </h2>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Join government agencies across the country in transforming how
              forest rights are administered, monitored, and optimized.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigateTo('dashboard')}
                className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
              >
                Start Exploring
                <FiArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigateTo('ocr')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Try OCR Demo
                <FiEye className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <FaTree className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">FRA Drishti</h3>
              </div>
              <p className="text-slate-400">
                Empowering transparent and efficient forest rights management through advanced technology.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Features</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigateTo('dashboard')} className="hover:text-white transition-colors">Dashboard</button></li>
                <li><button onClick={() => navigateTo('atlas')} className="hover:text-white transition-colors">Atlas</button></li>
                <li><button onClick={() => navigateTo('dss')} className="hover:text-white transition-colors">Decision Support</button></li>
                <li><button onClick={() => navigateTo('ocr')} className="hover:text-white transition-colors">OCR System</button></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigateTo('reports')} className="hover:text-white transition-colors">Reports</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2">
                <p><a href="https://tribal.nic.in/">MINISTRY OF TRIBAL AFFAIRS</a></p>
                <p><a href="https://forestrights.nic.in/">Forest Right Act</a></p>
                <p className="text-emerald-400">support@fradrishti.gov.in</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">© 2025 FRA Drishti. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
