import { useState } from "react";
import HostelList from "./HostelList";
import Navbar from "./Navbar";


const User = () => {
    
    const [hostels,setHostels] = useState([
    {title: 'Hostel 1',location:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis et dolor quis consectetur. Cras vestibulum libero et congue viverra. Morbi tristique lacus ut lacus blandit, non sodales enim ornare. Pellentesque bibendum nunc quis mollis lobortis. '},
    {title: 'Hostel 2',location:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis et dolor quis consectetur. Cras vestibulum libero et congue viverra. Morbi tristique lacus ut lacus blandit, non sodales enim ornare. Pellentesque bibendum nunc quis mollis lobortis. '},
    {title: 'Hostel 3',location:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis et dolor quis consectetur. Cras vestibulum libero et congue viverra. Morbi tristique lacus ut lacus blandit, non sodales enim ornare. Pellentesque bibendum nunc quis mollis lobortis. '},
    {title: 'Hostel 4',location:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis et dolor quis consectetur. Cras vestibulum libero et congue viverra. Morbi tristique lacus ut lacus blandit, non sodales enim ornare. Pellentesque bibendum nunc quis mollis lobortis. '},
    {title: 'Hostel 5',location:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis et dolor quis consectetur. Cras vestibulum libero et congue viverra. Morbi tristique lacus ut lacus blandit, non sodales enim ornare. Pellentesque bibendum nunc quis mollis lobortis. '},
    {title: 'Hostel 6',location:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis et dolor quis consectetur. Cras vestibulum libero et congue viverra. Morbi tristique lacus ut lacus blandit, non sodales enim ornare. Pellentesque bibendum nunc quis mollis lobortis. '},
    ]);
    return ( 
        <div className="User">
            <Navbar />
            <table>
                <tr>
                    <th id='search'>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    </th>
                    <th id='search-btn'>
                    </th>
                </tr>
            </table>
            <HostelList hostels={hostels}/>
        </div>
     );
}
 
export default User;