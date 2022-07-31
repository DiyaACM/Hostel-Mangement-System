import { Link } from "react-router-dom";
const Navhome = () => {
    return (  
        <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <div class="navbar-header" >
            <Link to="/" class="navbar-brand" >Hostel Management</Link>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><Link to="/User">Login</Link></li>
            <li><Link to="/User">Sign Up</Link></li>
          </ul>
        </div>
      </nav>
    );
}
 
export default Navhome;