import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { sendMessage } from '../redux/Auction/index';

const ChatWindow = ({ messages, dispatch }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        dispatch(sendMessage({ username: 'CurrentUsername', message }));
        setMessage('');
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.messagesContainer}>
                {messages.map((msg, index) => (
                    <View key={index} style={styles.messageBubble}>
                        <Text style={styles.username}>{msg.user}</Text>
                        <Text style={styles.message}>{msg.message}</Text>
                    </View>
                ))}
            </ScrollView>
            <TextInput
                style={styles.input}
                value={message}
                onChangeText={setMessage}
                placeholder="Type a message..."
            />
            <Button title="Send" onPress={handleSend} />
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
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 20,
        marginVertical: 5,
    },
    username: {
        fontWeight: 'bold',
    },
    message: {
        marginTop: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
    },
});