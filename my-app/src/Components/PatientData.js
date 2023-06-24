import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './PatientData.css'
const MedicalFormData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://healthvaultfinal2.onrender.com/getAllUser",{
      method: 'GET',
    }) 
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userData");
      setData(data.data);
    });
  }, []);

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
   
    <div className="medical-form-data">
      <h2>Medical Form Data</h2>
      {data.map((user) => (
        <div className="user" key={user._id}>
          <div className="name">
            <h3>{user.firstName} {user.lastName}</h3>
          </div>
          <div className="details">
            <div className="detail">
              <label>Date of Birth:</label>
              <span>{user.dateOfBirth}</span>
            </div>
            <div className="detail">
              <label>Gender:</label>
              <span>{user.gender}</span>
            </div>
            <div className="detail">
              <label>Email:</label>
              <span>{user.email}</span>
            </div>
            <div className="detail">
              <label>Phone:</label>
              <span>{user.phone}</span>
            </div>
            <div className="detail">
              <label>Address:</label>
              <span>{user.address}</span>
            </div>
            <div className="detail">
              <label>Medical History:</label>
              <span>{user.medicalHistory}</span>
            </div>
            <div className="detail">
              <label>Allergies:</label>
              <span>{user.allergies}</span>
            </div>
            <div className="detail">
              <label>Previous Treatments:</label>
              <span>{user.previousTreatments}</span>
            </div>
            <div className="detail">
              <label>Medications:</label>
              <span>{user.medications}</span>
            </div>
          </div>
        </div>
        
      ))}
      <style jsx>{`
        .medical-form-data {
          font-family: Arial, sans-serif;
          color: #333;
          background-color: #f4f4f4;
          padding: 20px;
          box-sizing: border-box;
          width: 100%;
        }
        h2 {
          text-align: center;
          margin-bottom: 30px;
        }
        .user {
          background-color: #fff;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
        }
        .name {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }
        .details {
          display: flex;
          flex-wrap: wrap;
        }
        .detail {
          flex-basis: calc(50% - 20px);
          margin-right: 20px;
          margin-bottom: 10px;
        }
        label {
          font-weight: bold;
          margin-right: 10px;
        }
        span {
          font-weight: normal;
        }
      `}</style>
    </div>
    </>
  );
};

export default MedicalFormData;
