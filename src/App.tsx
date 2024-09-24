import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";


import WalletWidget from "./pages/WalletWidget";
import SignUp from "./pages/SignUp";
import Introduce from "./pages/Introduce";
import WeightHeight from "./pages/WeightHeight";
import Goals from "./pages/Goals";
import Calendar from "./pages/Calendar";
import Front from "./pages/front";
import Login from "./pages/login";
import Yay from "./pages/yay";
import BirthdayPicker from "./pages/birthday";
import PeriodUpsAndDowns from "./pages/periods";
import Profile from "./pages/profile";
import BreastFront from "./pages/BreastFront";
import SettingsPage from "./pages/settings";
import Contraceptives from "./pages/contraceptive";
import AchieveWithUs from "./pages/achieve";
import Cycle from "./pages/cycle";
import CycleTracker from "./pages/cycletracker";
import Symptom from "./pages/symptom";
import FlowChanges from "./pages/flowchanges";
import Lump from "./pages/lumps";
import Supplement from "./pages/supplement";
import Health from "./pages/health";
import NoticedSymptoms from "./pages/noticedsymptoms";
import BreastMonitor from "./pages/BreastMonitor";
import Mammogram from "./pages/mammogram";
import Further from "./pages/Further";
import Symptomor from "./pages/symptomor";
import Check from "./pages/check";
import Conditions from "./pages/conditions";
import Walkthrough from "./pages/Walkthrough";
import Screening from "./pages/screening";
import Birthcontrol from "./pages/birthcontrol";
import More from "./pages/more";
import Blog from "./pages/blog";
import Community from "./pages/community";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" index element={<Front />} />
        <Route path="herwaree/SignUp" element={<SignUp />} />
        <Route path="/herwaree/introduce" element={<Introduce />} />
        <Route path="/herwaree/WeightHeight" element={<WeightHeight />} />
        <Route path="/herwaree/goals" element={<Goals />} />
        <Route path="/herwaree/Calendar" element={<Calendar userName={""} />} />
        <Route path="herwaree/login" element={<Login />} />
        <Route path="herwaree/yay" element={<Yay />} />
        <Route path="herwaree/BirthdayPicker" element={<BirthdayPicker />} />
        <Route path="herwaree/BreastFront" element={<BreastFront />} />
        <Route path="herwaree/periods" element={<PeriodUpsAndDowns />} />
        <Route path="herwaree/profile" element={<Profile />} />
        <Route path="herwaree/settings" element={<SettingsPage />} />
        <Route path="herwaree/contraceptives" element={<Contraceptives />} />
        <Route path="herwaree/achieve" element={<AchieveWithUs />} />
        <Route path="herwaree/cycle" element={<Cycle />} />
        <Route path="herwaree/cycletracker" element={<CycleTracker />} />
        <Route path="herwaree/symptom" element={<Symptom />} />
        <Route path="herwaree/flowchanges" element={<FlowChanges />} />
        <Route path="herwaree/lumps" element={<Lump />} />
        <Route path="herwaree/supplement" element={<Supplement />} />
        <Route path="herwaree/health" element={<Health />} />
        <Route path="herwaree/noticedsymptoms" element={<NoticedSymptoms />} />
        <Route path="herwaree/WalletWidget" element={<WalletWidget />} />
        <Route path="herwaree/BreastMonitor" element={<BreastMonitor />} />
        <Route path="herwaree/mammogram" element={<Mammogram />} />
        <Route path="herwaree/Further" element={<Further />} />
        <Route path="herwaree/symptomor" element={<Symptomor />} />
        <Route path="herwaree/check" element={<Check />} />
        <Route path="herwaree/conditions" element={<Conditions />} />
        <Route path="herwaree/Walkthrough" element={<Walkthrough />} />
        <Route path="herwaree/screening" element={<Screening />} />
        <Route path="herwaree/birthcontrol" element={<Birthcontrol />} />
        <Route path="herwaree/more" element={<More />} />
        <Route path="herwaree/blog" element={<Blog />} />
        <Route path="herwaree/community" element={<Community />} />
      </>
    )
  );

  return (
      <RouterProvider router={router} />
    
  );
}

export default App;
