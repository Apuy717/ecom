import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Cart,
  Profile,
  Transaction,
  Favorite,
  Swiper,
  SearchItem,
  Messages,
  Notifications,
  DetailItem,
  DetailMessage,
  authLogin,
} from '.';
import {AntDesign} from '../components/tools/Icon';

const TabNav = () => {
  const Tab = createBottomTabNavigator();
  const [token, setToken] = useState(true);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Favorit') {
            iconName = focused ? 'hearto' : 'hearto';
          } else if (route.name === 'Pesan') {
            iconName = focused ? 'message1' : 'message1';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          } else if (route.name === 'Transaksi') {
            iconName = focused ? 'swap' : 'swap';
          }

          return <AntDesign name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
        style: {
          height: '8%',
        },
        labelStyle: {
          marginBottom: '8%',
          fontFamily: 'Roboto-Bold',
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorit" component={Favorite} />
      <Tab.Screen name="Pesan" component={Messages} />
      {token ? <Tab.Screen name="Transaksi" component={Transaction} /> : <></>}

      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const StackNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode={false} initialRouteName="Home">
      <Stack.Screen name="Home" component={TabNav} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Swiper" component={Swiper} />
      <Stack.Screen name="Search" component={SearchItem} />
      <Stack.Screen name="Notifikasi" component={Notifications} />
      <Stack.Screen name="Detail" component={DetailItem} />
      <Stack.Screen name="DetailMessage" component={DetailMessage} />
      <Stack.Screen name="Login" component={authLogin} />
    </Stack.Navigator>
  );
};

const Routers = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default Routers;
