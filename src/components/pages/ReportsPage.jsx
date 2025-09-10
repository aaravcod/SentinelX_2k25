import React from 'react';

const ReportsPage = () => {
  const generatedReports = [
    { name: 'FRA Implementation Status', area: 'Mayurbhanj District', date: '2025-09-05', format: 'PDF' },
    { name: 'Beneficiary Analysis', area: 'Odisha State', date: '2025-09-03', format: 'Excel' },
    { name: 'Monthly Progress Report', area: 'All Districts', date: '2025-09-01', format: 'PDF' },
    { name: 'Scheme Convergence Report', area: 'Keonjhar District', date: '2025-08-28', format: 'Word' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Report Generation Form */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-6">Generate New Report</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Report Type</label>
            <select className="w-full border border-slate-200 rounded-lg px-3 py-2">
              <option>Implementation Status</option>
              <option>Beneficiary Analysis</option>
              <option>Progress Summary</option>
              <option>Scheme Convergence</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Area</label>
            <select className="w-full border border-slate-200 rounded-lg px-3 py-2">
              <option>All Districts</option>
              <option>Mayurbhanj</option>
              <option>Keonjhar</option>
              <option>Sundargarh</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Format</label>
            <select className="w-full border border-slate-200 rounded-lg px-3 py-2">
              <option>PDF</option>
              <option>Excel</option>
              <option>Word</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
              Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Generated Reports Table */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-6">Generated Reports</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-medium text-slate-700">Report Name</th>
                <th className="text-left py-3 px-4 font-medium text-slate-700">Area</th>
                <th className="text-left py-3 px-4 font-medium text-slate-700">Date</th>
                <th className="text-left py-3 px-4 font-medium text-slate-700">Format</th>
                <th className="text-left py-3 px-4 font-medium text-slate-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {generatedReports.map((report, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 px-4 text-slate-800">{report.name}</td>
                  <td className="py-3 px-4 text-slate-600">{report.area}</td>
                  <td className="py-3 px-4 text-slate-600">{report.date}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                      {report.format}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
