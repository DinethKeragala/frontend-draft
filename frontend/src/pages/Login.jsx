import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        // Navigate to home page on successful login
        navigate('/');
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-dark-primary flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Welcome Back
          </h1>
          <p className="text-text-secondary">
            Sign in to your account
          </p>
          {/* Success message from registration */}
          {location.state?.message && (
            <div className="mt-4 bg-green-900 border border-green-600 text-green-300 px-4 py-3 rounded-md">
              {location.state.message}
            </div>
          )}
        </div>

        {/* Login Form */}
        <div className="bg-dark-secondary rounded-lg shadow-xl p-6 border border-dark-accent">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-text-secondary mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-dark-tertiary border border-dark-accent rounded-md 
                         text-text-primary placeholder-text-muted
                         focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent
                         transition-colors duration-200"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-text-secondary mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-dark-tertiary border border-dark-accent rounded-md 
                         text-text-primary placeholder-text-muted
                         focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent
                         transition-colors duration-200"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-error-900 border border-error-600 text-error-300 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-primary hover:bg-green-secondary text-dark-primary font-semibold 
                       py-2 px-4 rounded-md transition-colors duration-200
                       disabled:opacity-50 disabled:cursor-not-allowed
                       focus:outline-none focus:ring-2 focus:ring-green-primary focus:ring-offset-2 focus:ring-offset-dark-secondary"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 mb-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-dark-accent"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-dark-secondary text-text-muted">
                  Don't have an account?
                </span>
              </div>
            </div>
          </div>

          {/* Register Button */}
          <Link
            to="/register"
            className="w-full bg-transparent border border-green-primary text-green-primary font-semibold 
                     py-2 px-4 rounded-md transition-colors duration-200
                     hover:bg-green-primary hover:text-dark-primary
                     focus:outline-none focus:ring-2 focus:ring-green-primary focus:ring-offset-2 focus:ring-offset-dark-secondary
                     block text-center"
          >
            Create New Account
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-text-muted text-sm">
            Secure login powered by JWT authentication
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;