import React from 'react'
import PropTypes from 'prop-types'
import {ReactComponent as Close} from '../clear.svg'
import './LoginMassage.css'


const LoginMassage = ({userName, onClosePopUp}) => {
    return (
        <div className="popUp-container" onClick={() => onClosePopUp('login')}>
            <div className='welcom-dialog' onClick={() => onClosePopUp('login')}>
                <Close className='close-signUp-popUp' onClick={() => onClosePopUp('sign-up')}/>
                <p> عزیز خوش آمدید {userName.split('@')[0]}</p>
            </div>
        </div>
    )
}

LoginMassage.propTypes = {

}

export default LoginMassage
