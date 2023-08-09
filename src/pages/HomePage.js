import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"

const HomePage = () => {
    return (
        <>
            <Header />
            <h1>Home page</h1>
            <Link to="/Contact"> Contact acess </Link>
        </>


    )
}

export default HomePage;