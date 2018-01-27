import React, {Component} from "react";
import { Button, Text, View, TextInput, Keyboard, CheckBox } from 'react-native';
import { connect } from 'react-redux';

import {BaseStyles} from "base-style";
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
    }

    onLogin = async ()=>{
        const {username, password} = this.state;
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
                            style={{ width: 250 }}
                            rightText='Remember Email and Password'
                            rightTextStyle={{color:'#ccc',fontSize:14}}
                            isChecked={this.state.saveCredentials}
                            checkBoxColor="#00FF00"
                            onClick={() => this.setState({ saveCredentials: !this.state.saveCredentials })}
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