import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider, connect } from 'react-redux';
import ConfigStore from './src/stores/index';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'

import {BaseStyles} from "base-style";
import UserContainer from "./src/container/user-container";
import Login from "./src/components/login-component";

const store = ConfigStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route path ="/u" component={UserContainer}/>
            </Switch>
        </NativeRouter>
      </Provider>
    );
  }
}

 