import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import img2 from "../assets/flower2.png";

const SymptomTracker: React.FC = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [cycleChanges, setCycleChanges] = useState<string | null>(null);
  const navigate = useNavigate(); 

  const symptoms = [
    "Cramps",
    "Bloating",
    "Mood swings",
    "Fatigue",
    "Breast tenderness",
    "Headaches",
    "Acne",
    "Others (please specify)",
  ];

  const cycleOptions = ["Yes", "No", "Not sure", "Skip for now"];

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms((prevSymptoms) =>
      prevSymptoms.includes(symptom)
        ? prevSymptoms.filter((item) => item !== symptom)
        : [...prevSymptoms, symptom]
    );
  };

  const handleConfirm = () => {
    if (selectedSymptoms.length > 0 || cycleChanges) {
      navigate("/herwaree/flowchanges"); 
    }
  };

  const handleNotSure = () => {
    navigate("/herwaree/flowchanges"); 
  };

  return (
    <div className="relative max-w-lg mx-auto bg-white p-4">
      <div className="absolute top-4 left-4">
        <FontAwesomeIcon icon={faChevronLeft} className="text-purple-500" />
      </div>

      <img
        src={img2}
        alt="Flower"
        className="fixed top-0 right-0 w-20 h-20 transform translate-x-1/2 -translate-y-1/2"
      />

      <h2 className="text-lg font-semibold text-purple-600 text-center mt-12 mb-4">
        Do you experience any symptoms before or during your period?
      </h2>
      <div className="flex flex-col space-y-4 mb-8">
        {symptoms.map((symptom) => (
          <button
            key={symptom}
            onClick={() => toggleSymptom(symptom)}
            className={`w-10/12 mx-auto py-2 px-6 rounded-full text-sm font-medium border ${
              selectedSymptoms.includes(symptom)
                ? "bg-purple-100 border-purple-500 text-purple-600"
                : "bg-gray-100 border-gray-300 text-gray-600"
            }`}
          >
            {symptom}
          </button>
        ))}
      </div>

      <h2 className="text-lg font-semibold text-purple-600 text-center mb-4">
        Have you noticed changes in your cycle recently?
      </h2>
      <div className="flex flex-col space-y-4">
        {cycleOptions.map((option) => (
          <button
            key={option}
            onClick={() => setCycleChanges(option)}
            className={`inline-flex items-center justify-start py-1 px-3 rounded-full text-sm font-medium border max-w-max ${
              cycleChanges === option
                ? "bg-purple-100 border-purple-500 text-purple-600"
                : "bg-gray-100 border-gray-300 text-gray-600"
            }`}
          >
            <span className="text-left">{option}</span>
          </button>
        ))}
      </div>

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

export default SymptomTracker;