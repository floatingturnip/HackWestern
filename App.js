import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableHighlight, ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity, Alert, TextInput, Switch } from 'react-native';
import Background from './assets/loginPageBlue.png';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import * as Progress from 'react-native-progress';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import MaterialIcon from 'material-icons-react';
//import { Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { ViewWeek } from '@material-ui/icons';
//import Icon from 'react-native-vector-icons/MaterialIcons';
//import CommunityIcon from 'react-native-icons/MaterialCommunityIcons'


const user = {
  name: "Michael",
  goalsAchieved: 6,
  goalsToGo: 4,
  goal: ["French", "Workout"],
  
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
              <Text style={{paddingBottom: 8, color: "white", fontSize: 23}}>{user.goal[0]}{"\n"}</Text>
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
              <Text style={{paddingBottom: 8, color: "white", fontSize: 23}}>{user.goal[1]}{"\n"}</Text>
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
      <ImageBackground source={require('./assets/About_2.png')} style={styles.image}>
        
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
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isEnabled2, setIsEnabled2] = React.useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  const [isEnabled3, setIsEnabled3] = React.useState(false);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  return (
    
    <View style={styles.container}>
      <ImageBackground source={require('./assets/Goals_1.png')} style={styles.image}>
      
  


      <Text style={{position:'absolute',
          left:55,
          top:'8%',
          fontSize: 40,
          fontWeight: 'bold',
          color: "#FFFFFF"}}
          >My Goals</Text>
      
          <View style={{
              position: "absolute",
              flex: 1,
              alignItems: "left",
              backgroundColor: "#5F97AA",
              borderWidth: 0,
              top: 200,
              left: 35,
              height: 100,
              width: 350,
              paddingLeft: 20,
              paddingTop: 35,
              paddingBottom: 13,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
            }} >
              <Text style={{paddingBottom: 8, color: "white", fontSize: 23}}>{user.goal[1]}{"\n"}</Text>
              
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        //ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{position: "absolute", top: 35, left: 200}}
      />

<Text style={{position: "absolute", top:15, left:190}}>Notifications</Text>
                <Ionicons name="ios-clipboard" color="#18363E" style={{position: "absolute", top: 35, left: 300}} size="30"/>
                
           
      
    
              </View>
              <View style={{
              position: "absolute",
              flex: 1,
              alignItems: "left",
              backgroundColor: "#93C4D1",
              borderWidth: 0,
              top: 350,
              left: 35,
              height: 100,
              width: 350,
              paddingLeft: 20,
              paddingTop: 35,
              paddingBottom: 13,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
            }} >
              <Text style={{paddingBottom: 8, color: "white", fontSize: 23}}>Practice piano{"\n"}</Text>
              
              <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
        //ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch2}
        value={isEnabled2} style={{position: "absolute", top: 35, left: 200}}
      />
      <Text style={{position: "absolute", top:15, left:190}}>Notifications</Text>
      <Ionicons name="ios-clipboard" color="#18363E" style={{position: "absolute", top: 35, left: 300}} size="30"/>
    
              </View>
              <View style={{
              position: "absolute",
              flex: 1,
              alignItems: "left",
              backgroundColor: "#3E88A5",
              borderWidth: 0,
              top: 500,
              left: 35,
              height: 100,
              width: 350,
              paddingLeft: 20,
              paddingTop: 35,
              paddingBottom: 13,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
            }} >
              <Text style={{paddingBottom: 8, color: "white", fontSize: 23}}>Eat healthier{"\n"}</Text>
              
              <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled3 ? "#f5dd4b" : "#f4f3f4"}
        //ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch3}
        value={isEnabled3} style={{position: "absolute", top: 35, left: 200}}
      />
  
      <Text style={{position: "absolute", top:15, left:190}}>Notifications</Text>
      
    <Ionicons name="ios-clipboard" color="#18363E" style={{position: "absolute", top: 35, left: 300}} size="30"/>
              </View>   
         
         
  
      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

function Goals2({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/NewGoal.png')} style={styles.image}>
        
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
            } else if (route.name === 'Add Goal') {
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
        <Tab.Screen name="Add Goal" component={Goals2} />
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
