import React, { useEffect, useState } from 'react'; 
import './stylesheet/Dashboard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState([]);
  const [isProfileVisible, setIsProfileVisible] = useState(false); // State to toggle profile visibility

  useEffect(() => {
    ;(async () => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/users/userdasboard`);
        console.log(response);
        console.log(response.data.data);
        setUsername(response.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    })();
  }, []);

  // Function to toggle profile visibility
  const toggleProfile = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  return (
    <div className="dashboard bg-black">
      <div className="header bg-black">
        <div className="logo text-green-500">Social-App</div>
        <div className="dashboard-title border-neutral-300">Dashboard</div>
        <div className="user-profile">
          <div className="border-neutral-300 text-green-500 mx-2">
            {username.fullName} 😎
          </div>

          {/* Toggle profile menu on avatar click */}
          <img 
            src={username.avatar} 
            onClick={toggleProfile} 
            alt="User Avatar" 
            className="cursor-pointer" 
          />

          {/* Conditional rendering of the profile menu */}
          {isProfileVisible && (
            <div className='w-15 h-18 bg-black text-green-500 absolute top-12 right-10 z-10 px-4 py-2 rounded-b-lg'>
              <ul>
                <Link to="/profile">
                  <li className='cursor-pointer'>Profile</li>
                </Link>      
                <hr />          
                <Link to="/dashboard">
                  <li className='cursor-pointer'>Dashboard</li>
                </Link>
                <hr />
                <Link to="/logout">
                  <li className='cursor-pointer'>Logout</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div>{children}</div>
      
      <footer className="footer">
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
