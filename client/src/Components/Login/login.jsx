import React, { useState } from 'react'
import styles from './Login.module.css'
import DoDisturbIcon from '@mui/icons-material/DoDisturb';

const LoginPage = ({setShowlogin}) => {
    const [current, setCurrent] = useState("Login")

  return (
    <div className={styles.login}>
        <form className={styles.loginContainer}>
            <div className={styles.loginTitle}>
                <DoDisturbIcon onClick={()=>setShowlogin(false)} className={styles.closeIcon}/>
                <h2>{current}</h2>
            </div>
            <div className={styles.loginInputs}>
                {current === "Login" ? null 
                :<input type="text"  placeholder='Username' required/>    
                }
                
                <input type="email"  placeholder='Email address' required/>
                <input type="password" placeholder='Password' required/>
            </div>
            <button>{current === "Sign up" ? "Create account" : "Login"}</button>

            <div className={styles.loginCondition}>
                <input type="checkbox" required/>
                <p>By continuing you agree to our privacy policy</p>
            </div>
            
            {current === "Login" ? 
            <p>Create a new account. <small onClick={()=>setCurrent("Sign up")}>click here</small></p>
            :
            <p>Have an account? <small onClick={()=>setCurrent("Login")}>Login</small></p> }
        </form>
    </div>
  )
}

export default LoginPage