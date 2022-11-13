import React, {Component} from "react";
import {connect} from "react-redux";
import {Router, Routes, Route, Link, BrowserRouter} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/header/board-user.component";
import BoardModerator from "./components/header/board-moderator.component";
import BoardAdmin from "./components/header/board-admin.component";

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
                    <Route path="/user" element={<BoardUser/>}/>
                    <Route path="/mod" element={<BoardModerator/>}/>
                    <Route path="/admin" element={<BoardAdmin/>}/>
                </Routes>
            </div>

        </div>
    );

}


export default App;