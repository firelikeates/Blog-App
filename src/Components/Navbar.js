import React from 'react'
import { Link, NavLink, Redirect } from "react-router-dom"
import { LogoutAction } from '../Actions/AuthActions'
import "../CSS/Navbar.css"
const Navbar = (props) => {
    const toggleactions=(e)=>{
        e.preventDefault();
        const hamburger = document.querySelector(".hamburger")
        hamburger.classList.toggle("active")
        const hiiden_links = document.querySelector(".hidden-links")
        hiiden_links.classList.toggle("active")
    }
    const add_remove_active_from_hidden_links = (e)=>{
        e.preventDefault();
        const hiiden_links = document.querySelector(".hidden-links")
        hiiden_links.classList.remove("active")
        const hamburger = document.querySelector(".hamburger")
        hamburger.classList.remove("active")
    }
    return (
        <>
            <header>
                <h2><NavLink to="/">Blog-App</NavLink></h2>
                <h3>This is a demo app</h3>
                <NavLink to={"/homehidden"} onClick={async function(){
                    await LogoutAction()
                    await window.location.reload()
                }} className="logout">Logout</NavLink>
                <div onClick={toggleactions} className="hamburger">
                    <span></span><span></span><span></span>
                </div>
            </header>
            <div onClick={add_remove_active_from_hidden_links}  className="hidden-links">
                <NavLink exact  to={"/"} >Home</NavLink>
                <NavLink to={"/Add"}  >Add Blog</NavLink>
                <NavLink to={"/Blogs"}  >Blog List</NavLink>
                <NavLink to={"/About"} >About</NavLink>
            </div>
        </>
    )
}

export default Navbar
