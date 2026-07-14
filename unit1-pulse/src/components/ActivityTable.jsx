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
            Showing {activities.length ? 1 : 0} to {activities.length} of{" "}
            {activities.length} activities
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
          <div className="col-water">water</div>
          <div className="col-sleep">sleep</div>
          <div className="col-actions">Actions</div>
        </div>
        {/* Rows*/}
        {activities.length === 0 ? (
          <div className="empty-row"> No Activities logged </div>
        ) : (
          activities.map((activity) => (
            <div className="table-row " key={activity.id}>
              <div className="col-date" data-label="Date">{activity.date} </div>
              <div className="col-activity" data-label="Activity">{activity.activity} </div>
              <div className="col-type" data-label="Type">{activity.activityType} </div>

              <div className="col-duration" data-label="Duration">{activity.duration} </div>

              <div className="col-score" data-label="Score">{activity.score} </div>
              <div className="col-water" data-label="Water">{activity.water} ml</div>
              <div className="col-sleep" data-label="Sleep">{activity.sleep} hrs</div>
              <div className="col-actions" data-label="Actions">
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
