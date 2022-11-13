import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import store from "./store";
import App from "./App";
import setupInterceptors from "./services/setupInterceptors";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from "./pages/landing/Landing";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path={'/landing'} element={<Landing/>}/>
                <Route path={'*'} element={<App/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
    ,
);

setupInterceptors(store);