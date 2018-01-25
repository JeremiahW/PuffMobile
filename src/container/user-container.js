import React, {Component} from "react";
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

import * as UserActions from "../actions/user-actions";
import UserList  from "../components/userlist-component";
import restfulApi from "restful-api";
import UserLoginRequest from "../services/request/user-login-request";

class UserContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            users:[{username:"aaa"},{username:"zzzz"}],
        }
    }

    componentWillReceiveProps(nextProps){
        if(this.props.user !== nextProps.user){
            console.log("容器事件发现Props变更.");
            //强制刷新组件.
            this.setState(this.state);
        }
    }

     onLogin = async ()=> {
        console.log("1.容器组件响应事件, 执行action creators内的方法.");
        this.props.onLogin("aaaaa", "pwdpwdpwd");
    }

    doLogin = async()=> {
        const request = new UserLoginRequest("admin", "123123");
        try{
            var result = await restfulApi.processServiceCall(request);
            console.log(result);
        }
        catch(exp){
            console.log(exp);
        }
    }

    render(){
        return (
            <View>
                <Text>FB, AAPL</Text>
                <Button onPress={this.onLogin} title="Show Redux Flow"/>
                <Button onPress={this.doLogin} title="Dispatch Request"/>
                <UserList users={this.state.users} />
            </View>
        )
    }
}



function mapStateToProps(state){
    console.log("状态被映射到组件prop上.");
    return {
        user:state.user
    }
}

const actionCreators = {...UserActions};
UserContainer = connect(mapStateToProps, actionCreators)(UserContainer);
export default UserContainer;