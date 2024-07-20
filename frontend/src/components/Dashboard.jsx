import React from 'react';
import './stylesheet/Dashboard.css';
import Layout from './Layout.jsx';

const PlaylistItem = ({ title, percentage, completed, total }) => {
  return (
    <div className="playlist-item">
      <div className="playlist-title">{title}</div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="progress-status">
        Completed: {completed}/{total} Videos
      </div>
    </div>
  );
};

const PlaylistSection = ({ title, playlist }) => {
  return (
    <div className="playlist-section">
      <div className="section-title">{title}</div>
      <div className="playlist-list">
        {playlist.map((item) => (
          <PlaylistItem
            key={item.title}
            title={item.title}
            percentage={item.percentage}
            completed={item.completed}
            total={item.total}
          />
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  const defaultPlaylist = [
    {
      title: 'Complete C++ Placement DSA Course: (CodeHelp - by Babbar)',
      percentage: 63,
      completed: 25,
      total: 149,
    },
    {
      title: 'JavaScript Tutorials for Beginners in Hindi: (CodeWithHarry)',
      percentage: 23,
      completed: 25,
      total: 103,
    },
    {
      title: 'Chai aur HTML in Hindi: (Chai aur Code)',
      percentage: 83,
      completed: 12,
      total: 15,
    },
    {
      title: 'Computer Networks: (Neso Academy)',
      percentage: 50,
      completed: 67,
      total: 135,
    },
    {
      title: 'Python - Basic to Advance: (Jenny\'s Lectures CS IT)',
      percentage: 63,
      completed: 45,
      total: 125,
    },
    {
      title: 'Java & DSA Course for Placement: (Apna College)',
      percentage: 89,
      completed: 30,
      total: 39,
    },
  ];

  const customPlaylist = [
    {
      title: 'Complete C++ Placement DSA Course: (CodeHelp - by Babbar)',
      percentage: 63,
      completed: 25,
      total: 149,
    },
    {
      title: 'JavaScript Tutorials for Beginners in Hindi: (CodeWithHarry)',
      percentage: 13,
      completed: 15,
      total: 103,
    },
    {
      title: 'Chai aur HTML in Hindi: (Chai aur Code)',
      percentage: 83,
      completed: 12,
      total: 15,
    },
    {
      title: 'Computer Networks: (Neso Academy)',
      percentage: 50,
      completed: 67,
      total: 135,
    },
    {
      title: 'Python - Basic to Advance: (Jenny\'s Lectures CS IT)',
      percentage: 63,
      completed: 45,
      total: 125,
    },
    {
      title: 'Java & DSA Course for Placement: (Apna College)',
      percentage: 89,
      completed: 30,
      total: 39,
    },
  ];

 

  return (
  
    <Layout>
       
      <PlaylistSection
        title="Default Youtube Playlist"
        playlist={defaultPlaylist}
      />
      <PlaylistSection
        title="Custom Youtube Playlist"
        playlist={customPlaylist}
      />
      </Layout>
   
  );
};

export default Dashboard;
