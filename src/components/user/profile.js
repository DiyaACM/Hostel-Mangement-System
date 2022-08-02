import { useContext, useEffect, useState } from "react";
// import profileImage from "../../img/profile2.png";
import { db } from "../../firebase/firebase";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbar";
const Profile = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const { currentUser } = useContext(AuthContext);

  let navigate = useNavigate();

  function goToHomePage() {
    navigate("/home");
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(currentUser.uid)
      .update({
        name: name,
        username: username,
        phone: phone,
        address: address,
      })

      .then(() => {
        goToHomePage();
      })
      .catch((er) => {
        console.log(er);
        alert(er);
      });
  };

  useEffect(() => {
    var docRef = db.collection("users").doc(currentUser.uid);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setAddress(data.address);
          setEmail(data.email);
          setPhone(data.phone);
          setUsername(data.username);
          setName(data.name);
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [currentUser.uid]);
  return (
    <div className="profile">
      <Navbar />
      <div className="ls__right_container">
        <form className="loginSignin__form" onSubmit={handleOnClick}>
          <h1>Profile</h1>
          <div className="ls_input_row">
            <div className="ls_input_container">
              <label>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="ls_input"
              />
            </div>
            <div className="ls_input_container">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
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
                disabled
                placeholder="Email"
                className="ls_input"
              />
            </div>
            <div className="ls_input_container">
              <label>Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/[^0-9]/g, ""))
                }
                placeholder="Phone"
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
          <div className="ls_input_submit">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
