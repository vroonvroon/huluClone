import React, { useState, useEffect, createContext } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import styles from './CreateAccount.module.css'
import logo from '/src/assets/images/Hulu-Logo.png'
import infoIcon from '/src/assets/images/info-icon.svg'
import errorIcon from '/src/assets/images/error-icon.svg'
import huluDisneylogo  from "/src/assets/images/disney-hulu-espn-bundle-logo.svg"
import dropArrow  from '/src/assets/images/dropdown dropdown-arrow.png';
import Gender from './Dropdowns/Dropdown'
import Month from './Dropdown/Month'
import Year from './Dropdown/Year'
import Days from './Dropdown/Days'
import userSchema from '../../validations/UserValidation';
import {toast} from 'react-toastify';




const CreateAccount = () => {

    document.body.style= "background: #f7f8fa";
    const navigate = useNavigate();


    const [user, setUser] = useState({
        email: '',
        password: '',
        name: '',
        birthdate: {
            month: '',
            day: '',
            year: '',
        },
        zipcode: '',
        gender: ''
    }); 
    const storedUser = JSON.parse(localStorage.getItem('user'));
    console.log("CREATE ACCOUNT - ", user);
    
     
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [zipcoderror, setZipcodeError] = useState(false);
    const [activeBtn, setActiveBtn] = useState(false);
    

    const [errors, setErrors] = useState({
        email: 'Please enter a valid email address',
        password: 'Please enter a valid password',
        name: 'Please enter a valid name',
        birthdate: {
            month: 'Required',
            day: 'Required',
            year: 'Required'
        },
        zipcode: 'Please enter a valid zip code',
        gender: 'Required'
    });
    
    const handleInput = (e) => {
        setUser({ 
            ...user, 
            [e.target.name]: e.target.value });
            console.log(user);
    }

    const handleMonthChange = (option) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            birthdate: {
            ...user.birthdate,
            month : option,
            [name]: value }
        });
        setMonth(option);
        setIsActive(false);
    }
      
    const handleDayChange = (option) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            birthdate: {
            ...user.birthdate,
            day : option,
            [name]: value }
        });
        setDays(option);
        setIsActive(false);
    }

    const handleYearChange = (option) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            birthdate: {
            ...user.birthdate,
            year : option,
            [name]: value }
        });
        setYears(option);
        setIsActive(false);
    }

    const handleGenderChange = (option) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            gender : option,
            [name]: value 
        });
        setYears(option);
        setIsActive(false);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
    
            if(response.status === 201) {
                const data = await response.json();
                const userData = {
                    token: data.token,
                    email: data.createUser.email,
                    name: data.createUser.name,
                    birthdate: data.createUser.birthdate,
                    zipcode: data.createUser.zipcode,
                    gender: data.createUser.gender,
                };
                localStorage.setItem('user', JSON.stringify(userData));
                setUser(userData);
                toast('Signed Up Successfully')
                navigate('/');
            } else if(response.status === 400) {
                toast('User already Exists');
                console.log('User already exists');
      
            } else {
                console.log('An error occurred');
            }
        } catch (err) {
            console.log(err);
        }
    }


    // IF ALL THE CONDITIONS ARE MET //
    useEffect(() => {
        if(user.email && user.email.includes('@') && user.email.includes('.com') && user.password && user.password.length >= 6 && user.name && user.name.length >= 3 && user.zipcode && user.birthdate.month && user.birthdate.day && user.birthdate.year && user.gender) {
            setActiveBtn(false);
        } else {
            setActiveBtn(true)
        }
    }, [user]);


    if (storedUser) {
        return <Navigate to="/" replace />;
      }
     

  return (
    <>

     <div className={styles.navbar}>
        <img src={logo} style={{width: '78px', height: '52px', filter: 'brightness(0)'}} />
        <p>LOG IN</p>
     </div>

     <div className={styles.outerCard}>
     <header className={styles.Heading}>Create Your Account</header>
     <h4 className={styles.Subeading}>Use your email and password to watch on your favorite devices.</h4>

     <img src={huluDisneylogo} className={styles.top} />
     </div>

                      {/* FORM BODY  */}

     <form onSubmit={submitHandler} action="">
        <div className={styles.formBody}>
            <p className={styles.infoText}>You will use this email and password to log into your accounts for all your favorite services across The Walt Disney Family of Companies, including Disney+, Hulu and ESPN+. <Link to=''>Learn more</Link> </p>

          
               {/* // EMAIL FIELD  */}
            <div className={styles.fieldSet}>
                <label className={styles.titles}>EMAIL</label>

                <div className={styles.inputContainer} >
                      <input type="email" name='email' value={user.email} className={emailError || user.email.trim() === ''? styles.inputFieldError : styles.inputFieldErrorBefore} onChange={handleInput}/>
                </div>
                {(emailError || user.email.trim() === '') && (<div className={styles.emailErrorActive}>
                    <img src={errorIcon} alt="" className={styles.errorIcon}/>
                    <p className={styles.errorMsg}>Please enter a valid email address</p>
                </div>
                )}
            </div>


               {/* // PASSWORD FIELD  */}
            <div className={styles.fieldSet}> 
                <label className={styles.titles}>PASSWORD</label>

            <div className={styles.allContainer}>
                <div className={styles.inputContainer}>
                     <input type="password" name='password' value={user.password} className={passwordError || user.password.length < 6 || user.password.trim() === '' ? styles.inputFieldError: styles.inputFieldErrorBefore} onChange={handleInput} onBlur={null}/>
                </div>
                {(passwordError || user.password.length < 6 || user.password.trim() === '') && (<div className={styles.passwordErrorActive}>
                    <img src={errorIcon} alt="" className={styles.errorIcon}/>
                    <p className={styles.errorMsg}>Passwords must be six or more characters</p>
                </div>
                )}
            </div>
            </div>


               {/* // NAME FIELD  */}
            <div className={styles.fieldSet}>
                <label className={styles.titles}>NAME</label>

                <div className={styles.inputContainer}>
                    <input type="text" name='name' value={user.name} className={nameError || user.name.length < 3 || user.name.trim() === '' ? styles.inputFieldError : styles.inputFieldErrorBefore} onChange={handleInput} onBlur={null}/>
                </div>
                {(nameError || user.name.length < 3 || user.name.trim() === '') && (<div className={styles.nameErrorActive}>
                    <img src={errorIcon} alt="" className={styles.errorIcon}/>
                    <p className={styles.errorMsg}>Please enter your name</p>
                </div>
                )}
            </div>


              {/* // BIRHTHDAY FIELD  */}
            <div className={styles.fieldSet}>
                <div className={styles.titlesWithIcon}>
                    <p className={styles.titles}>BIRTHDATE</p>
                    <img src={infoIcon} alt="" className={styles.infoIcon}/>
                </div>

            <div style={{display: 'flex', columnGap: '10px'}}>

                    {/* MONTH FIELD  */}
                <Month user={user} setUser={setUser} value={user.birthdate.month} onChange={handleMonthChange}/>
               
                    {/* DAYS FIELD  */}
                <Days user={user} setUser={setUser} onChange={handleDayChange} value={user.birthdate.day}/>

                     {/* YEARS FIELD  */}
                <Year user={user} setUser={setUser} value={user.birthdate.year} onChange={handleYearChange}/>
            </div>
            </div>


               {/* // ZIPCODE FIELD  */}
            <div className={styles.fieldSet}>
                <div className={styles.titlesWithIcon}>
                    <label className={styles.titles}>HOME ZIP CODE</label>
                    <img src={infoIcon} alt="" className={styles.infoIcon}/>
                </div>

                <div className={styles.inputContainer}>
                    <input name='zipcode' type="text" value={user.zipcode} className={zipcoderror || user.zipcode.length < 6 || user.zipcode.trim() === '' || (typeof (user.zipcode === '') && isNaN(user.zipcode)) ? styles.inputFieldError: styles.inputFieldErrorBefore} onChange={handleInput} onBlur={null}/>
                </div>
                {((typeof (user.zipcode === '') && isNaN(user.zipcode)) || zipcoderror || user.zipcode.length < 6 || user.zipcode.trim() === '') && (<div className={styles.zipcodeErrorActive}>
                    <img src={errorIcon} alt="" className={styles.errorIcon}/>
                    <p className={styles.errorMsg}>Please enter a valid zip code</p>
                </div>
                )}
            </div>


               {/* // GENDER FIELD  */}
            <div className={styles.fieldSet}>
                <div className={styles.titlesWithIcon}>
                    <label className={styles.titles}>GENDER</label>
                    <img src={infoIcon} alt="" className={styles.infoIcon}/>
                </div>

            <Gender user={user} setUser={setUser} value={user.gender} onChange={handleGenderChange}/>
            </div>
         </div>
                             
                      {/* FORM ENDS  */}


    <div className={styles.postFormContent}>
        <p className={styles.extraInfo}>Hulu will use your data to personalize and improve your Hulu experience and to send you information about Hulu. You can change your communication preferences at any time. We may use your data as described in our <a href ="">Privacy Policy</a>, including sharing it with</p>
        <p className={styles.extraInfo2}><a href ="">The Walt Disney Family of Companies</a>. By clicking “CONTINUE” below you agree to our <a href ="">Subscriber Agreement</a> and acknowledge that you have read our <a href ="">Privacy Policy</a>.</p>

        <button type='submit' className={activeBtn? styles.continueBtn : styles.continueBtnActive}>CONTINUE</button>

        <div className={styles.links}>
            <div className={styles.aboutAds} style={{display: 'flex'}}>
                <img src="images/about-ads.svg" alt="" />
                <p>About Ads</p>
            </div>
            <p>Subscriber Agreement</p>
            <p>Privacy Policy</p>
            <p>Do Not Sell or Share My Personal Information</p>
            <p>Your US State Privacy Rights</p>
            <p>© 2023 Hulu, LLC</p>
        </div>
    </div>
     </form>
    </>
  )
}

export default CreateAccount;