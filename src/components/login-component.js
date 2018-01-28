import React, {Component} from "react";
import { Button, Text, View, TextInput, Keyboard } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { connect } from 'react-redux';

import {BaseStyles} from "base-style";
import PersistenceHelper from "persistence-helper";

import { LoginStyles } from '../styles/login-style';
import * as UserActions from "../actions/user-actions";


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            username: null,
            password: null,
            saveCredentials: true
        }

        this.storageKey = "user";
    }

    componentDidMount = ()=>{
        PersistenceHelper.getItem(this.storageKey, (error, result) => {
            if (result) {
                const cred = JSON.parse(result);
                this.setState({ username: cred.username, password: cred.password })
            }
            else {
                this.setState({ username: null, password: null })
            }
        })
    }

    onLogin = async ()=>{
        const {username, password} = this.state;
        if(this.state.saveCredentials){
            PersistenceHelper.setItem(this.storageKey, JSON.stringify({username: username, password: password}));
        }
        else{
            PersistenceHelper.getItem(this.storageKey, (error, result) => {
                if (result) {
                    StorageHelper.removeItem("pUser");
                }
            })
        }

        await Keyboard.dismiss();
        await this.setState({loading:true});
        let response = await this.props.onLogin(username, password);
         
    }

    render(){
        return (
        <View style={LoginStyles.container}>
             <View style={LoginStyles.topContainer}>
                <Text>I am the top</Text>
             </View>
             <View style={LoginStyles.bottomContainer}>
             <TextInput style={LoginStyles.loginInput} 
                    placeholder="Username" 
                    inlineImageLeft="email" 
                    inlineImagePadding={10}
                    value={this.state.username}
                    autoCapitalize="none"
                    onChangeText={(username)=>this.setState({username:username})} />

                <TextInput style={LoginStyles.loginInput} secureTextEntry={true} 
                        placeholder="password" 
                        inlineImageLeft="locker" 
                        inlineImagePadding={10} 
                        value={this.state.password}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(password)=>this.setState({password:password})} />
                    <View style={{width:"80%", alignSelf:"center"}}>
                        <CheckBox
                            title='保存用户名和密码'
                            checked={this.state.saveCredentials}
                            onPress={() => this.setState({ saveCredentials: !this.state.saveCredentials })}
                            containerStyle={{backgroundColor:'rgba(52, 52, 52, 0)', borderWidth:0}}
                       
                        />
                    </View>
                <View style={{width:"80%", alignSelf:"center"}}>
                    <Button style={LoginStyles.loginInput} 
                            onPress={this.onLogin}
                            title="Submit"/>
                </View>
             </View>
        </View>)
    }
}

export default connect(null, { ...UserActions })(Login);