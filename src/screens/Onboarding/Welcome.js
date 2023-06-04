import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {images} from '../../utils/ImageConstant';
import {useNavigation} from '@react-navigation/native';
import CustomBtn from '../../components/Custom/CustomBtn';
import Login from './Login';
import {setData} from '../../utils/Common';
import {useDispatch} from 'react-redux';

const Welcome = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loginHandler = () => {
    navigation.navigate('Login');
  };

  const getStartHandler = async () => {
    dispatch({
      type: 'CHANGE_STACK',
      payload: 'MAIN',
    });
    let name = 'MAIN';
    await setData('StackName', name);
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar backgroundColor="#1AAABC" />
      <View className="h-[70%] w-[100%]  my-4 mt-8 px-4 ">
        <Image
          source={images.WelcomeImg}
          className=" h-full w-full  rounded-lg"
        />
        <Text className="-mt-28 text-4xl text-white px-4 font">
          Take your style every where with us
        </Text>
      </View>
      <View className="mx-4 my-2">
        {/* <TouchableOpacity className="p-2 py-4 justify-center items-center rounded-md w-full bg-theme">
          <Text className="text-ltheme text-md">Login/SignUp</Text>
        </TouchableOpacity> */}
        <CustomBtn name={'Login/SignUp'} onPress={loginHandler} />
      </View>
      <View className="mx-4 my-4">
        <CustomBtn name={'Get Started'} onPress={getStartHandler} />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
