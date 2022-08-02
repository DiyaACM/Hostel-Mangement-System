import { Link } from "react-router-dom";
import logo from '../img/logo.png'
const Navhome = () => {
    return (  
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="navbar-header" >
            <Link to="/" class="navbar-brand" ><img  src = {logo}/></Link>
          </div>
          <ul className="nav navbar-nav" id = "homenav">
            <li className="active"><Link to="/login">Login</Link></li>
            <li><Link to="/signin">Sign Up</Link></li>
          </ul>
        </div>
      </nav>
    );
}
 
export default Navhome;