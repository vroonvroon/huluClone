import React from 'react'
import styles from './LogIn.module.css';
import { useState, useRef, useContext } from 'react'
import { PressLogInButton } from '../Buttons/Buttons';
import { Link, useNavigate  } from 'react-router-dom';
import { LogInContext } from '../Navbar/Navbar';
import {toast} from 'react-toastify';



const LogIn = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    console.log('USER LOGGED IN', user);

    const { setModal, setLoginModal } = useContext(LogInContext) || {};

    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowHide = () => {
        setShowPassword(!showPassword);
    };

    const inputHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value})
            console.log(user);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Logged In', data);
                const userData = {
                  token: data.userData.token,
                  name: data.userData.name,
                };
               
                localStorage.setItem('user', JSON.stringify(userData));
                toast.success('Logged In Successfully')
                navigate('/', { replace: true });
              } else {
                toast.error('Invalid Credentials')
                console.error('Login failed:' || 'Unknown error');
              }
        } catch (err) {
            console.log('Login error:', err || 'Unknown error');
        }
    };

    

  return (
    <>
        <div className={styles.modalContainer}>
            <div className={styles.pressLogInModal}>

            <form onSubmit={submitHandler} action="">
                <div className={styles.innerModal}>
                    <div className={styles.LogInSection}>
                        <p className={styles.LoginText}>Press Log In</p>

                            <div className={styles.inputSection}>

                                <div className={styles.emailSec}>
                                    <label htmlFor="email" className={email? styles.emailLabelActive : styles.emailLabel}>Email</label>
                                    <input onChange={inputHandler} value={user.email} ref={emailRef} type="text" name='email' for='email' className={email ? styles.emailActive : styles.emailInput} onFocus={() => setEmail(true)} onBlur={() => emailRef.current.value.length !==0? setEmail(true) : setEmail(false)}/>
                                </div>

                                <div className={styles.passwordSec}>
                                    <label htmlFor="password" className={password? styles.passwordLabelActive : styles.passwordLabel}>Password</label>
                                        <p className={styles.showHide} style={{fontSize: '17px'}} onClick={toggleShowHide}>{showPassword? 'Hide' : 'Show'}</p>
                                    <input onChange={inputHandler} ref={passwordRef} name="password" type={showPassword ? 'text' : "password"} className={password ? styles.passwordActive : styles.passwordInput} onFocus={() => setPassword(true)} onBlur={() => passwordRef.current.value.length !==0? setPassword(true) : setPassword(false)}/>
                                </div>
                               
                            </div>

                            {/* <PressLogInButton>LOG IN</PressLogInButton> */}
                      
                            <div className={styles.logInButtonBackground}>
                                <button type='submit' className={styles.logInButton}>LOG IN</button>
                            </div>

                            <p style={{textDecoration: 'underline', marginBlock: '20px'}}>Forgot Password?</p>
                            <p class={styles.finePrint}>By accessing the Hulu Press Site, you agree to the <a href="https://press.hulu.com/terms">Terms Of Use</a>. The content on the Press Site is for one-time, domestic (U.S.), editorial use only by domestic (U.S.-based and U.S.-targeted) outlets only – no commercial use is permitted. Shared access to the Press Site is prohibited; each individual must sign up for an account.</p>
                    </div>


                    <div className={styles.createAccountSection}>

                        <div className={styles.close} onClick={() => { setModal(false); setLoginModal(false);
                        }}>
                            <svg width="22px" height="23px" viewBox="0 0 22 23"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square"><g transform="translate(-1047.000000, -266.000000)" stroke="#6B7790" strokeWidth="3"><g transform="translate(500.000000, 235.500000)"><g transform="translate(548.000000, 32.000000)"><path d="M0.625,19.375 L19.375,0.625"></path><path d="M0.625,0.625 L19.375,19.375"></path></g></g></g></g></svg>
                        </div>

                        <div className={styles.createAccountMain}>
                            <div className={styles.greenContainer}>
                             <p style={{fontSize: '26px', fontWeight: '800', padding: '0px 10px'}}>CREATE AN ACCOUNT</p>
                            </div>
                            <p style={{fontSize: '16px', marginBlock: '30px'}}>Provide your press credentials and gain access to Hulu media assets.</p>
                            <button className={styles.getStartedButton}>GET STARTED</button>

                            <div className={styles.link}>
                                <p style={{fontSize: '16px'}}>Looking to watch Hulu Original content?</p>
                                <Link to='/account' className={styles.toAccount}>Go to Hulu.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            </div>
        </div>
    </>
  )
}

export default LogIn