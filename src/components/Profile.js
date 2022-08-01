import profileImage from "../img/profile2.png"
const Profile = () => {
    return (  
        <div className="profile">
            <div class>
                <img src={profileImage} className="profpic"/>
                <p>Name</p>
                <hr></hr>
                <p>Address</p>
                <hr></hr>
                <p>Email</p>
                <hr></hr>
            </div>
           
        </div>
    );
}
 
export default Profile;