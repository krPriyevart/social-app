import React from 'react';
import './stylesheet/Dashboard.css';
import { Link } from 'react-router-dom';
const Layout = ({ children }) => {
  return (
    <div className="dashboard">
      <div className="header">
        <div className="logo">MOLITUBE</div>
        <div className="dashboard-title">Dashboard</div>
        <div className="user-profile">
          {/* Add your user profile icon here */}
        </div>
      </div>
      <div className="s_dashboard">
      <div className="dashboard__list">
        <div className="sidebar">
          <div className="sidebar-item mb-12">
            <div className="sidebar-icon"><img src='https://img.icons8.com/?size=100&id=69&format=png&color=FFFFFF' /></div>
            <div className="sidebar-label">MAIN MENU</div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-icon">{/* Add your icon here */}</div>
            <div className="sidebar-label mx-[50px]  ">Dashboard</div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-icon">{/* Add your icon here */}</div>
            <div className="sidebar-label px-[50px]">Manage Playlists</div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-icon">{/* Add your icon here */}</div>
            <div className="sidebar-label px-[50px]">Default Playlists</div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-icon">{/* Add your icon here */}</div>
            <div className="sidebar-label px-[50px]">Custom Playlists</div>
          </div>
          <Link to="/logout">
          <div className="sidebar-item mt-10">
            <div className="sidebar-icon">{/* Add your icon here */}</div>
            <div className="sidebar-label">Logout</div>
          </div>
          </Link>
        </div>
      </div>
      <div className="m_content">
        {children}
      </div>
      </div>
    </div>
  );
};

export default Layout;
