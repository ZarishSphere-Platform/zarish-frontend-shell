import { useState } from 'react';

function App() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Zarish Sphere Platform
        </h1>
        <p className="text-gray-600 mb-6">
          Enterprise-grade FHIR HL7 Server for Healthcare Data Management
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-semibold text-blue-900">FHIR R4/R5</h3>
            <p className="text-sm text-blue-700">Compliant Server</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded">
            <h3 className="font-semibold text-indigo-900">BD Core</h3>
            <p className="text-sm text-indigo-700">Standards Integrated</p>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <h3 className="font-semibold text-purple-900">Elasticsearch</h3>
            <p className="text-sm text-purple-700">Full-text Search</p>
          </div>
          <div className="bg-pink-50 p-4 rounded">
            <h3 className="font-semibold text-pink-900">Kubernetes</h3>
            <p className="text-sm text-pink-700">Ready to Deploy</p>
          </div>
        </div>

        <button
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? 'Hide' : 'Show'} Technical Details
        </button>

        {showInfo && (
          <div className="mt-6 text-left bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Technology Stack:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Go (Gin Framework) - Backend Services</li>
              <li>• PostgreSQL - Primary Database</li>
              <li>• Elasticsearch - Search Engine</li>
              <li>• Redis - Caching Layer</li>
              <li>• Keycloak - Authentication (local deployment)</li>
              <li>• React + TypeScript - Frontend</li>
              <li>• Kubernetes - Orchestration</li>
            </ul>
            <div className="mt-4">
              <a
                href="https://github.com/ZarishSphere-Platform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        )}
      </div>

      <p className="mt-8 text-gray-500 text-sm">
        © 2025 Zarish Sphere Platform | Open Source Healthcare Solution
      </p>
    </div>
  );
}

export default App;
