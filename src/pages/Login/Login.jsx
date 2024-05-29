import React, { useState } from 'react'
import './Login.css'
import girl from '../../assets/img/login-girl.svg'
import { Link, useLocation } from 'react-router-dom'

function Login() {
  const loginActive = useLocation().pathname

  function login(e) {
    e.preventDefault()
  }

  return (
    <div className='Login'>
      <div className="container login__container">
        <div className="login__left">
          <img src={girl} alt="girl" />
        </div>

        <div className="login__right">
          <p className='login__right__title'>Welcome back !</p>
          <div className='login__signup'>
            <Link to={'/login'} className={loginActive == '/login' ? 'active' : null}
            >
              Login
            </Link>
            <Link to={'/signup'} className={loginActive == '/signup' ? 'active' : null}>
              Register
            </Link>
          </div>


          <form onSubmit={login} className='register__form' action="#">
            <label >User name</label>
            <input className='register__form__inp' type="text" placeholder='Enter your User name' />
            <label >Password</label>
            <input className='register__form__inp' type="text" placeholder='Enter your Password' />

            <div className='form__forget'>
              <div className="form__remember">
                <input type="checkbox" />
                <p>Rember me</p>
              </div>

              <div className="form__password">
                <Link>
                  Forgot Possword ?
                </Link>
              </div>
            </div>
            <button type='submit' className='register__btn'>Login</button>
          </form>

        </div>

      </div>

    </div>
  )
}

export default Login