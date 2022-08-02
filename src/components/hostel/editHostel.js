import React, { useContext, useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function EditHostel() {
  const { currentUser } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [hostelName, setHostelName] = useState("");
  const [hostelAddress, setHostelAddress] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");
  const [emptyRooms, setEmptyRooms] = useState("");
  const [contact, setContact] = useState("");
  const [website, setWebsite] = useState("");

  let navigate = useNavigate();

  function goToHostelAdminPage() {
    navigate("/hostel-admin");
  }

  const handleEdit = (e) => {
    e.preventDefault();
    db.collection("hostels")
      .doc(currentUser.uid)
      .update({
        name: name,
        hostelName: hostelName,
        hostelAddress: hostelAddress,
        description: description,
        capacity: capacity,
        emptyRooms: emptyRooms,
        contact: contact,
        website: website,
      })

      .then(() => {
        goToHostelAdminPage();
      })
      .catch((er) => {
        console.log(er);
        alert(er);
      });
  };

  useEffect(() => {
    if (!currentUser?.uid) return;
    var docRef = db.collection("hostels").doc(currentUser.uid);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setName(data.name);
          setHostelName(data.hostelName);
          setHostelAddress(data.hostelAddress);
          setCapacity(data.capacity);
          setContact(data.contact);
          setDescription(data.description);
          setEmptyRooms(data.emptyRooms);
          setWebsite(data.website);
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [currentUser?.uid]);

  return (
    <div className="loginSignin" style={{ marginTop: "-40px" }}>
      <div className="ls__left">
        <h3>Hostel Management System</h3>
      </div>
      <div className="ls__right">
        <div className="ls__right_container">
          <form className="adminsignupform">
            <h1>Edit Hostel Details</h1>
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

            <div className="ls_input_submit">
              <button type="submit" onClick={handleEdit}>
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditHostel;
