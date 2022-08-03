import { useContext } from "react";
import logo from "../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const Admin = () => {
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
    <div className="admin">
        <nav className="navbar navbar-expand-lg " id="nav">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <img src={logo} className="navlogo" alt="logo" />
            </Link>
          </div>
          <ul className="nav navbar-nav" id="nav-bar">
            <li className="active">
              <Link to="/admin">Home</Link>
            </li>
            <li onClick={logout}>
              <Link to="#">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="admin-content">
        <Link to="/admin-students-list">List of Students</Link>
        <hr className="line"></hr>
        <Link to="/List">List of Students-MH</Link>
        <hr className="line"></hr>
        <Link to="/admin-hostel-list">List of Hostels</Link>
        <hr className="line"></hr>
      </div>
     
    </div>
  );
};

export default Admin;
