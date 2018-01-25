import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider, connect } from 'react-redux';
import ConfigStore from './src/stores/index';

import UserContainer from "./src/container/user-container";

const store = ConfigStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
        <Text>Login Request</Text>
          <UserContainer/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
