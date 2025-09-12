import { 
  MdAssignment,     // Claims
  MdVerifiedUser,   // Titles  
  MdLandscape,      // Area
  MdSchedule,       // Pending
  MdWarning         // Alerts
} from 'react-icons/md';
import { FiMap } from 'react-icons/fi';

const DashboardPage = () => {

  const kpiData = [
    { title: 'Total Claims Filed', value: '1,24,532', icon: MdAssignment },
    { title: 'Titles Granted', value: '89,104', icon: MdVerifiedUser },
    { title: 'Area Recognized (Ha)', value: '1,52,430', icon: MdLandscape },
    { title: '% of Claims Pending', value: '28.4%', icon: MdSchedule }
  ];

  const alerts = [
    { title: 'High Priority Claims', description: '15 claims pending review for > 90 days', type: 'error' },
    { title: 'Survey Due', description: 'Ground verification pending in 3 districts', type: 'warning' },
    { title: 'New Submissions', description: '42 new applications received today', type: 'info' },
    { title: 'System Update', description: 'Database synchronization completed', type: 'success' }
  ];

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => {
          const IconComponent = kpi.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-secondary-500 text-sm font-medium">{kpi.title}</p>
                  <p className="text-2xl font-bold text-secondary-800 mt-1">{kpi.value}</p>
                </div>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-primary-600" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Container */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-secondary-800 mb-4">Implementation Progress Map</h3>
          <div className="h-96 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg flex items-center justify-center border-2 border-dashed border-primary-200">
            <div className="text-center">
              <FiMap className="w-16 h-16 text-primary-400 mx-auto mb-4" />
              <p className="text-primary-600 font-medium">Interactive Map View</p>
              <p className="text-secondary-500 text-sm mt-1">Geographical distribution of FRA claims</p>
            </div>
          </div>
        </div>

        {/* Alerts Panel */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-secondary-800 mb-4">Recent Alerts</h3>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${
                alert.type === 'error' ? 'bg-red-50 border-red-400' :
                alert.type === 'warning' ? 'bg-yellow-50 border-yellow-400' :
                alert.type === 'success' ? 'bg-primary-50 border-primary-400' :
                'bg-blue-50 border-blue-400'
              }`}>
                <div className="flex items-start gap-3">
                  <MdWarning className={`w-5 h-5 mt-0.5 ${
                    alert.type === 'error' ? 'text-red-500' :
                    alert.type === 'warning' ? 'text-yellow-500' :
                    alert.type === 'success' ? 'text-primary-500' :
                    'text-blue-500'
                  }`} />
                  <div>
                    <h4 className="font-medium text-secondary-800 text-sm">{alert.title}</h4>
                    <p className="text-secondary-600 text-xs mt-1">{alert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
