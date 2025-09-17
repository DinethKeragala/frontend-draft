import { http } from './api';

/**
 * Contest API service
 * Handles all contest-related API requests
 */
export const contestService = {
  /**
   * Fetch public contests with pagination
   * @param {number} page - Page number (default: 1)
   * @param {number} limit - Number of contests per page (default: 10)
   * @returns {Promise<Object>} Response with contest data and pagination info
   */
  getPublicContests: async (page = 1, limit = 10) => {
    try {
      const response = await http.get('/contests/public', {
        params: { page, limit }
      });
      return response;
    } catch (error) {
      console.error('Error fetching public contests:', error);
      throw error;
    }
  },

  /**
   * Get a specific contest by ID
   * @param {number} contestId - Contest ID
   * @returns {Promise<Object>} Contest details
   */
  getContest: async (contestId) => {
    try {
      const response = await http.get(`/contests/${contestId}`);
      return response;
    } catch (error) {
      console.error('Error fetching contest:', error);
      throw error;
    }
  },

  /**
   * Create a new contest
   * @param {Object} contestData - Contest data
   * @param {string} contestData.title - Contest title
   * @param {File} contestData.profile_img - Profile image file
   * @param {string} contestData.starts_at - Start date (ISO string)
   * @param {string} contestData.ends_at - End date (ISO string)
   * @param {boolean} contestData.is_public - Whether contest is public
   * @returns {Promise<Object>} Created contest data
   */
  createContest: async (contestData) => {
    try {
      const formData = new FormData();
      
      // Add all form fields
      Object.keys(contestData).forEach(key => {
        if (contestData[key] !== null && contestData[key] !== undefined) {
          formData.append(key, contestData[key]);
        }
      });

      const response = await http.post('/contests', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response;
    } catch (error) {
      console.error('Error creating contest:', error);
      throw error;
    }
  }
};

export default contestService;