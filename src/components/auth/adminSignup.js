import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import { auth, db } from "../../firebase/firebase";

function AdminSignup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const { handleUser } = useContext(AuthContext);

  let navigate = useNavigate();

  function goToAdminHome() {
    navigate("/admin");
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    if (email && pass) {
      auth
        .createUserWithEmailAndPassword(email, pass)
        .then((res) => {
          if (res) {
            handleUser(res.user);
            db.collection("admin")
              .doc(res.user.uid)
              .set({
                uid: res.user.uid,
                name: name,
                profilePhoto:
                  "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
                email: email,
              })
              .then(() => {
                goToAdminHome();
              });
          }
        })

        .catch((er) => {
          console.log(er);
          alert(er);
        });
    } else {
      alert("Enter email and password");
    }
  };

  return (
    <div className="loginSignin">
      <div
        className="ls__left"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 style={{ fontSize: "33px" }}>Hostel Management System</h3>
      </div>
      <div className="ls__right">
        <div className="ls__right_container">
          <form className="loginSignin__form" onSubmit={handleOnClick}>
            <h1>Admin Sign in</h1>
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
              <div className="ls_input_container"></div>
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
              <div className="ls_input_container"></div>
            </div>
            <div className="ls_input_row">
              <div className="ls_input_container">
                <label>Password</label>
                <input
                  type="password"
                  value={pass}
                  placeholder="Password"
                  onChange={(e) => setPass(e.target.value)}
                  className="ls_input"
                />
              </div>
              <div className="ls_input_container"></div>
            </div>

            <div className="ls_input_submit">
              <button type="submit">Sign in</button>
              <p>
                Have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminSignup;
