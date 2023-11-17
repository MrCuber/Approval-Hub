import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import StudentListRow from './StudentListRow'

function StudentList() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/studentRoute/").then((res) => {
      if(res.status === 200) {
        setArr(res.data);
      }
      else {
        Promise.reject()
      }
    }).catch((err) => {
      alert(err)
    })
  }, [])

  const ListItems = () => {
    return arr.map((val, ind) => {
      return <StudentListRow obj={val} />
    })
  }

  return (
    <table className='table table-bordered table-striped table-success'>
      <thead>
        <tr>
          <th className='text-center'>
            Name
          </th>
          <th className='text-center'>
            Email
          </th>
          <th className='text-center'>
            Roll Number
          </th>
          <th className='text-center'>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {<ListItems/ >}
      </tbody>
    </table>
  )
}

export default StudentList