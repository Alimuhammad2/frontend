import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const updateDoctor = () => {

  const doctors = {
    
    dname:"",
    specialist:"",
    email:""

  } 

  const {id} = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctors] = useState(doctors);

  const inputChangeHandler = (e) =>{

    const {name, value} = e.target;
    setDoctors({...doctor, [name]:value});
    console.log(doctor);

  }

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/getdoctorbyid/${id}`)
    .then((response)=>{
      console.log(response)
      setDoctors(response.data)
    }).catch(error => console.log(error))
  },[id])

  const submitForm = async (e) =>{
    e.preventDefault();

    await axios.put(`http://localhost:8000/api/updatedoctorbyid/${id}`, doctor)
    .then((response) => {
      
      navigate("/")
      console.log(response)

    }).catch(error => console.log(error))
  }

  return (
    <div className='addDoctor'>
    <Link to={"/"}>Back</Link>
      <h2>Update Doctor</h2>
      <form className='addDoctorForm' onSubmit={submitForm}>
        <div className='inputgroup'>
          <label htmlFor="dname">Enter Doctor Name</label>
          <input type="text" name='dname' onChange={inputChangeHandler} value={doctor.dname} id='dname' placeholder='Enter Doctor Name' />
        </div>
        <div className='inputgroup'>
          <label htmlFor="specialist">Doctor Specialist</label>
          <input type="text" name="specialist" id="specialist" onChange={inputChangeHandler} value={doctor.specialist} placeholder='Doctor Specialist' />
        </div>
        <div className='inputgroup'>
          <label htmlFor="email">Enter Doctor Email</label>
          <input type="text" name="email" id="email" onChange={inputChangeHandler} value={doctor.email} autoComplete='off' placeholder='Enter Doctor Email' />
        </div>
        <div className='inputgroup'>
          <button>Update Doctor</button>
        </div>
      </form>
    </div>
  )
}

export default updateDoctor
