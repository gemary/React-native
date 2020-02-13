import React, { PureComponent } from 'react';
import { View,Image,Text,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


  class PokeCard extends PureComponent{
    render(){
        const {data} = this.props
   
    return(
        <TouchableOpacity activeOpacity={0.5} >
        <View style={styles.container}> 
             <Text style={styles.textStyle}>{data.id}</Text>
            <Image style={styles.ImageStyle} source={{uri:data.imagePokemon}}/>
            <Text style={styles.textStyle}>{data.name}</Text>
          <View>
            <Text>Type:{data.type[0]} , {data.type[1]}</Text>
          </View>
            <Text style={styles.textStyle}>height:{data.height}</Text>
            <Text style={styles.textStyle}>weight:{data.Weight}</Text>
            <Text style={styles.textStyle}>MegaStone: {data.MegaStone}</Text>
            <Image style={styles.ImageStyle} source={{uri:data.imageMegastone}}/>
        </View>
        </TouchableOpacity>
        
    )
    }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        padding:12,
        borderRadius:4,
        alignItems:'center',
        shadowColor:'#000',
        shadowOpacity:0.23,
        shadowRadius:1.62,
        elevation:1,
    },
    ImageStyle:{
        width:128,
        height:128,
        padding:6
    },
    textStyle:{
        fontSize:12,
    }
});
export default PokeCard;