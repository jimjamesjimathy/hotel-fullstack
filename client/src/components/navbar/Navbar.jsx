import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link
          to="/"
          className="logo-wrap"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <span className="logo">JK || BOOKING</span>
        </Link>
        {user ? (
          <>
            <div className="loggedIn-btn-box">
              <span className='box-text' style={{fontSize: '12px'}}>
                logged in as:<p>{user.username}</p>
              </span>
            </div>
            <button className='logout-btn' onClick={handleLogOut}>Log Out</button>
          </>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
