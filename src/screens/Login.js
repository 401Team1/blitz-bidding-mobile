import React, { useState, useContext } from 'react';
import { SafeAreaView, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useScreen } from '../contexts/ScreenContext';
import { AuthContext } from '../contexts/auth/AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setRole, navigate } = useScreen();
    const { login } = useContext(AuthContext); //auth.user.username

    const handleLogin = () => {
        login( username, password );

        if (username === "admin" && password === "admin") {
            navigate('AdminHome');
        } else {           
            navigate('UserHome');
        }
    };

    return (
        <SafeAreaView>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Login;
