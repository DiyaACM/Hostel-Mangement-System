import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase/firebase";
import logo from "../../img/logo.png";

function HostelRegistration() {
  const { currentUser } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [preference, setPreference] = useState("");

  const [applied, setApplied] = useState(false);

  const { id } = useParams();

  let navigate = useNavigate();

  function goToHomePage() {
    navigate("/home");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("applications")
      .doc("hostels")
      .collection(id)
      .doc(currentUser.uid)
      .set({
        name: name,
        place: place,
        address: address,
        preference: preference,
        contact: contact,
      })
      .then(() => {
        goToHomePage();
      })
      .catch((er) => {
        console.log(er);
        alert(er);
      });
  };

  const fetchUserProfileData = () => {
    var docRef = db.collection("users").doc(currentUser.uid);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setName(data.name);
          setAddress(data.address);
          setContact(data.phone);
          setPlace(data.place);
          setPreference(data.preference || "");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  useEffect(() => {
    if (!currentUser?.uid) return;
    var docRef = db
      .collection("applications")
      .doc("hostels")
      .collection(id)
      .doc(currentUser.uid);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setName(data.name);
          setAddress(data.address);
          setContact(data.contact);
          setPlace(data.place);
          setPreference(data.preference);
          setApplied(true);
        } else {
          fetchUserProfileData();
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser?.uid, id]);

  return (
    <div className="loginSignin">
      <div className="ls__left">
      <img src={logo} style={{height: "100px", width:"130px",marginTop:"55%"}} alt="logo" />
      </div>
      <div className="ls__right">
        <div className="ls__right_container">
          <form className="hostelregistrationform">
            <h1>Apply to a Hostel</h1>
            <div className="ls_input_row">
              <div className="ls_input_container">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="ls_input"
                />
              </div>
            </div>
            <div className="ls_input_row">
              <div className="ls_input_container">
                <label>Place</label>
                <input
                  type="text"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  placeholder="Place"
                  className="ls_input"
                />
              </div>
            </div>
            <div className="ls_input_row">
              <div className="ls_input_container">
                <label>Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  className="ls_input"
                />
              </div>
            </div>
            <div className="ls_input_row">
              <div className="ls_input_container">
                <label>Contact No.</label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Contact"
                  className="ls_input"
                />
              </div>
            </div>

            <div className="ls_input_submit">
              <button type="submit" onClick={handleSubmit}>
                {applied ? "Edit" : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HostelRegistration;
