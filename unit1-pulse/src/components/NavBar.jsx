import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navigation-links">
      <Link to="/"> Home </Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/about">About</Link>
      <Link to="/my-plan">My Plan</Link>
    </nav>
  );
}

export default NavBar;
