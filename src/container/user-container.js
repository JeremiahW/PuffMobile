import React, {Component} from "react";
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

import * as UserActions from "../actions/user-actions";
import restfulApi from "restful-api";
import UserLoginRequest from "../services/request/user-login-request";
import UserList  from "../components/userlist-component";


class UserContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            users:[{username:"aaa"},{username:"zzzz"}],
        }
    }

    componentWillReceiveProps(nextProps){
      
    }

  
 

    render(){
        return (
            <View>
                <Text>FB, AAPL</Text>
                
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