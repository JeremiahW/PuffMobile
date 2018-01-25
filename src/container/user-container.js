import React, {Component} from "react";
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

import * as UserActions from "../actions/user-actions";
import UserList  from "../components/userlist-component";

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

    onLogin=()=>{
        console.log("1.容器组件响应事件, 执行action creators内的方法.");
        this.props.onLogin("aaaaa", "pwdpwdpwd");
    }

    render(){
        return (
            <View>
                <Text>FB, AAPL</Text>
                <Button onPress={this.onLogin} title="Click Me"/>
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