import React from 'react';
import { 
  Github, 
  Slack, 
  CheckCircle2, 
  ArrowRight, 
  Settings,
  Plus,
  Zap,
  Link,
  GitBranch,
  MessageSquare,
  Calendar,
  Shield
} from 'lucide-react';

const IntegrationsShowcase = () => {
  const integrations = [
    {
      name: 'GitHub',
      description: 'Sync issues, PRs, and commits automatically',
      icon: Github,
      status: 'connected',
      color: 'text-white',
      bgColor: 'bg-gray-800',
      features: ['Issue tracking', 'PR reviews', 'Commit sync']
    },
    {
      name: 'Slack',
      description: 'Get notifications and updates in your channels',
      icon: Slack,
      status: 'connected',
      color: 'text-white',
      bgColor: 'bg-purple-600',
      features: ['Team notifications', 'Status updates', 'Bot commands']
    },
    {
      name: 'Jira',
      description: 'Connect your existing project management',
      icon: Settings,
      status: 'available',
      color: 'text-white',
      bgColor: 'bg-blue-600',
      features: ['Project sync', 'Sprint planning', 'Issue management']
    },
    {
      name: 'Discord',
      description: 'Collaborate with your development community',
      icon: MessageSquare,
      status: 'available',
      color: 'text-white',
      bgColor: 'bg-indigo-600',
      features: ['Community chat', 'Voice channels', 'Screen sharing']
    },
    {
      name: 'Google Calendar',
      description: 'Schedule meetings and sync deadlines',
      icon: Calendar,
      status: 'connected',
      color: 'text-white',
      bgColor: 'bg-green-600',
      features: ['Meeting sync', 'Deadline alerts', 'Time blocking']
    },
    {
      name: 'Figma',
      description: 'Bridge design and development workflows',
      icon: Shield,
      status: 'available',
      color: 'text-white',
      bgColor: 'bg-pink-600',
      features: ['Design handoff', 'Version control', 'Asset sync']
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Reduce manual work with intelligent automation that connects your favorite tools'
    },
    {
      icon: Link,
      title: 'Unified Dashboard',
      description: 'See everything in one place - from code commits to team communications'
    },
    {
      icon: GitBranch,
      title: 'Seamless Sync',
      description: 'Real-time synchronization keeps all your tools and teams in perfect harmony'
    }
  ];

  return (
    <section className="py-16 bg-dark-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-dark-tertiary border border-green-primary/20 mb-6">
            <Link className="w-4 h-4 text-green-primary mr-2" />
            <span className="text-sm text-green-primary font-medium">Powerful Integrations</span>
          </div>
          
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Connected Tools
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            HackTrack seamlessly integrates with your existing development workflow. 
            Connect your favorite tools and never switch context again.
          </p>
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {integrations.map((integration, index) => {
            const IconComponent = integration.icon;
            const isConnected = integration.status === 'connected';
            
            return (
              <div
                key={index}
                className="bg-dark-secondary rounded-xl border border-dark-accent p-6 hover-lift hover:border-green-primary/30 transition-all duration-200 group"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${integration.bgColor} rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${integration.color}`} />
                    </div>
                    <div>
                      <h3 className="text-text-primary font-semibold">
                        {integration.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        {isConnected ? (
                          <div className="flex items-center text-green-primary text-xs">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Connected
                          </div>
                        ) : (
                          <div className="text-text-muted text-xs">
                            Available
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <button className={`p-2 rounded-lg transition-all duration-200 ${
                    isConnected 
                      ? 'text-text-muted hover:text-text-primary hover:bg-dark-hover'
                      : 'text-green-primary hover:text-green-secondary hover:bg-green-primary/10'
                  }`}>
                    {isConnected ? <Settings className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </button>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {integration.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {integration.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-text-muted">
                      <div className="w-1 h-1 bg-green-primary rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-colors ${
                  isConnected
                    ? 'bg-dark-tertiary text-text-secondary hover:text-text-primary hover:bg-dark-hover'
                    : 'bg-green-primary text-dark-primary hover:bg-green-secondary'
                }`}>
                  {isConnected ? 'Manage Integration' : 'Connect Now'}
                </button>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl shadow-lg shadow-green-primary/5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-primary/10 rounded-xl mb-4">
                  <IconComponent className="w-8 h-8 text-green-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Integration Stats */}
        <div className="bg-dark-secondary rounded-2xl border border-dark-accent p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-text-primary mb-2">50+</div>
              <div className="text-text-muted text-sm">Available Integrations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-text-primary mb-2">99.9%</div>
              <div className="text-text-muted text-sm">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-text-primary mb-2">&lt;1s</div>
              <div className="text-text-muted text-sm">Sync Latency</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-text-primary mb-2">24/7</div>
              <div className="text-text-muted text-sm">Real-time Updates</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-dark-secondary to-dark-tertiary rounded-2xl border border-green-primary/20 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Build Your Perfect Workflow
            </h3>
            <p className="text-text-secondary mb-6">
              Connect all your development tools and create a unified workspace that scales with your team. 
              Custom integrations available for enterprise customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-green-primary text-dark-primary font-semibold rounded-lg hover:bg-green-secondary transition-colors glow-green">
                <Plus className="w-5 h-5 mr-2" />
                Add Integration
              </button>
              <button className="inline-flex items-center px-6 py-3 border-2 border-green-primary text-green-primary font-semibold rounded-lg hover:bg-green-primary hover:text-dark-primary transition-colors">
                <ArrowRight className="w-5 h-5 mr-2" />
                View All Integrations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsShowcase;