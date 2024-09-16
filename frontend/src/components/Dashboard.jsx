import React, { useEffect, useState } from 'react';
import './stylesheet/Dashboard.css';
import Layout from './Layout.jsx';
import axios from 'axios';
import boy1 from '../assets/boy1.png';


const Dashboard = () => {
 
 

  return (
  <>
      <Layout>
       <div className='w-full h-svh bg-red-600 py-20'>
        hellohellohellohellohellohellohellohellohellohellohellohellohellohello
        <img src={boy1} width={200} height={400}/>
        </div>
        </Layout>
  </>
   
  );
};

export default Dashboard;
