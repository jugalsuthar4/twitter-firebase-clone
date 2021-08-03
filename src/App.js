import React from 'react'
import "./App.css"
import {Router} from "@reach/router"
import dotenv from "dotenv"
import Login from "./components/Login"
import Signup from "./components/Signup"
import PrivateRoute from "./components/PrivateRoute"
import {AuthProvider} from "./context/useContext"
import UploadImage from "./components/UploadImage"

function App() {
  return (
    <AuthProvider>
   <Router>
       <Login path="/login"/>
       <PrivateRoute path="/"/>
       <Signup path="/signup"/>
       <UploadImage path="/upload"/>
       
   </Router>
   </AuthProvider>
  )
}

export default App
