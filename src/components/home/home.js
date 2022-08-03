import Navhome from "./navHome";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div>
          <Navhome />
        </div>
        <div className="container">
          <p>MECostel</p>
          <div className="container2">
            <p>
              One stop solution for MECians to search for hostels.<br></br>
              Connecting with nearby hostels..
            </p>
          </div>
          <button className="btn1">
            <Link to={"/login"}>Login</Link>
          </button>
          <button className="btn2">
            <Link to={"/signin"}>Sign Up</Link>
          </button>
          <button className="btn2" style={{ width: "150px" }}>
            <Link to={"/register-hostel"}>Register Hostel</Link>
          </button>
          <button className="btn2" style={{ width: "150px" }}>
            <Link to={"/register-admin"}>Register Admin</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
