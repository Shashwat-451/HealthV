import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import {Link} from 'react-router-dom';
import './QRCode.css';
const QrCodeGenerator = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const generateQRCode = () => {
    const url = `https://example.com?email=${email}`; // Modify the URL as per your requirements
    return <QRCode value={url} />;
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
  <div className='cont'>
 
      <div className='row'>
        <div className='col-md-6 '>
           <img style={{height:'300px',width:'500px',marginLeft:"-300px"}} src='https://createqrcode.com/assets/img/features-2b.png' alt='img'></img>
        </div>
        <div className='col-md-6 cont2' >
        <h1 style={{marginBottom:"50px",fontSize:"30px"}}>QR Code Generator</h1>
      <label>
        Enter your email ID:
        <input type="text" value={email} onChange={handleChange} />
      </label>
      <br />
      {email && generateQRCode()}
        </div>
      </div>
      </div>
    
    </>
  );
};

export default QrCodeGenerator;
