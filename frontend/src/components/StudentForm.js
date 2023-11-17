import React, {useState} from 'react'
import getState from './CreateStudent'

function StudentForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rollNo, setRollno] = useState("");

    const arr = [name, email, rollNo]; // arr = ['umesh', 'umesh@gmail.com', 1]
    // Data available in the child component needs to be transferred to parent component
    const handleClick = () => {
        props.getState(arr)
    }

  return (
    <div style={{maxWidth: "40%", margin: "0px auto"}}>
        <input onChange={(event) => setName(event.target.value)}  className='form-control my-3' placeholder='Enter Your Name' />
        <input onChange={(event) => setEmail(event.target.value)} className='form-control my-3' placeholder='Enter Your Email' />
        <input onChange={(event) => setRollno(event.target.value)} className='form-control my-3' placeholder='Enter Your Roll Number' />
        <button onClick={handleClick} className='btn btn-success my-3' type='submit'>Submit</button>
    </div>
  )
}

export default StudentForm