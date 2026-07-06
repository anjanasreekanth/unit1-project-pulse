function ActivityLogForm() {
  return (
    <div className="activity-form-container">
      <h3 className="form-title">Activity Log Form</h3>
      {/* Field 1 -> Date */}
      <div className="form-field full-width">
        <label htmlFor="date"> Date: </label>
        <input type="date" id="date" className="input-field" />
      </div>
      {/* Field 2 -> Activity */}
      <div className="form-field full-width">
        <label htmlFor="activity"> Activity: </label>
        <select id="activity" className="input-field">
          <option value="">Select An Activity</option>
          <option>Running</option>
          <option>Walking</option>
          <option>Meditation</option>
        </select>
      </div>
      {/* Field 3 -> Activity Type */}
      <div className="form-field full-width">
        <label htmlFor="activity-type"> Activity Type: </label>
        <select id="activity-type" className="input-field">
          <option value="">Select Type</option>
          <option>Cardio</option>
          <option>Strength</option>
        </select>
      </div>
      {/* separator line */}
      <div className="separator"></div>
      {/* Field 5 & Field 6*/}
      <div className="form-field full-width water-field">
        <label htmlFor="water"> Water: </label>
        <input type="number" id="water" className="input-field water-input" />
      </div>
      <div className="form-field full-width sleep-field">
        <label htmlFor="sleep"> Sleep: </label>
        <input type="number" id="sleep" className="input-field sleep-input" />
      </div>
      {/* Button */}
      <button className="btn-submit full-width-button">ADD LOG</button>
    </div>
  );
}

export default ActivityLogForm;
