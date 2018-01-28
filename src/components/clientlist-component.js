import React, {Component} from "react";
import { Button, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';


export default class ClientList extends Component{
    constructor(props){
        super(props);
        this.state = {
            rows:[],
            totalPages:0,
            pageSzie:20,
            page:1
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
                keyExtractor={item => item.id}

            />
        </View>
    }
}

//Name, LastShoppedDate, LevelSubject, Phone, PrepaidBalance, Total,