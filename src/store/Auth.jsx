import { createContext, useContext, useState, useEffect } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('user'));

    const authorizationToken = `Bearer ${token}`;


    // TOKEN //

    const storeTokenInLS = (userData) => {
        localStorage.setItem("user", JSON.stringify(userData));
    };


    const storeTokeninLS = (serverToken) => {
         return localStorage.setItem("user", serverToken)
    };


    // GET SINGLE USER DATA //
    const [user, setUser] = useState();
    const [userId, setUserId] = useState(null);
    console.log('Data in AUTH ', user);


    const userAuthentication = async (id) => {
        if (!userId) return;
        try {
            const response = await fetch(`http://localhost:5000/api/data/user/${id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            });
            
    
            if (response.ok) {
                const data = await response.json();
                console.log("User Data Fetched:", data.userData);
                console.log("Response status:", response.status);
                console.log("Response headers:", response.headers);
            
                const userData = await response.json();
                console.log("Parsed response data:", userData);
                setUser(data.userData);
            }
        } catch (err) {
            console.log("Error fetching user data", err);
        }
    };

    useEffect(() => {
        userAuthentication();
    }, []);


// CREATECONTEXT PROVIDER FUNCTION //
return (
    <AuthContext.Provider value={{storeTokenInLS, authorizationToken, user, setUser}}>
        {children}
    </AuthContext.Provider>
)
}

// USECONTEXT (DELIVERY BOY) //
export const useAuth = () => {
    return useContext(AuthContext);
}