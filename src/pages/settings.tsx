import {
  faBell,
  // faHeart,
  faTasks,
  faGift,
  faLanguage,
  faUnlockAlt,
  faComments,
  faChartLine, // Using faChartLine for "Activities"
  faTint,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import Navigation from "../components/navigation";
import { Link } from "react-router-dom"; 

import cycleImg from "../assets/cycle.png";
import fertilityImg from "../assets/fertility.png";
import breastHealthImg from "../assets/breast--health.png";
import img2 from "../assets/flower.png";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-white relative">
    
      <div className="flex items-center justify-between px-4 py-4 border-b">
        <Link to= "/herwaree/calendar" className="text-purple-500">←</Link>
        <h1 className="text-lg font-semibold text-purple-600">Settings</h1>
        <img
          src={img2}
          alt="Flower Top Right"
          className="absolute -inset-y-7 -right-8 w-28 h-28 transform scale-110 drop-shadow-lg"
        />
      </div>

      <div className="flex justify-between space-x-2 px-4 mt-4">
        <TipCard label="Day of Cycle" image={cycleImg} />
        <TipCard label="Fertility Updates" image={fertilityImg} />
        <TipCard label="Breast Health" image={breastHealthImg} />
      </div>

      <div className="px-4 mt-6">
        <SettingsOption
          label="My Cycle"
          to="/my-cycle"
          icon={faTint}
          iconColor="text-red-500"
        />
        <SettingsOption label="Period possible date" to="/period-date" />
        <SettingsOption
          label="Fertility predictions"
          to="/fertility-predictions"
        />
        <SettingsOption
          label="Self breast examination guide"
          to="/breast-exam-guide"
        />
        <SettingsOption
          label="My Profile"
          to="/herwaree/profile"
        />
        <SettingsOption label="Schedule a mammogram" to="/schedule-mammogram" />
        <SettingsOption
          label="Activities"
          to="/activities"
          icon={faChartLine}
        />{" "}
  
        <SettingsOption label="Streaks" to="/streaks" icon={faTasks} />
        <SettingsOption label="Rewards" to="/rewards" icon={faGift} />
        <SettingsOption
          label="Unlock Premium"
          to="/unlock-premium"
          icon={faUnlockAlt}
        />
        <SettingsOption label="Chat" to="/herwaree/community" icon={faComments} />
        <SettingsOption label="Reminders" to="/reminders" icon={faBell} />
        <SettingsOption
          label="Fertility Updates"
          to="/fertility-updates"
          icon={faChartLine}
        />
        <SettingsOption label="Language" to="/language" icon={faLanguage} />
      </div>

      <Navigation />
    </div>
  );
};

const TipCard = ({ label, image }: { label: string; image: string }) => (
  <div className="flex flex-col items-center bg-pink-100 rounded-lg shadow-md w-24 p-2">
    <img
      src={image}
      alt={label}
      className="w-16 h-16 object-cover rounded-lg"
    />
    <span className="text-xs text-center text-purple-600 mt-1">{label}</span>
  </div>
);

const SettingsOption = ({
  label,
  icon,
  to,
  iconColor,
}: {
  label: string;
  icon?: IconProp; 
  to: string; 
  iconColor?: string; 
}) => (
  <Link to={to} className="flex justify-between items-center py-3 border-b">
    <span className="text-gray-600">{label}</span>
    {icon ? (
      <FontAwesomeIcon
        icon={icon}
        className={`${iconColor || "text-purple-500"}`}
      />
    ) : (
      <span className="text-purple-500">›</span>
    )}
  </Link>
);

export default SettingsPage;
