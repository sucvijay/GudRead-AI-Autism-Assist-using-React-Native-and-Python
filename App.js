import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Generate from './screens/Generate';
import Test from './screens/Test';
import Story from './screens/Story';
import Naration from './screens/Narration';
import SignUp from './screens/Signup';
import Learn from './screens/Learn';
import Memory from './screens/Memory';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>



      {/* <Stack.Screen name="Signup" component={SignUp} /> */}



      <Stack.Screen name="Home" component={Home} />

            <Stack.Screen name="Learn" component={Learn} />

      <Stack.Screen name="Story" component={Story} />

      <Stack.Screen name="Narration" component={Naration} />

      <Stack.Screen name="Gen" component={Generate} />

      <Stack.Screen name="Test" component={Test} />


<Stack.Screen name="Memory" component={Memory} />



      </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({})