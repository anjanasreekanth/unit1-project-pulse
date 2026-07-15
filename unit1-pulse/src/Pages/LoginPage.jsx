import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
function LoginPage({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(name);
    navigate("/");
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <img className="login-logo" />
        <p className="login-label">LOGIN</p>
        <h1>Welcome to pulse</h1>
        <p className="login-description">
          Sign in to view your Activity dashboard
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="login-name">Name</label>
          <input
            id="login-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            required
          ></input>
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter any password"
            required
          ></input>
          <Button type="submit">Login</Button>
        </form>
        <p className="note">
          This is a demo login and any name and password will work{" "}
        </p>
      </section>
    </main>
  );
}

export default LoginPage;
