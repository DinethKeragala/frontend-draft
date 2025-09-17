import React, { useState } from 'react';
import { 
  BarChart3,
  Github,
  Twitter,
  Linkedin,
  MessageCircle,
  ChevronUp,
  ArrowRight,
  Heart,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setIsNewsletterSubmitted(true);
    setEmail('');
    setTimeout(() => setIsNewsletterSubmitted(false), 3000);
  };

  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'Task Management', href: '/task-management' },
        { name: 'Team Collaboration', href: '/collaboration' },
        { name: 'Integrations', href: '/integrations' },
        { name: 'Analytics', href: '/analytics' },
        { name: 'Pricing', href: '/pricing' },
        { name: "What's New", href: '/changelog' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Help Center', href: '/help' },
        { name: 'Video Tutorials', href: '/tutorials' },
        { name: 'Community Forum', href: '/community' },
        { name: 'Blog', href: '/blog' },
        { name: 'Changelog', href: '/changelog' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press Kit', href: '/press' },
        { name: 'Contact', href: '/contact' },
        { name: 'Partners', href: '/partners' },
        { name: 'Security', href: '/security' },
        { name: 'Status Page', href: '/status' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Support', href: '/support' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR Compliance', href: '/gdpr' },
        { name: 'Report Bug', href: '/bug-report' },
        { name: 'Feature Request', href: '/feature-request' }
      ]
    }
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      href: 'https://github.com/hacktrack',
      color: 'hover:text-gray-300'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      href: 'https://twitter.com/hacktrack',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://linkedin.com/company/hacktrack',
      color: 'hover:text-blue-500'
    },
    { 
      name: 'Discord', 
      icon: MessageCircle, 
      href: 'https://discord.gg/hacktrack',
      color: 'hover:text-purple-400'
    }
  ];

  return (
    <footer className="bg-dark-primary border-t border-dark-accent">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Company Branding Section */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-primary rounded-xl flex items-center justify-center">
                <BarChart3 className="w-7 h-7 text-dark-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  <span className="text-text-primary">Hack</span>
                  <span className="text-green-primary">Track</span>
                </div>
                <p className="text-text-secondary text-sm">
                  Streamline your development workflow
                </p>
              </div>
            </div>
            
            <p className="text-text-muted max-w-md leading-relaxed">
              HackTrack is the developer-first task management platform that transforms 
              how teams build, track, and ship great software. Built by developers, for developers.
            </p>
          </div>

          {/* Footer Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {footerSections.map((section, index) => (
              <div key={index}>
                {/* Mobile Accordion Header */}
                <button
                  onClick={() => toggleSection(section.title)}
                  className="md:hidden w-full flex items-center justify-between py-3 text-left"
                >
                  <h3 className="text-text-primary font-semibold">
                    {section.title}
                  </h3>
                  <ChevronUp 
                    className={`w-4 h-4 text-text-secondary transition-transform ${
                      expandedSections[section.title] ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {/* Desktop Header */}
                <h3 className="hidden md:block text-text-primary font-semibold mb-4">
                  {section.title}
                </h3>

                {/* Links */}
                <div className={`space-y-3 ${
                  expandedSections[section.title] || window.innerWidth >= 768
                    ? 'block' 
                    : 'hidden md:block'
                }`}>
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="block text-text-secondary hover:text-green-primary transition-colors duration-200 text-sm py-1 relative group"
                    >
                      {link.name}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-primary group-hover:w-full transition-all duration-200" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter & Social Section */}
          <div className="border-t border-dark-accent pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Newsletter Signup */}
              <div className="bg-dark-secondary rounded-xl p-6 border border-dark-accent">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="w-5 h-5 text-green-primary" />
                  <h3 className="text-text-primary font-semibold">
                    Stay Updated
                  </h3>
                </div>
                
                <p className="text-text-secondary mb-4 text-sm">
                  Get the latest features, productivity tips, and development insights 
                  delivered to your inbox.
                </p>

                {isNewsletterSubmitted ? (
                  <div className="flex items-center text-green-primary bg-green-primary/10 rounded-lg px-4 py-3">
                    <div className="w-2 h-2 bg-green-primary rounded-full mr-3" />
                    <span className="text-sm font-medium">
                      Thank you for subscribing!
                    </span>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-dark-tertiary border border-dark-accent rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent transition-all"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-green-primary text-dark-primary font-medium rounded-lg hover:bg-green-secondary transition-colors glow-green"
                    >
                      Subscribe
                    </button>
                  </form>
                )}

                <p className="text-text-muted text-xs mt-3">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>

              {/* Social Media & Contact */}
              <div>
                <h3 className="text-text-primary font-semibold mb-4">
                  Connect With Us
                </h3>
                
                {/* Social Links */}
                <div className="flex space-x-4 mb-6">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full bg-dark-secondary border border-dark-accent flex items-center justify-center text-text-secondary transition-all duration-200 hover-lift ${social.color} hover:border-green-primary/30 hover:glow-green`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>

                {/* Contact Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-text-secondary">
                    <MapPin className="w-4 h-4 mr-2 text-green-primary" />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center text-text-secondary">
                    <Phone className="w-4 h-4 mr-2 text-green-primary" />
                    +1 (555) 123-4567
                  </div>
                  <div className="flex items-center text-text-secondary">
                    <Mail className="w-4 h-4 mr-2 text-green-primary" />
                    hello@hacktrack.dev
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-accent bg-black/20">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-text-muted text-sm">
                © 2025 HackTrack. All rights reserved.
              </div>

              {/* Made with love */}
              <div className="flex items-center text-text-secondary text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 mx-1 text-red-500" />
                <span>for developers</span>
                <span className="ml-4 text-text-muted">v2.1.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-green-primary text-dark-primary rounded-full shadow-lg hover:bg-green-secondary transition-all duration-200 hover-lift glow-green flex items-center justify-center z-40"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;