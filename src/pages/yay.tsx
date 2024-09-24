// import React from "react";
import { useNavigate } from "react-router-dom";
import img3 from "../assets/yay.png";
import img2 from "../assets/flower2.png";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Yay: React.FC = () => {
  const location = useLocation();
  const { name } = location.state || {};
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/herwaree/BirthdayPicker");
  };

  return (
    <div className="relative flex flex-col items-center justify-between h-screen p-6 bg-white">
      <div className="absolute top-4 left-4">
        <FaChevronLeft className="text-2xl text-gray-400 cursor-pointer" />
      </div>

      <div className="text-center mt-16 px-4">
        <h1 className="text-4xl font-bold text-purple-600 mb-2">
          Hello {name}{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h1>
        <p className="text-xl text-gray-600">Warm Welcome, I would love to know you better, let's go!</p>
      </div>

      <div className="flex flex-col items-center mt-6 mb-6">
        <img
          src={img3}
          alt="YAY"
          className="w-3/4 max-w-md h-auto object-contain"
        />
      </div>

      <div className="flex flex-col items-center mb-6">
        <AiOutlineEllipsis className="text-5xl text-gray-400 mb-4" />
        <button
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 w-full max-w-md"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>

      <img
        src={img2}
        alt="Flower Top Right"
        className="absolute -inset-y-8 -right-12 w-32 h-32 transform scale-110 drop-shadow-lg"
      />
      <div className="absolute bottom-5 left-4 w-20 h-20 bg-purple-300 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute -right-12 top-1/2 w-20 h-20 bg-purple-300 rounded-full"></div>
    </div>
  );
};

export default Yay;
