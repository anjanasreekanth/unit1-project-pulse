function StreakCard(){
    const streakValue = 14
    return(
        <div className="card streak-card">
            <div className="streak-content">
                {/**icon placeholder */}
                <span className="icon"> 🔥</span>
                   {/**Streak value  */}
                   <div className="streak-value"> {streakValue }</div>
                   {/**subtext below streak value */}
                   <div className="streak-subtext"> Days Streak</div>
            </div>
            {/**Motivational text */}
            <p className="motivational-text">You are doing great ... keep up the good work!!</p>
        </div> 
    )
}

export default StreakCard