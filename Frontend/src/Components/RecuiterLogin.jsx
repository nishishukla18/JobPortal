import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

function RecuiterLogin({ onClose }) {
  const [state, setState] = useState('Sign Up');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [companyLogo, setCompanyLogo] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCompanyLogo(file);
      console.log('Uploaded file:', file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state === 'Sign Up') {
      console.log('Signing up with:', { companyName, email, password });
      setIsSignedUp(true); // Move to the upload logo step
    } else {
      console.log('Logging in with:', { email, password });
    }
  };
 useEffect(()=>{
  document.body.style.overflow='hidden'
  return()=>{
    document.body.style.overflow='unset'
  }
 },[])
  return (
    <div className="absolute inset-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-lg p-10 text-slate-600 shadow-lg w-96"
      >
        {/* Close Icon */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSignedUp ? (
          <>
            <h1 className="text-2xl font-bold text-center mb-2">
              Recruiter {state}
            </h1>
            <p className="text-center text-sm text-gray-500 mb-6">
              Welcome back! Please {state === 'Login' ? 'sign in' : 'create an account'} to continue.
            </p>

            {/* Conditionally render Company Name input */}
            {state === 'Sign Up' && (
              <div className="mb-4">
                <label className="flex items-center bg-gray-100 p-2 rounded-md border border-gray-300">
                  <img src={assets.person_icon} alt="Person Icon" className="w-5 h-5 mr-2" />
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="bg-transparent w-full outline-none"
                  />
                </label>
              </div>
            )}

            <div className="mb-4">
              <label className="flex items-center bg-gray-100 p-2 rounded-md border border-gray-300">
                <img src={assets.email_icon} alt="Email Icon" className="w-5 h-5 mr-2" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent w-full outline-none"
                />
              </label>
            </div>

            <div className="mb-6">
              <label className="flex items-center bg-gray-100 p-2 rounded-md border border-gray-300">
                <img src={assets.lock_icon} alt="Lock Icon" className="w-5 h-5 mr-2" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent w-full outline-none"
                />
              </label>
            </div>

            {state === 'Login' && <Link className="text-blue-600 py-2">Forgot Password?</Link>}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              {state === 'Login' ? 'Login' : 'Create Account'}
            </button>

            <p className="text-sm text-center text-gray-500 mt-4">
              {state === 'Login' ? (
                <>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setState('Sign Up')}
                    className="text-blue-500 hover:underline"
                  >
                    Create one
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setState('Login')}
                    className="text-blue-500 hover:underline"
                  >
                    Login
                  </button>
                </>
              )}
            </p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-center mb-2">Upload Company Logo</h1>
            <p className="text-center text-sm text-gray-500 mb-6">
              Please upload your company logo to complete the process.
            </p>

            <div className="mb-6">
              <label className="flex items-center justify-center bg-gray-100 p-6 rounded-md border border-gray-300 cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                {companyLogo ? (
                  <img
                    src={URL.createObjectURL(companyLogo)}
                    alt="Company Logo Preview"
                    className="h-16 w-16 object-cover rounded-md"
                  />
                ) : (
                  <span className="text-gray-400">Click to upload logo</span>
                )}
              </label>
            </div>

            <button
              type="button"
              onClick={() => console.log('Logo uploaded:', companyLogo)}
              className="w-full bg-blue-500 text-white py-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Complete
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default RecuiterLogin;
