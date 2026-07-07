function ActivityTable() {
  const activities = [
    {
      id: 1,
      date: "2026-06-20",
      activity: "Running",
      duration: "1 hour",
      score: 8,
    },
    {
      id: 2,
      date: "2026-06-21",
      activity: "Walking",
      duration: "30 mts",
      score: 7,
    },
    {
      id: 1,
      date: "2026-06-20",
      activity: "Meditation",
      duration: "30 mts",
      score: 7,
    },
  ];
  return (
    <div className="activity-table-container">
      <div className="table-footer">
        <div className="footer">
          <span className="pagination-text">
            {" "}
            Showing 1 to 5 of 10 activities
          </span>
        </div>
        <div className="pagination-controls">
          <button> &lt;&lt; </button>
          <button> 1 </button>
          <button> 2 </button>
          <button> 3 </button>
          <button> &gt;&gt; </button>
        </div>
      </div>
      <div className="activity-table">
        {/**Header  */}
        <div className="table-row table-header">
          <div className="col-date"> Date</div>
          <div className="col-activity">Activity</div>
          <div className="col-duration">Duration</div>
          <div className="col-actions">Actions</div>
        </div>
        {/* Rows*/}
        {activities.map((activity) => (
          <div className="row" key={activity.id}>
            <div className="col-date">{activity.date} </div>
            <div className="col-activity">{activity.activity} </div>
            <div className="col-duration">{activity.duration} </div>
            <div className="col-score">{activity.score} </div>
            <div className="col-actopms">
              <button className="btn edit-btn">Edit</button>
              <button className="btn delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityTable;
