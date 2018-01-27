import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider, connect } from 'react-redux';
import ConfigStore from './src/stores/index';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'

import {BaseStyles} from "base-style";

import Login from "./src/components/login-component";
import RootContainer from './src/container/root-container';
import userContainer from './src/container/user-container';

const store = ConfigStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
            <Switch>
              <Route exact path="/" component={RootContainer}/>
              <Route path="/login" component={Login}/>
              <Route path="/u" component={userContainer} />
            </Switch>
        </NativeRouter>
      </Provider>
    );
  }
}

 