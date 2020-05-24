/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image
} from 'react-native';
import 'react-native-gesture-handler';

import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/HomeScreen'
import DetailsScreen from './src/DetailsScreen';
import BuyDetails from './src/buy/BuyDetails';
import BuyResult from './src/buy/BuyResult';
import Mine from './src/me/Mine';
import MyTab from './src/tab/MyTab';
import MyTicket from './src/me/MyTicket';
import QRCode from './src/me/QRCode';
import SettingPage from './src/me/SettingPage';
import Login from './src/me/Login';
import Register from './src/me/Register';
import MovieCommon from './src/MovieCommon';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(28, 28, 30)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
  },
};
export default class App extends React.Component{
  render(){
    return(
          <NavigationContainer theme={MyTheme}>
            <Stack.Navigator initialRouteName="MyTab">
              <Stack.Screen name="Home" component={MyTab}
                            options={{ title: '叮叮票' }}
              />
              <Stack.Screen name="Details" component={DetailsScreen}
                            options={{ title: '电影详情' }}
              />
              <Stack.Screen name="BuyDetails" component={BuyDetails} />
              <Stack.Screen name="BuyResult" component={BuyResult}
                            options={{ title: '购买成功！' }}
              />
              <Stack.Screen name="MyTicket" component={MyTicket}
                            options={{ title: "我的电影票" }}

              />
              <Stack.Screen name="QRCode" component={QRCode}
                            options={{ title: "取票" }}
              />
              <Stack.Screen name="SettingPage" component={SettingPage}
                            options={{ title: "设置" }}
              />
              <Stack.Screen name="Login" component={Login}
                            options={{ title: "登录" }}
              />
              <Stack.Screen name="Register" component={Register}
                            options={{ title: "注册" }}
              />
              <Stack.Screen name="MovieCommon" component={MovieCommon}
                            options={{ title: '《僵尸世界大战》影评' }}
              />
            </Stack.Navigator>

            </NavigationContainer>


    )
  }
}
