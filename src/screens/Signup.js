import React, { useState, useContext } from 'react';
import { SafeAreaView } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/auth/AuthContext';

const Signup = ({ onNavigate }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const navigation = useNavigation();
    const { signup } = useContext(AuthContext); //auth.user.username

    const [showPassword, setShowPassword] = useState(false)
    const handleState = () => {
      setShowPassword((showState) => {
        return !showState
      })
    }

    const handleSignup = () => {
        // Implement signup logic
        // On successful signup, navigate to UserHome
        signup(username, email, password, location);
        navigation.navigate('Login');
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
                    Signup
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
                <VStack space="xs">
                    <Text lineHeight="$xs">
                    Email
                    </Text>
                    <Input>
                    <InputField onChangeText={setEmail} type="text" />
                    </Input>
                </VStack>
                <VStack space="xs">
                <Text lineHeight="$xs">
                Location
                </Text>
                <Input>
                <InputField onChangeText={setLocation} type="text" />
                </Input>
            </VStack>
                <Button
                    ml="auto"
                    onPress={() => { handleSignup() }}
                >
                    <ButtonText>Sign up</ButtonText>
                </Button>
            </VStack>
        </FormControl>

        </SafeAreaView>
    );
};

export default Signup;

/*
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
*/