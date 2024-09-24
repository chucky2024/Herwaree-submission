import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import img2 from "../assets/flower2.png";

const FlowChanges: React.FC = () => {
  const [selectedFlow, setSelectedFlow] = useState<string | null>(null);
  const [spotting, setSpotting] = useState<string | null>(null);
  const navigate = useNavigate(); 

  const flowOptions = ["Light", "Medium", "Heavy", "Varies", "Not sure"];
  const spottingOptions = ["Yes", "No", "Occasionally"];

  const handleNotSure = () => {
    navigate("/herwaree/birthcontrol"); 
  };

  const handleConfirm = () => {
    navigate("/herwaree/birthcontrol"); 
  };

  return (
    <div className="relative bg-white h-full max-w-md mx-auto p-4 overflow-x-hidden">
      <FontAwesomeIcon icon={faChevronLeft} className="text-purple-500" />
      <div className="absolute top-4 left-4 z-10">
        <button className="text-purple-500 text-xl">&#8249;</button>
      </div>

      <div className="absolute top-0 -right-10">
        <img src={img2} alt="flower" className="h-20" />
      </div>

      <div className="relative z-10 mt-16">
        <h1 className="text-center text-lg font-semibold text-purple-500 mb-4">
          Do you notice changes in your flow?
        </h1>

        <div className="space-y-3">
          {flowOptions.map((option, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedFlow(option)}
              className={`w-full py-3 rounded-full text-sm font-medium ${
                selectedFlow === option
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 text-gray-600"
              } transition`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-8">
        <h2 className="text-center text-lg font-semibold text-purple-500 mb-4">
          Do you experience any spotting between periods?
        </h2>

        <div className="flex flex-col space-y-4">
          {spottingOptions.map((option, idx) => (
            <button
              key={idx}
              onClick={() => setSpotting(option)}
              className={`inline-flex items-center justify-start py-1 px-3 rounded-full text-sm font-medium border max-w-max ${
                spotting === option
                  ? "bg-purple-100 border-purple-500 text-purple-600"
                  : "bg-gray-100 border-gray-300 text-gray-600"
              }`}
            >
              <span className="text-left">{option}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4 mt-8">
        <span className="h-2 w-8 bg-gray-300 rounded-full"></span>
        <span className="h-2 w-8 bg-gray-300 rounded-full"></span>
        <span className="h-2 w-8 bg-purple-500 rounded-full"></span>
        <span className="h-2 w-8 bg-gray-300 rounded-full"></span>
        <span className="h-2 w-8 bg-gray-300 rounded-full"></span>
      </div>

      <div className="relative z-10 mt-6 flex justify-between">
        <button
          onClick={handleNotSure}
          className="text-gray-500 border-gray-300 py-2 px-6 rounded-full border text-sm font-medium"
        >
          Not Sure
        </button>
        <button
          onClick={handleConfirm}
          className="bg-purple-500 text-white py-2 px-6 rounded-full text-sm font-medium hover:bg-purple-600"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default FlowChanges;
