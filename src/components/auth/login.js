import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import { auth, db } from "../../firebase/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { handleUser } = useContext(AuthContext);

  let navigate = useNavigate();
  function goToHome() {
    navigate("/home");
  }

  function goToHostelAdminHome() {
    navigate("/hostel-admin");
  }

  function goToAdminHome() {
    navigate("/admin");
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    if (email && pass) {
      auth
        .signInWithEmailAndPassword(email, pass)
        .then((res) => {
          handleUser(res.user);

          db.collection("users")
            .doc(res.user.uid)
            .get()
            .then((doc) => {
              if (doc.exists) {
                goToHome();
              } else {
                db.collection("hostels")
                  .doc(res.user.uid)
                  .get()
                  .then((doc) => {
                    if (doc.exists) {
                      goToHostelAdminHome();
                    } else {
                      goToAdminHome();
                    }
                  });
              }
            });
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
            <h1>Login</h1>
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
              <button type="submit">Login</button>
              <p>
                Don't have an account? <Link to="/signin">Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
