import { createContext, useState } from 'react';
//import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext(null);

function AuthProvider( props ) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({ username: 'josh' });
    const [error, setError] = useState(null);
    const [capabilities, setCapabilities] = useState(null);

    const login = (username, password) => {
      let defaultUserObj = { username, 
                              'location': 'Seattle, WA', 
                              'email': 'user@gmail.com',
                              'role': 'user'
                          };
  
      if (username.toLowerCase() === 'admin') {
          defaultUserObj.role = 'admin';
      }

      setIsLoggedIn(true);
      setUser( defaultUserObj );
    }
      // find the user from above whose credentials match
      
      //let user = testUsers[username];
      //console.log(user, username, password);

      /*
      if (user && user.password === password) {
        let tokenPayload = jwtDecode(user.token);
        tokenPayload = tokenPayload.capabilities.replace(/'/g, '"');
        setCapabilities(JSON.parse(tokenPayload));
        setUser(user);
        setIsLoggedIn(true);
      } else {
        console.log('Error occured on login');
        setError({ code: 401, message: 'Incorrect Credentials'});
      }
      */

    const updateProfile = (username, email, location) => {
        let updateUserObj = { username, 
                              location,
                              email
                            };

        setUser( updateUserObj );
    }

    const logout = () => {
      setUser(null);
      setIsLoggedIn(false);
    }
  
    return (
      <AuthContext.Provider value={{ login, logout, user, isLoggedIn, error, capabilities }}>
        { props.children }
      </AuthContext.Provider>
    )
}

export default AuthProvider;