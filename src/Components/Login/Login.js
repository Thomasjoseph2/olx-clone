import React, { useState ,useContext } from 'react';
import './Login.css';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import {useHistory,Link} from 'react-router-dom';
function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const {firebase}=useContext(FirebaseContext);
  const history=useHistory()
  const handleLogin=(e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((err)=>{
      alert(err.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
           
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="lname"
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
        
          />
          <br />
          <br />
          <button>Login</button>
        </form>
      <Link style={{color:'black',textDecoration:'none'}} to={"/signup"}> <span >Signup</span></Link> 
      </div>
    </div>
  );
}

export default Login;
