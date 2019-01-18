import React from 'react';
import {
  StyleSheet,
  Avatar,
  View,
} from 'react-native';

export default class Profile extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Avatar
          size="small"
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
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
