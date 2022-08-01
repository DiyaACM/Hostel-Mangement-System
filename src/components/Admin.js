import { Link } from "react-router-dom";

const Admin = () => {
    return (  
        <div className="admin">
            <Link to="/List">List of Students</Link>
            <hr className="line"></hr>
            <Link to="/List">List of Students-MH</Link>
            <hr className="line"></hr>
            <Link to="/List">List of Hostels</Link>
            <hr className="line"></hr>
        </div>
    );
}
 
export default Admin;