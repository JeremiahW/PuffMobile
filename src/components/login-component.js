import React, {Component} from "react";
import { Button, Text, View, TouchableHighlight, TextInput } from 'react-native';

import {BaseStyles} from "../styles/base-style";
import { LoginStyles } from '../styles/login-style';

export default class Login extends Component{
    constructor(props){
        super(props);
    }

    onLogin = ()=>{

    }

    render(){
        return (
        <View style={LoginStyles.container}>
             <View style={LoginStyles.topContainer}>
                <Text>I am the top</Text>
             </View>
             <View style={LoginStyles.bottomContainer}>
                <TextInput style={LoginStyles.loginInput} placeholder="Username" />
                <TextInput style={LoginStyles.loginInput} secureTextEntry={true} placeholder="password" />
                <View style={{width:"80%", alignSelf:"center"}}>
                    <Button style={LoginStyles.loginInput} 
                            onPress={this.onLogin}
                            title="Submit"/>
                </View>
             </View>
        </View>)
    }
}