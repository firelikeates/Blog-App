import database from "../firebase/FirebaseConfig"
import React, { useEffect, useState } from 'react'
import "../CSS/SignUp.css"

const SignUp = () => {
    let username,password,email,re_password;
    useEffect(() => {
        username = document.getElementById("username")
        email = document.getElementById("email")
        password = document.getElementById("password")
        re_password = document.getElementById("re_password")
        console.log(username.value);
    }, [])

    const [validate_true_false, setValidate_true_false] = useState(false)
    const [emailregex, setemailregex] = useState(false)
    const [passwords, setpasswords] = useState(false)
    const [lengthcontrol, setlengthcontrol] = useState(false)


    const errorfunc = (inp, msg) => {
        let input_classname = inp.classList;
        input_classname = "form-control-signup-invalid"
        const div = inp.nextElementSibling
        div.innerHTML = msg
    }
    const success = (inp) => {
        let input_classname = inp.classList;
        input_classname = "form-control-signup-valid"
        const div = inp.nextElementSibling
        div.innerHTML = ""
    }

    const checkValidate = (inps) => {
        inps.forEach(inp => {
            console.log(inp.value);
            if (inp.value === "") {
                errorfunc(inp, `${inp.id} is required!`)
                setValidate_true_false(false)
            } else {
                success(inp)
                setValidate_true_false(true)
            }
        })
    }
    function checkPasswords(p1, p2) {
        if (p1.value === "") {
            errorfunc(p1, "Password is required!")
            setpasswords(false)
        } else {
            success(p1)
            if (p1.value !== p2.value) {
                errorfunc(p2, "Paswords do not match!")
                setpasswords(false)
            } else {
                success(p2)
                setpasswords(true)
            }
        }
    }

    function checkLength(max, min, inp) {
        if (inp.value === "") {
            errorfunc(inp, `${inp.id} is required!`)
            setlengthcontrol(false)
        } else {
            if (inp.value.length > max) {
                errorfunc(inp, `${inp.id} must contains max ${max} character!`)
                setlengthcontrol(false)
            } else if (inp.value.length < min) {
                errorfunc(inp, `${inp.id} must contains min ${min} character!`)
                setlengthcontrol(false)
            } else {
                success(inp)
                setlengthcontrol(true)
            }
        }
    }

    function checkEmail(inp) {
        if (email.value === "") {
            errorfunc(inp, "Email is required!")
            setemailregex(false)
        } else {
            const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (re.test(inp.value)) {
                success(inp)
                setemailregex(true)
            } else {
                errorfunc(inp, "Invalid email!")
                setemailregex(false)
            }
        }
    }
    const onFormSubmit = (e) => {
        e.preventDefault()
        checkValidate([username, password, email, re_password])
        checkEmail(email)
        checkLength(16, 8, username)
        checkLength(14, 6, password)
        checkPasswords(password, re_password)
        if (emailregex===true && lengthcontrol===true && validate_true_false===true && passwords===true) {
            database.ref("Users_Infos").once("value").then(spanshot=>{
                if(spanshot.val()===null){
                    database.ref("Users_Infos").set({username:username.value,email:email.value,password:password.value})
                }
            })
        }

    }

    return (
        <div className='container-signup'>
            <div className="linearsignup">
                <div className="card-signup">
                    <div className="card-signup-header">
                        Sign Up <i className="fa fa-check"></i>
                    </div>
                    <div className="card-signup-body">
                        <form onSubmit={onFormSubmit}>
                            <label htmlFor="username">Username</label>
                            <input id='username' type="text" className="form-control-signup" />
                            <div></div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" className="form-control-signup" />
                            <div></div>
                            <label htmlFor="password">Password</label>
                            <input id='password' type="password" className="form-control-signup" />
                            <div></div>
                            <label htmlFor="re-password">Re-Password</label>
                            <input id='re_password' type="password" className="form-control-signup" />
                            <div></div>
                            <button className='sign-up-register'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
