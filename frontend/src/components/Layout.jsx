import React, { useEffect, useState } from 'react';
import './stylesheet/Dashboard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState([]);
  useEffect(() => {
    ;(async () => {
      try {
        const response = await axios.post('/api/v1/users/userdasboard');
        console.log(response.data.data);
        setUsername(response.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
        // setTimeout(() => {
        //   navigate('/login'); 
        // }, 3000);
      }
    })();
  }, []);


  return (
    <div className="dashboard bg-black">
      <div className="header bg-gray-600">
        <div className="logo">Social-App</div>
        <div className="dashboard-title border-neutral-300">Dashboard</div>
        <div className="user-profile">
        <div className=" border-neutral-300 text-white mx-2">{username.fullName} 😎</div>
        <img src={username.avatar} />
        </div>
      </div>
      <div>{children}</div>
      
      <footer className="footer ">
      <p className='text-white px-3'>@Social-App</p>
        <div className="footer-content">
        
          <div className="social-links">
            <a href="#" className="social-link">FACEBOOK</a>
            <a href="#" className="social-link">LINKEDIN</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
