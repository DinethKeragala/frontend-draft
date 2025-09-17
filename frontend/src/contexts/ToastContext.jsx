import React, { createContext, useContext, useState } from 'react';
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react';

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info', duration = 4000) => {
    const id = Date.now() + Math.random();
    const toast = { id, message, type, duration };
    
    setToasts(prev => [...prev, toast]);
    
    // Auto remove toast after duration
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
    
    return id;
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const success = (message, duration) => addToast(message, 'success', duration);
  const error = (message, duration) => addToast(message, 'error', duration);
  const info = (message, duration) => addToast(message, 'info', duration);
  const warning = (message, duration) => addToast(message, 'warning', duration);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, success, error, info, warning }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

const ToastContainer = ({ toasts, removeToast }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-20 right-4 z-[60] space-y-2">
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} onRemove={removeToast} />
      ))}
    </div>
  );
};

const Toast = ({ toast, onRemove }) => {
  const { id, message, type } = toast;
  
  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-dark-secondary border-success-600',
          icon: <CheckCircle className="w-5 h-5 text-success-600" />,
          text: 'text-success-600'
        };
      case 'error':
        return {
          bg: 'bg-dark-secondary border-error-600',
          icon: <AlertCircle className="w-5 h-5 text-error-600" />,
          text: 'text-error-600'
        };
      case 'warning':
        return {
          bg: 'bg-dark-secondary border-warning-600',
          icon: <AlertCircle className="w-5 h-5 text-warning-600" />,
          text: 'text-warning-600'
        };
      default:
        return {
          bg: 'bg-dark-secondary border-dark-accent',
          icon: <Info className="w-5 h-5 text-green-primary" />,
          text: 'text-green-primary'
        };
    }
  };

  const styles = getToastStyles();

  return (
    <div className={`${styles.bg} border-l-4 rounded-lg shadow-lg p-4 min-w-80 max-w-96 animate-slide-in-right`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          {styles.icon}
        </div>
        <div className="flex-1">
          <p className="text-sm text-text-primary font-medium">
            {message}
          </p>
        </div>
        <button
          onClick={() => onRemove(id)}
          className="flex-shrink-0 text-text-muted hover:text-text-primary transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ToastProvider;