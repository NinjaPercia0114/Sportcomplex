import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  CheckCircle, 
  Calendar, 
  Users, 
  MessageSquare, 
  BarChart3,
  Trophy,
  AlertTriangle,
  Plus
} from 'lucide-react';

const AdminPanel = () => {
  const stats = [
    { 
      icon: AlertTriangle, 
      count: 0, 
      label: 'Pending Requests',
      color: '#f59e0b'
    },
    { 
      icon: Calendar, 
      count: 0, 
      label: 'Live Matches',
      color: '#10b981'
    },
    { 
      icon: Users, 
      count: 0, 
      label: 'Active Clubs',
      color: '#3b82f6'
    },
    { 
      icon: MessageSquare, 
      count: 0, 
      label: 'Announcements',
      color: '#8b5cf6'
    }
  ];

  const adminActions = [
    {
      icon: Package,
      title: 'Manage Inventory',
      description: 'Track and update equipment stock',
      link: '/admin/inventory',
      color: '#dbeafe'
    },
    {
      icon: CheckCircle,
      title: 'Approve Requests',
      description: 'Review and approve equipment requests',
      link: '/admin/requests',
      color: '#fef3c7'
    },
    {
      icon: Calendar,
      title: 'Schedule Matches',
      description: 'Create and manage match schedules',
      link: '/schedule-match',
      color: '#dcfce7'
    },
    {
      icon: Users,
      title: 'Manage Clubs',
      description: 'Oversee club operations and members',
      link: '/admin/clubs',
      color: '#f3e8ff'
    },
    {
      icon: MessageSquare,
      title: 'Post Announcements',
      description: 'Share important updates and news',
      link: '/admin/announcements',
      color: '#fee2e2'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'View system usage and statistics',
      link: '/admin/analytics',
      color: '#f0fdf4'
    }
  ];

  return (
    <div className="container" style={{ padding: '32px 20px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 className="page-title">Admin Control Panel</h1>
        <p className="page-subtitle">Manage system operations and oversee all activities</p>
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

      {/* Administrative Actions */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '24px', color: '#1e293b' }}>
          Administrative Actions
        </h2>
        <div className="grid grid-3">
          {adminActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Link key={index} to={action.link} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ 
                  cursor: 'pointer', 
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  height: '100%'
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

      {/* Quick Overview Sections */}
      <div className="grid grid-2">
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>
              Pending Equipment Requests
            </h3>
            <span style={{ 
              backgroundColor: '#fef3c7', 
              color: '#92400e', 
              padding: '4px 12px', 
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              0
            </span>
          </div>
          <div className="empty-state">
            <CheckCircle size={48} className="empty-state-icon" />
            <p>No pending requests</p>
            <Link to="/admin/requests" className="btn btn-primary" style={{ marginTop: '16px' }}>
              View All Requests
            </Link>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>
              Live Matches
            </h3>
            <span style={{ 
              backgroundColor: '#fee2e2', 
              color: '#dc2626', 
              padding: '4px 12px', 
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              0
            </span>
          </div>
          <div className="empty-state">
            <Trophy size={48} className="empty-state-icon" />
            <p>No live matches</p>
            <Link to="/schedule-match" className="btn btn-primary" style={{ marginTop: '16px' }}>
              <Plus size={16} />
              Schedule Match
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;