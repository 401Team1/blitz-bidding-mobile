import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Signup = ({ onNavigate }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleSignup = () => {
        // Implement signup logic
        // On successful signup, navigate to UserHome
        onNavigate('UserHome');
    };

    return (
        <SafeAreaView>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
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
            <Button title="Sign Up" onPress={handleSignup} />
        </SafeAreaView>
    );
};

export default Signup;