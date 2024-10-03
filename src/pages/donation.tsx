import { useLocation } from "react-router-dom";

const DonationDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name") || "Guest";

  return (
    <div className="p-4 bg-[#f8f2ff] min-h-screen relative">
      {/* Top Flower */}
      <img
        src="/path-to-flower.png"
        alt="Flower"
        className="absolute top-0 right-0 w-24"
      />

      {/* Back Button */}
      <button className="absolute top-4 left-4">
        <img src="/path-to-back-icon.svg" alt="Back" />
      </button>

      {/* Content Container */}
      <div className="text-center max-w-md mx-auto">
        {/* Title */}
        <h1 className="text-2xl text-[#ba56e5] font-semibold mb-2">
          Donation details
        </h1>

        {/* Greeting */}
        <p className="text-gray-700 text-lg mb-4">
          Hello, <span className="font-bold text-[#ba56e5]">{name}</span>
        </p>

        {/* Info Card */}
        <div className="bg-[#f0d9ff] p-4 rounded-lg shadow-md mb-6">
          <p className="text-xl font-semibold text-[#ba56e5] mb-2">
            We rise by lifting others
          </p>
          <div className="flex justify-center items-center">
            <img
              src="/path-to-breast-cancer-image.png"
              alt="Breast Cancer"
              className="w-16 h-16"
            />
            <img
              src="/path-to-heart-donation.png"
              alt="Heart Donation"
              className="w-16 h-16"
            />
          </div>
        </div>

        {/* Donation Info */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Donate for the treatment of Breast cancer
        </h2>
        <p className="text-gray-600 mb-6">
          Financial contributions help provide critical care and support
          services for patients who may not be able to afford treatment or
          specialized care.
        </p>

        {/* Causes Section */}
        <div className="text-left mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Causes</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Research and Development (R&D)</li>
            <li>Patient Support and Services</li>
            <li>
              <span className="font-bold">Public Awareness and Education</span>
            </li>
            <li>Administrative and Operational Costs</li>
            <li>Advocacy and Policy Work</li>
            <li>Screening and Early Detection Programs</li>
          </ul>
        </div>

        {/* Donate Now Button */}
        <button className="bg-[#ba56e5] text-white py-3 px-8 rounded-full text-lg shadow-lg">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonationDetails;
