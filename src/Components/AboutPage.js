import React from 'react'
import "../CSS/About.css"

const AboutPage = () => {
    return (
        <div className='about-div'>
            <div className='div-1'>
                <h1>Welcome to My About Page</h1>
                <p >&nbsp;&nbsp;&nbsp;&nbsp;I am a student at Yıldız Techical University. I am in preparatory year now. My departmen is Control and Otomation Engineering.I have a big dreams as everybody who interested in coding has. So i am going to try to make that dream comes true as hard as i can. I am ambitious, funny, love in learning new skills, honest and hard-working person. I hope, this simple app will be heplful for me when i am about to get hired :&#41;<h5>Lastly, My contact links &#8595; </h5> </p>
            </div>
            <div className="div-2">
                <div className="first-contact-row">
                    <div><a href="https://www.instagram.com/atesgkcglu/"><i className="fa fa-instagram"></i></a></div>
                    <div><a title='gmail' href="mailto:atesgokceoglu@gmail.com"><i className="fa fa-envelope-o"></i></a></div>
                    <div><a href="tel:+905372136848"><i className="fa fa-phone"></i></a></div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
