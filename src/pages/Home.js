import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Users, 
  Trophy, 
  Bell, 
  Calendar,
  Activity
} from 'lucide-react';

const Home = () => {
  const stats = [
    { 
      icon: Package, 
      count: 0, 
      label: 'Active Requests',
      color: '#3b82f6'
    },
    { 
      icon: Users, 
      count: 0, 
      label: 'Joined Clubs',
      color: '#10b981'
    },
    { 
      icon: Trophy, 
      count: 0, 
      label: 'Live Matches',
      color: '#f59e0b'
    },
    { 
      icon: Bell, 
      count: 0, 
      label: 'New Announcements',
      color: '#8b5cf6'
    }
  ];

  const quickActions = [
    {
      icon: Package,
      title: 'Request Equipment',
      description: 'Browse and request sports equipment',
      link: '/equipment',
      color: '#dbeafe'
    },
    {
      icon: Users,
      title: 'Join Clubs',
      description: 'Explore and join sports clubs',
      link: '/clubs',
      color: '#dcfce7'
    },
    {
      icon: Trophy,
      title: 'Live Scores',
      description: 'View ongoing match scores',
      link: '/matches',
      color: '#fef3c7'
    },
    {
      icon: Bell,
      title: 'Announcements',
      description: 'Stay updated with latest news',
      link: '/announcements',
      color: '#e9d5ff'
    }
  ];

  return (
    <div className="container" style={{ padding: '32px 20px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 className="page-title">Welcome, Ansh Gajera</h1>
        <p className="page-subtitle">Manage your sports activities and stay updated</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="stat-card">
              <div 
                className="stat-icon" 
                style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
              >
                <IconComponent size={24} />
              </div>
              <div className="stat-content">
                <h3 style={{ color: stat.color }}>{stat.count}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '24px', color: '#1e293b' }}>
          Quick Actions
        </h2>
        <div className="grid grid-4">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Link key={index} to={action.link} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ 
                  cursor: 'pointer', 
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  ':hover': { transform: 'translateY(-2px)' }
                }}>
                  <div 
                    style={{ 
                      width: '48px', 
                      height: '48px', 
                      backgroundColor: action.color,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}
                  >
                    <IconComponent size={24} color="#374151" />
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '8px', color: '#1e293b' }}>
                    {action.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '14px' }}>
                    {action.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activities and Live Matches */}
      <div className="grid grid-2">
        <div className="card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '24px', color: '#1e293b' }}>
            Recent Activities
          </h3>
          <div className="empty-state">
            <Package size={48} className="empty-state-icon" />
            <p>No recent activities</p>
            <Link to="/equipment" className="btn btn-primary" style={{ marginTop: '16px' }}>
              Request Equipment
            </Link>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>
              Live Matches
            </h3>
          </div>
          <div className="empty-state">
            <Trophy size={48} className="empty-state-icon" />
            <p>No live matches</p>
            <Link to="/matches" className="btn btn-primary" style={{ marginTop: '16px' }}>
              View All Matches
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;