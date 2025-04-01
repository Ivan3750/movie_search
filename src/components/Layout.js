// Layout Component
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/movies">Movies</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;