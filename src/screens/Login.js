import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        // Implement login logic
        // On successful login, navigate to UserHome
        navigation.navigate('UserHome');
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

export default LoginScreen;