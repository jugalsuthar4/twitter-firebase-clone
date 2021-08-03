import React,{useState} from "react";
import "./Signup.css";
import { Link } from "@reach/router";
import TextField from "@material-ui/core/TextField";
import logo from "../images/icons8-twitter-48.png";
import {useAuth} from "../context/useContext"
import {storage} from "../firebase"
import {useNavigate} from "@reach/router"
import emailToName from "email-to-name"

function Signup() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [username,setUsername]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [image, setImage] = useState(null);
    //const [profile, setProfile] = useState("");
    const [progress,setProgress]=useState("");
    const navigate=useNavigate()
    const {signup,currentUser} =useAuth()
    const handleFileChange=(e)=>{
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
          }
    }
  //image uploader
    const handleSignup=async (e)=>{
         e.preventDefault();
         if (password !== confirmPassword) {
             return alert("password are not matching")
          }
          try{
              console.log("before creating user")
              //console.log("process name " ,emailToName.process(email)
              const authUser=await signup(email, password)
              console.log("user created")
              authUser.user.updateProfile({
                displayName: username,
              }).then(() => {
                console.log(" username updated")
                
                navigate("/",{replace:true})

              }).catch((error) => {
                // An error occurred
                 
                console.log("not updated")
              });
          }
          catch(error){
              alert("something went wrong")
          }

    }
  return (
    <div className="signup">
      <div className="form">
      {console.log(currentUser)}
        <img src={logo} alt="twitter-logo" />
        <h2>Signup to Twitter</h2>
        <br />
        <form className="login-form">
          <TextField
            id="outlined-required"
            label="username"
            variant="outlined"
            className="textfield"
            fullWidth="true"
            value={username}
            onChange={e=>setUsername(e.target.value)}
            required="true"
          />
          <br />
          <br />

          <TextField
            id="outlined-required"
            label="Email"
            variant="outlined"
            className="textfield"
            fullWidth="true"
            type="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}

          />
          <br />
          <br />
          <TextField
            id="outlined-required"
            label="Password"
            variant="outlined"
            className="textfield"
            type="password"
            fullWidth="true"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <TextField
            id="outlined-required"
            label="confirm password"
            variant="outlined"
            className="textfield"
            type="password"
            fullWidth="true"
            value={confirmPassword}
            onChange={e=>setConfirmPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit" className="login__button" onClick={handleSignup}>
            Signup
          </button>
        </form>
        <br />
        <h5>
          <Link to="/login" className="signup__link">
            Log In to twitter
          </Link>
        </h5>
      </div>
    </div>
  );
}

export default Signup;
