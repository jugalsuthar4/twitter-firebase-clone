import React from 'react'
import {useAuth} from  "../context/useContext"
import Home from "./Home"
import Login from "./Login"

function PrivateRoute() {

    const {currentUser} =useAuth()
    console.log(currentUser)
    return (
        <>
         {
             currentUser?<Home/>:<Login/>
         }
        </>
    )
}

export default PrivateRoute
