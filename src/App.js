import { useState } from 'react';
import './App.css';
import ForgotPassword from './components/ForgotPassword';
import FormToggle from './components/FormToggle'
import LoginMassage from './components/LoginMassage';
import SignUpMassage from './components/SignUpMassage';

function App() {
  const [SignUp, setSignUp] = useState(false);
  const [login, setLogin] = useState(false)
  const [forgottenPassword, setForgottenPassword] = useState(false)

  const handleSignUp = (data) =>{
    console.log(data);
    setSignUp(data)
  }

  const handleLogin = (data) =>{
    setLogin(data)
  }

  const handleForgottenPassword = () =>{
    setForgottenPassword(true)
  }

  const handlePopUp = (popUp) => {
    switch (popUp) {
      case 'sign-up':
        setSignUp(false)
        break;
      case 'forgot-password':
        setForgottenPassword(false)
        break;
    
      default:
        setLogin(false)
        break;
    }
  }

  return (
    <div className="App">
      {!(SignUp || login || forgottenPassword) && <FormToggle onSignUp={handleSignUp} onLogin={handleLogin} onForgot={handleForgottenPassword}/>}
      {SignUp && <SignUpMassage data={SignUp}  onClosePopUp={handlePopUp}/>}
      {login && <LoginMassage userName={login} onClosePopUp={handlePopUp}/>}
      {forgottenPassword && <ForgotPassword onClosePopUp={handlePopUp}/>}
    </div>
  );
}

export default App;
