import React, { useState, useEffect } from 'react';
import {
  format,
  addDays,
  subDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
} from 'date-fns';
import { FaHome, FaCog, FaHistory, FaPalette, FaEllipsisH } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface CalendarProps {
  userName: string;
}

const Calendar: React.FC<CalendarProps> = ({ userName }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [lmp, setLmp] = useState(new Date());
  const [cycleLength, setCycleLength] = useState(28);
  const [periodDates, setPeriodDates] = useState<Date[]>([]);
  const [fertilityWindow, setFertilityWindow] = useState<[Date, Date] | null>(null);
  const [ovulationDate, setOvulationDate] = useState<Date | null>(null);
  const [breastExamDate, setBreastExamDate] = useState<Date | null>(null);

  useEffect(() => {
    calculateCycle();
  }, [lmp, cycleLength]);

  const calculateCycle = () => {
    const startDate = lmp;
    const endDate = addDays(lmp, cycleLength * 2);

    const periodDays: Date[] = [];
    let tempDate = startDate;

    while (tempDate <= endDate) {
      periodDays.push(tempDate);
      tempDate = addDays(tempDate, cycleLength);
    }

    setPeriodDates(periodDays);

    const ovulation = addDays(startDate, cycleLength - 14);
    setOvulationDate(ovulation);

    const fertilityStart = subDays(ovulation, 5);
    setFertilityWindow([fertilityStart, ovulation]);

    const breastExam = addDays(startDate, 7);
    setBreastExamDate(breastExam);
  };

  const renderCalendarDays = () => {
    const startMonth = startOfMonth(selectedDate);
    const endMonth = endOfMonth(selectedDate);
    const startDate = startOfWeek(startMonth);
    const endDate = endOfWeek(endMonth);

    const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });

    return calendarDays.map((date) => {
      const isPeriodDay = periodDates.some((periodDate) => isSameDay(periodDate, date));
      const isFertilityDay = fertilityWindow && date >= fertilityWindow[0] && date <= fertilityWindow[1];
      const isOvulationDay = ovulationDate && isSameDay(ovulationDate, date);
      const isBreastExamDay = breastExamDate && isSameDay(breastExamDate, date);

      let className = 'flex justify-center items-center h-12 rounded-lg transition-transform duration-300 transform hover:scale-105';

      if (isPeriodDay) className += ' bg-red-200 text-red-700';
      if (isFertilityDay) className += ' bg-green-200 text-green-700';
      if (isOvulationDay) className += ' bg-purple-200 text-purple-700';
      if (isBreastExamDay) className += ' bg-yellow-200 text-yellow-700';

      return (
        <div key={date.toISOString()} className={className}>
          <span className="text-lg font-medium">{format(date, 'd')}</span>
        </div>
      );
    });
  };

  const getCurrentPrediction = () => {
    const today = new Date();
    const isPeriodDay = periodDates.some((periodDate) => isSameDay(periodDate, today));
    const isFertilityDay = fertilityWindow && today >= fertilityWindow[0] && today <= fertilityWindow[1];
    const isOvulationDay = ovulationDate && isSameDay(ovulationDate, today);
    const isBreastExamDay = breastExamDate && isSameDay(breastExamDate, today);

    if (isPeriodDay) return { color: 'bg-red-500', text: 'Period' };
    if (isFertilityDay) return { color: 'bg-green-500', text: 'Fertility Window' };
    if (isOvulationDay) return { color: 'bg-purple-500', text: 'Ovulation' };
    if (isBreastExamDay) return { color: 'bg-yellow-500', text: 'Breast Self-Exam' };

    return { color: 'bg-gray-500', text: 'No Prediction' };
  };

  const currentPrediction = getCurrentPrediction();

  const handleEditLMP = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLmp(new Date(e.target.value));
  };

  const handleEditCycleLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCycleLength(Number(e.target.value));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">

      <div className="text-center text-3xl font-bold text-purple-600 mb-6">
        <h2>{userName}</h2>
      </div>

      <div className="mb-6">
        <p className="text-lg font-medium text-purple-400 mb-4">Hello {userName}, please update your cycle details:</p>
        <div className="flex flex-col space-y-4">
          <div>
            <label className="block text-pink-600 mb-1 font-medium" htmlFor="lmp">
              Last Menstrual Period
            </label>
            <input
              id="lmp"
              type="date"
              value={format(lmp, 'yyyy-MM-dd')}
              onChange={handleEditLMP}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-pink-600 mb-1 font-medium" htmlFor="cycleLength">
              Cycle Length (days)
            </label>
            <input
              id="cycleLength"
              type="number"
              value={cycleLength}
              onChange={handleEditCycleLength}
              min={21}
              max={35}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>

      {/* Circular Tracker */}
      <div className="flex justify-center items-center mb-8">
        <div
          className={`w-64 h-64 rounded-full ${currentPrediction.color} flex flex-col justify-center items-center shadow-lg transform transition-transform duration-300 hover:scale-105`}
        >
          <div className="text-center">
            <p className="text-xl font-semibold text-white mb-2">Today's Prediction</p>
            <p className="text-2xl font-semibold text-white">{currentPrediction.text}</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setSelectedDate(subDays(selectedDate, 30))}
            className="text-2xl font-bold text-gray-400 hover:text-gray-700 transform transition-transform duration-200 hover:scale-110"
          >
            ❮
          </button>
          <h3 className="text-xl font-semibold text-gray-800">{format(selectedDate, 'MMMM yyyy')}</h3>
          <button
            onClick={() => setSelectedDate(addDays(selectedDate, 30))}
            className="text-2xl font-bold text-gray-400 hover:text-gray-700 transform transition-transform duration-200 hover:scale-110"
          >
            ❯
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
            <div key={day} className="text-center font-semibold text-gray-600">
              {day}
            </div>
          ))}
          {renderCalendarDays()}
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-semibold text-gray-700 mb-4">Prediction Key:</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 bg-red-500 rounded-full mr-2"></span>
            <span className="text-gray-700">Period</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
            <span className="text-gray-700">Fertility Window</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 bg-purple-500 rounded-full mr-2"></span>
            <span className="text-gray-700">Ovulation</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
            <span className="text-gray-700">Breast Self-Exam</span>
          </div>
        </div>
      </div>

      <div className="flex justify-around mt-8">
        <Link to="/herwaree/check">
        <FaHome className="text-3xl text-purple-600 hover:text-gray-700 cursor-pointer" />
        </Link>
        <FaHistory className="text-3xl text-purple-600 hover:text-gray-700 cursor-pointer" />
        <FaPalette className="text-3xl text-purple-600 hover:text-gray-700 cursor-pointer" />
        <Link to="/herwaree/settings">
        <FaCog className="text-3xl text-purple-600 hover:text-gray-700 cursor-pointer" />
        </Link>
        <Link to="/herwaree/more">
        <FaEllipsisH className="text-2xl text-purple-600 cursor-pointer hover:text-gray-800" />
        </Link>
      </div>
    </div>
  );
};

export default Calendar;