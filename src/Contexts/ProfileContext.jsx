import { createContext, useState, useEffect } from "react";


export const ProfileContext = createContext();


const token = localStorage.getItem('user');

const ProfileProvider = ({ children }) => {

  const [user, setUser] = useState();
  console.log("Data in Context : ", user);

  const userAuthentication = async () => {
      try {
          const response = await fetch("http://localhost:5000/api/data/user", {
              method: "GET",
              headers: {
                  Authorization: `Bearer ${token}`,
              }
          });
          console.log(response);
  
          if (response.ok) {
              const data = await response.json();
              console.log("User Data Fetched to CONTEXT : ", data.userData);
              setUser(data.userData);
          }
      } catch (err) {
          console.log("Error fetching user data", err);
      }
  }

  useEffect(() => {
    userAuthentication();
}, [user]);


  return (
    <ProfileContext.Provider value={{ user, setUser }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;

