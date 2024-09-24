import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa'; // Importing a back icon
import { AiOutlineEllipsis } from 'react-icons/ai'; // Importing dots for navigation

const Introduce: React.FC = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (name.trim() !== '') {
      navigate("/herwaree/yay", { state: { name } });
    } else {
      alert("Please enter your name");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 p-8 relative">
      {/* Back Icon at the Top Left */}
      <div className="absolute top-4 left-4 py-20">
        <FaChevronLeft className="text-2xl text-gray-400 cursor-pointer" />
      </div>

      {/* Content Area */}
      <div className="flex flex-col items-center mt-32">
        <h1 className="text-xl font-bold mb-2 text-purple-600 text-center">Hello beautiful, I’m Herwaree and you are?</h1>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full max-w-md text-center mt-4"
        />
      </div>

      {/* Navigation Dots and Buttons at the Bottom */}
      <div className="flex flex-col items-center">
        <AiOutlineEllipsis className="text-3xl text-gray-400 mb-4" /> {/* Navigation Dots */}
        <div className="flex justify-between w-full max-w-md">
          <button className="text-blue-500 hover:underline">Skip</button>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduce;