import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Form.css'
import {ReactComponent as HidePass} from '../hide_password.svg'
import {ReactComponent as ShowPass} from '../show_password.svg'


const Login = ({onLogin, onForgot}) => {
    const [email, setEmail]= useState('')
    const [emailErr, setEmailErr]= useState('')
    const [password, setPassword]= useState('')
    const [passwordErr, setPasswordErr]= useState('')
    const [togglePasswordVisibility, setTogglePasswordVisibility] = useState(false)

    const emailPatt = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const passwordPatt = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})",'g')

    useEffect(() => {
        emailPatt.lastIndex = 0
        if(emailPatt.test(email)){
            setEmailErr('fixed')
        }
        
    }, [email, emailPatt])

    useEffect(() => {
        passwordPatt.lastIndex  = 0
        if(passwordPatt.test(password)){
            setPasswordErr('fixed')
        }
    }, [password, passwordPatt])

    const handleSubmit = (e) => {
        e.preventDefault()
        let isValidate = true;

        //email validation
        emailPatt.lastIndex = 0
        if(!emailPatt.test(email)){
            setEmailErr('error')  
            isValidate = false
        }

        //passwordValidation
        passwordPatt.lastIndex = 0
        if(!passwordPatt.test(password)){
            setPasswordErr('error')
            isValidate = false
        }
        if (isValidate) {
            onLogin(email)
        }
    }

    const handlePasswordVisibility = () => {
        setTogglePasswordVisibility(!togglePasswordVisibility)
    }

    return (
        <div>
            <h2>خوش آمدید</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className={emailErr}
                    name="email" 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)} 
                    placeholder="پست الکترونیک"
                />
                <div className="password-input">
                    <input 
                        type={togglePasswordVisibility ? 'text' : 'password'}
                        className={passwordErr} 
                        name="password" 
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)} 
                        placeholder="کلمه عبور"
                    />
                    {togglePasswordVisibility
                    ? <HidePass className='toggle-visibility' onClick={handlePasswordVisibility}/> 
                    :<ShowPass className='toggle-visibility' onClick={handlePasswordVisibility}/>
                    }
                </div>
                <a href="#" className="forgot-link" onClick={onForgot}>فراموش کردید؟</a>
                <input type="submit" className="btn--submit" value="ورود" />
            </form>
        </div>
    )
}

Login.propTypes = {

}

export default Login
