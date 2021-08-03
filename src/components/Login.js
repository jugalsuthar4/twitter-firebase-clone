import React,{useState} from "react";
import "./Login.css";
import logo from "../images/icons8-twitter-48.png";
import TextField from "@material-ui/core/TextField";
import {Link} from "@reach/router"
import {useAuth} from "../context/useContext"
import {useNavigate} from "@reach/router"

function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {login}=useAuth()
    const navigate=useNavigate()
    
    const handleLogin=async(e)=>{
      e.preventDefault();
      try {
          const authUser=await login(email, password)
          alert("login succesfull") 
          navigate("/",{replace:true})
      } catch (error) {
          alert(error.message)
      }

    }
   
    
  return (
    <div className="login">
      <div className="form">
        <img src={logo} alt="twitter-logo" />
        <h2>Log in to Twitter</h2>
        <br/>
        <form className="login-form">
           
          <TextField
            id="outlined-required"
            label="Email"
            variant="outlined"
            className="textfield"
            fullWidth="true"
            value={email}
            onChange={e=>setEmail(e.target.value)}

          />
          <br/><br/>
          <TextField
            id="outlined-required"
            label="Password"
            variant="outlined"
            className="textfield"
            type="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            fullWidth="true"
          /><br/><br/>
          <button type="submit" className="login__button" onClick={handleLogin}>
              Log In
          </button>
        </form>
        <br/>
        <h5><Link to="/signup" className="signup__link">Signup for twitter</Link></h5>
      </div>
    </div>
  );
}

export default Login;
