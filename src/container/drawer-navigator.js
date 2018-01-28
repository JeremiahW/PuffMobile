import React, {Component} from "react";
import { DrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavigationModules from 'navigation-modules';


import SideMenu from "../components/common/side-menu";
import UserContainer from "./user-container";
import ClientContainer from "./client-container";

const iconSize = 30;

const RootDrawer = DrawerNavigator({
    Client:{
        screen:ClientContainer,
        navigationOptions: {
            drawerLabel: NavigationModules.Client.title,
            drawerIcon: ({ tintColor, focused }) => (
                <Ionicons
                  name={focused ? NavigationModules.Client.icon : NavigationModules.Client.focusedIcon}
                  size={iconSize}
                  style={{ color: tintColor }}
                />
              ),
        }
    },
    Order:{
        screen:UserContainer,
        navigationOptions: {
            drawerLabel: NavigationModules.Order.title,
            drawerIcon: ({ tintColor, focused }) => (
                <Ionicons
                  name={focused ? NavigationModules.Order.icon : NavigationModules.Order.focusedIcon}
                  size={iconSize}
                  style={{ color: tintColor }}
                />
              ),
        }
    },
    Item:{
        screen:UserContainer,
        navigationOptions: {
            drawerLabel: NavigationModules.Item.title,
            drawerIcon: ({ tintColor, focused }) => (
                <Ionicons
                  name={focused ? NavigationModules.Item.icon : NavigationModules.Item.focusedIcon}
                  size={iconSize}
                  style={{ color: tintColor }}
                />
              ),
        }
    },
    Prepaid:{
        screen:UserContainer,
        navigationOptions: {
            drawerLabel: NavigationModules.Prepaid.title,
            drawerIcon: ({ tintColor, focused }) => (
                <Ionicons
                  name={focused ? NavigationModules.Prepaid.icon : NavigationModules.Prepaid.focusedIcon}
                  size={iconSize}
                  style={{ color: tintColor }}
                />
              ),
        }
    },
 
    User: {
        screen:UserContainer,
        navigationOptions: {
            drawerLabel: NavigationModules.Prepaid.title,
            drawerIcon: ({ tintColor, focused }) => (
                <Ionicons
                  name={focused ? NavigationModules.User.icon : NavigationModules.User.focusedIcon}
                  size={iconSize}
                  style={{ color: tintColor }}
                />
              ),
        }
    },
},{
    contentComponent: (props) => (<SideMenu {...props} />)
}
);

export default RootDrawer;