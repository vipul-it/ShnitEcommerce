import {View, Text, TouchableOpacity, Image, StatusBar, SafeAreaView} from 'react-native';
import React, { useEffect } from 'react';
import menubar from '../assets/images/Top/align-left.png';
import bag from '../assets/images/Top/Bag.png';
import heart from '../assets/images/Top/Heart.png';
import notification from '../assets/images/Top/Notification.png';
import search from '../assets/images/Top/Search.png';
import logo from '../assets/images/Top/logo.png';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation=useNavigation()

  useEffect(() => {
  //  navigation.openDrawer()
  }, [])
  
  return (
    <SafeAreaView className="bg-whitec">
      <View className="border-b border-btext">
     
      <View className="mx-4 my-2 flex-row justify-between items-center ">
        <View className="flex-row justify-center items-center gap-3 z-40">
          <TouchableOpacity
          // onPress={()=>alert('lkdfjsdklf')}
          onPress={()=>navigation.openDrawer()}
          >
            <Image className="w-6 h-6" source={menubar} />
          </TouchableOpacity>
          <TouchableOpacity className="">
            <Image className="w-[75px] h-[26px]" source={logo} />
          </TouchableOpacity>
        </View>
        <View className="flex-row gap-2 items-center">
          <TouchableOpacity>
            <Image className="w-6 h-6" source={search} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image className="w-6 h-6" source={heart} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image className="w-6 h-6" source={notification} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image className="w-6 h-6" source={bag} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </SafeAreaView>
    
  );
};

export default Header;
