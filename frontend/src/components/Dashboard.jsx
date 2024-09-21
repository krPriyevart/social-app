import React, { useEffect, useState } from 'react';
import './stylesheet/Dashboard.css';
import Layout from './Layout.jsx';
import Url from './utils/url.jsx';
import PrevImg from './utils/imgPrev.jsx';
import axios from 'axios';
import boy1 from '../assets/boy1.png';
import boy2 from '../assets/boy2.jpg';
import { Copy } from 'lucide-react';
import { FilePenLine } from 'lucide-react';
import { Save } from 'lucide-react';
import { Share2 } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { ImagePlus } from 'lucide-react';
import { NoteId } from '../../../src/models/noteId.model.js';

const Dashboard = () => {
 const [formData, setFormData] = useState({
  noteId: '76xccf',
  title: '',
  noteData: '',
  expDate: 2,
  attachment: 'null',
 });
 console.log(formData.title);
 console.log(formData.noteData);
 console.log(formData.expDate);
 console.log(images.attachment);
 const [imageUrls, setImageUrls] = useState([]);
 const [error, setError] = useState('');
 const [success, setSuccess] = useState('');

 const handleFileSelect = (urls) => {
  setImageUrls(urls); // Update the image URLs from the child component
};

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
    [name]: files[0],
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();
  const formDataToSend = new FormData();
  Object.keys(formData).forEach((key) => {
    formDataToSend.append(key, formData[key]);
  });

  try {
    const response = await axios.post('http://localhost:8080/api/v1/users/dashboard', formDataToSend, 
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
  
    },{
      withCredentials: true, // Ensure cookies are sent with requests
    });
    setSuccess(response.data.message);
    // setTimeout(() => {
    //   navigate('/login');
    // }, 3000);
    setError('');
  } catch (err) {
    setError(err.response.data.message || 'Something went wrong');
    setSuccess('');
  }
};


 

  return (
  <>
      <Layout>
       <div className='w-full h-svh bg-slate-950 py-0  flex'>
        <div className='w-2/12 h-svh bg-[#001D02] text-[#00FF09] py-20 overflow-hidden  '>
          <p className='px-28 text-xl'>NOTES</p>
          <ul className='px-5  my-5 text-lg'>
            <li className='bg-black rounded-md'>Title1: Utilities for controlling </li>
            <li>Title2: Utilities for controlling </li>
            <li>Title1: Utilities for controlling </li>
            <li>Title1: Utilities for controlling </li>
          </ul>
        </div>
        <div className='w-10/12 h-svh border-0 border-sky-500 py-16 flex-row justify-center '>
        <div className='w-full h-16 border-0 border-sky-500 relative'>
          <button className='bg-[#044b09] text-[#00FF09] p-2 px-4 rounded-sm mx-5 absolute'>CREATE NOTE</button>
          <Url />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <div className='w-5/6 h-5/6 pb-10 box-border mx-auto my-10 border-2 border-[#034e08] bg-[#001D02] '>
       
        <form >
        <div className='w-full h-10 border-0 border-sky-500 flex text-[#00FF09] '>
        <div className='w-4/6 h-10 bg-[#044b09] flex justify-start items-center px-4'>
        
        <textarea name="title" value={formData.title} onChange={handleChange} className='w-full h-10 outline-none overflow-hidden p-2 bg-[#044b09] border-none resize-none' rows='1' cols='1'>
          Title2: Utilities for controlling  
          </textarea>
          </div>
        <div className='w-2/6 h-10 bg-[#044b09] flex justify-around items-center text-xl'><FilePenLine /><button type='submit' onClick={handleSubmit}><Save /></button><Share2 /><Trash2 /> 
        <div className='w-2/6 h-10 px-2 bg-[#044b09] flex justify-center items-center rounded-sm'><p>Exp: </p>
        <select name='expDate' value={formData.expDate} className='w-12 bg-[#044b09]' onChange={handleChange}>
          <option value="2">2d</option>
          <option value="5">5d</option>
          <option value="10">10d</option>
          <option value="30">30d</option>
          <option>custom</option>
          </select>
        </div>
        </div>
        </div>
        <div className='w-full h-full border-0 border-sky-900 flex '>
          <div className='textarea w-8/12 h-full  flex justify-start p-2 text-[#00FF09]  ' >
         
         <textarea name='noteData' value={formData.noteData} onChange={handleChange} className='w-full h-fit outline-none p-2 bg-[#001D02]  resize-none' rows='20' cols='190'  >
         Solution: 
            Let's break this down step by step to resolve the issue.
            1. Fixing the File Path Issue:
            You should use path module to normalize file paths in Node.js, especially when working across different environments (Windows, Linux, etc.).
            Update the uploadOnCloudinary function to use path.resolve and ensure the file path is handled correctly.        Let's break this down step by step to resolve the issue.
          
            You should use path module to normalize file paths in Node.js, especially when working across different environments (Windows, Linux, etc.).
            Update the uploadOnCloudinary function to use path.resolve and ensure the file path is handled correctly.  1. Fixing the File Path Issue:
            You should use path module to normalize file paths in Node.js, especially when working across different environments (Windows, Linux, etc.).
            Update the uploadOnCloudinary function to use path.resolve and ensure the file path is handled correctly.        Let's break this down step by step to resolve the issue.
          
            You should use path module to normalize file paths in Node.js, especially when working across different environments (Windows, Linux, etc.).
            Update the uploadOnCloudinary function to use path.resolve and ensure the file path is handled correctly.  1. Fixing the File Path Issue:
            You should use path module to normalize file paths in Node.js, especially when working across different environments (Windows, Linux, etc.).
            Update the uploadOnCloudinary function to use path.resolve and ensure the file path is handled correctly.        Let's break this down step by step to resolve the issue.
          
            You should use path module to normalize file paths in Node.js, especially when working across different environments (Windows, Linux, etc.).
            Update the uploadOnCloudinary function to use path.resolve and ensure the file path is handled correctly.  1. Fixing the File Path Issue:
            You should use path module to normalize file paths in Node.js, especially when working across different environments (Windows, Linux, etc.).
            Update the uploadOnCloudinary function to use path.resolve and ensure the file path is handled correctly.        Let's break this down step by step to resolve the issue.
          
            You should use path module to normalize file paths in Node.js, especially when working across different environments (Windows, Linux, etc.).
            Update the uploadOnCloudinary function to use path.resolve and ensure the file path is handled correctly.
            </textarea>
            
          </div>
          {/* <div className='w-4/12 h-full  relative' >
          <div className='w-full h-10  relative text-[#00FF09]'>
            <p className='absolute top-2 left-2'>Attachments</p>
            <div class="upload-btn-wrapper absolute right-2 top-2 w-8 h-8 ">
                <ImagePlus  />
                <input type="file" name="coverImage" className='cursor-pointer' />
            </div>
            
          </div>
          <div className='attachments w-fit h-[480px] p-2  top-20px right-0 absolute overflow-scroll border-0 border-red-800 '  >
            <img src={boy2} className='w-1/3 '/>
            <img src={boy2} className='w-1/3 '/>
            <img src={boy2} className='w-1/3 '/>
            <img src={boy2} className='w-1/3'/>
            <img src={boy2} className='w-1/3'/>
            <img src={boy2} className='w-1/3'/>
            <img src={boy2} className='w-1/3'/>
            <img src={boy2} className='w-1/3'/>
            <img src={boy2} className='w-1/3'/>
            <img src={boy2} className='w-1/3'/>
            <img src={boy2} className='w-1/3'/>
            <img src={boy2} className='w-1/3'/>
            <img src={boy2} className='w-1/3'/>
            <img src={boy2} className='w-1/3'/>
            <img src={boy2} className='w-1/3'/>
            <img src={boy2} className='w-1/3'/>
            <img src={boy2} className='w-1/3'/>
            <img src={boy2} className='w-1/3'/>
            <img src={boy2} className='w-1/3'/>
          </div>
          </div> */}
          <PrevImg onChange={handleFileSelect} />
        </div></form>
        </div>
        
        </div>
        </div>
        </Layout>
  </>
   
  );
};

export default Dashboard;
