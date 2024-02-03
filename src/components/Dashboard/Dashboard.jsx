import DashboardBottom from "./DashboardBottom";
import DashboardTop from "./DashboardTop";

function Dashboard() {
  return (
    <div>
      <div className="flex-grow overflow-y-auto p-4 bg-white rounded mb-4">
        <DashboardTop />
      </div>
      <div className="flex-grow overflow-y-auto p-4 bg-white rounded">
        <DashboardBottom />
      </div>
    </div>
  );
}

export default Dashboard;
