import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; 
import img2 from "../assets/flower2.png";

const Symptomor: React.FC = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const navigate = useNavigate(); 

  const symptomCategories = [
    {
      heading: "Breast Symptoms",
      symptoms: [
        "Lumps or thickening",
        "Changes in size or shape",
        "Persistent pain in one area",
      ],
    },
    {
      heading: "Skin Changes",
      symptoms: ["Dimpling", "Redness", "Puckering" ],
    },
    {
      heading: "Nipple Changes",
      symptoms: ["Inversion", "position", "Discharge"],
    },
    {
      heading: "Texture Changes",
      symptoms: ["Scaly", "Itchy", "Orange peel Texture"],
    },
    {
      heading: "Swelling",
      symptoms: ["Breast", "Collarbone area", "Underarm"],
    },
    {
      heading: "Nipple Discharge",
      symptoms: ["Clear", "Bloody", "Pus-like"],
    },
  ];

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms((prevSymptoms) =>
      prevSymptoms.includes(symptom)
        ? prevSymptoms.filter((item) => item !== symptom)
        : [...prevSymptoms, symptom]
    );
  };

  const handleApply = () => {
    navigate("/herwaree/check"); 
  };

  return (
    <div className="relative max-w-lg mx-auto bg-white p-4">
      <div className="absolute top-4 left-4">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-purple-500 cursor-pointer"
          onClick={() => navigate("/herwaree/check")} // Navigate on click
        />
      </div>

      <img
        src={img2}
        alt="Flower"
        className="fixed top-0 right-0 w-20 h-20 transform translate-x-1/2 -translate-y-1/2"
      />

      <h2 className="text-xl font-semibold text-purple-600 text-center mt-12 mb-4">
        Track Your Symptoms
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {symptomCategories.map((category, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">
              {category.heading}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.symptoms.map((symptom) => (
                <button
                  key={symptom}
                  onClick={() => toggleSymptom(symptom)}
                  className={`py-1 px-3 rounded-full text-sm font-medium border ${
                    selectedSymptoms.includes(symptom)
                      ? "bg-purple-100 border-purple-500 text-purple-600"
                      : "bg-gray-200 border-gray-300 text-gray-600"
                  }`}
                >
                  {symptom}
                </button>
              ))}
            </div>
          </div>
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

      <div className="flex justify-center mt-6">
        <button
          onClick={handleApply}
          className="bg-purple-500 text-white py-2 px-6 rounded-full text-sm font-medium hover:bg-purple-600"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Symptomor;