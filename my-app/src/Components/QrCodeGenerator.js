import React, { useState,useEffect } from 'react';
import QRCode from 'qrcode.react';
import {Link} from 'react-router-dom';
import './QRCode.css';
const QrCodeGenerator = () => {
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);
    const [userIdentifier,setUserIdentifier]=useState('');
    useEffect(() => {
        fetch("https://healthvaultfinal2.onrender.com/getAllUser", {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userData");
            setData(data.data);
          });
      }, []);



  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const generateQRCode = () => {
    const url = `https://healthvault.netlify.app/?email=${email}/?id=${data[0]._id}/`; // Modify the URL as per your requirements
    return <QRCode value={url} />;
  };

  return (
    <>
  <div className='cont'>
      <div className='row'>
        <div className='col-md-6 qrimage '>
           <img src='https://createqrcode.com/assets/img/features-2b.png' alt='img'></img>
        </div>
        <div className='col-md-6 qrcontent' >
        <h1>QR Code Generator</h1>
      
        <h4 style={{fontFamily:"georgia",color:"white"}}>Enter your email ID:</h4>
        <input type="text" value={email} onChange={handleChange} />
      
      <br />
      {email && generateQRCode()}
        </div>
      </div>
      </div>

    </>
  );
};

export default QrCodeGenerator;
