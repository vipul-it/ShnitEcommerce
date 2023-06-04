import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AuthStack from './AuthStack'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainRotutes from './MainStack';
import { useSelector } from 'react-redux';
import { getData } from '../utils/Common';

const Stack=createNativeStackNavigator();

const RootNavigator = () => {
  const [activeStack,setAtiveStack]=useState(null) 
  
  const {stackName}=useSelector((state)=>state.ChangeStackReducer)
  const getDataFromLocal=async()=>{
    try {
      let response=await getData('StackName')
      console.log(response,'-==-=-=-');
      setAtiveStack(response)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDataFromLocal()
  }, [stackName])
  
  return (
    <Stack.Navigator
    initialRouteName='Auth'
    screenOptions={{
      headerShown:false
    }}>
        {activeStack==null&&<Stack.Screen name='Auth' component={AuthStack}/>}
        {activeStack=='MAIN'&&<Stack.Screen name='DashBoard' component={MainRotutes}/>}

    </Stack.Navigator>
  )
}

export default RootNavigator