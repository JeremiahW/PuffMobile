import React, {Component} from "react";
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

export default class UserList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <View>
            <Text>I am the component</Text>
        </View>
    }
}