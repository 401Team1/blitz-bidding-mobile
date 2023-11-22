import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { sendMessage } from '../redux/Auction/index';
import { MaterialIcons } from '@expo/vector-icons';

const ChatWindow = ({ messages, dispatch }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        dispatch(sendMessage({ username: 'CurrentUsername', message }));
        setMessage('');
    };

    const isCurrentUser = (username) => {
        return username === 'CurrentUsername';
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.messagesContainer}>
                {messages.map((msg, index) => (
                    <View key={index} style={[
                        styles.messageBubble,
                        isCurrentUser(msg.user) ? styles.messageBubbleSelf : styles.messageBubbleOther
                    ]}>
                        {!isCurrentUser(msg.user) && <Text style={styles.username}>{msg.user}</Text>}
                        <Text style={styles.message}>{msg.message}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Type a message..."
                    placeholderTextColor='#ccc'
                />
                <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                    <MaterialIcons name="send" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const mapStateToProps = (state) => ({
    messages: state.auction.messages,
});

export default connect(mapStateToProps)(ChatWindow);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'flex-end',
    },
    messagesContainer: {
        marginBottom: 10,
    },
    messageBubble: {
        padding: 10,
        borderRadius: 20,
        marginVertical: 5,
        maxWidth: '70%',
        alignSelf: 'flex-end',
    },
    messageBubbleSelf: {
        backgroundColor: '#8d6096',
    },
    messageBubbleOther: {
        backgroundColor: '#f0f0f0',
        alignSelf: 'flex-start',
    },
    username: {
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 3,
    },
    message: {
        marginTop: 5,
        color: 'white',
    },
    inputContainer : {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: 'white',
        color: '#333',
    },
    sendButton: {
        backgroundColor: '#7e5287',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10, 
    },
});