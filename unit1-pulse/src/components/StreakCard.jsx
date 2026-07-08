//import { useEffect, useState } from "react";
 //Adding External API is throwing CORS error and need to fix later 
 //added proxy in vite config stil issue is not fixed
import { getRandomQuote } from "./randomQouteGeneraor";
//const QUOTE_API = "/api/random";
function StreakCard({ streakValue = 14 }) {
  //random quote - will move ot API
  const quote = getRandomQuote();

   return (
    <div className="card streak-card">
      <div className="streak-content">
        {/**icon placeholder */}
        <span className="icon"> 🔥</span>
        {/**Streak value  */}
        <div className="streak-value"> {streakValue}</div>
        {/**subtext below streak value */}
        <div className="streak-subtext"> Days Streak</div>
      </div>
      {/**Motivational text */}
      <p className="motivational-text">💡 {quote.quote}</p>
    </div>
  );
}

export default StreakCard;
