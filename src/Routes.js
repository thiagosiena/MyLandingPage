import React from "react";
import Contact from "./pages/Contact.js"
import HomePage from "./pages/HomePage.js";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

const AppRoutes = () =>{
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes