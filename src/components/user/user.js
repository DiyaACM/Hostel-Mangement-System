import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import HostelList from "../hostel/hostelList";
import Navbar from "../navbar/navbar";

const User = () => {
  const [search, setSearch] = useState("");

  const [hostels, setHostels] = useState([]);

  const filteredHostel =
    search.length === 0
      ? hostels
      : hostels.filter((hostel) =>
          hostel.hostelName.toLowerCase().includes(search.toLowerCase())
        );

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
      <Navbar />
      <table>
        <tbody>
          <tr>
            <th id="search">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              ></input>
            </th>
            <th id="search-btn"></th>
          </tr>
        </tbody>
      </table>
      <HostelList hostels={filteredHostel} />
    </div>
  );
};

export default User;
