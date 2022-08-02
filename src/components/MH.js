import { Link } from "react-router-dom";
const MH = () => {
    return ( 
        <div className="MH">
             <nav className="navbar navbar-expand-lg " id="nav">
                <div className="container-fluid">
                <div className="navbar-header" >
                    <Link to ="/Home" class="navbar-brand">Hostel Management</Link>
                </div>
                <ul className="nav navbar-nav" id = "nav-bar">
                    <li className="active"><Link to="/User">Home</Link></li>
                    <li className="active"><Link to="/User">List of Alloted Students</Link></li>
                    <li className="active"><Link to="/User">Register</Link></li>
                    <li><Link to="/Profile">Profile</Link></li>
                </ul>
                </div>
            </nav>
        </div>
     );
}
 
export default MH;