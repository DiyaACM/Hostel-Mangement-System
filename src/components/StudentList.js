const StudentList = ({students}) => {
    return(
        <div className="student-list">
        {students.map((student) => (
                <tr  key = {student.id}>
                    <th><p>{student.Name}</p></th>                
                    <th><p>Year:{student.Year}</p></th>
                    <th><p>Class:{student.class}</p></th>
                </tr>          
        ))
        }
    </div>
    );    
}

export default StudentList;