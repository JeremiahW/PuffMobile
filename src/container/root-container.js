import React, {Component} from "react";
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

import * as UserActions from "../actions/user-actions";
import  Login from "../components/login-component";
import RootDrawer from "./drawer-navigator";

class RootContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false,
        }
    }

    componentWillReceiveProps = (nextprops)=>{
        if(this.props.user !== nextprops.user){
            this.setState({
                ...nextprops.user
            })
        }
    }

    render(){
        return <RootDrawer />
        
        if(this.state.isLoggedIn){
           return <RootDrawer />
        }
        else{
            return <Login/>
        }
    }
}

function mapStateToProps(state){
    return {
        user:state.user
    }
}
 
const actionCreators = {...UserActions};

RootContainer = connect(mapStateToProps, actionCreators)(RootContainer);
export default RootContainer;