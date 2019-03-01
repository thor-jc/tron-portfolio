import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Portfolio from '../components/portfolio/Portfolio';

export default class AccountsScreen extends React.Component {

  static navigationOptions = {
    title: 'Accounts',
    gesturesEnabled: true,
    headerTintColor: 'white',
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
    );
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
