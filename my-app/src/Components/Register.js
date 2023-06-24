import React,{useState} from 'react'
import "./Register.css"
import axios from "axios"



// import 'aos/dist/aos.css'; 
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';

const Register = () => {

  let navigate = useNavigate();

  function handleClicking() {
    navigate('/login');

  }


 
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""

    })

    const handleChange=e=>{
        const {name,value}=e.target // whatever change takes place after writing in form gets stored in event continuously and then we extract name and value from there in next line.
        // console.log(name,value);
        setUser({
            ...user, //all else value same
            [name]:value  //change the name attribute to value

        })
    }

    const register= () => {
        const {name,email,password,reEnterPassword}=user
        if(name && email && password && (password===reEnterPassword))
        {
          // alert("posted")
          axios.post("https://healthvaultfinal2.onrender.com/register",user)
          .then(res =>{
            alert(res.data.message)
         
            navigate("/login")
          })
        }
        else{
            alert("Invalid Input")
        }
        
    }

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


<div className='container'>
<div className='row'>
<div className='col-md-6'>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png" alt="img" />
          </div>
          <div className='col-md-6 forme'>
          <div className='register '></div>
        <h1 className='text-center'>REGISTER</h1>
        <input className="inputt"type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
        <input className="inputt"type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
        <input className="inputt"type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
        <input className="inputt" type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
        <br/>
        <div className='buttons '>
        <button onClick={register}>Register</button>
        </div>
        <div className='buttons'>
              <h5>Already have an Account?</h5>
              </div>
        <div className='buttons '>
        <button onClick={handleClicking}>Login</button>
        </div>
    </div>
    </div>
    </div>
   
 
  
    </>
  )
}

export default Register