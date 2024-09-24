import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaHome, FaHistory, FaPalette, FaCog, FaEllipsisH } from 'react-icons/fa'; 
import { useWallet } from '@solana/wallet-adapter-react';

const More: React.FC = () => {

  return (
    <div className="bg-white min-h-screen p-6 flex flex-col justify-between">
    
      <div>
        <div className="text-center bg-purple-200 rounded-lg p-6">
          <h1 className="text-purple-700 text-3xl font-bold">HERWAREE!</h1>
          <p className="text-purple-600 mt-2">Get a chance to keep winning our Herware coin!</p>
          <button className="mt-4 bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700">
            Join in
          </button>
         
        </div>

        <Section title="Breast Health Monitoring Tools">
          <Card icon="mammogram" text="Mammograms" to="/mammograms" />
          <Card icon="self-exam" text="Self-examination" to="/self-exam" />
        </Section>

        <Section title="Menstrual Cycle">
          <Card icon="tampons" text="Learn about Tampons" to="/tampons" />
          <Card icon="fertility-tracking" text="Fertility Tracking" to="/fertility-tracking" />
        </Section>

        <Section title="Learn with Herware">
          <Card icon="video" text="Video" to="/videos" />
          <Card icon="blogs" text="Blogs" to="/herwaree/blog" />
          <Card icon="books" text="Books" to="/books" />
        </Section>

        <Section title="Educational Resources">
          <Card icon="faqs" text="FAQs" to="/faqs" />
          <Card icon="stores" text="Stores" to="/stores" />
        </Section>
      </div>


      <footer className="bg-purple-200 py-4 fixed bottom-0 inset-x-0 flex justify-around text-purple-700">
        <Link to="/herwaree/calendar" className="flex flex-col items-center">
          <FaHome className="text-2xl" />
          <span className="text-sm">Home</span>
        </Link>
        <Link to="/history" className="flex flex-col items-center">
          <FaHistory className="text-2xl" />
          <span className="text-sm">History</span>
        </Link>
        <Link to="/theme" className="flex flex-col items-center">
          <FaPalette className="text-2xl" />
          <span className="text-sm">Theme</span>
        </Link>
        <Link to="/herwaree/settings" className="flex flex-col items-center">
          <FaCog className="text-2xl" />
          <span className="text-sm">Settings</span>
        </Link>
        <Link to="/herwaree/more" className="flex flex-col items-center">
          <FaEllipsisH className="text-2xl" />
          <span className="text-sm">More</span>
        </Link>
      </footer>
    </div>
  );
};

const Card: React.FC<{ icon: string; text: string; to: string }> = ({ icon, text, to }) => {
  return (
    <Link to={to} className="bg-purple-100 p-6 rounded-lg text-center shadow-md">
      <div className="w-12 h-12 bg-purple-300 mx-auto rounded-full mb-4"></div>
      <p className="text-purple-700 font-semibold">{text}</p>
    </Link>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  return (
    <div className="mt-10">
      <h2 className="text-purple-700 text-2xl font-semibold mb-6">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
};

export default More;