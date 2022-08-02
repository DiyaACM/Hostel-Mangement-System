const HostelList = ({hostels}) => {
    return(
        <div className="hostel-list">
        {hostels.map((hostel) => (
            <div className="hostel-preview" key = {hostel.id}>
                <a href="\"><h2 className="hostel-title">{hostel.title}</h2></a>
                <table>
                    <tr>
                        <th><img src={hostel.image} className="hostel-image" /></th>
                        <th><p>{hostel.body}<br></br><br></br></p><p style={{color: '#14A5FF'}}>Location: {hostel.location}</p></th>
                    </tr> 
                </table>
            </div>
        ))
        }
    </div>
    );    
}

export default HostelList;