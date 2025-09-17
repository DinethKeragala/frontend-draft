import React from 'react';
import { 
  Plus, 
  Github, 
  Play, 
  FileText, 
  UserPlus, 
  BarChart3,
  Zap,
  GitBranch,
  Timer,
  Settings
} from 'lucide-react';

const QuickActions = () => {
  const actions = [
    {
      id: 1,
      title: 'Create New Task',
      description: 'Add a new task to your project',
      icon: Plus,
      color: 'primary',
      variant: 'filled',
      shortcut: 'Ctrl+N'
    },
    {
      id: 2,
      title: 'Import from GitHub',
      description: 'Sync issues and PRs from repository',
      icon: Github,
      color: 'secondary',
      variant: 'outline',
      shortcut: 'Ctrl+G'
    },
    {
      id: 3,
      title: 'Start Timer',
      description: 'Begin tracking time for current task',
      icon: Timer,
      color: 'success',
      variant: 'filled',
      shortcut: 'Ctrl+T'
    },
    {
      id: 4,
      title: 'Generate Report',
      description: 'Create productivity and progress report',
      icon: FileText,
      color: 'info',
      variant: 'outline',
      shortcut: 'Ctrl+R'
    },
    {
      id: 5,
      title: 'Invite Team Member',
      description: 'Add new member to your workspace',
      icon: UserPlus,
      color: 'primary',
      variant: 'filled',
      shortcut: 'Ctrl+I'
    },
    {
      id: 6,
      title: 'View Analytics',
      description: 'Deep dive into performance metrics',
      icon: BarChart3,
      color: 'warning',
      variant: 'outline',
      shortcut: 'Ctrl+A'
    }
  ];

  const getButtonStyles = (color, variant) => {
    const baseStyles = 'group relative w-full p-6 rounded-xl border-2 transition-all duration-200 hover-lift text-left overflow-hidden';
    
    const colorVariants = {
      primary: {
        filled: 'bg-green-primary text-dark-primary border-green-primary hover:bg-green-secondary glow-green hover:glow-green-lg',
        outline: 'bg-transparent text-green-primary border-green-primary hover:bg-green-primary hover:text-dark-primary'
      },
      secondary: {
        filled: 'bg-info-600 text-white border-info-600 hover:bg-info-700',
        outline: 'bg-transparent text-info-600 border-info-600 hover:bg-info-600 hover:text-white'
      },
      success: {
        filled: 'bg-success-600 text-white border-success-600 hover:bg-success-700',
        outline: 'bg-transparent text-success-600 border-success-600 hover:bg-success-600 hover:text-white'
      },
      warning: {
        filled: 'bg-warning-600 text-white border-warning-600 hover:bg-warning-700',
        outline: 'bg-transparent text-warning-600 border-warning-600 hover:bg-warning-600 hover:text-white'
      },
      info: {
        filled: 'bg-info-600 text-white border-info-600 hover:bg-info-700',
        outline: 'bg-transparent text-info-600 border-info-600 hover:bg-info-600 hover:text-white'
      }
    };

    return `${baseStyles} ${colorVariants[color][variant]}`;
  };

  return (
    <section className="py-16 bg-dark-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-dark-tertiary border border-green-primary/20 mb-6">
            <Zap className="w-4 h-4 text-green-primary mr-2" />
            <span className="text-sm text-green-primary font-medium">Boost Your Productivity</span>
          </div>
          
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Quick Actions
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Jump into your most common workflows with these powerful shortcuts designed to streamline your development process
          </p>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((action) => {
            const IconComponent = action.icon;
            
            return (
              <button
                key={action.id}
                className={getButtonStyles(action.color, action.variant)}
              >
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="relative z-10">
                  {/* Icon and Shortcut */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-black/10 group-hover:bg-black/20 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-xs opacity-60 font-mono bg-black/10 px-2 py-1 rounded">
                      {action.shortcut}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:translate-x-1 transition-transform duration-200">
                      {action.title}
                    </h3>
                    <p className="text-sm opacity-80 leading-relaxed">
                      {action.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                      <Play className="w-4 h-4 ml-0.5" />
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Additional Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-primary/10 rounded-full mb-4">
              <GitBranch className="w-8 h-8 text-green-primary" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Smart Automation
            </h3>
            <p className="text-text-secondary">
              Automate repetitive tasks and focus on what matters most - writing great code
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-primary/10 rounded-full mb-4">
              <Zap className="w-8 h-8 text-green-primary" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Lightning Fast
            </h3>
            <p className="text-text-secondary">
              Built for speed with optimized workflows that adapt to your development style
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-primary/10 rounded-full mb-4">
              <Settings className="w-8 h-8 text-green-primary" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Fully Customizable
            </h3>
            <p className="text-text-secondary">
              Tailor every aspect of your workspace to match your team's unique workflow
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-dark-secondary rounded-2xl border border-dark-accent p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to supercharge your development workflow?
            </h3>
            <p className="text-text-secondary mb-6">
              Join thousands of developers who've transformed their productivity with HackTrack
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-green-primary text-dark-primary font-semibold rounded-lg hover:bg-green-secondary transition-colors glow-green">
                <Plus className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="inline-flex items-center px-6 py-3 border-2 border-green-primary text-green-primary font-semibold rounded-lg hover:bg-green-primary hover:text-dark-primary transition-colors">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;