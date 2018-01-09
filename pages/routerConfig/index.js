import React from 'react';
import { DrawerNavigator, TabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import Layout from '../../components/common/layout';
// import screens
import CalculatorPage from '../calculator';
import NormsPage from '../norms';

export default DrawerNavigator({
    Calculator: {
        screen: CalculatorPage,
        navigationOptions: {
            drawerLabel: 'Calculator Page',
            drawerIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-home' : 'ios-home-outline'}
                    size={26}
                    color={tintColor}
                />
            )
        }
    },
    Norms: {
        screen: NormsPage,
        navigationOptions: {
            drawerLabel: 'Norms Page',
            drawerIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-home' : 'ios-home-outline'}
                    size={26}
                    color={tintColor}
                />
            )
        }
    }
}, {
    headerMode: 'screen',
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
});