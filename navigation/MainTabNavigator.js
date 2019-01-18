import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import IcoMoonIcon from '../components/IcoMoonIcon';
import HomeScreen from '../screens/HomeScreen';
import TronScreen from '../screens/TronScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors from '../constants/Colors';

const HomeStack = createStackNavigator({
  Home: HomeScreen,

});

HomeStack.navigationOptions = {
  tabBarOptions: {
    activeTintColor: 'red',
    tabStyle: {
      backgroundColor: 'black'
    },
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-wallet${focused ? '' : '-outline'}`
          : 'md-wallet'
      }
    />
  ),
};

const TronStack = createStackNavigator({
  Tron: TronScreen,
});

TronStack.navigationOptions = {
  tabBarLabel: "Tron Network",
  barStyle: {
    backgroundColor: '#f4511e',
  },
  tabBarOptions: {
    activeTintColor: 'red',
    tabStyle: {
      backgroundColor: 'black'
    },
  },tabBarIcon: ({ focused }) => (
    <IcoMoonIcon
      focused={focused}
      name={ 'tron-network-logo' }
    />
  ),
};


const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarOptions: {
    activeTintColor: 'red',
    tabStyle: {
      backgroundColor: 'black'
    },
  },tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  TronStack,
  SettingsStack,
});
