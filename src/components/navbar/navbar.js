import { useContext } from "react";
import logo from "../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { handleLogout } = useContext(AuthContext);

  let navigate = useNavigate();

  function goToHomePage() {
    navigate("/");
  }

  const logout = () => {
    handleLogout();
    goToHomePage();
  };

  return (
    <nav className="navbar navbar-expand-lg " id="nav">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/home" className="navbar-brand">
            <img src={logo} className="navlogo" alt="logo" />
          </Link>
        </div>
        <ul className="nav navbar-nav" id="nav-bar">
          <li className="active">
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/mh">MH</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li onClick={logout}>
            <Link to="#">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
