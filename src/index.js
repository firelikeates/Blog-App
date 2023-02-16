import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, useHistory } from 'react-router-dom';
import Store from './Store/Store';
import database, { firebase } from '../src/firebase/FirebaseConfig';
import { setBlogs } from './Actions/BlogActions';
import { login } from './Actions/AuthActions';



export var user_in = false


firebase.auth().onAuthStateChanged(function(user){
  if(user){
    user_in=true
    console.log(user.uid)
    Store.dispatch(login(user.uid))
  }else{
    user_in=false

  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
database.ref("Items").once("value").then(snapshot=>{
  let blogs_to_setfunction=[]
  snapshot.forEach(blog=>{
    if(blog.val().uid===Store.getState().auth.uid){
      blogs_to_setfunction.push(blog.val())
    }
    Store.dispatch(setBlogs(blogs_to_setfunction))
  })
}).then(()=>{
  root.render(
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
})

