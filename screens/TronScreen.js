import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { TronWebService } from '../services/TronWebService';


export default class TronScreen extends React.Component {
  static navigationOptions = {
    title: 'Tron Network',
    headerTintColor : 'white',
    headerStyle: {
      backgroundColor: '#f4511e',
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <TronWebService />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
