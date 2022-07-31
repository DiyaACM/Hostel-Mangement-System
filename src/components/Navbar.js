import { Link } from "react-router-dom";
const Navbar = () => {
    return (  
        <nav class="navbar navbar-expand-lg " id="nav">
        <div class="container-fluid">
          <div class="navbar-header" >
            <Link to ="/Home" class="navbar-brand">Hostel Management</Link>
          </div>
          <ul class="nav navbar-nav" id = "nav-bar">
            <li class="active"><Link to="/User">Home</Link></li>
            <li><Link to="/User">MH</Link></li>
            <li><Link to="/User">Profile</Link></li>
            <li><Link to="/Home">Logout</Link></li>
          </ul>
        </div>
      </nav>
    );
}
 
export default Navbar;