import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import yoga from "../assets/yoga.png";
import wom from "../assets/wom.png";
import sta from "../assets/sta.png";
import img2 from "../assets/flower.png";
import { useNavigate } from "react-router-dom";

const AchieveWithUs: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigate = useNavigate(); 

  const options = [
    {
      title: "Fertility and Menstrual Health Tracking",
      description:
        "We help track your cycle and get you to learn more about fertility, like when you’re likely to ovulate.",
      imgSrc: sta,
    },
    {
      title: "Breast Health Monitoring",
      description:
        "We can help detect and prevent breast diseases. We have regular self-examinations and mammograms made available.",
      imgSrc: wom,
    },
    {
      title: "Holistic Wellness Coaching",
      description:
        "We provide a comprehensive approach to health. We help create personalized plans that include nutrition, exercise, and self-care practices.",
      imgSrc: yoga,
    },
    {
      title: "I'm really not sure what I want",
      description: "",
      imgSrc: "",
    },
  ];

  const handleConfirm = () => {
    switch (selectedOption) {
      case "Fertility and Menstrual Health Tracking":
        navigate("/herwaree/cycle"); 
        break;
      case "Breast Health Monitoring":
        navigate("/herwaree/BreastFront");
        break;
      default:
        navigate("/herwaree/goals"); 
        break;
    }
  };

  return (
    <div className="relative bg-white max-w-lg mx-auto mt-8 overflow-x-hidden">
      <div className="absolute top-4 left-4 z-10">
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="lg"
          className="text-purple-500"
        />
      </div>

      <div className="pt-16 px-4">
        <h1 className="text-xl font-bold text-purple-600 text-center mb-4">
          What will you like to achieve with us?
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          We have amazing features you could enjoy with us anytime
        </p>
      </div>

      <div className="px-4 space-y-4">
        {options.map((option, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between p-3 border rounded-lg ${
              selectedOption === option.title
                ? "border-purple-500 bg-purple-50"
                : "border-gray-300"
            }`}
            style={{
              height:
                option.title === "I'm really not sure what I want"
                  ? "80px"
                  : "120px",
              width: "100%",
            }}
            onClick={() => setSelectedOption(option.title)}
          >
            <div className="flex items-center">
              {option.imgSrc && (
                <img
                  src={option.imgSrc}
                  alt={option.title}
                  className="w-12 h-12 mr-4"
                />
              )}
              <div>
                <h3 className="font-semibold text-gray-800">{option.title}</h3>
                {option.description && (
                  <p className="text-xs text-gray-500">{option.description}</p>
                )}
              </div>
            </div>
            <input
              type="checkbox"
              checked={selectedOption === option.title}
              readOnly
              className="form-checkbox text-purple-500"
            />
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 mt-4 px-4">
        Engaging streaks and incentives and educational resources made available
        for you, yay!
      </p>

      <div className="mt-6 px-4">
        <button
          className="w-full py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition"
          onClick={handleConfirm} 
        >
          Confirm
        </button>
      </div>


      <div className="absolute -top-6 -right-14">
        <img src={img2} alt="flower" className="h-20" />
      </div>
    </div>
  );
};

export default AchieveWithUs;
