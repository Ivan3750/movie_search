// Layout Component
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>

      <nav className="details-nav">
        <Link to="/" className="nav-link">Home</Link>
        <span className="nav-separator">|</span>
        <Link to="/movies" className="nav-link">Movies</Link>
      </nav>
      </header>
      <main>
      <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default Layout;