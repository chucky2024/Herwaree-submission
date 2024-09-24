import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import img2 from "../assets/flower.png";

const Cycle = () => {
  const [selectedDuration, setSelectedDuration] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleConfirm = () => {
    if (selectedDuration) {
      // Navigate to the next page when an option is selected
      navigate("/herwaree/cycletracker"); // Replace with the actual route
    }
  };

  const handleNotSure = () => {
    // Navigate to the appropriate page for "Not Sure"
    navigate("/herwaree/cycletracker"); // Replace with the actual route
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Main Container */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md relative overflow-hidden">
        {/* Back Icon and Flower Image */}
        <div className="flex justify-between items-center mb-4">
          <button className="text-purple-500 z-10">
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          </button>
          {/* Decorative Flower */}
          <img
            src={img2}
            alt="Flower Side Right"
            className="fixed -top-8 -right-12 w-24 h-24 scale-110 drop-shadow-lg z-0"
          />
        </div>

        {/* Question 1 */}
        <h2 className="text-xl text-purple-700 font-semibold">
          When was your last menstrual cycle?{" "}
          <span className="text-purple-400">(The first day)</span>
        </h2>
        <input
          type="text"
          placeholder="DD/MM"
          className="mt-4 w-full px-4 py-2 border rounded-full border-gray-300 text-center text-lg"
        />

        <div className="mt-8" />

        {/* Question 2 */}
        <h2 className="text-xl text-purple-700 font-semibold">
          How long does your period usually last?
        </h2>

        {/* Options */}
        <div className="mt-4 space-y-2">
          {["1-3 days", "4-6 days", "7-9 days", "10+ days", "Varies"].map(
            (option) => (
              <button
                key={option}
                onClick={() => setSelectedDuration(option)}
                className={`w-full py-2 rounded-full text-center ${
                  selectedDuration === option
                    ? "bg-gray-300 text-black"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {option}
              </button>
            )
          )}
        </div>

        <div className="mt-8" />

        {/* Pagination */}
        <div className="flex items-center justify-center mt-6 space-x-2">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === 2 ? "bg-purple-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="mt-8" />

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handleNotSure}
            className="px-6 py-2 text-gray-500 bg-gray-100 rounded-full"
          >
            Not Sure
          </button>
          <button
            onClick={handleConfirm}
            className="px-6 py-2 text-white bg-purple-500 rounded-full"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cycle;
