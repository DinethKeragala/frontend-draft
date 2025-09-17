import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-dark-primary text-text-primary">
      {/* Header */}
      <header className="bg-dark-secondary border-b border-dark-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-green-primary">
                HackTrack
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {user && (
                <span className="text-text-secondary">
                  Welcome, {user.email}
                </span>
              )}
              <button
                onClick={handleLogout}
                className="bg-error-600 hover:bg-error-700 text-white font-medium 
                         px-4 py-2 rounded-md transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-error-500 focus:ring-offset-2 focus:ring-offset-dark-secondary"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-dark-secondary rounded-lg shadow-xl p-6 border border-dark-accent">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Welcome to HackTrack Dashboard
            </h2>
            <p className="text-text-secondary text-lg mb-6">
              You have successfully logged in to your account.
            </p>
            
            {user && (
              <div className="bg-dark-tertiary rounded-lg p-4 max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-green-primary mb-2">
                  User Information
                </h3>
                <div className="text-left space-y-2">
                  <p className="text-text-secondary">
                    <span className="font-medium">Email:</span> {user.email}
                  </p>
                  <p className="text-text-secondary">
                    <span className="font-medium">Login Time:</span>{' '}
                    {new Date(user.loginTime).toLocaleString()}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;