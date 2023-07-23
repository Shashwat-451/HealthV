import React, { useState } from 'react';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Login.css';
const LoginPage = ({setLoginUser}) => {
    let navigate = useNavigate();
  
    function handleClicking() {
      navigate('/register');
  
    }
    const [user, setUser] = useState({
  
      email: "",
      password: ""
  
  
    })
  
    const handleChange = e => {
      const { name, value } = e.target // whatever change takes place after writing in form gets stored in event continuously and then we extract name and value from there in next line.
      // console.log(name,value);
      setUser({
        ...user, //all else value same
        [name]: value  //change the name attribute to value
  
      })
    }
  
  
    const login = () => {
      axios.post("https://healthvaultfinal2.onrender.com/login", user)
        .then(res => {
          if (res.status >= 200 && res.status < 300) {
            alert(res.data.message);
            // setLoginUser(res.data.user);
            navigate("/patientData");
          } else {
            alert("Login failed. Please check your credentials and try again.");
          }
        })
        .catch(error => {
          alert("An error occurred while logging in. Please try again later.");
          console.error(error);
        });
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
       <div className='parent bord' style={{marginTop:"120px"}}>
        
       
         
          <div className='login'>
              {console.log(user)}
              <h1 style={{marginBottom:"40px",marginTop:"30px",color:"white"}}className='text-center'>LOGIN</h1>
              <div className='items'> 
              <input className='inputt' type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
              </div>
              <div className='items'> 
              <input className='inputt' type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
              </div>
              <div className='items'>
              <div >
              <button  className='buttons 'onClick={login}>Login</button>
              </div>
              </div>
              <div className='items'>
              <div style={{color:'white'}}>
              <h5>Don't have an Account?</h5>
              </div>
              </div>
              <div className='items'>
              <div   style={{marginBottom:"10px"}} >
              <button className='buttons ' onClick={handleClicking}>Sign Up</button>
              </div>
              </div>
            </div>
          
        </div>
       
  
        {/* <div className="outer_divv2">
          <img src="https://wallpaperaccess.com/full/176600.jpg" alt="img" />
          <div className="apps contentt">
       
          </div>
        </div> */}
     
      </>
    )
  }

export default LoginPage;
