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
},
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'red',
      },
    },
  });

HomeStack.navigationOptions = {
  tabBarLabel: 'Accounts',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
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
  tabBarLabel: 'Network',
  tabBarLabelActive: { color : 'red' },
  tabBarIcon: ({ focused }) => (
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
  tabBarIcon: ({ focused }) => (
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
