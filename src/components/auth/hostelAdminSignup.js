import React, { useState } from "react";
import { auth, db } from "../../firebase/firebase";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";

function HostelAdminSignUp() {
  const [name, setName] = useState("");
  const [hostelName, setHostelName] = useState("");
  const [hostelAddress, setHostelAddress] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");
  const [emptyRooms, setEmptyRooms] = useState("");
  const [contact, setContact] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  function goToHostelAdminPage() {
    navigate("/hostel-admin");
  }

  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res) {
          db.collection("hostels").doc(res.user.uid).set({
            uid: res.user.uid,
            name: name,
            hostelName: hostelName,
            hostelAddress: hostelAddress,
            description: description,
            profilePhoto:
              "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
            dateJoined: firebase.firestore.FieldValue.serverTimestamp(),
            capacity: capacity,
            emptyRooms: emptyRooms,
            contact: contact,
            website: website,
            email: email,
          });
        }
      })
      .then(() => {
        goToHostelAdminPage();
      })
      .catch((er) => {
        console.log(er);
        alert(er);
      });
  };

  return (
    <div className="loginSignin">
      <div className="ls__left">
        <h3>Hostel Management System</h3>
      </div>
      <div className="ls__right">
        <div className="ls__right_container">
          <form className="adminsignupform">
            <h1>Sign Up as a Hostel Admin</h1>
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
              <div className="ls_input_container">
                <label>Hostel Name</label>
                <input
                  type="text"
                  value={hostelName}
                  onChange={(e) => setHostelName(e.target.value)}
                  placeholder="Hostel Name"
                  className="ls_input"
                />
              </div>
            </div>
            <div className="ls_input_row">
              <div className="ls_input_container">
                <label>Hostel Address</label>
                <input
                  type="text"
                  value={hostelAddress}
                  onChange={(e) => setHostelAddress(e.target.value)}
                  placeholder="Hostel Address"
                  className="ls_input"
                />
              </div>
            </div>
            <div className="ls_input_row">
              <div className="ls_input_container">
                <label>Description</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  className="ls_input"
                />
              </div>
            </div>
            <div className="ls_input_row">
              <div className="ls_input_container">
                <label>Total Capacity</label>
                <input
                  type="text"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  placeholder="total Capacity"
                  className="ls_input"
                />
              </div>
              <div className="ls_input_container">
                <label>No. of empty rooms</label>
                <input
                  type="text"
                  value={emptyRooms}
                  onChange={(e) => setEmptyRooms(e.target.value)}
                  placeholder="No. of empty rooms"
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
              <div className="ls_input_container">
                <label>Website (if any)</label>
                <input
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Website"
                  className="ls_input"
                />
              </div>
            </div>

            <div className="ls_input_row">
              <div className="ls_input_container">
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="ls_input"
                />
              </div>
              <div className="ls_input_container">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="ls_input"
                />
              </div>
            </div>

            <div className="ls_input_submit">
              <button type="submit" onClick={handleRegister}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HostelAdminSignUp;
