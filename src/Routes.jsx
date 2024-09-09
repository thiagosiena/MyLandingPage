import React from "react";
import Contact from "./pages/Contact.jsx"
import HomePage from "./pages/HomePage.jsx";
import Calculator from "./pages/Calculator.jsx";
import Page404 from "./pages/Page 404.jsx";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
      
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Calculator" element={<Calculator />} />
                <Route path="*" element={<Page404 />} />
            </Routes>

    )
}

export default AppRoutes