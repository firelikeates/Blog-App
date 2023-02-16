import React from 'react'
import { Link, NavLink, Redirect } from "react-router-dom"
import "../CSS/Navbar.css"

const NavbarHidden = () => {
    const toggleactions = (e) => {
        e.preventDefault();
        const hamburger = document.querySelector(".hamburger")
        hamburger.classList.toggle("active")
        const hiiden_links = document.querySelector(".hidden-links")
        hiiden_links.classList.toggle("active")
    }
    const add_remove_active_from_hidden_links = (e) => {
        e.preventDefault();
        const hiiden_links = document.querySelector(".hidden-links")
        hiiden_links.classList.remove("active")
        const hamburger = document.querySelector(".hamburger")
        hamburger.classList.remove("active")
    }
    return (
        <>
            <header>
                <h2>Blog-App</h2>
                <h3>This is a demo app</h3>
                <div onClick={toggleactions} className="hamburger">
                    <span></span><span></span><span></span>
                </div>
            </header>
            <div onClick={add_remove_active_from_hidden_links} className="hidden-links">
                <NavLink exact to={"/homehidden"} >Home</NavLink>
                <NavLink to={"/Signup"} >Sign Up</NavLink>
                <NavLink to={"/Login"}>Log In</NavLink>
                <NavLink to={"/About"} >About</NavLink>
            </div>
        </>
    )
}

export default NavbarHidden
