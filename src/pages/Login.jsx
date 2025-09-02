import './Login.css'
import { useState } from 'react'
import { usuarios } from '../utils/dataBase'


function buscarUsuario(email, password) {
  return usuarios.find(
    (usuario) => usuario.email === email && usuario.password === password
  );
}

function Login() { let [getEmail, setEmail] = useState("")
    let [getPassword, setPassword] = useState("")
    function iniciarSesion(){
      
    }
  return ( 
<div className="container">
  <div className="heading">SignIn to your account</div>
  <form className="form" action="">
    <div className="input-field">
    </div>
    <div className="input-field">
      <input
        required=""
        autoComplete="off"
        type="email"
        name="email"
        id="email"
        onChange={(e)=>setEmail(e.target.value)}
      />
      <label htmlFor="email">Email</label>
    </div>
    <div className="input-field">
      <input
        required=""
        autoComplete="off"
        type="password"
        name="text"
        id="password"
        onChange={(e)=>setPassword(e.target.value)}
      />
      <label htmlFor="username">Password</label>
    </div>

    <div className="btn-container">
      <button className="btn">Submit</button>
      <div className="acc-text">
        New here ?
        <span>Create Account</span>
      </div>
    </div>
  </form>
</div>
  )
}

export default Login