import React from "react";
import {Route, Routes} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./pages/login/login.component";
import Register from "./pages/login/register.component";
import Home from "./pages/home/home.component";
import Profile from "./components/profile.component";

import Navbar from "./components/header/Navbar";


function App() {
    return (
        <div>
            <Navbar/>
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </div>
        </div>
    );

}


export default App;