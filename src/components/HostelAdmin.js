import { Link } from "react-router-dom";

const HostelAdmin = () => {
    return (  
        <div className="HostelAdmin">
            <Link to="/List">List of  Registered Students</Link>
            <hr className="line"></hr>
            <Link to="/List"> Edit Hostel Details</Link>
            <hr className="line"></hr>
        </div>
    );
}
 
export default HostelAdmin;