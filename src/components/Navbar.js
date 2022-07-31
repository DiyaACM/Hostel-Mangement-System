import { Link } from "react-router-dom";
const Navbar = () => {
    return (  
        <nav class="navbar navbar-expand-lg " id="nav">
        <div class="container-fluid">
          <div class="navbar-header" >
            <Link to ="/Home" class="navbar-brand" >Hostel Management</Link>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="\">Home</a></li>
            <li><a href="\">MH</a></li>
            <li><a href="\">Profile</a></li>
            <li><a href="\">Logout</a></li>
          </ul>
        </div>
      </nav>
    );
}
 
export default Navbar;