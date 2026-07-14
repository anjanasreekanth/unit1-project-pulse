import ActivitySuggestion from "../components/ActivitySuggestion";
import DailyInspiration from "../components/DailyInspiration";
import WeeklyGoal from "../components/WeeklyGoal";

function MyPlanPage() {
  return (
    <section className="plan-page">
      <div className="plan-heading">
        <p className="plan-label">MY PLAN</p>
        <h1>Build your weekly wellness plan</h1>
      </div>
      <WeeklyGoal />
      <div className="plan-bottom-grid">
        <ActivitySuggestion />
      </div>
      <DailyInspiration />
    </section>
  );
}

export default MyPlanPage;
