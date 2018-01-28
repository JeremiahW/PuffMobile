import React, {Component} from "react";
import {Text, View, Button, FlatList,TouchableHighlight } from 'react-native';
import { DrawerItems } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavigationModules from 'navigation-modules';

const iconSize = 30;

export default class SideMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[
                {...NavigationModules.Client, key:"1"}
                ,{...NavigationModules.Order, key:"2"}
                ,{...NavigationModules.Item, key:"3"}
                ,{...NavigationModules.Prepaid, key:"4"}
                ,{...NavigationModules.User, key:"5"}
            ]
        }
    }
    componentDidMount = () =>{

    }
    _separator = () => {
        return <View style={{ height: 2, backgroundColor: 'lightgray', marginLeft:5, marginRight:5 }}/>;

    }
    render(){
        const {navigate} = this.props.navigation;
        //navigate("", {cid:"1"})
        
        return(
            <View style={{flex:1}}>
                <View style={{flex:1, flexDirection: 'row'}}>
                    <Text style={{alignSelf:"flex-end"}}>PuffCMS</Text>
                </View>
                <View style={{flex:4}}>
                    <DrawerItems {...this.props} />
                </View>
            </View>
        )
    }

}