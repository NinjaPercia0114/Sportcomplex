import React, { useState } from 'react';
import { Search, Users } from 'lucide-react';

const Clubs = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [searchTerm, setSearchTerm] = useState('');

  const clubs = [
    // Add sample clubs here if needed
  ];

  const myClubs = [
    // Add user's clubs here if needed
  ];

  return (
    <div className="container" style={{ padding: '32px 20px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 className="page-title">Sports Clubs</h1>
        <p className="page-subtitle">
          {activeTab === 'browse' ? 'Discover and join sports clubs' : 'Manage clubs and memberships'}
        </p>
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'browse' ? 'active' : ''}`}
          onClick={() => setActiveTab('browse')}
        >
          Browse Clubs
        </button>
        <button 
          className={`tab ${activeTab === 'my-clubs' ? 'active' : ''}`}
          onClick={() => setActiveTab('my-clubs')}
        >
          My Clubs
        </button>
      </div>

      {activeTab === 'browse' && (
        <div>
          <div style={{ marginBottom: '32px' }}>
            <div className="search-bar">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search clubs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="empty-state">
            <Users size={64} className="empty-state-icon" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
              No clubs available
            </h3>
            <p style={{ marginBottom: '24px' }}>
              No sports clubs are currently available. Check back later or contact administrator.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'my-clubs' && (
        <div>
          {myClubs.length === 0 ? (
            <div className="empty-state">
              <Users size={64} className="empty-state-icon" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                No clubs joined
              </h3>
              <p style={{ marginBottom: '24px' }}>
                You haven't joined any clubs yet. Browse available clubs to get started.
              </p>
              <button 
                className="btn btn-primary"
                onClick={() => setActiveTab('browse')}
              >
                Browse Clubs
              </button>
            </div>
          ) : (
            <div className="grid grid-3">
              {myClubs.map((club, index) => (
                <div key={index} className="card">
                  <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    backgroundColor: '#f1f5f9',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <Users size={24} color="#64748b" />
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '8px' }}>
                    {club.name}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '16px' }}>
                    {club.description}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    fontSize: '14px',
                    color: '#64748b'
                  }}>
                    <span>{club.members} members</span>
                    <span>Joined {club.joinedDate}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Clubs;