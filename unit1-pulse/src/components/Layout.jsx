import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div>
      {/* header scetion */}
      <header className="app-footer">
        <h1>Pulse</h1>
        <NavBar /> {/*navigation bar */}
      </header>

      {/* main content area */}
      <main>
        <div>
          <Outlet />
        </div>
      </main>

      {/* footer scetion */}
      <footer className="app-footer">
        &copy; {new Date().getFullYear()} Pulse All Rights Reserved
      </footer>
    </div>
  );
}
export default Layout;
