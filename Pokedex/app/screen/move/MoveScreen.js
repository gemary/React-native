import React, { Component } from 'react';
import { View } from 'react-native';

export default class MoveScreen extends Component {
    static navigationOptions = {
        title: 'Move',
      };
    state = { 
        data:[
            {id:'0',name:'Move Target',link:require('../../asset/pokemon/eggGroup.png')},
            {id:'1',name:'Move Ailment',link:require('../../asset/pokemon/pokemonLogos.png')},
            {id:'2',name:'Move Category',link:require('../../asset/pokemon/mewtomega.png')},
            {id:'3',name:'Learn Method',link:require('../../asset/pokemon/alolaraichu.png')}
        ]
     }
    render() {
        return (
            <View>
                
            </View>
        );
    }
}