import React, { Component, Fragment } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


class Account extends Component {


  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.getStartedText}>{this.props.address}</Text>
      </View>
    )
  }
}

export default Account;
