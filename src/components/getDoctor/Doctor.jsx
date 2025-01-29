import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './Doctor.css'

const Doctor = () => {

  const [doctors, setDoctors] = useState([]);

  useEffect(()=>{
    
    const fetchData = async()=>{
      const response = await axios.get("http://localhost:8000/api/getalldoctors")
      setDoctors(response.data) 
    }
      fetchData();
  },[])

  const deleteDoctor = async (doctId) => {
    await axios.delete(`http://localhost:8000/api/deletedoctorbyid/${doctId}`)
    .then((response)=>{
      setDoctors((prevdoct) => prevdoct.filter((doct) => doct._id != doctId))
    }).catch(error => console.log(error))
  }

  return (
    <div className='doctorTable'>
    <Link className='addButton' to={"/adddoctor"}>Add Doctor</Link>
    <h2>Doctors Detail</h2>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S NO</th>
            <th>Doctor Name</th>
            <th>Doctor Email</th>
            <th>Specialist</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          doctors.map((doct, index)=>{
            return(
            <tr key={doct._id}>
            <td>{index +1}</td>
            <td>{doct.dname}</td>
            <td>{doct.email}</td>
            <td>{doct.specialist}</td>
            <td className='actionButtons'>
              <Link to={`/updatedoctor/` + doct._id}>Update</Link>
              <button onClick={ ()=> deleteDoctor(doct._id)}>Delete</button>
            </td>
          </tr>
        )
          })
        }
          
        </tbody>
      </table>
    </div>
  )
}

export default Doctor
