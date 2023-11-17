import React, {useState} from 'react'
import StudentForm from './StudentForm'
import Axios from 'axios'

function CreateStudent() {
  const [arr, setArr] = useState([]); // arr = ['umesh', 'umesh@gmail.com', 1]
  // Declaring a argument Function
  const getState = (childData) => { // childData = ['umesh', 'umesh@gmail.com', 1]
    setArr(childData)
  };
  
  const handleSubmit = (event) => {
    const data = {name: arr[0], email: arr[1], rollNo: arr[2]}
    Axios.post("http://localhost:4000/studentRoute/create-student", data).then((res) => {
      if(res.status === 200) {
        alert("Student Record Added Succesfully")
      }
      else {
        Promise.reject()
      }
    }).catch((err) => {
      alert(err)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <StudentForm getState = {getState}/>
    </form>
  )
}

export default CreateStudent