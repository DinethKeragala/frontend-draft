import React, { useState } from 'react';
import { 
  Clock, 
  GitCommit, 
  CheckCircle2, 
  AlertCircle, 
  UserPlus, 
  MessageSquare,
  Filter,
  ChevronDown,
  MoreHorizontal
} from 'lucide-react';

const ActivityFeed = () => {
  const [filter, setFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const activities = [
    {
      id: 1,
      user: {
        name: 'Alex Chen',
        avatar: 'AC',
        role: 'Frontend Developer'
      },
      action: 'completed task',
      target: '"API Integration for User Authentication"',
      type: 'completion',
      timestamp: '2 minutes ago',
      status: 'success',
      details: 'Completed ahead of schedule with comprehensive testing'
    },
    {
      id: 2,
      user: {
        name: 'Sarah Kim',
        avatar: 'SK',
        role: 'UI/UX Designer'  
      },
      action: 'started working on',
      target: '"Mobile Dashboard Redesign"',
      type: 'start',
      timestamp: '8 minutes ago',
      status: 'info',
      details: 'Beginning wireframe phase for responsive design'
    },
    {
      id: 3,
      user: {
        name: 'John Martinez',
        avatar: 'JM',
        role: 'Backend Developer'
      },
      action: 'pushed commits to',
      target: 'main branch',
      type: 'commit',
      timestamp: '15 minutes ago',
      status: 'success',
      details: '3 commits: Database optimization and API endpoints'
    },
    {
      id: 4,
      user: {
        name: 'Emma Wilson',
        avatar: 'EW',
        role: 'DevOps Engineer'
      },
      action: 'deployed to',
      target: 'staging environment',
      type: 'deployment',
      timestamp: '32 minutes ago',
      status: 'success',
      details: 'All tests passed, ready for review'
    },
    {
      id: 5,
      user: {
        name: 'David Park',
        avatar: 'DP',
        role: 'Full Stack Developer'
      },
      action: 'reported issue in',
      target: '"Payment Processing Module"',
      type: 'issue',
      timestamp: '1 hour ago',
      status: 'warning',
      details: 'Critical bug affecting transaction processing'
    },
    {
      id: 6,
      user: {
        name: 'Lisa Zhang',
        avatar: 'LZ',
        role: 'Product Manager'
      },
      action: 'joined the team',
      target: 'as Product Manager',
      type: 'join',
      timestamp: '2 hours ago',
      status: 'info',
      details: 'Welcome to the development team!'
    },
    {
      id: 7,
      user: {
        name: 'Mike Johnson',
        avatar: 'MJ',
        role: 'QA Engineer'
      },
      action: 'reviewed and approved',
      target: '"User Profile Component"',
      type: 'review',
      timestamp: '3 hours ago',
      status: 'success',
      details: 'Code review completed with minor suggestions'
    },
    {
      id: 8,
      user: {
        name: 'Anna Rodriguez',
        avatar: 'AR',
        role: 'Frontend Developer'
      },
      action: 'commented on',
      target: '"Dark Theme Implementation"',
      type: 'comment',
      timestamp: '4 hours ago',
      status: 'info',
      details: 'Suggested improvements for accessibility compliance'
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Activity' },
    { value: 'completion', label: 'Task Completions' },
    { value: 'commit', label: 'Code Commits' },
    { value: 'issue', label: 'Issues & Bugs' },
    { value: 'join', label: 'Team Changes' },
    { value: 'deployment', label: 'Deployments' }
  ];

  const filteredActivities = filter === 'all' 
    ? activities 
    : activities.filter(activity => activity.type === filter);

  const getActivityIcon = (type, status) => {
    switch (type) {
      case 'completion':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'commit':
        return <GitCommit className="w-4 h-4" />;
      case 'issue':
        return <AlertCircle className="w-4 h-4" />;
      case 'join':
        return <UserPlus className="w-4 h-4" />;
      case 'comment':
        return <MessageSquare className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'success':
        return 'text-success-600 bg-success-600/10';
      case 'warning':
        return 'text-warning-600 bg-warning-600/10';
      case 'info':
        return 'text-info-600 bg-info-600/10';
      default:
        return 'text-text-muted bg-dark-tertiary';
    }
  };

  return (
    <section className="py-16 bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Activity Feed */}
          <div className="lg:col-span-2">
            <div className="bg-dark-secondary rounded-xl border border-dark-accent overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-dark-accent">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      Recent Activity
                    </h3>
                    <p className="text-text-secondary text-sm mt-1">
                      Real-time updates from your team
                    </p>
                  </div>
                  
                  {/* Filter Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setIsFilterOpen(!isFilterOpen)}
                      className="flex items-center space-x-2 px-4 py-2 bg-dark-tertiary border border-dark-accent rounded-lg text-text-secondary hover:text-text-primary transition-colors"
                    >
                      <Filter className="w-4 h-4" />
                      <span className="text-sm">
                        {filterOptions.find(opt => opt.value === filter)?.label}
                      </span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {isFilterOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-dark-secondary border border-dark-accent rounded-lg shadow-xl z-10">
                        {filterOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => {
                              setFilter(option.value);
                              setIsFilterOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-dark-hover transition-colors first:rounded-t-lg last:rounded-b-lg ${
                              filter === option.value 
                                ? 'text-green-primary bg-green-primary/10' 
                                : 'text-text-secondary'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Activity List */}
              <div className="max-h-96 overflow-y-auto custom-scrollbar">
                {filteredActivities.map((activity, index) => (
                  <div
                    key={activity.id}
                    className="relative px-6 py-4 hover:bg-dark-hover transition-colors border-b border-dark-accent last:border-b-0 group"
                  >
                    {/* Timeline Line */}
                    {index < filteredActivities.length - 1 && (
                      <div className="absolute left-12 top-12 w-px h-8 bg-dark-accent" />
                    )}

                    <div className="flex items-start space-x-4">
                      {/* Avatar */}
                      <div className="relative flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-green-primary text-dark-primary font-semibold flex items-center justify-center text-sm">
                          {activity.user.avatar}
                        </div>
                        
                        {/* Status Icon */}
                        <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-dark-secondary flex items-center justify-center ${getStatusColor(activity.status)}`}>
                          {getActivityIcon(activity.type, activity.status)}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="text-text-primary text-sm">
                              <span className="font-medium">{activity.user.name}</span>
                              <span className="text-text-secondary"> {activity.action} </span>
                              <span className="font-medium text-green-primary">{activity.target}</span>
                            </p>
                            
                            <p className="text-text-muted text-xs mt-1">
                              {activity.user.role} • {activity.timestamp}
                            </p>
                            
                            {activity.details && (
                              <p className="text-text-secondary text-sm mt-2 bg-dark-tertiary/30 rounded-lg px-3 py-2">
                                {activity.details}
                              </p>
                            )}
                          </div>

                          {/* More Actions */}
                          <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-text-muted hover:text-text-primary">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="p-4 border-t border-dark-accent">
                <button className="w-full py-2 text-green-primary hover:text-green-secondary font-medium text-sm transition-colors">
                  Load More Activity
                </button>
              </div>
            </div>
          </div>

          {/* Activity Summary Sidebar */}
          <div className="space-y-6">
            {/* Team Online Status */}
            <div className="bg-dark-secondary rounded-xl border border-dark-accent p-6">
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                Team Status
              </h4>
              
              <div className="space-y-3">
                {['Alex Chen', 'Sarah Kim', 'John Martinez', 'Emma Wilson'].map((name, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-green-primary text-dark-primary font-medium flex items-center justify-center text-xs">
                        {name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-success-600 rounded-full border-2 border-dark-secondary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-text-primary text-sm font-medium">{name}</p>
                      <p className="text-text-muted text-xs">Online</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Stats */}
            <div className="bg-dark-secondary rounded-xl border border-dark-accent p-6">
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                Today's Activity
              </h4>
              
              <div className="space-y-4">
                {[
                  { label: 'Tasks Completed', value: '18', color: 'success' },
                  { label: 'Code Commits', value: '12', color: 'info' },
                  { label: 'Issues Resolved', value: '4', color: 'warning' },
                  { label: 'Team Messages', value: '47', color: 'primary' }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-text-secondary text-sm">{stat.label}</span>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${
                      stat.color === 'success' ? 'bg-success-600/10 text-success-600' :
                      stat.color === 'info' ? 'bg-info-600/10 text-info-600' :
                      stat.color === 'warning' ? 'bg-warning-600/10 text-warning-600' :
                      'bg-green-primary/10 text-green-primary'
                    }`}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close filter */}
      {isFilterOpen && (
        <div
          className="fixed inset-0 z-5"
          onClick={() => setIsFilterOpen(false)}
        />
      )}
    </section>
  );
};

export default ActivityFeed;