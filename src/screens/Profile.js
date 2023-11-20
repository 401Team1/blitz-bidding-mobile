import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';


export default function Profile() {

  const user = {
    name: 'Test User',
    role: 'User',
    email: 'test-user@test.com',
    location: 'Seattle, WA',
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={[styles.name, styles.textWithShadow]}> `${user.name}` </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>`${user.email}`</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Location:</Text>
          <Text style={styles.infoValue}>`${user.location}`</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Role:</Text>
          <Text style={styles.infoValue}>`${user.role}`</Text>
        </View>
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  coverImage: {
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white'
  },
  content: {
    marginTop: 20,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  infoValue: {
    marginTop: 5,
  },
});
