import React from 'react';
import { View,Image,Text, StyleSheet, TouchableOpacity } from 'react-native';

const MapBlock =(props)=>{
    const {datas,onPress} =props;
    return(
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <View style={sytles.container}>
                <Image style ={sytles.ImgStyle} source={datas.link}/>
                <Text style={sytles.textStyle}>{datas.name}</Text>
            </View>
        </TouchableOpacity>
      
    )
}

const sytles =StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:12,
        margin:12,
        borderRadius:4,
        alignItems:"center",
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
        
    },
    textStyle:{
        textTransform:'uppercase'
    },
    ImgStyle:{
        width:128,
        height:128
    }
});
export default  MapBlock;