import React, { useState } from 'react'
import './Auth.css'

function AdminSignUp() {

    const [Name, setName] = useState('')
    const [HostelName, setHostelName] = useState('')
    const [HostelAddress, setHostelAddress] = useState('')
    const [Description, setDescription] = useState('')
    const [Capacity, setCapacity] = useState('')
    const [EmptyRooms, setEmptyRooms] = useState('')
    const [Contact, setContact] = useState('')
    const [Website, setWebsite] = useState('') 

    return(
        <div className='loginSignin'>
            <div className='ls__left'>
                <h3>Inspiring Destinations Within Your Reach</h3>
            </div>
            <div className='ls__right'>
                    <div className='ls__right_container'>
                        <form className='adminsignupform'>
                            <h1>Sign Up as a Hostel Admin</h1>
                            <div className='ls_input_row'>
                                <div className='ls_input_container'>
                                    <label>Name</label>
                                    <input type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='ls_input'/>
                                </div> 
                                <div className='ls_input_container'>
                                    <label>Hostel Name</label>
                                    <input type="text" value={HostelName} onChange={(e) => setHostelName(e.target.value)} placeholder='Hostel Name' className='ls_input'/>
                                </div>
                            </div>
                            <div className='ls_input_row'>
                                <div className='ls_input_container'>
                                    <label>Hostel Address</label>
                                    <input type="text" value={HostelAddress} onChange={(e) => setHostelAddress(e.target.value)} placeholder='Hostel Address' className='ls_input'/>
                                </div>
                            </div>
                            <div className='ls_input_row'>
                                <div className='ls_input_container'>
                                    <label>Description</label>
                                    <input type="text" value={Description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' className='ls_input'/>
                                </div>
                            </div>
                            <div className='ls_input_row'>
                                <div className='ls_input_container'>
                                    <label>Total Capacity</label>
                                    <input type="text" value={Capacity} onChange={(e) => setCapacity(e.target.value)} placeholder='total Capacity' className='ls_input'/>
                                </div>
                                <div className='ls_input_container'>
                                    <label>No. of empty rooms</label>
                                    <input type="text" value={EmptyRooms} onChange={(e) => setEmptyRooms(e.target.value)} placeholder='No. of empty rooms' className='ls_input'/>
                                </div>
                            </div>
                            <div className='ls_input_row'>
                                <div className='ls_input_container'>
                                    <label>Contact No.</label>
                                    <input type="text" value={Contact} onChange={(e) => setContact(e.target.value)} placeholder='Contact' className='ls_input'/>
                                </div>
                                <div className='ls_input_container'>
                                    <label>Website (if any)</label>
                                    <input type="text" value={Website} onChange={(e) => setWebsite(e.target.value)} placeholder='Website' className='ls_input'/>
                                </div>
                            </div>
                            
                            <div className='ls_input_submit'>
                                <button type='submit'>Register</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
    );
}

export default AdminSignUp();