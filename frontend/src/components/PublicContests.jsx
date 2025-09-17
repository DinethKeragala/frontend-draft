import React, { useState, useEffect } from 'react';
import { contestService } from '../services/contestService';

const PublicContests = () => {
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalContests, setTotalContests] = useState(0);
  const [limit] = useState(6); // Show 6 contests per page

  useEffect(() => {
    fetchContests();
  }, [currentPage]);

  const fetchContests = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await contestService.getPublicContests(currentPage, limit);
      
      if (response.success && response.data) {
        setContests(response.data.rows || []);
        setTotalContests(response.data.total || 0);
      } else {
        setError('Failed to load contests');
      }
    } catch (err) {
      setError(err.message || 'Failed to load contests');
      console.error('Error fetching contests:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const isActive = (contest) => {
    const now = new Date();
    const startDate = new Date(contest.starts_at);
    const endDate = new Date(contest.ends_at);
    return now >= startDate && now <= endDate;
  };

  const totalPages = Math.ceil(totalContests / limit);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-dark-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-primary"></div>
            <p className="mt-4 text-text-secondary">Loading contests...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-dark-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-error-600/10 border border-error-600/20 rounded-lg p-6">
              <p className="text-error-600 font-medium">Error loading contests</p>
              <p className="text-text-secondary mt-2">{error}</p>
              <button
                onClick={fetchContests}
                className="mt-4 px-4 py-2 bg-green-primary hover:bg-green-secondary text-dark-primary font-medium rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-primary/10 border border-green-primary/20 rounded-full text-green-primary text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            Public Contests
          </div>
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Join Active <span className="text-green-primary">Competitions</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover and participate in coding contests from the community. Test your skills and compete with developers worldwide.
          </p>
        </div>

        {/* Contests Grid */}
        {contests.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-dark-secondary rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-text-primary mb-2">No contests available</h3>
            <p className="text-text-secondary">Check back later for new coding competitions!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {contests.map((contest) => (
                <div
                  key={contest.contest_id}
                  className="bg-dark-secondary border border-dark-accent rounded-xl p-6 hover:border-green-primary/30 transition-all duration-300 group"
                >
                  {/* Contest Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-green-primary transition-colors">
                        {contest.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <span>{contest.first_name} {contest.last_name}</span>
                      </div>
                    </div>
                    {isActive(contest) && (
                      <span className="inline-flex items-center px-2 py-1 bg-green-primary/10 border border-green-primary/20 rounded-full text-green-primary text-xs font-medium">
                        <div className="w-2 h-2 bg-green-primary rounded-full mr-1 animate-pulse"></div>
                        Live
                      </span>
                    )}
                  </div>

                  {/* Contest Dates */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                      <svg className="w-4 h-4 text-green-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium text-text-primary">Starts:</span>
                      <span>{formatDate(contest.starts_at)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                      <svg className="w-4 h-4 text-error-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium text-text-primary">Ends:</span>
                      <span>{formatDate(contest.ends_at)}</span>
                    </div>
                  </div>

                  {/* Contest Actions */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-muted">
                      Created {formatDate(contest.created_at)}
                    </span>
                    <button className="px-4 py-2 bg-green-primary hover:bg-green-secondary text-dark-primary font-medium rounded-lg transition-colors duration-200 transform hover:scale-105">
                      View Contest
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 text-sm font-medium text-text-secondary bg-dark-secondary border border-dark-accent rounded-lg hover:border-green-primary/30 hover:text-green-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-dark-accent disabled:hover:text-text-secondary transition-colors"
                >
                  Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      currentPage === page
                        ? 'bg-green-primary text-dark-primary'
                        : 'text-text-secondary bg-dark-secondary border border-dark-accent hover:border-green-primary/30 hover:text-green-primary'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 text-sm font-medium text-text-secondary bg-dark-secondary border border-dark-accent rounded-lg hover:border-green-primary/30 hover:text-green-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-dark-accent disabled:hover:text-text-secondary transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default PublicContests;