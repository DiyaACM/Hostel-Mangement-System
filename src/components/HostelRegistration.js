import React, { useState } from 'react'
import './Auth.css'

function HostelRegistration() {

    const [Name, setName] = useState('')
    const [Place, setPlace] = useState('')
    const [Address, setAddress] = useState('')
    const [Contact, setContact] = useState('')
    const [Preference, setPreference] = useState('') 

    return(
        <div className='loginSignin'>
            <div className='ls__left'>
                <h3>Inspiring Destinations Within Your Reach</h3>
            </div>
            <div className='ls__right'>
                    <div className='ls__right_container'>
                        <form className='hostelregistrationform'>
                            <h1>Register at a Hostel :)</h1>
                            <div className='ls_input_row'>
                                <div className='ls_input_container'>
                                    <label>Name</label>
                                    <input type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='ls_input'/>
                                </div>                                
                            </div>
                            <div className='ls_input_row'>
                                <div className='ls_input_container'>
                                    <label>Place</label>
                                    <input type="text" value={Place} onChange={(e) => setPlace(e.target.value)} placeholder='Place' className='ls_input'/>
                                </div>
                            </div>
                            <div className='ls_input_row'>
                                <div className='ls_input_container'>
                                    <label>Address</label>
                                    <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' className='ls_input'/>
                                </div>
                            </div>
                            <div className='ls_input_row'>
                                <div className='ls_input_container'>
                                    <label>Contact No.</label>
                                    <input type="text" value={Contact} onChange={(e) => setContact(e.target.value)} placeholder='Contact' className='ls_input'/>
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

export default HostelRegistration();