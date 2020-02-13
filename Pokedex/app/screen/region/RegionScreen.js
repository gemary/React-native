import React, { Component } from 'react';
import { View ,StyleSheet,FlatList} from 'react-native';
import MapBlock from './components/MapBlock';
export default class RegionScreen extends React.Component  {
   
    state = { 
        data:[
            {id:'1',name:'kanto',link:require('../../asset/region/kanto.jpg')},
            {id:'2',name:'johto',link:require('../../asset/region/johto.jpg')},
            {id:'4',name:'sinnoh',link:require('../../asset/region/sinoh.jpeg')},
            {id:'3',name:'hoenn',link:require('../../asset/region/hoenn.jpg')},
            {id:'5',name:'unova',link:require('../../asset/region/unova.jpg')},
            {id:'6',name:'kalos',link:require('../../asset/region/kalos.jpg')},
            {id:'7',name:'alola',link:require('../../asset/region/alola.jpg')},
            {id:'8',name:'galar',link:require('../../asset/region/galar.jpg')},
        ]
     }
    render() {
        const {data}=this.state;
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
              <FlatList
              data={data}
              renderItem={({ item }) => <MapBlock onPress={()=>navigation.navigate('City',{
                  items:item
              })} datas={item} />}
              keyExtractor={item => item.id}
              numColumns={2}
              />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    }
});