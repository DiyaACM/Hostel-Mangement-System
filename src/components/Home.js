import Navhome from "./Navhome";

const Home = () => {
    return ( 
       
        <div className="landing">
                
                <div className="dark-overlay landing-inner text-light">
                    <div>
                        <Navhome/>
                    </div>
                    <div className="container">
                        <p>Hostel Management</p>
                        <div className="container2">
                        <p>One stop solution for MECians' to search for hostels.<br></br>Connecting with nearby hostels..</p>
                        </div>                        
                        <button  href="/"className="btn1"> Login</button>
                        <button className="btn2"> Sign Up</button>
                    </div>
                </div>
        </div>
     );
}
 
export default Home;