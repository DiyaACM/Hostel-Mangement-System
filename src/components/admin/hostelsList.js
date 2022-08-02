import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";

export default function AdminHostelList() {
  const [hostels, setHostels] = useState([]);

  useEffect(() => {
    var docRef = db.collection("hostels");
    docRef
      .get()
      .then((doc) => {
        if (doc.docs) {
          const hostelData = [];
          doc.docs.forEach((d) => hostelData.push(d.data()));
          setHostels(hostelData);
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);
  return (
    <div className="User">
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          display: "block",
        }}
      >
        Hostels
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
        {hostels.map((hostel, index) => (
          <div className="hostel-preview" key={index}>
            <a href="\">
              <h2 className="hostel-title">{hostel.hostelName}</h2>
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
                      {hostel.description}
                      <br></br>
                      <br></br>
                    </p>
                    <p style={{ color: "#14A5FF" }}>
                      Location: {hostel.hostelAddress}
                    </p>
                    <br></br>

                    <button>
                      <Link to={`/admin-hostel-application/${hostel.uid}`}>
                        Application
                      </Link>
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
