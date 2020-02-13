import React, { Component } from 'react';
import CityBlock from '../../components/cityBlock';
import { View ,StyleSheet,FlatList,Image} from 'react-native';
import Api from '../../Api';

export default class CityScreen extends React.Component{
    state={
        data:null
    }
    
    async componentDidMount(){
        const {navigation} =this.props;
        Api.instance().getCity(navigation.getParam('items').id).then((result) => {
            this.setState({
                data:result.locations
            })
        }).catch((err) => {
          
            
        });
      
    }

    render(){
       
        const {navigation} =this.props;
        const {data} =this.state;
        return(
            <View > 
                <Image resizeMode="contain" style={styles.ImageStyle} source={navigation.getParam('items').link} />
                <FlatList
                    data={data}
                    renderItem={({ item }) =>  <CityBlock datas={item} />}
                    keyExtractor={item=>item.name}
                    /> 
            </View>
            
        )
    }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        padding:12,
        alignItems:'center',
    },
    ImageStyle:{
       alignItems:'center',
       height:198,
       width:null
    },
   

})