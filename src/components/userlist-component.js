import React, {Component} from "react";
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

export default class UserListComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log("UserListComponent组件刷新.");
        return <View>
            <Text>I am the component</Text>
        </View>
    }
}