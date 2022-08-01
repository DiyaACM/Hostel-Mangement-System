import { Link } from "react-router-dom";
const Navbar = () => {
    return (  
        <nav className="navbar navbar-expand-lg " id="nav">
        <div className="container-fluid">
          <div className="navbar-header" >
            <Link to ="/Home" class="navbar-brand">Hostel Management</Link>
          </div>
          <ul className="nav navbar-nav" id = "nav-bar">
            <li className="active"><Link to="/User">Home</Link></li>
            <li><Link to="/User">MH</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
            <li><Link to="/Home">Logout</Link></li>
          </ul>
        </div>
      </nav>
    );
}
 
export default Navbar;