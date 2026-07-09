import { useState } from "react";
import ActivityLogForm from "../components/ActivityLogForm";
import ActivityTable from "../components/ActivityTable";
import AverageScoreCard from "../components/AverageScoreCard";
import StreakCard from "../components/StreakCard";
function DashboardPage() {
  //1. Create state for integration
  const [activities, setActivities] = useState([
    {
      id: 1,
      date: "2026-06-20",
      activity: "Running",
      duration: "60 mts",
      activityType: "cardio",
      score: 8,
      water: 2500,
      sleep: 7,
    },
    {
      id: 2,
      date: "2026-06-21",
      activity: "Walking",
      activityType: "cardio",
      duration: "30 mts",
      score: 7,
      water: 1800,
      sleep: 8,
    },
    {
      id: 3,
      date: "2026-06-22",
      activity: "Meditation",
      duration: "30 mts",
      activityType: "mindfulness",
      
      score: 7,
      water: 2000,
      sleep: 7,
    },
  ]);
  //console.log(activities);
  // 2. event handler to manage add acitivity
  const handleAddActivity = (newActivity) => {
    // add new activity with id
    const newActivityData = {
      ...newActivity,
      id: Date.now(), // generating dynamic id
      score: Math.floor(Math.random() * 10) + 5, // mock score generateor
    };

    // update the state
    setActivities([...activities, newActivityData]);
    alert("Activity Log Added!");
  };

  //3. delete activity handler
  const handleDeleteActivity = (idToDelete) => {
    // filter activity that is not maching the id
    const updatedActivities = activities.filter(
      (activity) => activity.id !== idToDelete,
    );
    setActivities(updatedActivities);
    alert("Activity Deleted!");
  };

  //streak - mock based on number of activities
  const calculateStreak = (activityCount) => {
    if (activityCount < 3) return 3;
    if (activityCount < 10) return 7;
    return 14; // if 10+ then 14 days streak
  };

  return (
    <div className="dashboard-grid">
      {/** left column */}
      <div className="dashboard-column left-column">
        <ActivityLogForm onAddActivity={handleAddActivity} />
      </div>
      {/** right column */}
      <div className="dashboard-column right-column">
           <div className="card-row"> 
        <AverageScoreCard activities={activities} />
        <div className="streak-card">
          <StreakCard streakValue={calculateStreak(activities.length)} />
        </div>
        </div>
        <div className="activity-table-container">
          <ActivityTable
            activities={activities}
            onDeleteActivity={handleDeleteActivity}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
