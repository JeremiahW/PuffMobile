/**
 * @providesModule no-data-view
 */

import React, {Component} from "react";
import {Text, View, Button, FlatList,TouchableHighlight } from 'react-native';

export default class NoDataView extends Component{
    render(){
        return (<View style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{
                fontSize: 16
            }}>暂无数据</Text>
        </View>)
    }
}