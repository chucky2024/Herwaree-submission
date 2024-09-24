import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Ife, replace this with an API call or other logic to store the result
const saveScreeningResult = (result: string) => {
  localStorage.setItem("screeningResult", result);
};

const getScreeningResult = () => {
  return localStorage.getItem("screeningResult");
};

const Screening: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const [isHighRisk, setIsHighRisk] = useState(false); 
  const navigate = useNavigate();

  // Loading previous screening result
  useEffect(() => {
    const savedResult = getScreeningResult();
    if (savedResult) {
      setResult(savedResult);
      setIsHighRisk(savedResult === "high-risk");
    }
  }, []);

  // Ife replace with real logic
  const evaluateScreening = () => {
    const risk = Math.random() > 0.5 ? "high-risk" : "low-risk";
    setIsHighRisk(risk === "high-risk");
    setResult(risk);
    saveScreeningResult(risk); 
  };

  useEffect(() => {
    evaluateScreening();
  }, []);

  const handleRetakeTest = () => {
    navigate("/herwaree/walkthrough");
  };

  const handleReturnHome = () => {
    navigate("/herwaree/check"); 
  };

  const handleSpeakWithDoctor = () => {
    navigate("/doctor"); 
  };

  const handleShareResults = () => {
    // Ife Implement functionality to share results with the doctor
    alert("Results shared with the doctor!");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-8">
      <h1 className="text-4xl font-bold text-purple-700 mb-8">
        Test Completed! 🎉
      </h1>
      
      {result && (
        <div className="text-center mb-8">
          {isHighRisk ? (
            <p className="text-2xl text-red-600">
              Based on your answers, we recommend seeing a doctor. Don't worry, we can help you connect with one.
            </p>
          ) : (
            <p className="text-2xl text-green-600">
              Great job! Based on your answers, you're in good health. Keep it up!
            </p>
          )}
          <p className="text-lg mt-4">
            Your result: <strong>{isHighRisk ? "High Risk" : "Low Risk"}</strong>
          </p>
        </div>
      )}

      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={handleRetakeTest}
          className="bg-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-600 transition duration-300"
        >
          Take Another Test
        </button>
        
        {isHighRisk && (
          <button
            onClick={handleShareResults}
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Share Results with Doctor
          </button>
        )}

        <button
          onClick={handleSpeakWithDoctor}
          className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-red-600 transition duration-300"
        >
          Speak with a Doctor
        </button>

        <button
          onClick={handleReturnHome}
          className="bg-gray-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-600 transition duration-300"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Screening;