function AverageScoreCard() {
  const score = 7.5;
  const total = 10;
  const progressPercentage = 75;

  return (
    <div className="card average-score">
      <div className="card-header"> Average Score</div>
      {/**value display  */}
      <div className="score-value-container">
        <div className="score-value">{score}</div>
        <div className="score-label">/ {total}</div>
      </div>
      {/**value display  */}
      <div className="activity-graph-container">
        <div className="progress-bar">
          <div className="progress-lable">Progress</div>
          <div className="progress-value">{progressPercentage} %</div>
        </div>
      </div>
    </div>
  );
}

export default AverageScoreCard;
