import React, {Component} from "react";
import { Button, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';

import NoDataView from "no-data-view";

import * as ClientActions from "../actions/client-actions";


class ClientList extends Component{
    constructor(props){
        super(props);
        this.state = {
            rows:[],
            totalPages:0,
            pageSzie:20,
            page:1,
            isRefreshing: false
        }
    }

    componentWillReceiveProps=(nextProps)=>{
        if(this.props !== nextProps){
            this.setState({
                ...nextProps.dataSoruce
            })
        }
    }

    _rowSplitter=()=>{
        return (
            <View style={{height:2, backgroundColor:"lightgray"}}/>
        )
    }

  

    render(){
        return <View>
            <FlatList 
                data = {this.state.rows}
                ItemSeparatorComponent = {this._rowSplitter}
                refreshing = {this.state.isRefreshing}
                onRefresh = {this.props.onRefresh}
                onEndReached = {this.props.onLoadMore}
                onEndReachedThreshold = {0}
                ListEmptyComponent = {NoDataView}
                renderItem={({item})=>(
                    <View style={{flex:1, marginLeft:10,  justifyContent: 'center'}}>
                        <View style={{flexDirection:"row"}}>
                            <Ionicons name="ios-call" size={25} style={{marginRight:10}} />
                            <Text>{item.Name}</Text> 
                        </View>
                        <View style={{flexDirection:"row", marginTop:5}}>
                            <Ionicons name="ios-person" size={25} style={{marginRight:10}}/>
                            <Text>{item.Phone}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item, index)=>(index)}

            />
        </View>
    }
}

const actionCreators = {...ClientActions};
ClientList = connect(null, actionCreators)(ClientList);
export default ClientList;

//Name, LastShoppedDate, LevelSubject, Phone, PrepaidBalance, Total,