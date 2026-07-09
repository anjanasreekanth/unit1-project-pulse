function AverageScoreCard({ activities }) {
  const max = 10; // max score possible
  const totalActivities = activities.length; // total activities
  const totalScore = activities.reduce(
    (score, activity) => score + activity.score,
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
    <>
      {totalActivities === 0 ? (
        <div className="card average-score">
          <div>Average Score</div>
          <p className="placedholertext">Log activities to see your score!</p>
        </div>
      ) : (
        <div className="card average-score">
          <div className="card-header"> Average Score</div>
          {/**value display  */}
          <div className="score-value-container">
            <div className="score-value">{averageScore}</div>
            <div className="score-label">/ {max}</div>
          </div>
          {/**value display  */}
          <div className="activity-graph-container">
            <div className="progress-bar">
              {/* <div className="progress-label">Progress</div> */}
              <div className="progress-value">{progressPercentage} %</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AverageScoreCard;
