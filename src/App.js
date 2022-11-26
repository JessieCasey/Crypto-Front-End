import React from "react";
import {Route, Routes} from "react-router-dom";
import "./App.css";

import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Navbar from "./components/header/Navbar";
import Crypto from "./pages/crypto/Crypto";

const App = () => {
    return (
        <div>
            <Navbar/>
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/coin/:cryptoId" element={<Crypto/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;