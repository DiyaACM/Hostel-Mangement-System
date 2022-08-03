import React, { useState } from 'react'
import logo from "../../img/logo.png";
import './registermh.css'

const RegisterMh = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [cls, setCls] = useState("");
    const [semester, setSem] = useState(1);
    const [distance, setDistance] = useState("");
    const [cgpa, setcgpa] = useState(0);
    const [address, setAddress] = useState("");

    function handlesubmit() {
        
    }

    return (
        <div className="registermh">
            <div
                className="rmh__left"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >

                <img src={logo} style={{ height: "100px", width: "130px" }} alt="logo" />

            </div>
            <div className="rmh__right">
                <div className="rmh__right_container">
                    <div className='addItem'>
                        <h2 className="mhreghead">MH Registration</h2>
                        <form class="row g-3">
                            <div class="col-md-12">
                                <label class="form-label">Name</label>
                                <input type="text" class="form-control" id="name"
                                    onChange={(event) => {
                                        setName(event.target.value);
                                    }} />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }} />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Phone No.</label>
                                <input type="text" class="form-control" id="class"
                                    onChange={(event) => {
                                        setPhone(event.target.value);
                                    }} />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Class</label>
                                <input type="text" class="form-control" id="class"
                                    onChange={(event) => {
                                        setCls(event.target.value);
                                    }} />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Semester</label>
                                <select class="form-control" id="semester" value={semester} onChange={(event) => {
                                    setSem(event.target.value);
                                }}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="inputAddress" class="form-label">Distance Form Residence</label>
                                <input type="text" class="form-control" id="distance" placeholder="Enter distance in KM"
                                    onChange={(event) => {
                                        setDistance(event.target.value);
                                    }} />
                            </div>
                            <div class="col-md-6">
                                <label for="inputAddress" class="form-label">CGPA</label>
                                <input type="text" class="form-control" id="cgpa" placeholder=""
                                    onChange={(event) => {
                                        setcgpa(event.target.value);
                                    }} />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Address</label>
                                <input type="text" class="form-control" id="desc" placeholder="Enter Address"
                                    onChange={(event) => {
                                        setAddress(event.target.value);
                                    }} />
                            </div>
                            <div class="col-12">
                                <button onClick={handlesubmit} class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterMh 