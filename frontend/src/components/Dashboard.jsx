import React, { useEffect, useState } from 'react';
import './stylesheet/Dashboard.css';
import Layout from './Layout.jsx';
import axios from 'axios';
import boy1 from '../assets/boy1.png';
import boy2 from '../assets/boy2.jpg';
import { Copy } from 'lucide-react';
import { FilePenLine } from 'lucide-react';
import { Save } from 'lucide-react';
import { Share2 } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { ImagePlus } from 'lucide-react';

const Dashboard = () => {
 
 

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
          <div className='w-80 h-10  bg-[#044b09] text-[#00FF09] p-2 rounded-sm mx-5 absolute right-0 overflow-hidden'>
            <p className='absolute top-2'>https://notes.doc/3g435yh</p> 
            <div className='w-14 h-10 p-2 px-4 bg-[#044b09] border-l-0 absolute right-0 top-0 border-[#0b6b10]'><Copy /></div>
          </div>
        </div>
        <div className='w-5/6 h-5/6 pb-10 box-border mx-auto my-10 border-2 border-[#034e08] bg-[#001D02] '>
        <div className='w-full h-10 border-0 border-sky-500 flex text-[#00FF09] '>
        <div className='w-4/6 h-10 bg-[#044b09] flex justify-start items-center px-4'><p>Title2: Utilities for controlling  </p></div>
        <div className='w-2/6 h-10 bg-[#044b09] flex justify-around items-center text-xl'><FilePenLine /><Save /><Share2 /><Trash2 /> 
        <div className='w-2/6 h-10 px-2 bg-[#044b09] flex justify-center items-center rounded-sm'><p>Exp: </p>
        <select className='w-12 bg-[#044b09]'>
          <option>2d</option>
          <option>5d</option>
          <option>10d</option>
          <option>30d</option>
          <option>custom</option>
          </select>
        </div>
        </div>
        </div>
        <div className='w-full h-full border-0 border-sky-900 flex overflow-hidden '>
          <div className='textarea w-8/12 h-full  flex justify-start p-2 text-[#00FF09] overflow-scroll'>
         <form>
         <textarea className='w-full h-fit outline-none p-2 bg-[#001D02]' rows='90' cols='190'>
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
            </form>
          </div>
          <div className='w-4/12 h-full '>
          <div className='w-full h-10  relative text-[#00FF09]'>
            <p className='absolute top-2 left-2'>Attachments</p>
            <ImagePlus className=' absolute top-1 right-2' />
          </div>
          <div className='attachments w-fit h-full p-2  overflow-y-scroll '>
            <img src={boy2} className='w-1/3 h-fit'/>
            <img src={boy2} className='w-1/3 h-fit'/>
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
          </div>
        </div>
        </div>
        </div>
        </div>
        </Layout>
  </>
   
  );
};

export default Dashboard;
