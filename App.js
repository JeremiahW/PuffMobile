import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider, connect } from 'react-redux';
import ConfigStore from './src/stores/index';
import { NativeRouter, Route, Link } from 'react-router-native'

import UserContainer from "./src/container/user-container";

const store = ConfigStore();

const Default = () => (
  <Text>
    Default View
  </Text>
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={styles.container}>
            <View>
              <Link to = "/"><Text>Default</Text></Link>
              <Link to="/u"><Text>User Container</Text></Link>
            </View>
            
            <Switch>
              <Route exact path="/" component={Default}/>
              <Route path ="/u" component={UserContainer}/>
            </Switch>
          </View>
        </NativeRouter>

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
