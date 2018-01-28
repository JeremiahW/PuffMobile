import React, {Component} from "react";
import { Button, Text, View, StatusBar, ToolbarAndroid, Platform } from 'react-native';
import { connect } from 'react-redux';

import * as ClientActions from "../actions/client-actions";

import ClientList from "../components/clientlist-component";

class ClientContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            clientData:[]
        }
    }
    componentWillMount=()=>{
        this.props.getClients();
    }

    componentWillReceiveProps(nextProps){
      if(this.props.client !== nextProps.client){
          this.setState({
              clientData: nextProps.client,
          })
      }
    }

    render(){
        return (
            <View>
            <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.24)" animated/>
            { Platform.OS === 'android' && Platform.Version >= 20 ? <View style={{height: 24, backgroundColor: "#512DA8",}}/>: null }
            <ToolbarAndroid
                style={{ height: 56,backgroundColor: "#673AB7",elevation: 4,}} titleColor="white" title="乐芙坊客户信息管理系统"/>
                <ClientList dataSoruce = {this.state.clientData} />
            </View>
        )
    }
}

function mapStateToProps(state){
    return {
        client:state.client
    }
}

const actionCreators = {...ClientActions};
ClientContainer = connect(mapStateToProps, actionCreators)(ClientContainer);
export default ClientContainer;