import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity, Alert, TextInput } from 'react-native';
import Background from './assets/loginPageBlue.png';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LoginPages({navigation}){
  return(
    <View style={styles.container}>
      <ImageBackground source={require('./assets/loginPageBlue.png')} style={styles.image}>
      <TouchableOpacity
      onPress={() => navigation.navigate('Goals')}>
          <View 
            style={{
              alignItems: "center",
              backgroundColor: 'grey', 
              opacity: 0,
              padding: 10,
              marginBottom:150,
              marginTop: 240
            }} 
          >
            <Text>My Button</Text>
          </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => Alert.alert('Top button pressed')}>
          <View 
            style={{
              "alignItems": "flex-start",
              "paddingStart": 40,
              "paddingTop": 5,
              "width": 200,
              "height": 44,
              marginBottom: 130,
              backgroundColor: 'grey', 
              opacity: 0,
            }} 
          >
            <Text>My Button</Text>
          </View>
        </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate('About')}>
          <View 
            style={{
              "alignItems": "flex-start",
              "paddingStart": 40,
              "paddingTop": 5,
              "width": 200,
              "height": 44,
              backgroundColor: 'grey', 
              opacity: 0,
              marginBottom: 70,
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

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/AboutPage.png')} style={styles.image}>
      <TouchableOpacity
      onPress={() => console.log(2)}>
          <View 
            style={{
              alignItems: "center",
              backgroundColor: 'grey', 
              opacity: 0,
              padding: 10,
              marginBottom:150,
              marginTop: 240
            }} 
          >
            <Text>My Button</Text>
          </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => console.log(1)}>
          <View 
            style={{
              "alignItems": "flex-start",
              "paddingStart": 40,
              "paddingTop": 5,
              "width": 200,
              "height": 44,
              marginBottom: 130,
              backgroundColor: 'grey', 
              opacity: 0,
            }} 
          >
            <Text>My Button</Text>
          </View>
        </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate('Calendar')}>
          <View 
            style={{
              "alignItems": "flex-start",
              "paddingStart": 40,
              "paddingTop": 5,
              "width": 200,
              "height": 44,
              backgroundColor: 'grey', 
              opacity: 0.5,
              marginBottom: 70,
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

function Calendar({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/CalendarPic.png')} style={styles.image}>
        
      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

function Goals({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/Goals.png')} style={styles.image}>
      <TouchableOpacity
      onPress={() => navigation.navigate('Goals2')}>
          <View 
            style={{
              "alignItems": "flex-start",
              "paddingStart": 40,
              "paddingTop": 5,
              "width": 200,
              "height": 44,
              backgroundColor: 'grey', 
              opacity: 0,
              marginBottom: 400,
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

function Goals2({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/Goals2.png')} style={styles.image}>
        
      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={LoginPages} />
        <Stack.Screen name="About" component={DetailsScreen} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Goals" component={Goals} />
        <Stack.Screen name="Goals2" component={Goals2} />
      </Stack.Navigator>
    </NavigationContainer>
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
