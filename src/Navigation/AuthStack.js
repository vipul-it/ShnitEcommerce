import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Onboarding/Login';
import SignUp from '../screens/Onboarding/Signup';
import Welcome  from '../screens/Onboarding/Welcome';


const Stack=createNativeStackNavigator();


const AuthStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}
    initialRouteName=''>
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Signup' component={SignUp}/>
    </Stack.Navigator>
  )
}

export default AuthStack