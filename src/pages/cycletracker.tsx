import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import img2 from "../assets/flower2.png";

const CycleTracker: React.FC = () => {
  const [selectedCycle, setSelectedCycle] = useState<string | null>(null);
  const [selectedLength, setSelectedLength] = useState<string | null>(null);
  const navigate = useNavigate(); 

  const cycleOptions = [
    "Very Regular (same time each month)",
    "Somewhat Regular (few days difference)",
    "Regular (varies by weeks or more)",
    "Not Sure",
  ];

  const lengthOptions = [
    "21–24 days",
    "25–28 days",
    "29–32 days",
    "33–35 days",
    "Varies",
    "Not Sure",
  ];

  const handleConfirm = () => {
    if (selectedCycle && selectedLength) {
      navigate("/herwaree/symptom"); // Navigate to the next page if an option is selected
    }
  };

  const handleNotSure = () => {
    navigate("/herwaree/symptom"); // Navigate to the not sure page
  };

  return (
    <div className="relative max-w-lg mx-auto bg-white p-4">
      {/* Back button */}
      <div className="absolute top-4 left-4">
        <FontAwesomeIcon icon={faChevronLeft} className="text-purple-500" />
      </div>

      {/* Flower Decoration */}
      <img
        src={img2}
        alt="Flower"
        className="fixed top-0 right-0 w-20 h-20 transform translate-x-1/2 -translate-y-1/2"
      />

      {/* Question 1 */}
      <h2 className="text-lg font-semibold text-purple-600 text-center mt-12 mb-4">
        How regular are your cycles?
      </h2>
      <div className="flex flex-col space-y-4 mb-8">
        {cycleOptions.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedCycle(option)}
            className={`w-full py-2 px-6 rounded-full text-sm font-medium border ${
              selectedCycle === option
                ? "bg-purple-100 border-purple-500 text-purple-600"
                : "bg-gray-100 border-gray-300 text-gray-600"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Question 2 */}
      <h2 className="text-lg font-semibold text-purple-600 text-center mb-4">
        How long is your average menstrual cycle?
      </h2>
      <div className="flex flex-col space-y-4">
        {lengthOptions.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedLength(option)}
            className={`w-full py-2 px-6 rounded-full text-sm font-medium border ${
              selectedLength === option
                ? "bg-purple-100 border-purple-500 text-purple-600"
                : "bg-gray-100 border-gray-300 text-gray-600"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 my-6">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === 3 ? "bg-purple-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between items-center mt-6">
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

export default CycleTracker;
