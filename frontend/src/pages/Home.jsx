import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import DashboardCards from '../components/DashboardCards';
import QuickActions from '../components/QuickActions';
import TaskPreview from '../components/TaskPreview';
import TeamCollaboration from '../components/TeamCollaboration';
import IntegrationsShowcase from '../components/IntegrationsShowcase';
import PublicContests from '../components/PublicContests';
import ActivityFeed from '../components/ActivityFeed';
import Footer from '../components/Footer';
import CreateContestModal from '../components/CreateContestModal';

const Home = () => {
  const [isCreateContestModalOpen, setIsCreateContestModalOpen] = useState(false);

  const handleCreateContest = () => {
    setIsCreateContestModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-dark-primary text-text-primary">
      {/* Header Navigation */}
      <Header onCreateContest={handleCreateContest} />

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

        {/* Public Contests */}
        <PublicContests />

        {/* Activity Feed */}
        <ActivityFeed />
      </main>

      {/* Footer */}
      <Footer />

      {/* Create Contest Modal */}
      <CreateContestModal 
        isOpen={isCreateContestModalOpen}
        onClose={() => setIsCreateContestModalOpen(false)}
      />
    </div>
  );
};

export default Home;