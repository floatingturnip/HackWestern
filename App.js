import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity, Alert, TextInput, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LoginRegister({navigation}){
  const EmailTextInput = () => {
    const [email, onChangeText] = React.useState('Email')
  }
  const [email, onChangeText] = React.useState('')
  const [pass, onChange] = React.useState('')


  return(

    <View style={styles.container}>
      <ImageBackground source={require('./assets/LoginRegister.png')} style={styles.image}>
      <TouchableOpacity
      onPress={() => navigation.navigate('Home')}>
          <View 
            style={{
              alignItems: "center",
              backgroundColor: 'grey', 
              opacity: 0,
              padding: 10,
              width:157,
              height: 400
            }} 
          >
            <Text>My Button</Text>
          </View>
      </TouchableOpacity>

      <TextInput
        style={{ alignItems:"center", height: 30, width: 170,marginTop:145, marginLeft:120, marginBottom: 80, borderColor: 'white', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={email}
      />
      <TextInput
        style={{ alignItems:"center", height: 30, width: 170, marginLeft:120, marginBottom: 40, borderColor: 'white', borderWidth: 1 }}
        onChange={text => onChange(text)}
        value={pass}
      />

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
              marginBottom: 170,
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

function LoginPages({navigation}){
  return(
    <View style={styles.container}>
      <ImageBackground source={require('./assets/StartPage.png')} style={styles.image}>
      <TouchableOpacity
      onPress={() => navigation.navigate('Skills')}>
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
      <ImageBackground source={require('./assets/About.png')} style={styles.image}>
      <TouchableOpacity
      onPress={() => navigation.navigate('Home')}>
          <View 
            style={{
              alignItems: "center",
              backgroundColor: 'grey', 
              opacity: 0,
              padding: 10,
              marginBottom:300,
              marginTop: 200
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
              marginBottom: 170,
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

function NewGoal({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/NewGoal.png')} style={styles.image}>
      <TouchableOpacity
      onPress={() => navigation.navigate('About2')}>
          <View 
            style={{
              "alignItems": "flex-start",
              "paddingStart": 40,
              "paddingTop": 5,
              "width": 200,
              "height": 340,
              backgroundColor: 'grey', 
              opacity: 0,
              marginTop: 250,
              
            }} 
          >
            <Text>Add Goal</Text>
          </View>
      </TouchableOpacity>
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
      <View style={{ 
        flex: 0,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginRight:80,
        marginLeft:285,
        marginBottom:83,
        marginTop: 95
        
      }}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        //ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
    <View style={{ 
        flex: 0,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginRight:80,
        marginLeft:285,
        marginBottom:82
        
      }}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
        //ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch2}
        value={isEnabled2}
      />
    </View>

    <View style={{ 
        flex: 0,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginRight:80,
        marginLeft:285,
        marginBottom:0
        
      }}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled3 ? "#f5dd4b" : "#f4f3f4"}
        //ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch3}
        value={isEnabled3}
      />
    </View>
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
              marginTop: 50,
              
            }} 
          >
            <Text>Toggle</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate('NewGoal')}>
          <View 
            style={{
              "alignItems": "flex-start",
              "paddingStart": 40,
              "paddingTop": 5,
              "width": 200,
              "height": 44,
              backgroundColor: 'grey', 
              opacity: 0,
              marginTop: 50,
              
            }} 
          >
            <Text>Add Goal</Text>
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
      <ImageBackground source={require('./assets/Goals_3.png')} style={styles.image}>
        
      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

function About2({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/About_2.png')} style={styles.image}>
        
      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

function Skills({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/SkillsAndGoals.png')} style={styles.image}>
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
      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login" >
      <Stack.Screen name="Login" component={LoginRegister} />
        <Stack.Screen name="Home" component={LoginPages} />
        <Stack.Screen name="About" component={DetailsScreen} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Goals" component={Goals} />
        <Stack.Screen name="Goals2" component={Goals2} />
        <Stack.Screen name="NewGoal" component={NewGoal} />
        <Stack.Screen name="Skills" component={Skills} />
        <Stack.Screen name="About2" component={About2} />
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
