import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const Captainlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <img
          className="w-16 mb-4 mx-auto"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Captain Logo"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-4">What's your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-6 rounded px-4 py-2 border w-full text-sm placeholder:text-gray-500"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-4">Enter Password</h3>
          <input
            className="mb-6 rounded px-4 py-2 border w-full text-sm placeholder:text-gray-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Password"
          />
          <button
            className="bg-black text-white font-medium rounded px-4 py-2 w-full text-sm"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Join a fleet?{' '}
          <Link to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
        <div className="mt-6">
          <Link
            to="/login"
            className="bg-orange-600 flex items-center justify-center text-white font-medium rounded px-4 py-2 w-full text-sm"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Captainlogin;
