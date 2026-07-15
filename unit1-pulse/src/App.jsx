import "./App.css";
import Layout from "./components/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./Pages/DasboardPage";
import AboutPage from "./Pages/AboutPage";
import MyPlanPage from "./Pages/MyPlanPage";
import LoginPage from "./Pages/LoginPage";
import { useState } from "react";
import HomePage from "./Pages/HomePage";
function App() {
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
  const [weeklyGoal, setWeeklyGoal] = useState(4);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
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
  //login

  const login = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };
  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage onLogin={login} />} />
      </Routes>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout userName={userName} />}>
          <Route index element={<HomePage />} />
          <Route
            path="dashboard"
            element={
              <DashboardPage
                activities={activities}
                weeklyGoal={weeklyGoal}
                onAddActivity={handleAddActivity}
                onDeleteActivity={handleDeleteActivity}
              />
            }
          />
          <Route path="about" element={<AboutPage />} />
          <Route
            path="my-plan"
            element={
              <MyPlanPage
                activities={activities}
                goal={weeklyGoal}
                onGoalChange={setWeeklyGoal}
                onAddActivity={handleAddActivity}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}
export default App;
