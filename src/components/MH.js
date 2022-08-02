import { Link } from "react-router-dom";
const MH = () => {
    return ( 
        <div className="MH">
              <div className="dark-overlay landing-inner text-light">
              <nav className="navbar navbar-expand-lg " id="navmh">
                    <div className="container-fluid">
                        <div className="navbar-header" >
                            <Link to ="/MH" class="navbar-brand">MH</Link>
                        </div>
                        <ul className="nav navbar-nav" id = "nav-bar">
                            <li className="active"><Link to="/User">Home</Link></li>
                            <li className="active"><Link to="/MHList">List of Alloted Students</Link></li>
                            <li className="active"><Link to="/User">Register</Link></li>
                            <li><Link to="/Profile">Profile</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                        <p> MEC MH</p>
                        <div className="container2">
                        <p>One stop solution for MECians' to search for hostels.<br></br>Connecting with nearby hostels..</p>
                        </div>                        
                        <button  href="/"className="btnmh"> Register </button>
                    </div>
              </div>
                
        </div>
     );
}
 
export default MH;