import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  Menu, 
  X, 
  ChevronDown,
  User,
  Settings,
  LogOut,
  BarChart3,
  Users,
  Zap
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navigationItems = [
    { name: 'Dashboard', href: '/', active: true },
    { name: 'Tasks', href: '/tasks', active: false },
    { name: 'Analytics', href: '/analytics', active: false },
    { name: 'Team', href: '/team', active: false },
    { name: 'Integrations', href: '/integrations', active: false },
  ];

  const notifications = [
    {
      id: 1,
      title: 'Task completed',
      message: 'API integration task was completed by John',
      time: '5 min ago',
      unread: true
    },
    {
      id: 2,
      title: 'New team member',
      message: 'Sarah joined your development team',
      time: '1 hour ago',
      unread: true
    },
    {
      id: 3,
      title: 'Weekly report ready',
      message: 'Your productivity report is ready to view',
      time: '3 hours ago',
      unread: false
    }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-primary border-b border-dark-accent backdrop-blur-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-primary rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-dark-primary" />
                </div>
                <span className="text-xl font-bold">
                  <span className="text-text-primary">Hack</span>
                  <span className="text-green-primary">Track</span>
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 relative group ${
                  item.active
                    ? 'text-green-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.name}
                {item.active && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-primary" />
                )}
                {!item.active && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                )}
              </a>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-text-muted group-focus-within:text-green-primary transition-colors" />
              </div>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="block w-full pl-10 pr-12 py-2 border border-transparent rounded-full 
                         bg-dark-tertiary text-text-primary placeholder-text-muted
                         focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent
                         focus:bg-dark-secondary transition-all duration-200"
                placeholder="Search tasks, projects, team..."
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-xs text-text-muted bg-dark-accent px-2 py-1 rounded">
                  ⌘K
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            
            {/* Mobile Search Button */}
            <button className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="p-2 text-text-secondary hover:text-text-primary transition-colors relative"
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-error-600 rounded-full flex items-center justify-center pulse-green">
                    <span className="text-xs text-white font-medium">
                      {unreadCount}
                    </span>
                  </div>
                )}
              </button>

              {/* Notifications Dropdown */}
              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-dark-secondary rounded-lg shadow-xl border border-dark-accent z-50">
                  <div className="p-4 border-b border-dark-accent">
                    <h3 className="text-sm font-semibold text-text-primary">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto custom-scrollbar">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-dark-accent last:border-b-0 hover:bg-dark-hover transition-colors cursor-pointer ${
                          notification.unread ? 'bg-dark-tertiary/30' : ''
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          {notification.unread && (
                            <div className="w-2 h-2 bg-green-primary rounded-full mt-2" />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-text-primary">
                              {notification.title}
                            </p>
                            <p className="text-sm text-text-secondary mt-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-text-muted mt-1">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-dark-accent">
                    <button className="w-full text-sm text-green-primary hover:text-green-secondary font-medium">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 p-2 hover:bg-dark-hover rounded-lg transition-colors group"
              >
                <div className="relative">
                  <div className="w-8 h-8 bg-green-primary rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-dark-primary" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-success-600 rounded-full border-2 border-dark-primary" />
                </div>
                <div className="hidden md:block">
                  <ChevronDown className="w-4 h-4 text-text-secondary group-hover:text-text-primary transition-colors" />
                </div>
              </button>

              {/* User Dropdown */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-dark-secondary rounded-lg shadow-xl border border-dark-accent z-50">
                  <div className="p-4 border-b border-dark-accent">
                    <p className="text-sm font-medium text-text-primary">{user?.email}</p>
                    <p className="text-xs text-text-muted mt-1">Developer</p>
                  </div>
                  <div className="py-2">
                    <a
                      href="/profile"
                      className="flex items-center px-4 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-dark-hover transition-colors"
                    >
                      <User className="w-4 h-4 mr-3" />
                      Profile
                    </a>
                    <a
                      href="/settings"
                      className="flex items-center px-4 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-dark-hover transition-colors"
                    >
                      <Settings className="w-4 h-4 mr-3" />
                      Settings
                    </a>
                  </div>
                  <div className="border-t border-dark-accent py-2">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-4 py-2 text-sm text-error-600 hover:text-error-500 hover:bg-dark-hover transition-colors"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-secondary border-t border-dark-accent">
          <div className="px-4 py-4 space-y-3">
            {/* Mobile Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-text-muted" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-dark-accent rounded-lg 
                         bg-dark-tertiary text-text-primary placeholder-text-muted
                         focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent"
                placeholder="Search..."
              />
            </div>
            
            {/* Mobile Navigation */}
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                  item.active
                    ? 'text-green-primary bg-dark-tertiary'
                    : 'text-text-secondary hover:text-text-primary hover:bg-dark-hover'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Click outside handlers */}
      {(isUserMenuOpen || isNotificationOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsUserMenuOpen(false);
            setIsNotificationOpen(false);
          }}
        />
      )}
    </header>
  );
};

export default Header;