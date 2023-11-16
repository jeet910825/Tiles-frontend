import React, { useEffect, useState } from 'react';
import './Login.css';
import { useLoginMutation} from '../../../feature.js/app/productApi'; // Adjust the path accordingly
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userLogin,{data:loginData,isSuccess:isLoginSucess,isError}] = useLoginMutation() // Use useLoginQuery properly
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await userLogin({email:username,password:password}).unwrap()
    }catch(err){
      alert(err.data.message)
    }
  };

  if(isError){
    console.log(loginData)
  }
  
  
  useEffect(()=>{
    if(loginData?.success){
      console.log(loginData)
      localStorage.setItem("isAdmin",loginData?.user.isAdmin)
      localStorage.setItem("token",loginData?.user.token)
      navigate('/admin')
    }
  },[isLoginSucess])

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="login-btn" type="submit">Log In</button>
      </form>
      please enter jeet@gmail.com and password 1234<br>
      </br>
      <Link to='/'>Home</Link>
    </div>
  );
}

export default Login;
