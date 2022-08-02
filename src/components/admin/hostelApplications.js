import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";

export default function AdminApplicationView() {
  const [applications, setApplications] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    var docRef = db.collection("applications").doc("hostels").collection(id);
    docRef
      .get()
      .then((doc) => {
        if (doc.docs) {
          const applicationData = [];
          doc.docs.forEach((d) => applicationData.push(d.data()));
          setApplications(applicationData);
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);
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
          Applications
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
          {applications.map((application, index) => (
            <div className="hostel-preview" key={index}>
              <a href="\">
                <h2 className="hostel-title">{application.name}</h2>
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
                        {application.address}
                        <br></br>
                        <br></br>
                      </p>
                      <p style={{ color: "#14A5FF" }}>
                        Contact: {application.contact}
                      </p>
                      <br></br>
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
}
