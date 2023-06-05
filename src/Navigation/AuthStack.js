import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Onboarding/Login';
import SignUp from '../screens/Onboarding/Signup';
import Welcome  from '../screens/Onboarding/Welcome';
import RecoverPassword from '../screens/Onboarding/RecoverPassword';


const Stack=createNativeStackNavigator();


const AuthStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}
    initialRouteName='Welcome'>
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='RecoverPassword' component={RecoverPassword}/>
    </Stack.Navigator>
  )
}

export default AuthStack