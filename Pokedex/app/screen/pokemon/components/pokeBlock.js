import React, { PureComponent } from 'react';
import { View,Image,Text,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


  class PokeBlock extends PureComponent{
    render(){
        const {name ,id,link} = this.props
   
    return(
        <TouchableOpacity activeOpacity={0.5} >
        <View style={styles.container}> 
            <Image style={styles.ImageStyle} source={{uri:link}}/>
            <Text style={styles.textStyle}>{name}</Text>
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
        width:120

    },
    ImageStyle:{
        width:64,
        height:64,
        padding:6
    },
    textStyle:{
        fontSize:12
    }
});
export default PokeBlock;