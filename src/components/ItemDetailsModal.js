import React from 'react';
import { SafeAreaView,View, Text, TouchableOpacity, Modal, Image, StyleSheet } from 'react-native';

const ItemDetailModal = ({ currentItem, visible, onClose }) => {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <SafeAreaView style={styles.modalOverlay}>
                <SafeAreaView style={styles.modalContent}>
                    <Image
                        source={currentItem.picture ? { uri: currentItem.picture } : require('../../assets/images/placeholder-image.png')}
                        syle={styles.image}
                    />
                    <Text style={styles.currentItemName}>{currentItem.name}</Text>
                    <Text>{currentItem.description}</Text>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
        </Modal>
    );
};

export default ItemDetailModal;

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 200, // fixed height for the image
        borderRadius: 10,
    },
    currentItemName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: '#e0e0e0',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'flex-end',
    },
});