import React, {Component} from "react";
import { Button, Text, View, StatusBar, ToolbarAndroid, Platform } from 'react-native';
import { connect } from 'react-redux';

import * as ClientActions from "../actions/client-actions";

import ClientList from "../components/clientlist-component";

class ClientContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            clientData:[],
            currentPage:1
        }
    }
    componentWillMount=()=>{
      this._refreshClientList();
    }

    componentWillReceiveProps(nextProps){
      if(this.props.client !== nextProps.client){
          let tempClientData = nextProps.client;

          if(this.state.currentPage > 1){
              tempClientData.rows = [...this.state.clientData.rows, ...tempClientData.rows ]
          }

          console.log(tempClientData);
          this.setState({
              clientData: tempClientData,
          })
      }
    }

    _refreshClientList = () =>{
        this.setState({currentPage:1}, ()=>{
            this.props.getClients(this.state.currentPage);
            console.log("_refreshClientList!!")
        })
    }

    _loadMore = () =>{
        //注意检查是否达到最大页数
        let page = this.state.currentPage + 1;

        this.setState({currentPage:page},()=>{
            this.props.getClients(this.state.currentPage);
            console.log("_loadMore!!")
        })
    }

    render(){
        return (
            <View>
            <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.24)" animated/>
            { Platform.OS === 'android' && Platform.Version >= 20 ? <View style={{height: 24, backgroundColor: "#512DA8",}}/>: null }
            <ToolbarAndroid
                style={{ height: 56,backgroundColor: "#673AB7",elevation: 4,}} titleColor="white" title="乐芙坊客户信息管理系统"/>
                <ClientList dataSoruce = {this.state.clientData} onRefresh={this._refreshClientList} onLoadMore={this._loadMore} />
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