import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity, Alert, TextInput, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

var user = {
  name: "Michael",
  goals: ["goal1", "goal2"]
}

var goal = {
  start_date: "",
  end_date: ""
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function LoginPages({navigation}){
  return(
    <View style={styles.container}>
      <ImageBackground source={require('./assets/loginPageBlue.png')} style={styles.image}>
      <TouchableOpacity
      onPress={() => navigation.navigate('Goals')}
      >
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
      onPress={async () => {
        await sendPushNotification(expoPushToken);
      }}
      >
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
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

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

// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/notifications
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Reminder',
    body: 'Time to go workout!',
    data: { data: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}
