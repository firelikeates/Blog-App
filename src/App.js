import { firebase } from '../src/firebase/FirebaseConfig'
import React, { Fragment, useEffect, Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import AddPage from './Components/AddPage'
import BlogDetail from './Components/BlogDetail'
import BlogList from './Components/BlogList'
import EditPage from './Components/EditPage'
import HomePage from './Components/HomePage'
import LoginPage from './Components/LoginPage'
import Navbar from './Components/Navbar'
import SignUp from './Components/SignUp'
import HomeHidden from './Components/HomeHidden'
import { user_in } from '.'
import NavbarHidden from './Components/NavbarHidden'
import AboutPage from './Components/AboutPage'


export class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <BrowserRouter>
        {(user_in == true) ? (<Navbar />) : (<NavbarHidden />)}
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path={"/homehidden"} component={HomeHidden} />
          <Route path={"/Add"} component={AddPage} />
          <Route exact path={"/Blogs"} component={BlogList} />
          <Route path={"/Blogs/:id"} component={BlogDetail} />
          <Route path={"/Edit/:id"} component={EditPage} />
          <Route path="/Signup" component={SignUp} />
          <Route path={"/Login"} component={LoginPage} />
          <Route path={"/About"} component={AboutPage}/>
        </Switch>
      </BrowserRouter >
    )
  }
}

export default App