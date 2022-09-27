import { Link } from "react-router-dom";
// import listlogo from "../../img/hostel1.jpg";
const HostelList = ({ hostels }) => {
  return (
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
                  <p style={{ color: "#14A5FF" }}>
                    Contact: {hostel.contact}
                  </p>
                  <br></br>
                  <p style={{ color: "#14A5FF" }}>
                    Capacity: {hostel.capacity}
                  </p>
                  <br></br>
                  <p style={{ color: "#14A5FF" }}>
                    Vacancy: {hostel.emptyRooms}
                  </p>
                  <br></br>

                  <button>
                    <Link to={`/hostel-application/${hostel.uid}`}>
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
  );
};

export default HostelList;
