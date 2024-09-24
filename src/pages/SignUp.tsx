import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import ConnectWalletButton from './WalletWidget';

const SignUp: React.FC = () => {
  const [showWalletWidget, setShowWalletWidget] = useState(false); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSignUp = () => {
    console.log('Sign Up:', { email, password });
    navigate("/herwaree/introduce");
  };

  const handleWalletAuthSuccess = () => {
    navigate('/herwaree/introduce'); 
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-100 p-8">
      <h1 className="text-2xl font-bold italic text-center text-purple-600 mb-6">Welcome to Herwaree</h1>
      <h2 className="text-xl text-left text-purple-600 mb-8">Create your account</h2>
      
      <form onSubmit={(e) => { e.preventDefault(); handleSignUp(); }}>
        <div className="mb-4">
          <label className="block text-purple-600 text-xl font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Type your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-purple-600 text-xl font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Set a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            minLength={8}
            required
          />
          <p className="text-gray-600 text-lg mt-2">Password must be at least 8 characters</p>
        </div>

        <button
          type="submit"
          className="w-full text-xl bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Sign up
        </button>
      </form>

      <p className="text-center text-gray-700 my-4">Or</p>

      <div className="flex flex-col text-xl items-center w-full max-w-md mx-auto space-y-4">
        <button
          className="flex items-center justify-center w-full bg-white-500 text-black py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
        >
          <FaGoogle className="h-5 w-5 mr-2" />
          Sign up with Google
        </button>
        <button
          onClick={() => setShowWalletWidget(!showWalletWidget)} // Toggle WalletWidget visibility
          className="flex items-center text-xl justify-center w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Signup with wallet
        </button>
      </div>

      {/* Center and style the WalletWidget */}
      {showWalletWidget && (
        <div className="flex justify-center mt-8">
          <div className="p-4 bg-purple-100 rounded-lg">
            <ConnectWalletButton/>
          </div>
        </div>
      )}

      <p className="text-center mt-6">
        Already have an account? <a href="/herwaree/login" className="text-purple-600 hover:underline">Log in</a>
      </p>
    </div>
  );
};

export default SignUp;
