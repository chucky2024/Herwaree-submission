import React from "react";
import { useNavigate } from 'react-router-dom';
import img1 from "../assets/flower.png";
import img2 from "../assets/flower2.png";
import logo from "../assets/wom3.jpg";

const Further: React.FC = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/herwaree/check");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen relative bg-white overflow-hidden">
      <img
        src={img1}
        alt="Flower Top Left"
        className="absolute -inset-y-6 -left-8 w-32 h-32 transform scale-110 drop-shadow-lg"
      />
      <img
        src={img2}
        alt="Flower Top Right"
        className="absolute -inset-y-6 -right-8 w-32 h-32 transform scale-110 drop-shadow-lg"
      />
      <div className="text-center z-10 w-full px-8">
        <img src={logo} alt="Herwaree Logo" className="inline-block w-60 h-auto rounded-xl mb-8" />
        
        <h1 className="text-purple-500 text-2xl font-bold">
          <span className="block">Take results from our quiz</span>
          <span className="block">to have a chat with your</span>
          <span className="block">doctor and get further</span>
          <span className="block">instructions.</span>
        </h1>

        <button 
          onClick={handleGetStarted} 
          className="px-11 py-2 max-w-xs w-full bg-purple-600 text-white rounded-full text-lg absolute bottom-20 left-1/2 transform -translate-x-1/2 focus:outline-none">
         Gotcha!, Let's get going
        </button>
      </div>
      {
        <>
          <div className="absolute bottom-5 left-4 w-24 h-24 bg-purple-300 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute -right-11 w-24 h-24 bg-purple-300 rounded-full"></div>
        </>
      }
    </div>
  );
};

export default Further;