import './Login.css'
import { useState } from 'react'

function Login() { let [getEmail, setEmail] = useState("")
    let [getPassword, setPassword] = useState("")
    function iniciarSesion(){
      
    }
  return ( 
<div class="container">
  <div class="heading">SignIn to your account</div>
  <form class="form" action="">
    <div class="input-field">
    </div>
    <div class="input-field">
      <input
        required=""
        autocomplete="off"
        type="email"
        name="email"
        id="email"
        onChange={(e)=>setEmail(e.target.value)}
      />
      <label for="email">Email</label>
    </div>
    <div class="input-field">
      <input
        required=""
        autocomplete="off"
        type="password"
        name="text"
        id="password"
        onChange={(e)=>setPassword(e.target.value)}
      />
      <label for="username">Password</label>
    </div>

    <div class="btn-container">
      <button class="btn">Submit</button>
      <div class="acc-text">
        New here ?
        <span>Create Account</span>
      </div>
    </div>
  </form>
</div>
  )
}

export default Login