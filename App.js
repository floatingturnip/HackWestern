import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity, Alert, TextInput } from 'react-native';
import Background from './assets/loginPageBlue.png';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Progress from 'react-native-progress';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import MaterialIcon from 'material-icons-react';
//import { Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
//import Icon from 'react-native-vector-icons/MaterialIcons';
//import CommunityIcon from 'react-native-icons/MaterialCommunityIcons'


const user = {
  name: "Michael",
  goalsAchieved: 6,
  goalsToGo: 4,
  //goal: ["French", "Workout"],
  goal: [{name:'French', height:200},
            {name:'Wrokout', height:250},],

  //goalHeight: ["French"=200, "Workout"=250]
}

function LoginPages({navigation}){
  return(
    <View style={styles.container}>
      <ImageBackground source={require('./assets/dashboard_background_1.png')} style={styles.image}>
      
    <Text style={styles.welcome}>Welcome,{"\n"}{user.name}!</Text>
    <View style={{
              position: "absolute",
              alignItems: "center",
              backgroundColor: "#18363E",
              borderWidth: 0,
              top: 300,
              left: 40,
              height: 170,
              width: 200,
              padding: 10,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
            }} >
              <Text style={{color: "white", fontSize: 23}}>Goals Achieved{"\n"}</Text>
              <Text style={{color: "white", fontSize: 50}}>{user.goalsAchieved}</Text>
      </View>
      <View style={{
              position: "absolute",
              alignItems: "center",
              backgroundColor: "#EAF9FE",
              borderWidth: 0,
              top: 350,
              left: 180,
              height: 170,
              width: 200,
              padding: 10,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
            }} >
              <Text style={{color: "#305F72", fontSize: 23}}>Goals To Go{"\n"}</Text>
              <Text style={{color: "#305F72", fontSize: 50}}>{user.goalsToGo}</Text>
      </View>
      <View style={{
              position: "absolute",
              alignItems: "left",
              backgroundColor: "#18363E",
              borderWidth: 0,
              top: 550,
              left: 40,
              height: 70,
              width: 350,
              paddingLeft: 20,
              paddingTop: 5,
              paddingBottom: 13,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
            }} >
              <Text style={{paddingBottom: 8, color: "white", fontSize: 23}}>{user.goal[0]['name']}{"\n"}</Text>
              <Progress.Bar progress={0.3} width={300} height={10} color='#5F97AA' unfilledColor="#EAF9FE"/>
      </View>
      <View style={{
              position: "absolute",
              alignItems: "left",
              backgroundColor: "#18363E",
              borderWidth: 0,
              top: 630,
              left: 40,
              height: 70,
              width: 350,
              paddingLeft: 20,
              paddingTop: 5,
              paddingBottom: 13,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
            }} >
              <Text style={{paddingBottom: 8, color: "white", fontSize: 23}}>{user.goal[1]['name']}{"\n"}</Text>
              <Progress.Bar progress={0.8} width={300} height={10} color='#5F97AA' unfilledColor="#EAF9FE"/>
      </View>
        
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
      <ImageBackground source={require('./assets/goals_1.png')} style={styles.image}>
      <Text style={{position:'absolute',
          left:55,
          top:'8%',
          fontSize: 40,
          fontWeight: 'bold',
          color: "#FFFFFF"}}
          >My Goals</Text>
      
      {user.goal.map(goal => (
        
     
          <View style={{
              position: "absolute",
              alignItems: "left",
              backgroundColor: "#18363E",
              borderWidth: 0,
              top: goal['height'],
              left: 35,
              height: 70,
              width: 350,
              paddingLeft: 20,
              paddingTop: 5,
              paddingBottom: 13,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
            }} >
              <Text style={{paddingBottom: 8, color: "white", fontSize: 23}}>{user.goal[1]}{"\n"}</Text>
              <Progress.Bar progress={0.8} width={300} height={10} color='#5F97AA' unfilledColor="#EAF9FE"/>
              </View>
         
         ))}
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
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'Goals') {
              iconName = focused ? 'ios-checkbox' : 'ios-checkbox-outline';
            } else if (route.name === 'Goals2') {
                iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            } else if (route.name === 'Calendar') {
              iconName = focused ? 'ios-calendar' : 'ios-calendar';
            } else if (route.name === 'About') {
              iconName = focused ? 'ios-settings' : 'ios-settings';
            }
          

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })} tabBarOptions={{
          activeTintColor: '#18363E',
          inactiveTintColor: '#93C4D1',
        }}>
        <Tab.Screen name="Home" component={LoginPages}  />
        <Tab.Screen name="Goals" component={Goals} />
        <Tab.Screen name="Goals2" component={Goals2} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="About" component={DetailsScreen} />
      </Tab.Navigator>
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
  welcome: {
    position:'absolute',
    left:10,
    top:'10%',
    fontSize: 40,
    fontWeight: 'bold',
    color: "#FFFFFF"
  },
});
