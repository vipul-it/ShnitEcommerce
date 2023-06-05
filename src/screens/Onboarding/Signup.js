import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {iconConst} from '../../utils/Images';

const SignUp = props => {
  let {route} = props;

  console.log(route.params.data), 'ls;lks;lks;lksl;ks';

  const [isSelected, setSelection] = useState(false);

  const changeIcons = () => {
    setSelection(!isSelected);
  };

  const signupHandler = async () => {
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
            Let's Get Started
          </Text>
        </View>
        <View className="mx-4  my-2">
          <Text className="-mt-2 text-center text-sm">
            Create a new account
          </Text>
        </View>
        <View className="mx-4 my-2 border border-btext rounded-lg">
          <TextInput className="pl-4" placeholder="Name" />
        </View>
        <View className="mx-4 my-2 border border-btext rounded-lg">
          <TextInput className="pl-4" placeholder="Email / Phone No." />
        </View>
        <View className="mx-4 my-2 border border-btext rounded-lg">
          <TextInput className="pl-4" placeholder="Password" />
        </View>

        <View className=" flex mx-4 my-2">
          {/* <CheckBox 
          value={isSelected}
          onClick={()=> setSelection(!isSelected)}
          
        /> */}
          <TouchableOpacity onPress={changeIcons}>
            {isSelected ? (
              <Image source={iconConst.CheckBox} />
            ) : (
              <Image source={iconConst.CheckBoxEmpty} />
            )}
          </TouchableOpacity>

          <Text className="ml-2 text-[12px] font-medium ">
            I agree with the{' '}
            <Text className="text-pink-500">terms and conditions</Text> and{' '}
            <Text className="text-pink-500">Privacy Policies </Text>
          </Text>
        </View>
        <View className="mx-4 my-4">
          <CustomBtn
            name={'SignUp'}
            onPress={() => {
              signupHandler();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
