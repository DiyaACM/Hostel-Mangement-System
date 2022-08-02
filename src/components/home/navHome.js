import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
const Navhome = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="nav navbar-nav" id="homenav">
          <li className="active">
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navhome;
