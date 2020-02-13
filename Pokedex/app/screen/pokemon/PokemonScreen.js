import React, { Component } from 'react';
import { View ,StyleSheet} from 'react-native';
import Api from '../../Api';
import PokeBlock from '../../components/Block';
import { FlatList } from 'react-native-gesture-handler';
export default class PokemonScreen extends React.Component {
   
    state = {
        data:[
            {id:'0',name:'Egg Group',link:require('../../asset/pokemon/eggGroup.png')},
            {id:'1',name:'List Pokemon',link:require('../../asset/pokemon/pokemonLogos.png')},
            {id:'2',name:'Mega Forms',link:require('../../asset/pokemon/mewtomega.png')},
            {id:'3',name:'Alola Forms',link:require('../../asset/pokemon/alolaraichu.png')}
        ]
      }
   
    render() {
        const {data} =this.state;
        const {navigation} =this.props;
        return (
            <View style={styles.container}>
              <FlatList 
              data={data}
              renderItem={({item}) => <PokeBlock datas={item} onPress={()=>navigation.navigate('PokemonDetail',{
                id:item.id
            })} />}
              keyExtractor={item=>item.id}
              numColumns={2}
              />
            </View>
        );
    }
}
const styles =StyleSheet.create({
    container:{
        alignItems:'center'
    }
})