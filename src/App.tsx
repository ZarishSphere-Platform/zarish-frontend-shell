
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-xl font-bold text-blue-600">Zarish Platform Shell</span>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a
                    href="http://localhost:8084"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Open HIS Module
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                  Login
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Welcome to Zarish Sphere Platform</h2>
              <p className="text-gray-600 mb-4">
                This is the platform shell. Access individual modules using the navigation above.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-2">Hospital Information System</h3>
                  <p className="text-sm text-gray-500 mb-4">Manage patients, appointments, and clinical data.</p>
                  <a href="http://localhost:8084" className="text-blue-600 hover:text-blue-800 font-medium">Launch HIS &rarr;</a>
                </div>
                {/* Other modules placeholders */}
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow opacity-50">
                  <h3 className="text-lg font-semibold mb-2">Finance (Coming Soon)</h3>
                  <p className="text-sm text-gray-500 mb-4">Billing, insurance, and accounting.</p>
                </div>
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow opacity-50">
                  <h3 className="text-lg font-semibold mb-2">HR (Coming Soon)</h3>
                  <p className="text-sm text-gray-500 mb-4">Staff management and payroll.</p>
                </div>
              </div>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<div />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
