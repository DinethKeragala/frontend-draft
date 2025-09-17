import React from 'react';
import { 
  MessageCircle, 
  Video, 
  Calendar, 
  Clock, 
  Users,
  ArrowRight,
  Send,
  Smile,
  Paperclip,
  Phone
} from 'lucide-react';

const TeamCollaboration = () => {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Frontend Developer',
      avatar: 'AC',
      status: 'online',
      currentTask: 'Working on user authentication',
      lastActive: 'Active now'
    },
    {
      name: 'Sarah Kim',
      role: 'UI/UX Designer',
      avatar: 'SK',
      status: 'online',
      currentTask: 'Designing mobile dashboard',
      lastActive: 'Active now'
    },
    {
      name: 'John Martinez',
      role: 'Backend Developer',
      avatar: 'JM',
      status: 'away',
      currentTask: 'Database optimization',
      lastActive: '15 min ago'
    },
    {
      name: 'Emma Wilson',
      role: 'DevOps Engineer',
      avatar: 'EW',
      status: 'online',
      currentTask: 'Setting up CI/CD pipeline',
      lastActive: 'Active now'
    }
  ];

  const recentMessages = [
    {
      id: 1,
      sender: 'Alex Chen',
      avatar: 'AC',
      message: 'Just pushed the auth component updates to the dev branch 🚀',
      timestamp: '2 min ago',
      type: 'text'
    },
    {
      id: 2,
      sender: 'Sarah Kim',
      avatar: 'SK',
      message: 'The new dashboard mockups are ready for review',
      timestamp: '5 min ago',
      type: 'text'
    },
    {
      id: 3,
      sender: 'John Martinez',
      avatar: 'JM',
      message: 'Database queries are now 40% faster after optimization',
      timestamp: '12 min ago',
      type: 'text'
    },
    {
      id: 4,
      sender: 'Emma Wilson',
      avatar: 'EW',
      message: 'Deployment pipeline is ready for testing',
      timestamp: '18 min ago',
      type: 'text'
    }
  ];

  const upcomingMeetings = [
    {
      id: 1,
      title: 'Daily Standup',
      time: '9:00 AM',
      duration: '15 min',
      attendees: 6,
      type: 'recurring'
    },
    {
      id: 2,
      title: 'Sprint Planning',
      time: '2:00 PM',
      duration: '1 hour',
      attendees: 8,
      type: 'important'
    },
    {
      id: 3,
      title: 'Code Review Session',
      time: '4:30 PM',
      duration: '30 min',
      attendees: 4,
      type: 'regular'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online':
        return 'bg-success-600';
      case 'away':
        return 'bg-warning-600';
      case 'busy':
        return 'bg-error-600';
      default:
        return 'bg-text-muted';
    }
  };

  const getMeetingTypeColor = (type) => {
    switch (type) {
      case 'important':
        return 'border-error-600 bg-error-600/10';
      case 'recurring':
        return 'border-green-primary bg-green-primary/10';
      default:
        return 'border-info-600 bg-info-600/10';
    }
  };

  return (
    <section className="py-16 bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Team Collaboration
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Stay connected with your team through integrated chat, video calls, and meeting management. 
            Collaboration made simple and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Team Members */}
          <div className="bg-dark-secondary rounded-xl border border-dark-accent p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text-primary">
                Team Members
              </h3>
              <div className="flex items-center text-green-primary text-sm">
                <div className="w-2 h-2 bg-green-primary rounded-full mr-2 pulse-green" />
                4 online
              </div>
            </div>

            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-dark-hover transition-colors cursor-pointer group"
                >
                  <div className="relative">
                    <div className="w-10 h-10 bg-green-primary rounded-full flex items-center justify-center text-dark-primary font-semibold text-sm">
                      {member.avatar}
                    </div>
                    <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${getStatusColor(member.status)} rounded-full border-2 border-dark-secondary`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-text-primary font-medium text-sm">
                        {member.name}
                      </p>
                      <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1 text-text-muted hover:text-green-primary transition-colors">
                          <MessageCircle className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-text-muted hover:text-green-primary transition-colors">
                          <Video className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-text-muted text-xs">{member.role}</p>
                    <p className="text-text-secondary text-xs mt-1 truncate">
                      {member.currentTask}
                    </p>
                    <p className="text-text-muted text-xs">{member.lastActive}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-2 text-green-primary hover:text-green-secondary font-medium text-sm transition-colors border-t border-dark-accent pt-4">
              View All Team Members
            </button>
          </div>

          {/* Team Chat Preview */}
          <div className="bg-dark-secondary rounded-xl border border-dark-accent overflow-hidden">
            <div className="p-4 border-b border-dark-accent">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-text-primary">
                  Team Chat
                </h3>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-text-muted hover:text-text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-text-muted hover:text-text-primary transition-colors">
                    <Video className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="h-64 overflow-y-auto custom-scrollbar p-4 space-y-4">
              {recentMessages.map((message) => (
                <div key={message.id} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-primary rounded-full flex items-center justify-center text-dark-primary font-medium text-xs flex-shrink-0">
                    {message.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="text-text-primary font-medium text-sm">
                        {message.sender}
                      </p>
                      <p className="text-text-muted text-xs">
                        {message.timestamp}
                      </p>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {message.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-dark-accent">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 bg-dark-tertiary border border-dark-accent rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent text-sm"
                />
                <button className="flex items-center space-x-1 text-text-muted hover:text-text-primary transition-colors">
                  <Paperclip className="w-4 h-4" />
                </button>
                <button className="flex items-center space-x-1 text-text-muted hover:text-text-primary transition-colors">
                  <Smile className="w-4 h-4" />
                </button>
                <button className="p-2 bg-green-primary text-dark-primary rounded-lg hover:bg-green-secondary transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Meeting Schedule */}
          <div className="bg-dark-secondary rounded-xl border border-dark-accent p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text-primary">
                Today's Meetings
              </h3>
              <Calendar className="w-5 h-5 text-green-primary" />
            </div>

            <div className="space-y-4">
              {upcomingMeetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className={`p-4 rounded-lg border-l-4 ${getMeetingTypeColor(meeting.type)} hover-lift transition-all duration-200 cursor-pointer`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-text-primary font-medium text-sm">
                      {meeting.title}
                    </h4>
                    <div className="flex items-center text-text-muted text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {meeting.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-text-secondary text-sm">
                      {meeting.time}
                    </p>
                    <div className="flex items-center text-text-muted text-xs">
                      <Users className="w-3 h-3 mr-1" />
                      {meeting.attendees} attendees
                    </div>
                  </div>
                  
                  <button className="w-full mt-3 py-2 bg-green-primary/10 text-green-primary rounded-lg hover:bg-green-primary hover:text-dark-primary transition-colors text-sm font-medium">
                    Join Meeting
                  </button>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-2 text-green-primary hover:text-green-secondary font-medium text-sm transition-colors border-t border-dark-accent pt-4">
              View Full Calendar
            </button>
          </div>
        </div>

        {/* Collaboration Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Messages Today', value: '127', icon: MessageCircle },
            { label: 'Video Calls', value: '8', icon: Video },
            { label: 'Meetings Scheduled', value: '5', icon: Calendar },
            { label: 'Active Collaborators', value: '12', icon: Users }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-dark-secondary/30 rounded-xl hover-lift transition-all duration-200"
              >
                <IconComponent className="w-8 h-8 text-green-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-dark-secondary rounded-2xl border border-dark-accent p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Enhanced Team Collaboration
            </h3>
            <p className="text-text-secondary mb-6">
              Integrate with Slack, Discord, Microsoft Teams, and more to centralize 
              your team communication alongside your development workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-green-primary text-dark-primary font-semibold rounded-lg hover:bg-green-secondary transition-colors glow-green">
                <ArrowRight className="w-5 h-5 mr-2" />
                Explore Integrations
              </button>
              <button className="inline-flex items-center px-6 py-3 border-2 border-green-primary text-green-primary font-semibold rounded-lg hover:bg-green-primary hover:text-dark-primary transition-colors">
                <Video className="w-5 h-5 mr-2" />
                Start Video Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCollaboration;