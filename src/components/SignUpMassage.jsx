import React from 'react'
import PropTypes from 'prop-types'
import './SignUpMassage.css'
import {ReactComponent as Close} from '../clear.svg'

const SignUpMassage = ({data, onClosePopUp}) => {
    return (
        <div className="popUp-container" onClick={() => onClosePopUp('sign-up') }>
            <div className='signUp-data' dir="rtl">
            <Close className='close-signUp-popUp' onClick={() => onClosePopUp('sign-up')}/>
                <h2>اطلاعات شما با موفقیت ثبت شد</h2>
                <p>نام: {data.firstName}</p>
                <p>نام خانوادگی: {data.lastName }</p>
                <p>پست الکترونیک: {data.email }</p>
                <p>استان محل تولد: {data.province }</p>
                <p>شهر محل تولد: {data.city }</p>
                {data.education && <p>تحصیلات: {data.education }</p>}
                {data.university && <p>دانشگاه محل تحصیل: {data.university }</p>}
            </div>
        </div>
    )
}

SignUpMassage.propTypes = {
    data: PropTypes.object
}

export default SignUpMassage
