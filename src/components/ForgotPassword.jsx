import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {ReactComponent as Close} from '../clear.svg'


const ForgotPassword = ({onClosePopUp}) => {
    const [email, setEmail] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [submit, setSubmit] = useState(false)

    const emailPatt = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    useEffect(() => {
        emailPatt.lastIndex = 0
        if(emailPatt.test(email)){
            setEmailErr('fixed')
        }
        
    }, [email, emailPatt])

    const handleSubmit = (e) => {
        e.preventDefault()
        let isValidate = true;

        //email validation
        emailPatt.lastIndex = 0
        if(!emailPatt.test(email)){
            setEmailErr('error')  
            isValidate = false
        }

        if(isValidate){
            setSubmit(true)
        }
    }


    return (
        <div className="popUp-container">
            <div className='form-container popUp' dir="rtl">
                {submit
                ? <div>
                    <Close className='close-signUp-popUp' onClick={() => onClosePopUp('forgot-password')}/>
                    <p style={{color: '#fff'}}>لینک تغییر رمز عبور به ایمیل شما (<span>{email}</span>) ارسال شد</p> 
                </div>
                : <form onSubmit = {handleSubmit}>
                    <label htmlFor="email">
                            نام کاربری:
                    </label>
                    <input type="email" className={emailErr} id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="submit"  value="ثبت" className="btn--submit"/>
                  </form>}
            </div>

        </div>
    )
}

ForgotPassword.propTypes = {

}

export default ForgotPassword
