function ActivityTable({ activities, onDeleteActivity }) {
  //  id: 1,
  //     date: "2026-06-20",
  //     activity: "Running",
  //     duration: "1 hour",
  //     score: 8,
  //     water: 2500,
  //     sleep: 7,
  return (
    <div className="activity-table-container">
      <div className="table-footer">
        <div className="footer">
          <span className="pagination-text">
            {" "}
            Showing 1 to {activities.length} of {activities.length} activities
          </span>
        </div>
        <div className="pagination-controls">
          <button> &lt;&lt; </button>
          {activities.map((activities, index) => (
            <button key={index}>{index + 1} </button>
          ))}
          <button> &gt;&gt; </button>
        </div>
      </div>

      <div className="activity-table">
        {/**Header  */}
        <div className="table-row table-header">
          <div className="col-date"> Date</div>
          <div className="col-activity">Activity</div>
          <div className="col-type">Type</div>
          <div className="col-duration">Duration</div>
          <div className="col-score">score</div>
          <div className="col-duration">water</div>
          <div className="col-duration">sleep</div>
          <div className="col-actions">Actions</div>
        </div>
        {/* Rows*/}
        {activities.length === 0 ? (
          <div className="empty-row"> No Activities logged </div>
        ) : (
          activities.map((activity) => (
            <div className="table-row " key={activity.id}>
              <div lassName="col-date">{activity.date} </div>
              <div className="col-activity">{activity.activity} </div>
              <div className="col-type">{activity.activityType} </div>

              <div className="col-duration">{activity.duration} </div>

              <div className="col-score">{activity.score} </div>
              <div className="col-duration">{activity.water} </div>
              <div className="col-duration">{activity.sleep} </div>
              <div className="col-actions">
                <button
                  className="btn edit-btn"
                  onClick={() => console.log(`Editing ${activity.id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn delete-btn"
                  onClick={() => onDeleteActivity(activity.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ActivityTable;
