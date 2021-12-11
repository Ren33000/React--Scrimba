import React from "react"
import Image from "../images/logo.png"; 

export default function Navbar() {
    return (
        <nav>
            <img src={Image} className="nav--icon" alt="react-logo"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}

