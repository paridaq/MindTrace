import { Link, useNavigate } from "react-router"; // react-router-dom in v6, but user uses 'react-router' in imports
import "./Nav.css";

function Nav() {
   const navigate = useNavigate();

   return (
      <nav className="navbar">
         <div className="navbar__logo">
            <Link to="/">mindtrace</Link>
         </div>

         <div className="navbar__links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/people" className="nav-link">People</Link>
            <Link to="/questions" className="nav-link">Questions</Link>
            <Link to="/books" className="nav-link">Books</Link>
         </div>

         <div className="navbar__actions">
            <button className="btn btn--link" onClick={() => navigate("/login")}>
               Login
            </button>
            <button className="btn btn--primary btn--nav" onClick={() => navigate("/register")}>
               Register
            </button>
         </div>
      </nav>
   );
}

export default Nav;