import { Link } from "react-router-dom";
const MH = () => {
  return (
    <div className="MH">
      <div className="dark-overlay landing-inner text-light">
        <nav className="navbar navbar-expand-lg " id="navmh">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/mh" class="navbar-brand">
                MH
              </Link>
            </div>
            <ul className="nav navbar-nav" id="nav-bar">
              <li className="active">
                <Link to="/home">Home</Link>
              </li>
              <li className="active">
                <Link to="/mh-list">List of Alloted Students</Link>
              </li>
              <li className="active">
                <Link to="/register-mh">Register</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <p> MEC MH</p>
          <div className="container2">
            <p>
               A Men's Hostel run by MEC and Mess run by Students, making it the best choice <br></br>
              A second home away from Home..
            </p>
          </div>
          <button href="/" className="btnmh">
            {" "}
            <Link to="/register-mh">Register</Link>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MH;
