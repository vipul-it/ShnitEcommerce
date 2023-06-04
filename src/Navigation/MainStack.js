import {Platform, Image, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
// import Home from './Home/Home';
// import WatchList from './MyAccount/WatchList';
// import PaymentList from './MyAccount/PaymentList';
// import PaymentMethod from './MyAccount/PaymentMethod';
// import PriceCalculator from './Auction/Bids';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/Onboarding/Login';
import SignUp from '../screens/Onboarding/Signup';
import {iconConst} from '../utils/Images';

import Categories from '../screens/Dashboard/Categories';
import Explore from '../screens/Dashboard/Explore';
import Profile from '../screens/Dashboard/Profile';
import New from '../screens/Home/New';
import Apparel from '../screens/Home/Apparel';
import Bag from '../screens/Home/Bag';
import Shoes from '../screens/Home/Shoes';
import Beauty from '../screens/Home/Beauty';
import Accessories from '../screens/Home/Accessories';
import ProductDetails from '../screens/Dashboard/ProductDetails';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

{
  /* bottom navigator */
}

const TabStack = () => (
  <>
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="Categories"
      screenOptions={({route: {name}}) => ({
        tabBarIcon: ({focused, color, size}) => {
          switch (name) {
            case 'Home':
              return (
                <Image
                  source={iconConst.Home}
                  style={{tintColor: focused ? '#1AAABC' : 'gray'}}
                  resizeMode="contain"
                  className="h-5 w-5"
                />
              );

            case 'Categories':
              return (
                <Image
                  source={iconConst.Categories}
                  style={{tintColor: focused ? '#1AAABC' : 'gray'}}
                  resizeMode="contain"
                  className="h-5 w-5"
                />
              );

            case 'Explore':
              return (
                <Image
                  source={iconConst.Explore}
                  style={{tintColor: focused ? '#1AAABC' : 'gray'}}
                  resizeMode="contain"
                  className="h-5 w-5"
                />
              );
            case 'Profile':
              return (
                <Image
                  source={iconConst.Profile}
                  style={{tintColor: focused ? '#1AAABC' : 'gray'}}
                  resizeMode="contain"
                  className="h-5 w-5"
                />
              );
          }
        },

        keyboardHidesTabBar: false,
        tabBarActiveTintColor: '#1AAABC',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: '',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          width: 360,

          height: 60,
          paddingBottom: Platform.OS == 'ios' ? 15 : 4,
        },
      })}>
      <Tab.Screen
        name={'Home'}
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <Tab.Screen
        name={'Categories'}
        options={{headerShown: false}}
        component={Categories}
      />
      <Tab.Screen
        name={'Explore'}
        options={{headerShown: false}}
        component={Explore}
      />
      <Tab.Screen
        name={'Profile'}
        options={{headerShown: false}}
        component={Profile}
      />
    </Tab.Navigator>
  </>
);

const DrawerStack = () => (
  <>
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: 'Home',
        drawerStyle: {
          width: Platform.OS == 'ios' ? '70%' : '70%',
          height: '100%',
          backgroundColor: '#fff',
        },
      }}
      // drawerContent={props => <DrawerScreen {...props} />}
    >
      <Drawer.Screen name="Drawer Screen" component={TabStack} />
      <Drawer.Screen name="New" component={New} />
      <Drawer.Screen name="Apparel" component={Apparel} />
      <Drawer.Screen name="Bag" component={Bag} />
      <Drawer.Screen name="Shoes" component={Shoes} />
      <Drawer.Screen name="Beauty" component={Beauty} />
      <Drawer.Screen name="Accessories" component={Accessories} />
      <Drawer.Screen name="Login" component={Login} />
     
    </Drawer.Navigator>
  </>
);

const MainRotutes = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="DrawerStack"
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="Home" component={Home} /> */}

        <Stack.Screen name="DrawerStack" component={DrawerStack} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        
  
        {/* <Stack.Screen name="PaymentList" component={PaymentList} />
                <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
                <Stack.Screen name="BidConfirmation" component={BidConfirmation} />
                <Stack.Screen name="ContactUs" component={Contact} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="PricecingCalculator" component={PricecingCalculator} />
           
                <Stack.Screen name="SellerConfirm" component={SellerConfirm} /> */}
      </Stack.Navigator>
    </>
  );
};

export default MainRotutes;
