import React from "react";
import Contact from "./pages/Contact.js"
import HomePage from "./pages/HomePage.js";
import Calculator from "./pages/Calculator.js";
import Page404 from "./pages/Page 404.js";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

const AppRoutes = () =>{
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Calculator" element={<Calculator/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes