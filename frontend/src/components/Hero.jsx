import React from 'react';
import { Play, ArrowRight, Zap, Users, BarChart3 } from 'lucide-react';

const Hero = () => {
  const stats = [
    { label: 'Active Tasks', value: '2,847', change: '+12%' },
    { label: 'Team Members', value: '48', change: '+3' },
    { label: 'Projects', value: '16', change: '+2' },
    { label: 'Completion Rate', value: '94%', change: '+5%' }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary pt-24 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, oklch(0.88 0.25 130 / 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, oklch(0.88 0.25 130 / 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-dark-tertiary border border-green-primary/20">
                <Zap className="w-4 h-4 text-green-primary mr-2" />
                <span className="text-sm text-green-primary font-medium">Streamline Your Development</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-text-primary">Code with</span>{' '}
                <span className="text-gradient-green">Purpose</span>,{' '}
                <br />
                <span className="text-text-primary">Track with</span>{' '}
                <span className="text-gradient-green">Precision</span>
              </h1>
              
              <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
                HackTrack transforms your development workflow with intelligent task management, 
                real-time collaboration, and powerful analytics designed specifically for developers.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-dark-primary bg-green-primary rounded-lg hover:bg-green-secondary transition-all duration-200 glow-green hover:glow-green-lg hover-lift">
                <Play className="w-5 h-5 mr-2" />
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-green-primary bg-transparent border-2 border-green-primary rounded-lg hover:bg-green-primary hover:text-dark-primary transition-all duration-200 hover-lift">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center text-text-secondary">
                <div className="flex -space-x-2 mr-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-green-primary rounded-full border-2 border-dark-primary flex items-center justify-center">
                      <Users className="w-4 h-4 text-dark-primary" />
                    </div>
                  ))}
                </div>
                <span className="text-sm">Trusted by 10,000+ developers</span>
              </div>
            </div>
          </div>

          {/* Right Side - Terminal/Code Graphic */}
          <div className="relative">
            <div className="relative z-10 bg-dark-secondary rounded-xl border border-dark-accent shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-dark-tertiary border-b border-dark-accent">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-error-600"></div>
                  <div className="w-3 h-3 rounded-full bg-warning-600"></div>
                  <div className="w-3 h-3 rounded-full bg-success-600"></div>
                </div>
                <div className="text-sm text-text-muted font-mono">hacktrack-terminal</div>
                <div className="w-6"></div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm space-y-3">
                <div className="flex items-center">
                  <span className="text-green-primary">hacktrack@dev:~$</span>
                  <span className="text-text-primary ml-2">npm install -g hacktrack-cli</span>
                  <div className="ml-2 w-2 h-5 bg-green-primary animate-pulse"></div>
                </div>
                
                <div className="text-text-secondary">
                  ✓ Installing HackTrack CLI...
                </div>
                
                <div className="text-green-primary">
                  ✓ Successfully installed hacktrack v2.1.0
                </div>
                
                <div className="flex items-center">
                  <span className="text-green-primary">hacktrack@dev:~$</span>
                  <span className="text-text-primary ml-2">hacktrack init awesome-project</span>
                </div>
                
                <div className="text-text-secondary">
                  🚀 Creating new HackTrack project...
                  <br />
                  📁 Setting up task structure...
                  <br />
                  🔗 Connecting to GitHub...
                  <br />
                  ⚡ Enabling real-time sync...
                </div>
                
                <div className="text-green-primary">
                  ✅ Project 'awesome-project' ready!
                  <br />
                  🎯 Start tracking: hacktrack start
                </div>

                <div className="flex items-center pt-2">
                  <span className="text-green-primary">hacktrack@dev:~$</span>
                  <span className="text-text-primary ml-2">hacktrack dashboard --open</span>
                  <div className="ml-2 w-2 h-5 bg-green-primary animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-primary/5 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-dark-secondary/50 rounded-2xl border border-dark-accent backdrop-blur-sm">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover-lift">
              <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-text-secondary text-sm md:text-base mb-1">
                {stat.label}
              </div>
              <div className="inline-flex items-center text-green-primary text-xs font-medium">
                <ArrowRight className="w-3 h-3 mr-1 rotate-[-45deg]" />
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-primary/3 rounded-full blur-2xl pointer-events-none"></div>
    </section>
  );
};

export default Hero;