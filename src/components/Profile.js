import { useContext, useEffect, useState } from "react";
import profileImage from "../img/profile2.png";
import {db} from '../firebase/firebase'
import { AuthContext } from "../context/AuthContext";
const Profile = () => {
    const [profile_data, setProfileData] = useState();

    const { currentUser } = useContext(AuthContext)
    useEffect(()=>{
        console.log(currentUser.uid)
        var docRef = db.collection("users").doc(currentUser.uid);
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log(doc.data())
                setProfileData(doc.data());
               
            } 
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    },[currentUser.uid])
    return (  
        <div className="profile">
            <div className="profcontent">
                <img src={profileImage} className="profpic"/>
                <p style={{wordSpacing :'50px'}}>Name: {profile_data?.name || ''}</p>
                <hr></hr>
                <p style={{wordSpacing :'20px'}}>Address: {profile_data?.address || ''}</p>
                <hr></hr>
                <p style={{wordSpacing :'50px'}}>Email: {profile_data?.email || ''}</p>
                <hr></hr>
            </div>
           
        </div>
    );
}
 
export default Profile;