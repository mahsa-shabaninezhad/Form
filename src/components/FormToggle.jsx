import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './FormToggle.css'
import Login from './Login';
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword';

const FormToggle = ({onSignUp, onLogin, onForgot}) => {
    const [toggle, setToggle] = useState('login')

    const handleForms = (e)=>{
        setToggle(e.target.name)
    }

    let loginBtn = toggle === "login"? 'form__btn form__btn--active' : "form__btn"
    let signUpBtn = toggle === "sign-up"? 'form__btn form__btn--active' : "form__btn"
    return (
        <div className="form-container" dir='rtl'>
            <div className="btn-container">
                <button className={loginBtn} name="login" onClick={handleForms}>ورود</button>
                <button className={signUpBtn} name="sign-up" onClick={handleForms}>ثبت نام</button>
            </div>
            {toggle === 'login'
             ? <Login onLogin={onLogin} onForgot={onForgot}/>
             : <SignUp onSignUp={onSignUp} />
            }

        </div>
    )
}

FormToggle.propTypes = {

}

export default FormToggle
