import React, { useState } from 'react';
import './MedicalForm.css'
import axios from 'axios';
import {Link} from 'react-router-dom';

const MedicalForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    medicalHistory: '',
    allergies: '',
    previousTreatments: '',
    medications: ''
  });

  // const LoginLogoutButtons = () => {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  //   const handleLogin = () => {
  //     // Perform login logic
  //     setIsLoggedIn(true);
  //   };
  
  //   const handleLogout = () => {
  //     // Perform logout logic
  //     setIsLoggedIn(false);
  //   };

  // }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://healthvaultfinal2.onrender.com/patientData', formData);
      console.log(response.data);
      alert('Patient information saved successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to save patient information. Please try again later.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>

<nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Health Vault</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/medform">Update Record</Link>
        </li>
        <li>
          <Link to="/patientdata">Medical Record</Link>
        </li>
        <li>
          <Link to="/qr">QR Code</Link>
        </li>
        <li>
          
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Sign Up</Link>
        </li>

      </ul>
    </nav>
     
      <h1 style={{textAlign:"center",marginTop:"50px"}}>Medical Form</h1>
    
   

      {/* <div className="container">
        <div className="items" id="item1"></div>
        <div className="items" id="item2"></div>
        <div className="items" id="item3"></div>
        <div className="items" id="item4"></div>
        <div className="items" id="item5"></div>
        <div className="items" id="item6"></div>
        <div className="items" id="item7"></div>
        <div className="items" id="item8"></div>
      </div> */}
      <div className="parent">

      <form onSubmit={handleSubmit}>
      <div className="items" id="item1">
      <input
      className='inputtt'
        type="text"
        placeholder='First Name'
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
   </div>

   <div className="items" id="item6">
     
      <input
      className='inputtt'
        type="text"
        placeholder='Last Name'
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
</div>

<div className="items" id="item7">
     
      <input
      className='inputtt'
        type="date"
        placeholder='DOB'
        id="dateOfBirth"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        required
      />
</div>
<div className="items" id="item8">
     
      <select
      className='inputtt'
      placeholder='Gender'
        id="gender"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        required
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="non-binary">Non-binary</option>
      </select>
</div>
<div className="items" id="item9">
      <input
      className='inputtt'
        type="email"
        placeholder='Email'
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
</div>
<div className="items" id="item10">
      <input
      className='inputtt'
        type="tel"
        placeholder='Contact Number'
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
</div>
<div className="items" id="item11">
      
      <input
      className='inputtt'
      placeholder='Address'
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      ></input>
</div>



<div className="items" id="item2">
      
      <textarea
      className='textt'
      placeholder='Medical History'
        id="medicalHistory"
        name="medicalHistory"
        value={formData.medicalHistory}
        onChange={handleChange}
        required
      ></textarea>
</div>

<div className="items" id="item3">
    
      <textarea
      className='textt'
      placeholder='Allergies'
        id="allergies"
        name="allergies"
        value={formData.allergies}
        onChange={handleChange}
        required
      ></textarea>
</div>

<div className="items" id="item4">
      
      <textarea
      className='textt'
      placeholder='Previous Treatments'
        id="previousTreatments"
        name="previousTreatments"
        value={formData.previousTreatments}
        onChange={handleChange}
        required
        ></textarea>
      </div>  
      <div className="items" id="item5">

<textarea
className='textt'
placeholder='Medications'
        id="medications"
        name="medications"
        value={formData.medications}
        onChange={handleChange}
        required
        ></textarea>


</div>
{/* <label htmlFor="report">Upload Medical Report</label> */}
<div  className="items" id="item12">
      
      <input
      className='inputtt'
      placeholder='Report'
      type='file'
        id="report"
        name="report"
        value={formData.report}
        onChange={handleChange}
        required
      ></input>
</div>

<div className="items" id="item13">
  <button className="btnn" style={{color:"black"}} type="submit">Submit</button>
</div>
</form>
</div>
       {/* <button style={{marginLeft:"150px"}}onClick={handleSubmit}>Submit</button> */}



</>
  );};
        export default MedicalForm;