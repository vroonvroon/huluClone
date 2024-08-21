import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';


const UpdateInfo = () => {

    const [update, setUpdate] = useState({
        enail: '',
        password: '',
        name: '',
        birthdate: 
        { month: '',
          day: '', 
          year: '' 
        },
        zipcode: '',
        gender: '',
    });

    console.log("Data stored in update : ", update);

    const params = useParams();
    console.log("param user: ", params);

    const submitHandler = async (e) => {
        console.log(update);
        e.preventDefault();
              
        try {
            const response = await fetch(`http://localhost:5000/api/data/getuser/update/${params.id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(response),
            });
             if(response.ok) {
                const data = await response.json(); 
                console.log(data);
                setUpdate(data);
             }
        } catch (err) {
            console.log(err);
        }
    }


  return (
    <div>
       <form onSubmit={submitHandler} action="">
       <div className={styles.profileCard}>

            <div className={styles.fieldSet}>
            <label htmlFor="email">EMAIL</label>
            <input onChange={handleInput} value={profile.email} type="email" name='email' className={styles.inputFieldErrorBefore} autoComplete="current-email"/>
            </div>

            <div className={styles.fieldSet}>
            <label htmlFor="email"> PASSWORD</label>
            <input onChange={handleInput} value={profile.password} type="password" name='password' className={styles.inputFieldErrorBefore} autoComplete="current-password"/>
            </div>

            <div className={styles.fieldSet}>
            <label htmlFor="email">NAME</label>
            <input onChange={handleInput} value={profile.name} type="name" name='name' className={styles.inputFieldErrorBefore} autoComplete="current-name"/>
            </div>

            <div className={styles.fieldSet}>
            <div className={styles.titlesWithIcon}>
                <p className={styles.titles}>BIRTHDATE</p>
                <img src={null} alt="" className={styles.infoIcon}/>
            </div>

            <div style={{display: 'flex', columnGap: '10px'}}>

                {/* MONTH FIELD  */}
                <Month value={profile.birthdate.month}/>
            {/* <Month user={user} setUser={setUser} value={user.birthdate.month} onChange={handleMonthChange}/> */}

                {/* DAYS FIELD  */}
                <Days value={profile.birthdate.day}/>
            {/* <Days user={user} setUser={setUser} onChange={handleDayChange} value={user.birthdate.day}/> */}

                {/* YEARS FIELD  */}
                <Year value={profile.birthdate.year}/>
            {/* <Year user={user} setUser={setUser} value={user.birthdate.year} onChange={handleYearChange}/> */}
            </div>
            </div>

            <div className={styles.fieldSet}>
            <label htmlFor="zipcode">ZIPCODE</label>
            <input onChange={handleInput} value={profile.zipcode} type="zipcode" name='zipcode' className={styles.inputFieldErrorBefore} autoComplete="current-zipcode"/>
            </div>

            <div className={styles.fieldSet}>
            <div className={styles.titlesWithIcon}>
                <label className={styles.titles}>GENDER</label>
                <img src={null} alt="" className={styles.infoIcon}/>
            </div>

            <Gender value={profile.userGender} name='gender'/>
            {/* 
            <Gender user={user} setUser={setUser} value={user.gender} onChange={handleGenderChange}/> */}
            </div>

            <button type='submit' onClick={() => updateUser(user._id)} className={styles.buttons}>Update/ Edit Info</button>
            </div>
       </form>
    </div>
  )
}

export default UpdateInfo