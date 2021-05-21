import React, { useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import './Form.css'
import {ReactComponent as HidePass} from '../hide_password.svg'
import {ReactComponent as ShowPass} from '../show_password.svg'

const SignUp = ({onSignUp}) => {
    //STATES 
    const [firstName, setFirstName] = useState('')
    const [firstNameErr, setFirstNameErr] = useState('')
    const [lastName, setLastName] = useState('')
    const [lastNameErr, setLastNameErr] = useState('')
    const [email, setEmail] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [password, setPassword] = useState('')
    const [passwordErr, setPasswordErr] = useState('')
    const [province, setProvince] = useState('')
    const [provinceErr, setProvinceErr] = useState('')
    const [city, setCity] = useState(['',''])
    const [education, setEducation] = useState('')
    const [university, setUniversity] = useState('')
    const [universityErr, setUniversityErr] = useState('')
    const [togglePasswordVisibility, setTogglePasswordVisibility] = useState(false)

    const citiesList ={
        تهران:['تهران','ری'],
        شیراز: ['شیراز', 'کازرون'],
        اصفهان: ['اصفهان','کاشان'],
        کرمانشاه: ["کرمانشاه",'دالاهو'],
        مازندران: ['ساری','رامسر'],
        لرستان: ['خرم آباد','کوه دشت'],
        یزد: ['بافق','مهریز'],
        کردستان: ['سنندج','دیوان دره'],
        سمنان: ['سمنان','شاهرود'],
        بوشهر: ['بوشهر','گناوه']
    }

    let cities = province ? citiesList[province] : ['','']

    let cityDisplay = province? 'inline-block':'none'
    let uniDisplay = education? 'inline-block' : 'none'

    const emailpatt = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const passwordPatt = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})",'g')


    const handleCitiesChange = (e) =>{
        console.log(e.target.value);
        setCity(e.target.value)
    }
    
    useEffect(() => {
        if (firstName) {
            setFirstNameErr('fixed')
        }
        
    }, [lastName])

    useEffect(() => {
        if (firstName) {
            setLastNameErr('fixed')
        }
        
    }, [lastName])

    useEffect(() => {
        emailpatt.lastIndex = 0
        if(emailpatt.test(email)){
            setEmailErr('fixed')
        }
        
    }, [email, emailpatt])

    useEffect(() => {
        passwordPatt.lastIndex  = 0
        if(passwordPatt.test(password)){
            setPasswordErr('fixed')
        }
    }, [password, passwordPatt])

    useEffect(() => {
        if (province) {
            setProvinceErr('fixed-select')
        }
        
    }, [province])
    
    useEffect(() => {
        if (university && universityErr) {
            setUniversityErr('fixed')
        }
        
    }, [university])

    

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValidate = true;

        if (!firstName) {
            setFirstNameErr('error')
            isValidate = false
        }
        if (!lastName) {
            setLastNameErr('error')
            isValidate = false
        }

        //email validation
        emailpatt.lastIndex = 0
        if(!emailpatt.test(email)){
            setEmailErr('error')  
            isValidate = false
        }

        //passwordValidation
        passwordPatt.lastIndex = 0
        if(!passwordPatt.test(password)){
            setPasswordErr('error')
            isValidate = false
        }

        if (!province) {
            setProvinceErr('error-select')
            isValidate = false
        }
        
        if (!university) {
            setUniversityErr('error')
            isValidate = false
        }

        if(isValidate){
            const data = {firstName, lastName, email, password, province, city, education, university}
            onSignUp(data)

        }
        
    }

    const handlePasswordVisibility = () => {
        setTogglePasswordVisibility(!togglePasswordVisibility)
    }
    
    return (
        <div>
            <h2>رایگان ثبت نام کنید</h2>
            <form onSubmit={handleSubmit} noValidate>
                    <input 
                        className={firstNameErr} 
                        name="firstName" 
                        value={firstName} 
                        onChange={(e)=>setFirstName(e.target.value)} 
                        placeholder="نام"
                    />
                    <input 
                        
                        className={lastNameErr} 
                        name="lastName" 
                        value={lastName} 
                        onChange={(e)=>setLastName(e.target.value)} 
                        placeholder="نام خانوادگی"
                    />
                    <input 
                        type="email"
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
                    <select 
                        type="text"
                        className={provinceErr} 
                        name="province" 
                        value={province} 
                        onChange={(e)=>setProvince(e.target.value)} 
                        placeholder="نام خانوادگی"
                    >
                        <option value="">محل تولد</option>
                        <option value="تهران">تهران</option>
                        <option value="شیراز">شیراز</option>
                        <option value="اصفهان">اصفهان</option>
                        <option value="کرمانشاه">کرمانشاه</option>
                        <option value="مازندران">مازندران</option>
                        <option value="لرستان">لرستان</option>
                        <option value="یزد">یزد</option>
                        <option value="کردستان">کردستان</option>
                        <option value="سمنان">سمنان</option>
                        <option value="بوشهر">بوشهر</option>
                    </select>
                    <select 
                        name="city"
                        style={{display:cityDisplay}}
                        value={city} 
                        onChange={handleCitiesChange}
                    >
                        <option value={cities[0]}>{cities[0]}</option>
                        <option value={cities[1]}>{cities[1]}</option>
                    </select>
                    <select 
                        type="text" 
                        name="education" 
                        value={education} 
                        onChange={(e)=>setEducation(e.target.value)} 
                    >
                        <option value="">تحصیلات</option>
                        <option value="دیپلم">دیپلم</option>
                        <option value="کارشناسی">کارشناسی</option>
                        <option value="کارشناسی ارشد">کارشناسی ارشد</option>
                        <option value="دکترا">دکترا</option>
                    </select>
                    <input 
                        type="text"
                        className={universityErr} 
                        name="university"
                        style={{display:uniDisplay}}
                        value={university}
                        onChange={(e)=>setUniversity(e.target.value)}
                        placeholder='محل تحصیل'
                        
                    />
                    <input 
                        type="submit" 
                        value='ثبت نام' 
                        className="btn--submit"
                    />
            </form>
        </div>
    )
}

SignUp.propTypes = {

}

export default SignUp
