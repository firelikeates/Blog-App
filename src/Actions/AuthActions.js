import {firebase,GoogleProvider} from "../firebase/FirebaseConfig"

export const LoginAction =()=>{
    return firebase.auth().signInWithPopup(GoogleProvider)
}
export const LogoutAction = ()=>{
    return firebase.auth().signOut()
}

export const login = (uid)=>({
    type:"LOGİN",
    uid:uid
})

export const logout = ()=>({
    type:"LOGOUT"
})