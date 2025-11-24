import { useState, useEffect } from 'react';
import keycloak from './keycloak';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
      setAuthenticated(authenticated);
    });
  }, []);

  if (!authenticated) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Zarish Sphere Platform</h1>
        <p className="mb-4">Welcome, {keycloak.tokenParsed?.preferred_username}</p>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => keycloak.logout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default App;
