import { Link } from "react-router-dom";
const Navhome = () => {
    return (  
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="navbar-header" >
            <Link to="/" class="navbar-brand" >Hostel Management</Link>
          </div>
          <ul className="nav navbar-nav" id = "homenav">
            <li className="active"><Link to="/User">Login</Link></li>
            <li><Link to="/Admin">Sign Up</Link></li>
          </ul>
        </div>
      </nav>
    );
}
 
export default Navhome;