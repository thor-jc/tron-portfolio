import React from 'react';
import xhr from "axios";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Portfolio from '../components/portfolio/Portfolio';
import Profile from '../components/user/Profile';
import { WebBrowser } from 'expo';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Accounts',
    gesturesEnabled: true,
    headerTintColor : 'white',
//    headerRight: <Profile />,
    headerStyle: {
      backgroundColor: '#f4511e',
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.container}>
            <Portfolio />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    paddingTop: 30,
  },
});
