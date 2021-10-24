// Library
import React from "react";
import { Link } from "react-router-dom";

// Components
import "./Home.css"

function Home () {
    return (
    <>
        <h1>Acceuil</h1>
        {/* <a href="/contact">Contact</a> */}
        <Link to="/contact" style={{marginRight: '10px'}}>Contact</Link>
        <Link to="/Articles" >Articles</Link>
    </>
    
    );
}

export default Home; 