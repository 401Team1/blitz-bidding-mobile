import { createContext, useState } from 'react';
import { State } from 'react-native-gesture-handler';
//import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext(null);

function AuthProvider( props ) {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // set to false if we get auth set up
    const [user, setUser] = useState({ username: 'josh', role: 'user' }); // setting a default user here for testing. set to {} if we get auth set up
    const [error, setError] = useState(null);
    const [capabilities, setCapabilities] = useState(null);

    const login = (username, password) => {
      let defaultUserObj = { username, 
                              'location': user.location || 'Seattle, WA', 
                              'email': user.email || 'user@gmail.com',
                              'role': user.role || 'user'
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

    const signup = (username, email, password, location) => {
      let newUserDetails = {
        username: username || user.username,
        email: email || user.email,
        password: password || user.password,
        location: location || user.location
      }
      setUser( newUserDetails );
    }

    const logout = () => {
      setUser(null);
      setIsLoggedIn(false);
    }
  
    return (
      <AuthContext.Provider value={{ login, logout, signup, updateProfile , user, isLoggedIn, error, capabilities }}>
        { props.children }
      </AuthContext.Provider>
    )
}

export default AuthProvider;