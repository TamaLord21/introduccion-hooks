import './Login.css'
import { useState } from 'react'
import { usuarios } from '../utils/dataBase'
import {useNavigate} from 'react-router-dom'
import { alertaRedireccion } from '../utils/alerts'

function Login() { let [getEmail, setEmail] = useState("")
    let [getPassword, setPassword] = useState("")
    function iniciarSesion(){  
    }
    let navigate = useNavigate()

    function buscarUsuario() {
    let usuarioEncontrado = usuarios.find(
    (usuario) => getEmail === usuario.email && getPassword === usuario.password
  )
    return usuarioEncontrado
}

function iniciarSesion(){
  if (buscarUsuario()) {
    alertaRedireccion("Bienvenido " + buscarUsuario().name, "success", navigate, '/home')
  } else {
    alert("Usuario o contraseña incorrecta")
  }
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
      <button type="button" className="btn" onClick={iniciarSesion}>Enter</button>
      <div className="acc-text">
        New here?
        <br />
        <span>Create Account</span>
      </div>
    </div>
  </form>
</div>
  )
}

export default Login