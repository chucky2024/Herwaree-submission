import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faCamera } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../components/navigation";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import img2 from "../assets/flower.png";
import { Link } from "react-router-dom";

const Profile = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState("2002");
  const [cycleLength, setCycleLength] = useState("28 Days");
  const [breastExamDate, setBreastExamDate] = useState("5 Days");
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleProfilePicUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Uploaded file:", file);
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleYearSelect = (date: Date) => {
    const selectedYear = date.getFullYear();
    setYearOfBirth(selectedYear.toString());
    setShowYearPicker(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-6 px-4">
      <div className="w-full flex justify-between items-center mb-6">
      <Link to= "/herwaree/settings" className="text-purple-500">←</Link>
        <h1 className="text-xl font-bold text-purple-500">My Profile</h1>;
      </div>
      <div className="relative mb-6">
        <FontAwesomeIcon
          icon={faUserCircle}
          className="text-purple-500"
          size="6x"
        />
        <label
          htmlFor="profile-pic-upload"
          className="absolute bottom-0 right-0 bg-white p-1 rounded-full"
        >
          <FontAwesomeIcon icon={faCamera} className="text-gray-600" />
          <input
            id="profile-pic-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleProfilePicUpload}
          />
        </label>
      </div>
    
      <div className="w-full space-y-4">
        <EditableField
          label="First Name"
          value={firstName}
          onChange={(val) => setFirstName(val)}
        />
        <EditableField
          label="Last Name"
          value={lastName}
          onChange={(val) => setLastName(val)}
        />
        <EditableField
          label="Email"
          value={email}
          onChange={(val) => handleEmailChange(val)}
          isEmail
        />
        {emailError && (
          <span className="text-red-500 text-sm">{emailError}</span>
        )}
        <EditableField
          label="Year of Birth"
          value={yearOfBirth}
          onChange={() => setShowYearPicker(true)}
          isYear
        />
        {showYearPicker && (
          <Calendar
            onClickYear={handleYearSelect}
            view="decade"
            maxDetail="decade"
            onChange={handleYearSelect}
            value={new Date(yearOfBirth)}
            className="year-picker"
          />
        )}
        <EditableField
          label="Cycle Length"
          value={cycleLength}
          onChange={(val) => setCycleLength(val)}
        />
        <EditableField
          label="Breast Examination Date"
          value={breastExamDate}
          onChange={(val) => setBreastExamDate(val)}
        />
      </div>
    
      <div className="mt-8 w-full space-y-4">
        <button className="w-full py-3 bg-gray-200 text-gray-500 rounded-md">
          Log Out
        </button>
        <button className="w-full py-3 text-red-500 rounded-md">
          Delete Account
        </button>
      </div>
      
      <img
        src={img2}
        alt="Flower Top Right"
        className="fixed top-0 -right-12 w-24 h-24 transform scale-110 drop-shadow-lg"
      />
      {/* </div> */};{/* Navigation */}
      <Navigation />
    </div>
  );
};

const EditableField = ({
  label,
  value,
  onChange,
  isEmail = false,
  isYear = false,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  isEmail?: boolean;
  isYear?: boolean;
}) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-300 py-3">
      <span className="text-gray-600">{label}</span>
      {isYear ? (
        <button
          onClick={() => onChange(value)}
          className="text-gray-500 underline outline-none bg-transparent"
        >
          {value}
        </button>
      ) : (
        <input
          type={isEmail ? "email" : "text"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`text-gray-500 ${
            isEmail ? "text-purple-500 underline" : ""
          } outline-none bg-transparent`}
        />
      )}
    </div>
  );
};

export default Profile;
