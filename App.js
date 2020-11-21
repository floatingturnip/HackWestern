import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import Background from './assets/loginPageBlue.png';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const image = require('./assets/loginPageBlue.png');

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      <TouchableOpacity
      onPress={() => Alert.alert('Top button pressed')}>
          <View 
            style={{
              alignItems: "center",
              backgroundColor: 'grey', 
              opacity: 0.5,
              padding: 10,
              marginBottom:150,
              marginTop: 350
            }} 
          >
            <Text>My Button</Text>
          </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => Alert.alert('Bottun button pressed')}>
          <View 
            style={{
              "alignItems": "flex-start",
              "paddingStart": 40,
              "paddingTop": 5,
              "width": 200,
              "height": 44,
              marginBottom: 150,
              backgroundColor: 'grey', 
              opacity: 0.5,
            }} 
          >
            <Text>My Button</Text>
          </View>
        </TouchableOpacity>

      <TouchableOpacity
      onPress={() => Alert.alert('Bottun button pressed')}>
          <View 
            style={{
              "alignItems": "flex-start",
              "paddingStart": 40,
              "paddingTop": 5,
              "width": 200,
              "height": 44,
              backgroundColor: 'grey', 
              opacity: 0.5,
            }} 
          >
            <Text>My Button</Text>
          </View>
      </TouchableOpacity>

        
      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
    
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',

  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    
  },
});
