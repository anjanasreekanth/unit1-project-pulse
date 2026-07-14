function AverageScoreCard({ activities }) {
  const max = 10; // max score possible
  const totalActivities = activities.length; // total activities
  const totalScore = activities.reduce(
    (sum, activity) => sum + activity.score,
    0,
  ); // function to calculate total score

  //average score
  const averageScore = Math.round(totalScore / totalActivities, 2) || 7.5;
  const maxScorePossible = totalActivities * max; // maximum score possible
  //calculate progress percentage., math.round to limit to 2 decimal
  const progressPercentage = Math.round(
    (totalScore / maxScorePossible) * 100,
    2,
  );

  return (
    //conditional rendering
    //if no activities then display a message
    <div className="card">
      <div className="card-header">Average Score</div>
      {totalActivities === 0 ? (
        <p className="placeholder-text">Log activities to see your score!</p>
      ) : (
        <>
          <div className="score-display">
            <span className="score-value">{averageScore}</span>
            <span className="score-max">/ {max}</span>
          </div>
          <div className="progress-section">
            <div className="progress-header">
              <span>Performance</span>
              <span>{progressPercentage} %</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${progressPercentage}%`,
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default AverageScoreCard;
