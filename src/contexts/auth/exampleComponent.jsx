import { useContext } from 'react';
import { AuthContext } from '../../src/auth/AuthProvider';

export default function TestDiv() {

    let auth = useContext(AuthContext);

    //console.log(auth);
    
    return (
        <div>
            <p>{ auth.user.username }</p>
        </div>
    )
}