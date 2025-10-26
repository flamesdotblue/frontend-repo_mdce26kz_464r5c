import { useState } from "react";
import HeaderBar from "./components/HeaderBar";
import TopTabs from "./components/TopTabs";
import DashboardContent from "./components/DashboardContent";

const TABS = ["Overview", "Analytics", "Users", "Settings", "Billing"];

function App() {
  const [currentTab, setCurrentTab] = useState("Overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50/60 text-slate-900">
      <HeaderBar />
      <TopTabs tabs={TABS} current={currentTab} onChange={setCurrentTab} />
      <DashboardContent currentTab={currentTab} />
    </div>
  );
}

export default App;
