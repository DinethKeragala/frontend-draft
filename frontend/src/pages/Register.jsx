import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

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
    
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const result = await register(formData);
      
      if (result.success) {
        // Navigate to login page on successful registration
        navigate('/login', { 
          state: { message: 'Registration successful! Please log in with your credentials.' } 
        });
      } else {
        setError(result.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
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
            Create Account
          </h1>
          <p className="text-text-secondary">
            Join us and start your journey
          </p>
        </div>

        {/* Register Form */}
        <div className="bg-dark-secondary rounded-lg shadow-xl p-6 border border-dark-accent">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name Field */}
            <div>
              <label 
                htmlFor="first_name" 
                className="block text-sm font-medium text-text-secondary mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-dark-tertiary border border-dark-accent rounded-md 
                         text-text-primary placeholder-text-muted
                         focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent
                         transition-colors duration-200"
                placeholder="Enter your first name"
                required
              />
            </div>

            {/* Last Name Field */}
            <div>
              <label 
                htmlFor="last_name" 
                className="block text-sm font-medium text-text-secondary mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-dark-tertiary border border-dark-accent rounded-md 
                         text-text-primary placeholder-text-muted
                         focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent
                         transition-colors duration-200"
                placeholder="Enter your last name"
                required
              />
            </div>

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
                placeholder="Enter your password (min 6 characters)"
                required
                minLength="6"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-error-900 border border-error-600 text-error-300 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            {/* Register Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-primary hover:bg-green-secondary text-dark-primary font-semibold 
                       py-2 px-4 rounded-md transition-colors duration-200
                       disabled:opacity-50 disabled:cursor-not-allowed
                       focus:outline-none focus:ring-2 focus:ring-green-primary focus:ring-offset-2 focus:ring-offset-dark-secondary"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
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
                  Already have an account?
                </span>
              </div>
            </div>
          </div>

          {/* Login Button */}
          <Link
            to="/login"
            className="w-full bg-transparent border border-green-primary text-green-primary font-semibold 
                     py-2 px-4 rounded-md transition-colors duration-200
                     hover:bg-green-primary hover:text-dark-primary
                     focus:outline-none focus:ring-2 focus:ring-green-primary focus:ring-offset-2 focus:ring-offset-dark-secondary
                     block text-center"
          >
            Sign In Instead
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-text-muted text-sm">
            Secure registration with encrypted data storage
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;