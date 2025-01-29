import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './addDoctor.css'

const addDoctor = () => {

  const doctors = {
    dname:"",
    specialist:"",
    email:"",
    password:""
  }

  const [doctor, setDoctor] = useState(doctors);
  const navigate = useNavigate();

  const inputHandler = (e) =>{
    
    const {name, value} = e.target;
    setDoctor({...doctor, [name]:value});
    console.log(doctor);

  }

  const submitForm = async (e) =>{

    e.preventDefault();

    await axios.post("http://localhost:8000/api/createdoctor", doctor)
    .then((response) =>{
      navigate("/")
      console.log(response)
    }).catch(error => console.log(error))
  }
  return (
    <div className='addDoctor'>
    <Link to={"/"}>Back</Link>
    <h2>Add Doctor</h2>
    <form className='addDoctorForm' onSubmit={submitForm}>
      <div className='inputgroup'>
        <label htmlFor="dname">Enter Doctor Name</label>
        <input type="text" id='dname' onChange={inputHandler} name='dname' placeholder='Enter Doctor Name'/>
      </div>
      <div className='inputgroup'>
        <label htmlFor="specialist">Doctor Specialist</label>
        <input type="text" id='specialist' onChange={inputHandler} name='specialist' placeholder='Doctor Specialist'/>
      </div>
      <div className='inputgroup'>
        <label htmlFor="email">Enter Doctor Email</label>
        <input type="text" id='email' onChange={inputHandler} name='email' placeholder='Enter DOctor Email'/>
      </div>
      <div className='inputgroup'>
        <label htmlFor="password">Enter Password</label>
        <input type="text" id='password' onChange={inputHandler} name='password' placeholder='Enter Password'/>
      </div>
      <div className='inputgroup'>
        <button>Add Doctor</button>
      </div>
      </form>
    </div>
  )
}

export default addDoctor
