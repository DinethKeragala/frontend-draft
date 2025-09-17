import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import DashboardCards from '../components/DashboardCards';
import QuickActions from '../components/QuickActions';
import TaskPreview from '../components/TaskPreview';
import TeamCollaboration from '../components/TeamCollaboration';
import IntegrationsShowcase from '../components/IntegrationsShowcase';
import ActivityFeed from '../components/ActivityFeed';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-dark-primary text-text-primary">
      {/* Header Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Dashboard Overview Cards */}
        <DashboardCards />

        {/* Quick Actions */}
        <QuickActions />

        {/* Task Management Preview */}
        <TaskPreview />

        {/* Team Collaboration */}
        <TeamCollaboration />

        {/* Integrations Showcase */}
        <IntegrationsShowcase />

        {/* Activity Feed */}
        <ActivityFeed />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;