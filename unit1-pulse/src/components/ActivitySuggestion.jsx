import { useState } from "react";
import Button from "./Button";

function ActivitySuggestion({ suggestion, onFindSuggestion, onAddActivity }) {
  const [time, setTime] = useState("short");
  const [energy, setEnergy] = useState("low");
  const [wasAdded, setAddActivty] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setAddActivty(false);
    onFindSuggestion(time, energy);
  };

  const addActivity = () => {
    onAddActivity();
    setAddActivty(true);
  };

  return (
    <section className="plan-card suggestion-section">
      <h2> What should I do today?</h2>
      <p>Answer two questions for a suggestion.</p>
      <form className="suggestion-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>How much time do you have?</legend>
          <label>
            <input
              type="radio"
              name="time"
              value="short"
              checked={time === "short"}
              onChange={(event) => setTime(event.target.value)}
            />
            Less than 60 minutes
          </label>
          <label>
            <input
              type="radio"
              name="time"
              value="long"
              checked={time === "long"}
              onChange={(event) => setTime(event.target.value)}
            />
            60 minutes or more
          </label>
        </fieldset>
        <fieldset>
          <legend>What is your energy level?</legend>
          <label>
            <input
              type="radio"
              name="energy"
              value="low"
              checked={energy === "low"}
              onChange={(event) => setEnergy(event.target.value)}
            />
            Low
          </label>
          <label>
            <input
              type="radio"
              name="energy"
              value="medium"
              checked={energy === "medium"}
              onChange={(event) => setEnergy(event.target.value)}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              name="energy"
              value="high"
              checked={energy === "high"}
              onChange={(event) => setEnergy(event.target.value)}
            />
            High
          </label>
        </fieldset>
        <Button className="find-button" type="submit">
          Get suggestion
        </Button>
      </form>
      {suggestion && (
        <div className="suggestion-result">
          <div>
            <span>Recommended for you</span>
            <strong>
              {suggestion.activity} for {suggestion.duration} minutes
            </strong>
          </div>
          <Button onClick={addActivity}> Log Activity</Button>
        </div>
      )}
      {wasAdded && (
        <p className="logged-message" role="status">
          {" "}
          Activity added!
        </p>
      )}
    </section>
  );
}

export default ActivitySuggestion;
