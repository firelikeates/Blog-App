import database, { firebase } from '../firebase/FirebaseConfig';
import React from 'react'
import { LoginAction, LogoutAction } from '../Actions/AuthActions';
import "../CSS/Login.css"
import { Redirect } from 'react-router-dom';

const LoginPage = (props) => {

    let validateregex;

    const onFormSubmit = e => {
        const username = document.querySelector("#username")
        const password = document.querySelector("#password")

        e.preventDefault()
        checkValidate([username, password])
        if (validateregex) {
            database.ref("Users_Infos").once("value").then(snapshot => {
                if ((username.value === snapshot.val().email || username.value === snapshot.val().username) && password.value === snapshot.val().password) {
                    setTimeout(() => {
                        props.history.push("/Blogs")
                    }, 2000)

                } else {
                    console.log("Giriş Başarısız");
                }
            })
        }
    }
    const errorfunc = (inp, msg) => {
        var input_classname = inp.classList;
        input_classname = "form-control-signup-invalid"
        let div = inp.nextElementSibling
        div.innerHTML = msg
    }
    const success = (inp) => {
        var input_classname = inp.classList;
        input_classname = "form-control-signup-valid"
        let div = inp.nextElementSibling
        div.innerHTML = ""
    }
    const checkValidate = (inps) => {
        inps.forEach(inp => {
            if (inp.value === "") {
                errorfunc(inp, `${inp.id} is required!`)
                validateregex = false
            } else {
                success(inp)
                validateregex = true
            }
        })
    }
    const showPassword = () => {
        const i_tag = document.querySelector("#göz")
        const pass = document.getElementById("password")
        if (i_tag.classList = "fa fa-eye-slash") {
            i_tag.classList = "fa fa-eye"
        }
        if (i_tag.classList = "fa fa-eye") {
            i_tag.classList = "fa fa-eye-slash"
        }
        if (pass.type = "password") {
            pass.type = "text"
        } else if (pass.type == "text") {
            pass.type = "password"
        }
    }
    return (
        <div className='container-login'>
            <div className="linearlogin">
                <div className="gif"></div>
                <div className="card-login">
                    <div className="card-login-header">
                        Log In <i className="fa fa-check"></i>
                    </div>
                    <div className="card-login-body">
                        <form onSubmit={onFormSubmit}>
                            <label htmlFor="username-email">Username/Email</label>
                            <input id='username' type="text" className="form-control-login" />
                            <div></div>
                            <label htmlFor="password">Password</label>
                            <input id='password' type="password" className="form-control-login" />
                            <i onClick={showPassword} id="göz" className="fa fa-eye-slash"></i>
                            <div></div>
                            <button className='login-register'>Register</button>
                        </form>
                    </div>
                    <div className="line-bottom-group">
                        <div className="bottom-left-line"></div>
                        <div className='bottom-line-text'>or</div>
                        <div className="bottom-right-line"></div>
                    </div>

                    <div className="card-login-footer">
                        <i title='github' className='fa fa-github'></i><i title="google" onClick={async () => {
                            await LoginAction()
                            firebase.auth().onAuthStateChanged(function (user) {
                                database.ref("Users_Infos").once("value").then(async (snapshot) => {
                                    if (snapshot.val().email === user.email) {
                                        await window.location.reload()
                                        await props.history.push("/Blogs")
                                    } else {
                                        console.log("69 giriş")
                                        await LogoutAction
                                        await props.history.push("/homehidden")
                                    }
                                })
                            })
                        }} className='fa fa-google'></i><i title="facebook" className='fa fa-facebook-official'></i><i title='twitter' className='fa fa-twitter'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
