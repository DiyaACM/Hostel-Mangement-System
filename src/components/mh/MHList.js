import { useState } from "react";
import { Link } from "react-router-dom";
import StudentList from "./MHstudentList";
const MHList = () => {
  const [students, setStudents] = useState([
    { Name: "Student 1", Year: "2", class: "CSA", id: 1 },
    { Name: "Student 2", Year: "4", class: "ECA", id: 2 },
    { Name: "Student 3", Year: "3", class: "CSB", id: 3 },
    { Name: "Student 4", Year: "1", class: "ECB", id: 4 },
    { Name: "Student 5", Year: "2", class: "EEE", id: 5 },
    { Name: "Student 6", Year: "3", class: "EB", id: 6 },
    { Name: "Student 7", Year: "3", class: "CSA", id: 7 },
  ]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg " id="nav">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/home" class="navbar-brand">
              Hostel Management
            </Link>
          </div>
          <ul className="nav navbar-nav" id="nav-bar">
            <li className="active">
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/mh-list">List of alloted Students</Link>
            </li>
            <li>
              <Link to="/mh">Register</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="MHstudents">
        <table>
          <StudentList students={students} />
        </table>
      </div>
    </div>
  );
};

export default MHList;
