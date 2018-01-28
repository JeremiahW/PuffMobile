import React, {Component} from "react";
import { Button, Text, View, StatusBar, ToolbarAndroid, Platform } from 'react-native';
import { connect } from 'react-redux';

import * as ClientActions from "../actions/client-actions";


class ClientContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
           clients:[]
        }
    }

    componentWillReceiveProps(nextProps){
      
    }

  
 

    render(){
        return (
            <View>
            <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.24)" animated/>
            { Platform.OS === 'android' && Platform.Version >= 20 ? <View style={{height: 24, backgroundColor: "#512DA8",}}/>: null }
            <ToolbarAndroid
                style={{ height: 56,backgroundColor: "#673AB7",elevation: 4,}} titleColor="white" title="乐芙坊客户信息管理系统"/>
                <Text>我是客户容器</Text>
            </View>
        )
    }
}

function mapStateToProps(state){
    return {
        user:state.user
    }
}

const actionCreators = {...ClientActions};
ClientContainer = connect(mapStateToProps, actionCreators)(ClientContainer);
export default ClientContainer;