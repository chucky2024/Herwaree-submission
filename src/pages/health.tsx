import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import img2 from "../assets/flower2.png";

const Health = () => {
  const [healthQuestionOption, setHealthQuestionOption] = useState<
    string | null
  >(null);
  const [historyQuestionOption, setHistoryQuestionOption] = useState<
    string | null
  >(null);

  const healthQuestionOptions = ["Yes", "No", "Not sure"];
  const historyQuestionOptions = ["Yes", "No", "Not sure"];

  return (
    <div className="flex flex-col justify-between min-h-screen px-4 py-6 bg-white relative overflow-hidden">
      {/* Flower Image (Top Right) */}
      <div className="absolute top-0 -right-10">
        <img src={img2} alt="flower" className="h-20" />
      </div>

      {/* Back Button */}
      <div className="flex items-center mb-4">
        <button className="text-purple-500">
          <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
        </button>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* First Question */}
        <div>
          <p className="text-lg text-purple-600 font-semibold mb-4">
            Do you have any chronic health conditions(eg,
            diabetes,hypertension)?
          </p>
          <div className="flex flex-col space-y-4">
            {healthQuestionOptions.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setHealthQuestionOption(option)}
                className={`inline-flex items-center justify-start py-1 px-3 rounded-full text-sm font-medium border max-w-max ${
                  healthQuestionOption === option
                    ? "bg-purple-100 border-purple-500 text-purple-600"
                    : "bg-gray-100 border-gray-300 text-gray-600"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Second Question */}
        <div>
          <p className="text-lg text-purple-600 font-semibold mb-4">
            Do you have a family history of breast cancer or other
            breast-related conditions?
          </p>
          <div className="flex flex-col space-y-4">
            {historyQuestionOptions.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setHistoryQuestionOption(option)}
                className={`inline-flex items-center justify-start py-1 px-3 rounded-full text-sm font-medium border max-w-max ${
                  historyQuestionOption === option
                    ? "bg-purple-100 border-purple-500 text-purple-600"
                    : "bg-gray-100 border-gray-300 text-gray-600"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center items-center space-x-4 mt-8">
        <span className="h-2 w-8 bg-gray-300 rounded-full"></span>
        <span className="h-2 w-8 bg-gray-300 rounded-full"></span>
        <span className="h-2 w-8 bg-purple-500 rounded-full"></span>
        <span className="h-2 w-8 bg-gray-300 rounded-full"></span>
        <span className="h-2 w-8 bg-gray-300 rounded-full"></span>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <button className="text-gray-500 bg-gray-200 px-6 py-3 rounded-full">
          Not Sure
        </button>
        <button className="bg-purple-500 text-white px-6 py-3 rounded-full">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Health;
