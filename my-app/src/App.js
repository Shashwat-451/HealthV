import './App.css';

import React,{useState} from 'react'
import MedicalForm from './Components/MedicalFom';
import PatientData from './Components/PatientData';
import Home from './Components/Home';
import QrCodeGenerator from './Components/QrCodeGenerator';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import LoginPage from './Components/Login';
import Register from './Components/Register';
function App() {

  return (
  <BrowserRouter>
    <>
    <Routes>

        {/* */}
        <Route path="/" element={<Home/>}/>
        <Route path="/medform" element={<MedicalForm/>}/> 
        <Route path="/patientdata" element={<PatientData/>}/>
        <Route path="/qr" element={<QrCodeGenerator/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* <Route path="/mumbai" element={<Home2Upper/>}/>
        <Route path="/delhi" element={<Delhi/>}/>
        <Route path="/kolkata" element={<Kolkata/>}/> */}
      
      </Routes>
    </>

    </BrowserRouter>
  );
}

export default App;