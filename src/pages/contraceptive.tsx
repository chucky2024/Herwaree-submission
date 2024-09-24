import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import img1 from "../assets/flower.png";
import img2 from "../assets/flower2.png";

const Contraceptives: React.FC = () => {
  return (
    <div className="flex flex-col h-screen relative bg-white overflow-hidden pt-12 pb-6">
      {/* Top Left Flower */}
      <img
        src={img1}
        alt="Flower Top Left"
        className="absolute -top-6 -left-8 w-24 h-24 transform scale-110 drop-shadow-lg"
      />

      {/* Top Right Flower */}
      <img
        src={img2}
        alt="Flower Top Right"
        className="absolute -top-6 -right-8 w-24 h-24 transform scale-110 drop-shadow-lg"
      />

      {/* Back Button */}
      <div className="absolute top-5 left-5">
        <button className="text-purple-700 hover:text-purple-900">
          <FaChevronLeft size={24} />
        </button>
      </div>

      {/* Main content  */}
      <div className="w-1/2 ml-6 mt-8">
        {" "}
        {/* */}
        {/* On Contraceptives Section */}
        <div className="mb-4">
          {" "}
          <h2 className="text-purple-500 text-lg font-semibold mb-3">
            {" "}
            On Contraceptives
          </h2>
          <div className="flex flex-col space-y-3">
            {" "}
            {[
              "Hormones",
              "Pills",
              "Patches",
              "Implants",
              "Injections",
              "Intrauterine devices",
            ].map((item) => (
              <button
                key={item}
                className="bg-gray-200 text-gray-500 rounded-full py-2 px-4 text-left w-full"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        {/* e Divider Line */}
        <div className="border-t-2 border-purple-500 my-3 w-full"></div>{" "}
        {/* Emergency Contraception Section */}
        <div className="mb-4">
          {" "}
          <h2 className="text-purple-500 text-lg font-semibold mb-3 whitespace-nowrap">
            {" "}
            Emergency Contraception
          </h2>
          <div className="flex flex-col space-y-3">
            {" "}
            {["Pills", "Copper IUC"].map((item) => (
              <button
                key={item}
                className="bg-gray-200 text-gray-500 rounded-full py-2 px-4 text-left w-full"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Centered Apply Button */}
      <div className="w-full flex justify-center px-4 mt-4">
        {" "}
        {/* Added margin-top */}
        <button className="bg-gray-200 text-gray-500 rounded-full py-2 w-1/2">
          Apply
        </button>
      </div>

      {/* Bottom Right Circle Decoration */}
      <div className="absolute bottom-0 right-0 mb-6 mr-6">
        <div className="w-16 h-16 bg-purple-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default Contraceptives;
