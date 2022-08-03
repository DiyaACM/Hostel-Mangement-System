import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";

const HostelAdmin = () => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {}, [currentUser]);

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
    
    <div className="HostelAdmin">
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
        <Link to="/hostel-applications">List of Registered Students</Link>
        <hr className="line"></hr>
        <Link to="/hostel-edit"> Edit Hostel Details</Link>
        <hr className="line"></hr>
      </div>
      
    </div>
  );
};

export default HostelAdmin;
