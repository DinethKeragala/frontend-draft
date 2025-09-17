import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Users, 
  TrendingUp, 
  Activity,
  Target,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const DashboardCards = () => {
  const cards = [
    {
      id: 1,
      title: 'Active Tasks',
      icon: Clock,
      value: '24',
      subtitle: '8 in progress',
      progress: 65,
      trend: { value: '+12%', direction: 'up' },
      color: 'green',
      details: ['Frontend tasks: 8', 'Backend tasks: 12', 'DevOps tasks: 4']
    },
    {
      id: 2,
      title: 'Completed Today',
      icon: CheckCircle2,
      value: '18',
      subtitle: 'Tasks finished',
      progress: 90,
      trend: { value: '+23%', direction: 'up' },
      color: 'green',
      chart: {
        data: [12, 8, 15, 22, 18, 25, 18],
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    },
    {
      id: 3,
      title: 'Team Activity',
      icon: Users,
      value: '8',
      subtitle: 'Members online',
      progress: 0,
      trend: { value: '+3', direction: 'up' },
      color: 'blue',
      activities: [
        { user: 'Alex', action: 'completed API integration', time: '2m ago', avatar: 'A' },
        { user: 'Sarah', action: 'started UI review', time: '5m ago', avatar: 'S' },
        { user: 'John', action: 'pushed to main branch', time: '8m ago', avatar: 'J' }
      ]
    },
    {
      id: 4,
      title: 'Performance',
      icon: TrendingUp,
      value: '94%',
      subtitle: 'Success rate',
      progress: 94,
      trend: { value: '+5.2%', direction: 'up' },
      color: 'green',
      metrics: [
        { label: 'Avg. completion time', value: '2.4h' },
        { label: 'Sprint velocity', value: '42 pts' },
        { label: 'Bug rate', value: '0.8%' }
      ]
    }
  ];

  const MiniChart = ({ data }) => {
    const max = Math.max(...data);
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - (value / max) * 100;
      return `${x},${y}`;
    }).join(' ');

    return (
      <div className="h-12 w-full">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            points={points}
            className="text-green-primary opacity-80"
          />
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon
            fill="url(#chartGradient)"
            points={`0,100 ${points} 100,100`}
            className="text-green-primary"
          />
        </svg>
      </div>
    );
  };

  return (
    <section className="py-16 bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Dashboard Overview
          </h2>
          <p className="text-text-secondary text-lg">
            Track your development progress and team performance in real-time
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map((card) => {
            const IconComponent = card.icon;
            const isPositiveTrend = card.trend.direction === 'up';
            
            return (
              <div
                key={card.id}
                className="group bg-dark-secondary border border-dark-accent rounded-xl p-6 hover-lift hover:border-green-primary/30 transition-all duration-200 relative overflow-hidden"
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        card.color === 'green' ? 'bg-green-primary/10 text-green-primary' :
                        card.color === 'blue' ? 'bg-info-600/10 text-info-600' :
                        'bg-warning-600/10 text-warning-600'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-text-secondary text-sm font-medium">
                        {card.title}
                      </h3>
                    </div>
                    
                    {/* Trend Indicator */}
                    <div className={`flex items-center text-xs font-medium ${
                      isPositiveTrend ? 'text-green-primary' : 'text-error-600'
                    }`}>
                      {isPositiveTrend ? (
                        <ArrowUp className="w-3 h-3 mr-1" />
                      ) : (
                        <ArrowDown className="w-3 h-3 mr-1" />
                      )}
                      {card.trend.value}
                    </div>
                  </div>

                  {/* Main Value */}
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-text-primary mb-1">
                      {card.value}
                    </div>
                    <div className="text-text-muted text-sm">
                      {card.subtitle}
                    </div>
                  </div>

                  {/* Progress Bar (for cards that have progress) */}
                  {card.progress > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-text-muted mb-1">
                        <span>Progress</span>
                        <span>{card.progress}%</span>
                      </div>
                      <div className="w-full bg-dark-tertiary rounded-full h-2">
                        <div
                          className="bg-green-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${card.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Mini Chart (for Completed Today card) */}
                  {card.chart && (
                    <div className="mb-4">
                      <MiniChart data={card.chart.data} />
                    </div>
                  )}

                  {/* Team Activities (for Team Activity card) */}
                  {card.activities && (
                    <div className="space-y-2">
                      {card.activities.map((activity, index) => (
                        <div key={index} className="flex items-center space-x-2 text-xs">
                          <div className="w-6 h-6 rounded-full bg-green-primary text-dark-primary flex items-center justify-center font-medium">
                            {activity.avatar}
                          </div>
                          <div className="flex-1 truncate">
                            <span className="text-text-primary font-medium">{activity.user}</span>
                            <span className="text-text-muted ml-1">{activity.action}</span>
                          </div>
                          <span className="text-text-muted">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Performance Metrics (for Performance card) */}
                  {card.metrics && (
                    <div className="space-y-2">
                      {card.metrics.map((metric, index) => (
                        <div key={index} className="flex justify-between text-xs">
                          <span className="text-text-muted">{metric.label}</span>
                          <span className="text-text-primary font-medium">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Details (for Active Tasks card) */}
                  {card.details && (
                    <div className="space-y-1">
                      {card.details.map((detail, index) => (
                        <div key={index} className="text-xs text-text-muted">
                          • {detail}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl shadow-lg shadow-green-primary/10" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Metrics Row */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Sprint Progress', value: '67%', icon: Target },
            { label: 'Next Deadline', value: '3 days', icon: Calendar },
            { label: 'Code Reviews', value: '12', icon: Activity },
            { label: 'Deployments', value: '8', icon: TrendingUp }
          ].map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={index}
                className="bg-dark-tertiary/50 border border-dark-accent rounded-lg p-4 hover-lift hover:bg-dark-tertiary transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <IconComponent className="w-4 h-4 text-green-primary" />
                  <div>
                    <div className="text-lg font-semibold text-text-primary">
                      {metric.value}
                    </div>
                    <div className="text-xs text-text-muted">
                      {metric.label}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DashboardCards;