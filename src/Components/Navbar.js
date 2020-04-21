import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav id="nav">
            <ul>    
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>
        </nav>)
}

export default Navbar;