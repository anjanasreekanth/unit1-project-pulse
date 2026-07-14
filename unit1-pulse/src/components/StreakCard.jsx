//import { useEffect, useState } from "react";
 //Adding External API is throwing CORS error and need to fix later 
 //added proxy in vite config stil issue is not fixed
import { getRandomQuote } from "./randomQouteGeneraor";
//const QUOTE_API = "/api/random";
function StreakCard({ streakValue = 14, currentDays = 5, weeklyGoal = 7 }) {
  //random quote - will move ot API
  const quote = getRandomQuote();
//const progress = (currentDays/weeklyGoal) / 100;
   return (
    <div className="streak-card">
      <div className="streak-header">
        {/**icon placeholder */}
        <span className="fire"> 🔥</span>
        {/**Streak value  */}
        <div className="streak-number"> {streakValue}</div>
        {/**subtext below streak value */}
        <div className="streak-label"> STREAK DAYS</div>
      </div>
      {/* Progress bar 
      <div className="progress-section">
        <div className="progress-header">
          <span> weekly goal </span>
          <span>
            {currentDays/weeklyGoal}
          </span>
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{width: `${progress}%`}} />
        <div className="progress-text">{progress} % complete</div>
      </div>*/}
      {/**Motivational text */}
      <p className="motivational-text">💡 {quote.quote}</p>
    </div>
  );
}

export default StreakCard;
