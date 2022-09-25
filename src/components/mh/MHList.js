import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";

const MHList = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    async function getData() {
      const mhCollectionRef = db.collection("mh");
      mhCollectionRef
        .get()
        .then((doc) => {
          if (doc.docs) {
            const studentData = [];
            doc.docs.forEach((d) => studentData.push(d.data()));

            studentData.sort(function(a,b) { 
              let cgpa1= parseFloat(a.cgpa);
              let cgpa2= parseFloat(b.cgpa);
              return cgpa2 - cgpa1;});
            setStudents(studentData);
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    }
    getData()
    console.log(students)
  }, []);

  return (
    <div>
      <div className="User">
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
            display: "block",
          }}
        >
          Students
        </h1>
        <table>
          <tbody>
            <tr>
              {/* <th id="search">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                ></input>
              </th>
              <th id="search-btn"></th> */}
            </tr>
          </tbody>
        </table>
        <div className="hostel-list">
          {students.map((student, index) => (
            <div className="hostel-preview" key={index}>
              <a href="/admin-students-list">
                <h2 className="hostel-title">{student.name}</h2>
              </a>
              <table>
                <tbody>
                  <tr>
                    <th>
                      <img
                        src={require(`../../img/hostel${(index % 2) + 1}.jpg`)}
                        className="hostel-image"
                        alt="random"
                      />
                    </th>
                    <th>
                      <p>
                        {student.address}
                        <br></br>
                        <br></br>
                      </p>
                      <p style={{ color: "#14A5FF" }}>Phone: {student.phone}</p>
                      <br></br>
                      <p style={{ color: "#14A5FF" }}>Email: {student.email}</p>
                      <p style={{ color: "#14A5FF" }}>Distance: {student.distance}</p>
                      <p style={{ color: "#14A5FF" }}>CGPA: {student.cgpa}</p>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MHList;
