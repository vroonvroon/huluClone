import React, {useState, useEffect, useContext} from 'react'
import styles from './Profile.module.css';
import {Month2} from '../../../Pages/CreateAccount/Dropdown/Month';
import {Days2} from '../../../Pages/CreateAccount/Dropdown/Days';
import {Year2} from '../../../Pages/CreateAccount/Dropdown/Year';
import {Gender2} from '../../../Pages/CreateAccount/Dropdowns/Dropdown';
import { useNavigate, useParams } from 'react-router-dom';
import {toast} from 'react-toastify';



const Profile= () => {
  console.log("Profile component rendered");

    const [profile, setProfile] = useState({
      email: '',
      password: '',
      name: '',
      birthdate: {
        month: '',
        day: '',
        year: '',
      },
      zipcode: '',
      gender: '',
    });

    const [loading, setLoading] = useState(true);
  
    console.log("Profile data stored :", profile);

    const [user, setUser] = useState();
    console.log("DATA received in user", user);

    const [userData, setUserData] = useState(
      JSON.parse(localStorage.getItem("user"))
    );

    const [token, setToken] = useState(userData.token);

    const navigate = useNavigate();
 
    // useEffect(() => {
    //  if(userData && user) {
    //     setProfile({
    //         email: user?.email,
    //         password: user?.password,
    //         name: user?.name,
    //         birthdate: {
    //             month: user?.birthdate.month,
    //             day: user?.birthdate.day,
    //             year: user?.birthdate.year,
    //         },
    //         zipcode: user?.zipcode,
    //         gender: user?.gender
    //     }); 
    //    setUserData(true);
    //  }
    // }, [user]);


 
    // const submitHandler = async () => {
    //      try {
    //          const response = await fetch(`http://localhost:5000/api/data/getuser`, {
    //             method: 'GET',
    //             headers: {
    //                 "Authorization": `Bearer ${token}`
    //             }
    //      });
    //       if(response.ok) {
    //         const data = await response.json();
    //         console.log(data);
    //         setUser(data)
    //       }
    //      } catch (err) {
    //         console.log(err);
    //      }
    // };


    // const submitHandler = async () => {
    //   try {
    //     const response = await fetch(`http://localhost:5000/api/data/getuser`, {
    //       method: 'GET',
    //       headers: {
    //         "Authorization": `Bearer ${token}`
    //       }
    //     });
    
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    
    //     const data = await response.json();
    //     console.log(data);
    //     setUser(data);
    //   } catch (err) {
    //     console.error('Error:', err);
    //     if (err instanceof TypeError) {
    //       console.error('Failed to fetch. Is the server running and accessible?');
    //     }
    //   }
    // };


    const submitHandler = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/data/getuser`, {
          method: 'GET',
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log(data);
        setUser(data);
        setProfile({
          ...profile,
          email: data.email,
          password: data.password,
          name: data.name,
          birthdate: {
            month: data.birthdate.month,
            day: data.birthdate.day,
            year: data.birthdate.year,
          },
          zipcode: data.zipcode,
          gender: data.gender,
        });
        setLoading(false);
      } catch (err) {
        console.error('Error:', err);
        if (err instanceof TypeError) {
          console.error('Failed to fetch. Is the server running and accessible?');
        }
      }
    };
    

    useEffect(() => {
        submitHandler()
    },[])


    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setProfile({ 
            ...profile, 
            [name]: value,
        });
    };

    const handleGenderChange = (option) => {
      const name = e.target.name;
      const value = e.target.value;

      setUser({
          ...user,
          gender : option,
      });
      setGender(option);
      setIsActive(false);
    }

    const handleMonthChange = (e, option) => {
      const name = e.target.name;
      const value = e.target.value;

      setUser({
          ...user,
          birthdate: {
          ...user.birthdate,
          month : option
        }
      });
      setMonth(option);
      setIsActive(false);
    }
    
    const handleDayChange = (e, option) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            birthdate: {
            ...user.birthdate,
            day : option,
          }
        });
        setDays(option);
        setIsActive(false);
    }

    const handleYearChange = (e, option) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            birthdate: {
            ...user.birthdate,
            year : option,
           }
        });
        setYears(option);
        setIsActive(false);
    }


    // UPDATE USER INFO //
    const params = useParams();
    console.log("param user: ", params);

    const updateUser = async (id) => {
        console.log('Update called');
        try {
            const response = await fetch(`http://localhost:5000/api/data/getuser/update/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(profile),
            });
             if(response.ok) {
                const data = await response.json(); 
                toast.success('Data Updated Successfully')
                console.log(data);
             }
        } catch (err) {
            toast.error('Failed to update data')
            console.log(err);
        }
    }
    
  
    // DELETE USER Operations//
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
      deleteUser(user._id);
      setShowModal(false);
    };
    
    const deleteUser = async (id) => {
        try {
            console.log('deletion Token:', token);
            const response = await fetch(`http://localhost:5000/api/data/getuser/delete/${id}`, {
                method: 'DELETE',                 
                headers: {
                  "Authorization": `Bearer ${token}`,
                  "Content-Type": "application/json"
                }   
            });

            if (response.ok) {
                const data = await response.json();
                toast.success('Account deleted successfully');
                localStorage.removeItem("user");
                navigate('/');
            } else {
                toast.error('Failed to delete account');
                console.error('Error deleting user:', response.status, response.statusText);
            }
        } catch(err) {
            toast.error('Failed to delete account')
            console.log("Error deleting user", err);
        }
    }

    useEffect(() => {
      if (userData) {
        setToken(userData.token);
      }
    }, [userData]);


    // useEffect(() => {
    //   if (user && user.birthdate) {
    //     setProfile({
    //       email: user.email,
    //       password: user.password,
    //       name: user.name,
    //       birthdate: {
    //         month: user.birthdate.month,
    //         day: user.birthdate.day,
    //         year: user.birthdate.year,
    //       },
    //       zipcode: user.zipcode,
    //       gender: user.gender,
    //     });
    //     setUserData(true);
    //   }
    // }, [user]);

    useEffect(() => {
      if (user) {
        setProfile({
          ...profile,
          email: user.email,
          password: user.password,
          name: user.name,
          birthdate: {
            ...profile.birthdate,
            month: user.birthdate.month,
            day: user.birthdate.day,
            year: user.birthdate.year,
          },
          zipcode: user.zipcode,
          gender: user.gender,
        });
      }
    }, [user]); 

    console.log("MONTH" ,profile.month);


    console.log('profile:', profile);


    console.log(`Before rendering Gender component: profile = ${JSON.stringify(profile)}`);


    if(loading) {
      return <div>Loading...</div>;
    }

  
     return (
    <>
       <div className={styles.profileBack}>
          
          <div className={styles.header_Card}>
            <form onSubmit={updateUser}>
            <p style={{color: '#fff', fontSize: '70px', fontWeight: '800'}}>PROFILE</p>
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
                  </div>

                  <div style={{display: 'flex', columnGap: '10px'}}>
                          <Month2 onChange={handleMonthChange} value={profile.birthdate.month} name='month' user={user} setUser={setUser}/>
                    
                          <Days2 onChange={handleDayChange} value={profile.birthdate.day} name='day' user={user} setUser={setUser}/>
            
                          <Year2 onChange={handleYearChange} value={profile.birthdate.year} name='year' user={user} setUser={setUser}/>
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

                <Gender2 onChange={handleGenderChange} value={profile.gender} name='gender' user={user} setUser={setUser}/>

                </div>
             
                <button type='button' onClick={() => updateUser(user._id)} className={styles.actionButton}>Update/ Edit Info</button>
    
                <button type="button" onClick={() => setShowModal(true)} className={styles.actionButton}>Delete Profile</button>
                {showModal && (
                  <div className={styles.modalContainer}>
                    <div className={styles.modal}>
                      <p className={styles.confirmHeader}>Delete profile</p>
                      <p className={styles.confirmText}>Are you sure you want to delete your profile?</p>
                      <p className={styles.confirmText}>This action cannot be undone and you will loose all your data. You will no longer be able to access your privileges.</p>
                      <div className={styles.modalButtons}>
                        <button onClick={() => setShowModal(false)} className={styles.confirmButton}>No, Keep It</button>
                        <button onClick={handleDelete} className={styles.confirmButtonYes}>Yes, Delete Account</button>
                      </div>
                    </div>
                  </div>
                )}

            </div>
            </form>
          </div>
       </div>
    </>
  )
}

export default Profile;