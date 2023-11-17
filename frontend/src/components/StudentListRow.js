import Axios from 'axios'
import React from 'react'

function StudentListRow(props) {
    const {_id, name, email, rollNo} = props.obj

    const handleClick = () => {
        Axios.delete("http://localhost:4000/studentRoute/delete-student/" + _id).then((res) => {
            if(res.status === 200) {
                alert("Student Record Deleted Succesfully")
                window.location.reload();
            }
            else {
                Promise.reject()
            }
        }).catch((err) => {
            alert(err)
        })
    }

  return (
    <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{rollNo}</td>
        <td>
            <button className='btn btn-success'>
                Edit
            </button>
            <button onClick={handleClick} className='btn btn-danger'>
                Delete
            </button>
        </td>
    </tr>
  )
}

export default StudentListRow