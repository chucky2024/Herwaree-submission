import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; 
import { FaChevronLeft } from "react-icons/fa";
import img2 from "../assets/flower2.png"; 
import { useNavigate } from "react-router-dom"; 

type Value = Date | Date[] | [Date, Date] | null;

const BirthdayPicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const navigate = useNavigate(); 

  const handleConfirm = () => {
    if (selectedDate) {
      navigate("/herwaree/achieve"); 
    }
  };

  const handleSkip = () => {
    navigate("/herwaree/achieve"); 
  };

  const handleDateChange = (value: Value) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    } else if (Array.isArray(value) && value.length === 1) {
      setSelectedDate(value[0]);
    } else {
      setSelectedDate(null);
    }
    setShowCalendar(false); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white relative overflow-hidden">
      <div className="absolute top-5 left-5">
        <button className="text-purple-700 hover:text-purple-900">
          <FaChevronLeft size={24} />
        </button>
      </div>

      <h1 className="text-2xl font-bold text-left text-purple-700 mb-6 mt-16">
        Enter your Birthdate
      </h1>

      <div className="mb-8 relative w-64">
        <button
          onClick={() => setShowCalendar(!showCalendar)}
          className="w-full py-3 px-6 border-2 border-purple-300 rounded-lg text-purple-700 font-semibold bg-white hover:bg-purple-100"
        >
          {selectedDate ? selectedDate.toDateString() : "Select a date"}
        </button>
        {showCalendar && (
          <div className="absolute top-full left-0 mt-2 w-full z-50">
            <Calendar
              onChange={handleDateChange as (value: Value) => void}
              value={selectedDate}
              className="bg-white rounded-lg shadow-xl border border-gray-300"
            />
          </div>
        )}
      </div>

      <div className="absolute bottom-32 mb-6 flex justify-center space-x-2">
        <span className="block h-2 w-2 rounded-full bg-gray-300"></span>
        <span className="block h-2 w-2 rounded-full bg-purple-700"></span>
        <span className="block h-2 w-2 rounded-full bg-gray-300"></span>
      </div>

      <div className="absolute bottom-20 flex space-x-4">
        <button
          className="text-gray-700 px-12 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-all"
          onClick={handleSkip}
        >
          Skip
        </button>
        <button
          className="bg-purple-700 text-white px-12 py-2 rounded-full hover:bg-purple-800 transition-all"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>

  
      <img
        src={img2}
        alt="Flower Top Right"
        className="absolute -inset-y-7 -right-12 w-28 h-28 transform scale-110 drop-shadow-lg"
      />

      <div className="absolute bottom-5 left-4 w-20 h-20 bg-purple-300 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="absolute -right-11 top-60 w-20 h-20 bg-purple-300 rounded-full"></div>
    </div>
  );
};

export default BirthdayPicker;
