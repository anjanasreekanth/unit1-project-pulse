import ActivityLogForm from "../components/ActivityLogForm";
import ActivityTable from "../components/ActivityTable";
import AverageScoreCard from "../components/AverageScoreCard";
import StreakCard from "../components/StreakCard";
function DashboardPage() {
  return (
    <div className="dashboard-grid">
        {/** left column */}
      <div className="dashboard-column left-column">
        <ActivityLogForm />
      </div>
        {/** right column */}
      <div className="dashboard-column right-column">
        <AverageScoreCard />
        <div className="streak-card">
            <StreakCard />
        </div>
        <div className="activity-table-container">
            <ActivityTable />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
