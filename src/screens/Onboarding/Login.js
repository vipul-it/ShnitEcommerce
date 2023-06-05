import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomBtn from '../../components/Custom/CustomBtn';
import SignUp from './Signup';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {product} = useSelector(state => state.cartReducers);

  // console.log(product,'----');

  // const loginHandler = () => {
  //   let temp = [...product, {name: 'Nandita', id: 3}];
  //   dispatch({
  //     type: 'PRODUCT',
  //     payload: temp,
  //   });
  // };
  const loginHandler = async () => {
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
      <View className="flex-1  justify-center place-items-center ">
        <View className=" my-4 px-4 ">
          <Text className="text-2xl font-semibold px-4 font text-center text-blackc">
            Log in to your account
          </Text>
        </View>
        <View className="mx-4 my-2 border border-btext rounded-lg">
          <TextInput className="pl-4" placeholder="Email / Phone No." />
        </View>
        <View className="mx-4 my-2 border border-btext rounded-lg">
          <TextInput className="pl-4" placeholder="Password" />
        </View>
        <View className="mx-4 my-2">
          <TouchableOpacity onPress={navigation.navigate('RecoverPassword')}>
            <Text className="text-center text-sm">Forgot Password ?</Text>
          </TouchableOpacity>
        </View>

        <View className="mx-4 my-2">
          <CustomBtn
            name={'Login'}
            onPress={loginHandler}
          />
        </View>
        <View className="mx-4 my-2">
          <TouchableOpacity onPress={navigation.navigate('Signup')}>
             <Text className="text-center text-sm text-blackc">
            Doesn't Have An Account ?
          </Text>
          </TouchableOpacity>
         
        </View>
        <View className="mx-4 my-4">
          <CustomBtn
            name={'SignUp'}
            onPress={() => {
              navigation.navigate('Signup');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
