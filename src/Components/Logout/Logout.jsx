import React, {useState, useEffect}from 'react'
import {Link, useNavigate} from 'react-router-dom';
import styles from './Logout.module.css';


const Logout = ({setAuth}) => {

  // const user = JSON.parse(localStorage.getItem('user'));
  // console.log(user.name);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [token, setToken] = useState(user.token);
  console.log('User object:', user);
  console.log('User token:', token);
  const navigate = useNavigate();


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

  
  const logout = () => {
    localStorage.clear();
    setAuth(null);
    navigate('/')
  }

  return (
    <>
    <div className={styles.logoutcontainer}>
      <p className={styles.name} >
        {`Hi, ${user && (user.name || user.LoggedIn.name) ? user.name || user.LoggedIn.name : 'USER'}`}
      </p>


      <div className={styles.userOptions}>
        <ul className={styles.mamu}>
        <li style={{ borderBottom: '1px solid grey' }}>
          <Link to={`/profile/${user._id}`}>Edit</Link>
          {/* <Link to="/profile" onClick={() => {
            try {
              navigate('/profile')
            } catch (error) {
              console.error("Error navigating to user info page: ", error);
            }
          }}>
            Edit
          </Link> */}
        </li>
        {/* <li style={{borderBottom: '1px solid grey'}}><Link to='/profile' >Edit</Link></li> */}
        <li onClick={logout}><Link to="/logout">Log Out</Link></li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Logout;