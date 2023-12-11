import { CSSProperties } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavBar from "../components/NavBar";

import React from "react";

const ComponentStyles: CSSProperties = {
    marginLeft: "35%",
    marginRight: "35%",
    marginTop: "6.5%",
}

const ContainterStyles: CSSProperties = {
    paddingLeft: "23.5%",
    paddingRight: "23.5%",
    paddingTop: "7%",
    paddingBottom: "12%"
}


const Login = () => {
    return (
    <div >
        <NavBar></NavBar>
        <div style={ComponentStyles}>
        <div className="container bg-secondary text-dark rounded shadow-lg bg-light" style={ContainterStyles}>
            <div className="row fs-3 text-center">
                <strong><p>Zack's <br/>Awesome <br/> Attendance Tracker</p></strong>
            </div>

            <div className="row mb-1">
                Username
            </div>
            <div className="row mb-3">
                <input placeholder="Testuser"></input>
            </div>

            <div className="row mb-1">
                Password
            </div>
            <div className="row mb-3">
                <input placeholder="Testpassword"></input>
            </div>

            <div className="row">
                <button className='bg-primary text-white mt-3'>Login</button>
            </div>
        </div>
        </div>
    </div>);
}

export default Login;