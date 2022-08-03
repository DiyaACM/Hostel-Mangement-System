import React from "react";
import Home from "./components/home/home";
import User from "./components/user/user";
import Admin from "./components/admin/admin";
import Profile from "./components/user/profile";
import MH from "./components/mh/mh";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/signin";
import Login from "./components/auth/login";
import HostelRegistration from "./components/user/hostelApplication";
import HostelAdminSignup from "./components/auth/hostelAdminSignup";
import "./components/auth/auth.css";
import HostelAdmin from "./components/hostel/hostelAdmin";
import EditHostel from "./components/hostel/editHostel";
import ApplicationView from "./components/hostel/applications";
import AdminSignup from "./components/auth/adminSignup";
import AdminHostelList from "./components/admin/hostelsList";
import AdminApplicationView from "./components/admin/hostelApplications";
import AdminStudentsView from "./components/admin/studentsList";
import MHList from "./components/mh/MHList";
import RegisterMh from "./components/mh/registerMh";

function App() {
  return (
    <div>
      <>
        { }
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<User />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mh" element={<MH />} />
            <Route path="/mh-list" element={<MHList />} />
            <Route path="/hostel-admin" element={<HostelAdmin />} />
            <Route path="/hostel-edit" element={<EditHostel />} />
            <Route path="/register-hostel" element={<HostelAdminSignup />} />
            <Route path="/register-mh" element={<RegisterMh />} />
            <Route
              path="/hostel-application/:id"
              element={<HostelRegistration />}
            />
            <Route path="/hostel-applications" element={<ApplicationView />} />
            <Route path="/register-admin" element={<AdminSignup />} />
            <Route path="/admin-hostel-list" element={<AdminHostelList />} />
            <Route
              path="/admin-hostel-application/:id"
              element={<AdminApplicationView />}
            />
            <Route
              path="/admin-students-list"
              element={<AdminStudentsView />}
            />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
