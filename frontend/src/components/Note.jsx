import React, { useEffect, useState } from 'react';
import './stylesheet/Dashboard.css';
import Layout from './Layout.jsx';
import axios from 'axios';
import boy1 from '../assets/boy1.png';
import boy2 from '../assets/boy2.jpg';
import { Copy } from 'lucide-react';
import { Search } from 'lucide-react';

const Note = () => {
 
 

  return (
  <>
     
       <div className='w-full h-svh bg-slate-950 py-0  flex justify-center'>

        <div className='w-10/12 h-svh border-0 border-sky-500 flex-row justify-center py-4 pb-0'>
        <div className='w-full h-16 border-0 border-sky-500 relative'>
          <div className='bg-[#044b09] rounded-r-full rounded-l-full border-0 border-sky-500 text-[#00FF09] h-10 absolute w-2/12 px-10 mx-8 '>
            <input type='text' placeholder='Note id....' className='bg-[#044b09] p-1 w-10/12 box-border outline-none absolute left-2 top-1'/>
            <Search className='absolute bg-[#044b09] right-3 top-2 cursor-pointer'/>
            </div>
          <div className='w-80 h-10  bg-[#044b09] text-[#00FF09] p-2 rounded-sm mx-5 absolute right-0 overflow-hidden'>
            <p className='absolute top-2'>https://notes.doc/3g435yh</p> 
            <div className='w-14 h-10 p-2 px-4 bg-[#044b09] border-l-1 absolute right-0 top-0 border-[#0b6b10]'><Copy /></div>
          </div>
        </div>
        <div className='w-5/6 h-5/6 pb-10 box-border mx-auto  border-2 border-[#034e08] bg-[#001D02] '>
        <div className='w-full h-10 border-0 border-sky-500 flex text-[#00FF09] '>
        <div className='w-4/6 h-10 bg-[#044b09] flex justify-start items-center px-4'><p>Title2: Utilities for controlling  </p></div>
        <div className='w-2/6 h-10 bg-[#044b09] flex justify-around items-center text-xl'>
        <p>Expires in 2d</p>
 
        </div>
        </div>
        <div className='w-full h-full border-0 border-sky-900 flex overflow-hidden '>
          <div className='textarea w-8/12 h-full  flex justify-start p-4 text-[#00FF09] overflow-scroll'>
            
          <p>Solution: <br/>
            Let's break this down step by step to resolve the issue.
            1. Fixing the File Path Issue:
            You should use path module to normalize file paths in Node.js, especially when working across different environments (Windows, Linux, etc.).
            Update the uploadOnCloudinary function to use path.resolve and ensure the file path is handled correctly.        Let's break this down step by step to resolve the issue.
            1. Fixing the File Path Issue:
            You should use path module to normalize file paths in Node.js, especially when working across different environments (Windows, Linux, etc.).
            Update the uploadOnCloudinary function to use path.resolve and ensure the file path is handled correctly.        Let's break this down step by step to resolve the issue.
            1. Fixing the File Path Issue:
            You should use path module to normalize file paths in Node.js, especially when working across different environments (Windows, Linux, etc.).
            Update the uploadOnCloudinary function to use path.resolve and ensure the file path is handled correctly.        Let's break this down step by step to resolve the issue.
            1. Fixing the File Path Issue:
            You should use path module to normalize file paths in Node.js, especially when working across different environments (Windows, Linux, etc.).
            Update the uploadOnCloudinary function to use path.resolve and ensure the file path is handled correctly.        Let's break this down step by step to resolve the issue.
            1. Fixing the File Path Issue:
            You should use path module to normalize file paths in Node.js, especially when working across different environments (Windows, Linux, etc.).
            Update the uploadOnCloudinary function to use path.resolve and ensure the file path is handled correctly.        Let's break this down step by step to resolve the issue.
            1. Fixing the File Path Issue:
            You should use path module to normalize file paths in Node.js, especially when working across different environments (Windows, Linux, etc.).
            Update the uploadOnCloudinary function to use path.resolve and ensure the file path is handled correctly.        Let's break this down step by step to resolve the issue.
            1. Fixing the File Path Issue:
            You should use path module to normalize file paths in Node.js, especially when working across different environments (Windows, Linux, etc.).
            Update the uploadOnCloudinary function to use path.resolve and ensure the file path is handled correctly.        Let's break this down step by step to resolve the issue.
            1. Fixing the File Path Issue:
            You should use path module to normalize file paths in Node.js, especially when working across different environments (Windows, Linux, etc.).
            Update the uploadOnCloudinary function to use path.resolve and ensure the file path is handled correctly.        Let's break this down step by step to resolve the issue.
            1. Fixing the File Path Issue:
            You should use path module to normalize file paths in Node.js, especially when working across different environments (Windows, Linux, etc.).
            Update the uploadOnCloudinary function to use path.resolve and ensure the file path is handled correctly.</p>
         
          </div>
          <div className='w-4/12 h-full '>
          <div className='w-full h-10  relative text-[#00FF09]'>
            <p className='absolute top-2 left-2'>Attachments</p>
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
        
  </>
   
  );
};

export default Note;
