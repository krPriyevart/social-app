import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import boyimg from '../assets/registerlogo.png'
axios.defaults.withCredentials = true;

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('http://localhost:8080/api/v1/users/login', formData);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/users/login`, formData, {
        withCredentials: true, 
      });
      setSuccess('User Login Successfully');
      setError('');
      setTimeout(() => {
        navigate('/dashboard'); 
      }, 2000);
    } catch (err) {
      setError(err.response.data.message || 'Something went wrong');
      setSuccess('');
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-lvh bg-black">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-[#072705] to-[#000000]">
            <img
              className="h-full w-full rounded-md object-cover object-top"
              src={boyimg}
              style={{ transform: 'scaleX(-1) translateX(-150px)', filter:' hue-rotate(90deg)' }}
              alt=""
            />
          </div>
          <div className="absolute" style={{ top: '100px', left: '100px', width: '500px', height: '100px' }}>
            <h3 className="text-7xl font-bold text-green-500">Social-App</h3>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
            <h2 className="text-3xl font-bold leading-tight text-[#00FF09] sm:text-4xl">Sign in</h2>
            <p className="mt-2 text-base text-[#00FF09]">
              Don&apos;t have an account?{' '}
              <Link
                to="/register"
                title=""
                className="font-medium text-[#00FF09] transition-all duration-200 hover:underline"
              >
                Create a free account
              </Link>
            </p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5 text-[#ff557a]">
                <div>
                  <label htmlFor="username" className="text-base font-medium text-[#00FF09]">
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-[#00FF09] bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-[#00FF09]">
                      Password
                    </label>
                    <a href="#" title="" className="text-sm font-semibold text-[#00FF09] hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-[#00FF09] bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-[#072c08] hover:bg-[#0d3f0e] px-3.5 py-2.5 font-semibold leading-7 text-[#00FF09] "
                  >
                    Get started <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
