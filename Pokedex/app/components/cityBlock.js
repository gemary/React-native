import React from 'react';
import { View,Image,Text, StyleSheet, TouchableOpacity } from 'react-native';

const cityBlock =(props)=>{
    const {datas} =props;
    return(
        <TouchableOpacity activeOpacity={0.8}>
            <View style={sytles.container}>
                <Text style={sytles.textStyle}>{datas.name}</Text>
            </View>
        </TouchableOpacity>
      
    )
}

const sytles =StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:12,
        margin:6,
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
export default  cityBlock;