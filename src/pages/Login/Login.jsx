import React, { useState } from 'react'
import './login.css'
import loginimg from "../../assets/front.jpg"
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [data, setData] = useState("");
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const change = (e) => {
    const value = e.target.value;
    if (e.target.name == "username") {
      setData(value)
    }


    setUser({ ...user, [e.target.name]: value });

    console.log(user);


  }

  const handleLogin = () => {
    localStorage.setItem("auth", JSON.stringify(user));
    if (user.username != null && user.password != null) {
      navigate("/home");
    }
    else {
      alert("Fill the data")
    }

  }



  return (
    <div className='login-container'>
      <div className='form'>

        <h1>{data} {data ? <>,</> : <></>} &nbsp;  </h1>
        <h2>Welcome Back</h2>
        <p>Hey,Welcome back to your special place</p>

        <label><FaUser /> <h4>Username</h4></label>
        <input type='text' name='username' onChange={change} />

        <label><FaLock /><h4>Password</h4></label>
        <input type='password' name='password' onChange={change} />

        <button type='button' className='login-btn' onClick={handleLogin}>Submit</button>

        <h5>Don't have an Account ? <b>Sign Up</b></h5>
      </div>
      <div>
        <img src={loginimg} alt="" />
      </div>
    </div>

  )
}

export default Login
