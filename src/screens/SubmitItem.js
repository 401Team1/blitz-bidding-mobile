import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Modal, ScrollView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function SubmitItem() {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [image, setImage] = useState(null);
  const [agreedToGuidelines, setAgreedToGuidelines] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleImageUpload = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
        alert('You need to give permission to access your photos.');
        return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
        return;
    } 
    setImage(pickerResult.uri);
  };

  const handleSubmit = () => {
    // Here you would handle the submission of the data
    if(agreedToGuidelines) {
      console.log('Item submitted:', { itemName, itemDescription, image });
    } else {
      alert('Please agree to the guidelines.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Submit Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        style={styles.input}
        placeholder="Item Description"
        value={itemDescription}
        onChangeText={setItemDescription}
        multiline
      />
      <TouchableOpacity onPress={handleImageUpload} style={styles.imageUploadButton}>
        <Text>Upload Image</Text>
      </TouchableOpacity>
      {image && (
        <View style={styles.imagePreviewContainer}>
          <Image source={{ uri: image }} style={styles.imagePreview} />
        </View>
      )}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.guidelinesLink}>
        <Text style={styles.linkText}>Show Submission Guidelines</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <Text style={styles.modalText}>Submission Guidelines:</Text>
              <Text>1. Only submit your own items.</Text>
              <Text>2. Ensure images are clear and appropriate.</Text>
              <Text>3. Adhere to community standards.</Text>
              {/* Add more rules here */}
            </ScrollView>
            <Button
              title="Close"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setAgreedToGuidelines(!agreedToGuidelines)} style={styles.checkboxContainer}>
        <View style={styles.checkbox}>
          {agreedToGuidelines && <Text>✓</Text>}
        </View>
        <Text style={styles.guidelineText}>I agree to guidelines</Text>
      </TouchableOpacity>
      <Button title="Submit Item" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
  imageUploadButton: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    marginBottom: 10,
  },
  imagePreviewContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  imagePreview: {
    width: 200, // Set the width you desire
    height: 200, // Set the height you desire
    resizeMode: 'contain', // This will ensure the entire image fits within the bounds and maintains its aspect ratio
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  guidelineText: {
    marginLeft: 8,
  },
  guidelinesLink: {
    margin: 10,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
});
