import React, { useState, useContext } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, 
         InputField, 
         FormControl, 
         VStack, 
         Heading,
         InputIcon,
         InputSlot,
         Button,
         ButtonText,
         EyeIcon,
         EyeOffIcon,
         Text,
         Center
        } from '@gluestack-ui/themed';
import { useScreen } from '../contexts/ScreenContext';
import { AuthContext } from '../contexts/auth/AuthContext';

//            <Button title="Admin Login Test" onPress={navigate('AdminHome')} />

const Login = ({ onNavigate }) => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setRole } = useScreen();
    const { login } = useContext(AuthContext); //auth.user.username

    const [showPassword, setShowPassword] = useState(false)
    const handleState = () => {
      setShowPassword((showState) => {
        return !showState
      })
    }

    const handleLogin = () => {
        // Implement login logic
        // On successful login, navigate to UserHome
        if ( username !== '' && password !== '' && username !== 'admin' ) {
            login(username, password);
            navigation.navigate('UserHome');
        }

        if ( username.toLowerCase() === "admin" && password.toLowerCase() === "admin" ) {
            login(username, password);
            navigation.navigate('AdminHome');
        }
    };

    return (
        <SafeAreaView>
            <FormControl
                p="$6"
                borderWidth="$2"
                borderRadius="$sm"
                borderColor="$borderDark300"
                sx={{
                        _dark: {
                            borderWidth: "$1",
                            borderRadius: "$lg",
                            borderColor: "$borderDark800",
                        },
                }}
            >
                <VStack space="xl">
                <Heading lineHeight="$md">
                    Login
                </Heading>
                <VStack space="xs">
                    <Text lineHeight="$xs">
                    Username
                    </Text>
                    <Input>
                    <InputField onChangeText={setUsername} type="text" />
                    </Input>
                </VStack>
                <VStack space="xs">
                    <Text color="grey" lineHeight="$xs">
                    Password
                    </Text>
                    <Input textAlign="center">
                    <InputField onChangeText={setPassword} type={showPassword ? "text" : "password"} />
                    <InputSlot pr="$3" onPress={handleState}>
                        <InputIcon
                        as={showPassword ? EyeIcon : EyeOffIcon}
                        color="$darkBlue500"
                        />
                    </InputSlot>
                    </Input>
                </VStack>
                    <Button
                        ml="auto"
                        onPress={() => { handleLogin() }}
                    >
                        <ButtonText>Login</ButtonText>
                    </Button>
                </VStack>
            </FormControl>
                <Center mt={20}>
                    <Text>Don't have an account? <Text color="blue" onPress={() => navigation.navigate('Signup')}>Sign Up</Text></Text>
                </Center>
        </SafeAreaView>
    );
};

export default Login;

/*
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
*/