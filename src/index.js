import React from "react";
import App from "./App";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from "./pages/landing/Landing";
import './config';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>

        <Routes>
            <Route path="*" element={<App/>}/>
            <Route path="/landing" element={<Landing />}/></Routes>

    </BrowserRouter>
    ,
);

