import React from 'react'
import "../CSS/Home.css"
import { Link, NavLink } from "react-router-dom"

const HomeHidden = () => {
    
    return (
        <>
            <div className="container-homepage">
                <section className='home-section-1'>
                    <div className="info-box-home">
                        <h4>This is a demo app of blog website</h4>
                        <p>I'm a student that trying the fill my github page:&#41;</p>
                    </div>
                    <div className="links-home-page">
                        <Link to={"/"} exact>Home</Link>
                        <Link to={"Login"}>LogIn</Link>
                        <Link to={"/Signup"}>Sign Up</Link>
                        <Link to={"/About"}>About</Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export default HomeHidden
