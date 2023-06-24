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
      const response = await axios.post('http://localhost:9000/patientData', formData);
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
     <h1  style={{marginTop:"60px",marginBottom:"20px",marginLeft:"650px"}}>Medical Data Form</h1>
    <div className='medform formmm'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
      className='inputtt'
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
      className='inputtt'
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <label htmlFor="dateOfBirth">Date of Birth:</label>
      <input
      className='inputtt'
        type="date"
        id="dateOfBirth"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        required
      />

      <label htmlFor="gender">Gender:</label>
      <select
      className='inputtt'
        id="gender"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        required
      >
        <option value="">--Please select an option--</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="non-binary">Non-binary</option>
      </select>

      <label htmlFor="email">Email:</label>
      <input
      className='inputtt'
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="phone">Phone:</label>
      <input
      className='inputtt'
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <label htmlFor="address">Address:</label>
      <textarea
      className='textt'
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      ></textarea>

      <label htmlFor="medicalHistory">Medical History:</label>
      <textarea
      className='textt'
        id="medicalHistory"
        name="medicalHistory"
        value={formData.medicalHistory}
        onChange={handleChange}
        required
      ></textarea>

      <label htmlFor="allergies">Allergies:</label>
      <textarea
      className='textt'
        id="allergies"
        name="allergies"
        value={formData.allergies}
        onChange={handleChange}
        required
      ></textarea>

      <label htmlFor="previousTreatments">Previous Treatments:</label>
      <textarea
      className='textt'
        id="previousTreatments"
        name="previousTreatments"
        value={formData.previousTreatments}
        onChange={handleChange}
        required
        ></textarea>
<label htmlFor="medications">Medications:</label>
<textarea
className='textt'
        id="medications"
        name="medications"
        value={formData.medications}
        onChange={handleChange}
        required
        ></textarea>

       <button style={{marginLeft:"150px"}}onClick={handleSubmit}>Submit</button>
</form>

</div>
</>
  );};
        export default MedicalForm;