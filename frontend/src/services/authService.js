import { http } from './api.js';

/**
 * Authentication service for user login/logout operations
 */
class AuthService {
  
  /**
   * Login user with email and password
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise<Object>} Response containing token and user data
   */
  async login(email, password) {
    try {
      const response = await http.post('/users/login', {
        email,
        password
      });
      
      // Store token in localStorage if login successful
      if (response.success && response.data?.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify({
          email,
          loginTime: new Date().toISOString()
        }));
      }
      
      return response;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  /**
   * Register new user
   * @param {Object} userData - User registration data
   * @param {string} userData.first_name - User's first name
   * @param {string} userData.last_name - User's last name
   * @param {string} userData.email - User's email
   * @param {string} userData.password - User's password
   * @returns {Promise<Object>} Response containing user data
   */
  async register(userData) {
    try {
      const response = await http.post('/users/register', {
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        password: userData.password
      });
      
      return response;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  }

  /**
   * Logout user by clearing stored token and user data
   */
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  /**
   * Check if user is currently authenticated
   * @returns {boolean} True if user has valid token
   */
  isAuthenticated() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  /**
   * Get current user's token
   * @returns {string|null} JWT token or null if not authenticated
   */
  getToken() {
    return localStorage.getItem('token');
  }

  /**
   * Get current user data
   * @returns {Object|null} User data object or null if not authenticated
   */
  getUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }
}

// Export singleton instance
export const authService = new AuthService();
export default authService;