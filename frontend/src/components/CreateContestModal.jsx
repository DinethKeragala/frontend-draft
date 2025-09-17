import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Calendar, Upload, Globe, Lock } from 'lucide-react';
import { contestService } from '../services/contestService';
import { useToast } from '../contexts/ToastContext';

const CreateContestModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    profile_img: null,
    starts_at: '',
    ends_at: '',
    is_public: true
  });
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const { success, error } = useToast();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, profile_img: file }));
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.starts_at || !formData.ends_at) {
      error('Please fill in all required fields');
      return;
    }

    if (new Date(formData.starts_at) >= new Date(formData.ends_at)) {
      error('End date must be after start date');
      return;
    }

    setLoading(true);
    try {
      const contestData = {
        title: formData.title,
        starts_at: new Date(formData.starts_at).toISOString(),
        ends_at: new Date(formData.ends_at).toISOString(),
        is_public: formData.is_public.toString(),
      };

      if (formData.profile_img) {
        contestData.profile_img = formData.profile_img;
      }

      const response = await contestService.createContest(contestData);
      
      if (response.success) {
        success('Contest created successfully!');
        handleClose();
      } else {
        error(response.message || 'Failed to create contest');
      }
    } catch (err) {
      console.error('Error creating contest:', err);
      error(err.response?.data?.message || 'Failed to create contest');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({
      title: '',
      profile_img: null,
      starts_at: '',
      ends_at: '',
      is_public: true
    });
    setImagePreview(null);
    onClose();
  };

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={handleClose}
        />
        
        {/* Modal */}
        <div className="relative bg-dark-secondary rounded-lg shadow-xl w-full max-w-lg border border-dark-accent">
          <div className="flex items-center justify-between p-6 border-b border-dark-accent">
            <h3 className="text-lg font-semibold text-text-primary">Create New Contest</h3>
            <button
              onClick={handleClose}
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Contest Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-dark-tertiary border border-dark-accent rounded-lg 
                         text-text-primary placeholder-text-muted
                         focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent
                         transition-all duration-200"
                placeholder="Enter contest title"
                required
              />
            </div>

            {/* Profile Image */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Profile Image
              </label>
              <div className="space-y-3">
                <input
                  type="file"
                  name="profile_img"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                  id="profile-img-input"
                />
                <label
                  htmlFor="profile-img-input"
                  className="flex items-center justify-center w-full h-32 border-2 border-dashed border-dark-accent 
                           rounded-lg cursor-pointer hover:border-green-primary transition-colors
                           bg-dark-tertiary hover:bg-dark-hover"
                >
                  {imagePreview ? (
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="h-full w-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-text-muted mx-auto mb-2" />
                      <p className="text-sm text-text-muted">Click to upload image</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Date Range */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Start Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
                  <input
                    type="datetime-local"
                    name="starts_at"
                    value={formData.starts_at}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 bg-dark-tertiary border border-dark-accent rounded-lg 
                             text-text-primary placeholder-text-muted
                             focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent
                             transition-all duration-200"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  End Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
                  <input
                    type="datetime-local"
                    name="ends_at"
                    value={formData.ends_at}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 bg-dark-tertiary border border-dark-accent rounded-lg 
                             text-text-primary placeholder-text-muted
                             focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent
                             transition-all duration-200"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Visibility */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-3">
                Contest Visibility
              </label>
              <div className="space-y-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="is_public"
                    value={true}
                    checked={formData.is_public === true}
                    onChange={() => setFormData(prev => ({ ...prev, is_public: true }))}
                    className="w-4 h-4 text-green-primary bg-dark-tertiary border-dark-accent 
                             focus:ring-green-primary focus:ring-2"
                  />
                  <Globe className="w-4 h-4 text-green-primary" />
                  <span className="text-sm text-text-primary">Public</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="is_public"
                    value={false}
                    checked={formData.is_public === false}
                    onChange={() => setFormData(prev => ({ ...prev, is_public: false }))}
                    className="w-4 h-4 text-green-primary bg-dark-tertiary border-dark-accent 
                             focus:ring-green-primary focus:ring-2"
                  />
                  <Lock className="w-4 h-4 text-text-muted" />
                  <span className="text-sm text-text-primary">Private</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary 
                         bg-dark-tertiary hover:bg-dark-hover border border-dark-accent rounded-lg 
                         transition-all duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 text-sm font-medium text-dark-primary bg-green-primary 
                         hover:bg-green-secondary rounded-lg transition-all duration-200
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating...' : 'Create Contest'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default CreateContestModal;