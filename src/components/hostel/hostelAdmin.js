import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const HostelAdmin = () => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {}, [currentUser]);
  return (
    <div className="HostelAdmin">
      <Link to="/hostel-applications">List of Registered Students</Link>
      <hr className="line"></hr>
      <Link to="/hostel-edit"> Edit Hostel Details</Link>
      <hr className="line"></hr>
    </div>
  );
};

export default HostelAdmin;
