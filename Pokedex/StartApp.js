import React from 'react';
import { View } from 'react-native';

import TabsNavigation from './AppNavigation';


export default class StartApp extends React.Component {

    render() {
        return (
            <View>
               
                <TabsNavigation/>
            </View>
        );
    }
}