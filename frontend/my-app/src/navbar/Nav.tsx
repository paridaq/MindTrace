import { Link, useNavigate } from "react-router"; // react-router-dom in v6, but user uses 'react-router' in imports
import "./Nav.css";

function Nav() {
   const navigate = useNavigate();
   const user_id = localStorage.getItem("user_id");
   const username = localStorage.getItem("username");

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
            <Link to="/todo" className="nav-link">Todo</Link>
         </div>

         <div className="navbar__actions">
            {username ? (
               <span className="navbar__username" style={{ fontWeight: "600", color: "#121212" }}>
                  Hello, {username}
               </span>
            ) : (
               <>
                  <button className="btn btn--link" onClick={() => navigate("/login")}>
                     Login
                  </button>
                  <button className="btn btn--primary btn--nav" onClick={() => navigate("/register")}>
                     Register
                  </button>
               </>
            )}
         </div>
      </nav>
   );
}

export default Nav;