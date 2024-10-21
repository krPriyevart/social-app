import React, { useEffect, useState } from 'react';
import './stylesheet/Profile.css';
import Layout from './Layout.jsx';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import boy1 from '../assets/boy1.png';
import boy2 from '../assets/registerlogo.png';
import { Pass } from 'react-bootstrap-icons';


const Profile = () => {
    // const [formData, setFormData] = useState({
    //     fullName: '',
    //     email: '',
    //     username: '',
    //     password: '',
    //     avatar: null,
    //     coverImage: null,
    //   });
    //   const [error, setError] = useState('');
    //   const [success, setSuccess] = useState('');
    //   const navigate = useNavigate();
    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //       ...formData,
    //       [name]: value,
    //     });
    //   };
    
    //   const handleFileChange = (e) => {
    //     const { name, files } = e.target;
    //     setFormData({
    //       ...formData,
    //       [name]: files[0],
    //     });
    //   };
    
    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const formDataToSend = new FormData();
    //     Object.keys(formData).forEach((key) => {
    //       formDataToSend.append(key, formData[key]);
    //     });
    
    //     try {
    //       const response = await axios.post('`${import.meta.env.VITE_API_URL}/api/v1/users/profile', formDataToSend, 
    //       {
    //         headers: {
    //           'Content-Type': 'multipart/form-data',
    //         },
        
    //       },{
    //         withCredentials: true, // Ensure cookies are sent with requests
    //       });
    //       console.log(response.data.message);
    //       setSuccess('User Registered Successfully');
    //       // setTimeout(() => {
    //       //   navigate('/login');
    //       // }, 3000);
    //       setError('');
    //     } catch (err) {
    //       setError(err.response.data.message || 'Something went wrong');
    //       setSuccess('');
    //     }
    //   };


    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      username: '',
      password: '',
      avatar: null,
      coverImage: null,
      });
      // console.log(formData.avatar);
      // console.log(formData.coverImage);
      const [error, setError] = useState('');
      const [success, setSuccess] = useState('');
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({
          ...formData,
          [name]: files[0], // Store only the first file (as expected)
        }); console.log(name, files[0]);
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formDataToSend = new FormData();
        formDataToSend.append('avatar', formData.avatar); // Avatar file
        formDataToSend.append('coverImage', formData.coverImage); // Cover image file
        formDataToSend.append('fullName', formData.fullName); // Other form fields
        formDataToSend.append('email', formData.email);
        formDataToSend.append('username', formData.username);
        formDataToSend.append('password', formData.password);
      
        try {
          const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/users/profile`, formDataToSend, {
            headers: {
              'Content-Type': 'multipart/form-data', // Make sure this is set for file uploads
            },
            withCredentials: true, // Ensure cookies are sent with the request
          });
          console.log(response.data);
          setSuccess(response.data.message);
          setError('');
        } catch (err) {
          setError(err.response?.data?.message || 'Something went wrong');
          setSuccess('');
        }
      };
      
      //----------------------------------
      // const handleSubmit = async (e) => {
      //   e.preventDefault();
      //   try {
      //     // const response = await axios.post('`${import.meta.env.VITE_API_URL}/api/v1/users/login', formData);
      //     const response = await axios.post('`${import.meta.env.VITE_API_URL}/api/v1/users/profile', formData, {
      //       withCredentials: true, 
      //     });
      //     console.log(response.data);
      //     setSuccess(response.data.message);
      //     setError('');
      //   //   setTimeout(() => {
      //   //     navigate('/dashboard'); 
      //   //   }, 2000);
      //   } catch (err) {
      //     setError(error || 'Something went wrong');
      //     setSuccess('');
      //   }
      // };
      //-------------------------------
      // const handleSubmit = async (e) => {
      //   e.preventDefault();
        
      //   const formDataToSend = new FormData();
      //   formDataToSend.append('avatar', formData.avatar); // Avatar file
      //   formDataToSend.append('coverImage', formData.coverImage); // Cover image file
      //   formDataToSend.append('fullName', formData.fullName); // Other form fields
      //   formDataToSend.append('email', formData.email);
      //   formDataToSend.append('password', formData.password);
      
      //   try {
      //     const response = await axios.post('`${import.meta.env.VITE_API_URL}/api/v1/users/profile', formDataToSend, {
      //       headers: {
      //         'Content-Type': 'multipart/form-data',
      //       },
      //       withCredentials: true, // Ensure cookies are sent with the request
      //     });
      //     console.log(response.data);
      //     setSuccess(response.data.message);
      //     setError('');
      //   } catch (err) {
      //     setError(err.response?.data?.message || 'Something went wrong');
      //     setSuccess('');
      //   }
      // };
      
    useEffect(() => {
        ;(async () => {
          try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/users/userdasboard`);
            console.log(response.data.data);
            setFormData(response.data.data);
          } catch (error) {
            console.error('Error fetching user data:', error.message);
          }
        })();
      }, []);

  return (
  <>
      <Layout>
       <div className='w-full h-svh bg-black py-20 flex justify-center' >
       <img src={formData.coverImage} className='w-full h-screen absolute top-12 opacity-25'   />
       <div className='bg-black h-dvh w-1/2 rounded-md ' style={{zIndex:'1'}}>
        <div className='w-full h-32 border-0 border-sky-500 flex justify-center items-center' 
        style={{ backgroundImage: `url(${formData.coverImage})`, backgroundSize: 'cover' }}>
            <img src={formData.avatar} className='w-20 h-20 rounded-full shadow-lg border-1 border-zinc-500' />
        </div>
        <form onSubmit={handleSubmit}>
      <table className='w-full max-h-lvh my-10'>
        <tbody className=' border-0 border-sky-500  '>
          <tr>
            <td>Name</td>
            <td>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className='btn' />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className='btn' />
            </td>
          </tr>
          <tr>
            <td>Username</td>
            <td>
              <input type="text" name="username" value= { formData.username} onChange={handleChange} className='btn'/>
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input type="password" name="password" value={formData.password} onChange={handleChange} className='btn' />
            </td>
          </tr>
          <tr>
            <td>Profile Picture</td>
            <td>
                <div class="upload-btn-wrapper">
                <button class="btn">Upload a file</button>
                <input type="file" name="avatar" onChange={handleFileChange} />
                </div>
            </td>
          </tr>
          <tr>
            <td>Cover Picture</td>
            <td>
                <div class="upload-btn-wrapper">
                <button class="btn">Upload a file</button>
                <input type="file" name="coverImage" onChange={handleFileChange} />
                </div>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit" className='btn bg-green-800 text-green-300'>Save</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
    {error && <p style={{ color: 'orange' }}>{error}</p>}
       {success && <p style={{ color: 'green' }}>{success}</p>}
       </div>
        </div>
        </Layout>
  </>
   
  );
};

export default Profile;
