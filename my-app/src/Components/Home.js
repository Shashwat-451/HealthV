import React,{useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import websitelogo from './imagesvid/websitelogo.png'
// import './HomeUpper.css'
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap'

import { Link } from "react-router-dom";
// import BookingForm from './BookingForm';
// import Modal from "react-bootstrap/Modal";
import { Redirect } from 'react-router-dom'
// import "./Components/login/login.css"
// import axios from "axios"
import { useNavigate } from 'react-router-dom';
import "./Home.css"
// import { useAuth0 } from "@auth0/auth0-react";
// ******************************************Modal Function**********************************************





const Home= () => {
    let navigate = useNavigate();
    // const { loginWithRedirect } = useAuth0();
   
    // const { user, isAuthenticated, isLoading } = useAuth0();
  const handleClick = () => {
    // {isAuthenticated?(navigate("/")):(loginWithRedirect())}
    navigate("/login");
  };
  return (
    <>
       {/* <Navbar className="hell p-0 m-0" bg="black"  fixed="top" expand="lg" variant="dark">
  <Container>
           <Navbar.Brand ><img src={websitelogo} alt="img" height={60}></img></Navbar.Brand>
   
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className=" ">
        <Nav.Link className="helll active" as={Link} to="/">Home</Nav.Link>
        <Nav.Link className="helll " as={Link} to="/main4">Books</Nav.Link>
        <Nav.Link className="helll " as={Link} to="/mylib">My Library</Nav.Link>
        <Nav.Link className="helll " as={Link} to="/main3">Best Sellers</Nav.Link>
     
      
      </Nav>
    </Navbar.Collapse>

    {isAuthenticated?(
    <div className="text-center tobut">
    <button style={{paddingLeft:"4px",fontSize:"15px",paddingRight:"4px",paddingTop:"4px",paddingBottom:"4px",marginBottom:"10px"}} className="btn56" variant="primary" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
  Log Out
</button>
                  </div>):(<div className="text-center tobut">
    <button style={{paddingLeft:"4px",fontSize:"15px",paddingRight:"4px",paddingTop:"4px",paddingBottom:"4px",marginBottom:"10px"}} className="btn56" variant="primary" onClick={() => loginWithRedirect()}>
  Log In
</button>
</div>)}
  </Container>
 
</Navbar> */}
  
     
<div className='row' style={{marginTop:"60px", backgroundColor:"#8F6DFF",height:"600px",color:"white"}} >
<div className=" col-md-6  ">
   <img  style={{height:"480px",marginTop:"40px",marginLeft:"120px"}} src="https://www.tamirapharmacy.com/login/svg/admin-img.svg" alt="img1"/>
   </div>
   <div className="col-md-6  ">
 <div className=" text-center">
           <h1 style={{fontFamily:"Georgia",color:"white" ,marginTop:"200px",marginBottom:"50px",fontSize:"80px"}}>Health Vault</h1>

          <h3 style={{fontFamily:"Georgia",color:"white"}}>"Unlock Your Health's Past, Safeguard Your Future!"</h3>

          <button className= "btnn"  style={{color:"black"}}onClick={handleClick}>Explore</button>
         

</div>
</div>
</div>

    </>
  )
}

export default Home;
