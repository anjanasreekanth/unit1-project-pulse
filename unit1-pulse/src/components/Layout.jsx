import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";
function Layout() {
  return (
    <div className="app-container">
      {/* The header scetion */}
      <header className="app-header">
        <a href="/dashboard" className="logo">
          <img src="/logo.svg" alt="Pulse" />
        </a>

        <NavBar />
      </header>

      {/* main content area */}
      <main className="main-content-area">
        <div className="content-wrapper">
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
