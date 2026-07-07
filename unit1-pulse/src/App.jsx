import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./Pages/DasboardPage";
import AboutPage from "./Pages/AboutPage";
import MyPlanPage from "./Pages/MyPlanPage"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="my-plan" element={<MyPlanPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
