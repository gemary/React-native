import React, { PureComponent } from 'react';
import { View,Image,Text,StyleSheet } from 'react-native';
import Theme from '../../../asset/RootColor'


  class PokeCard extends PureComponent{
    render(){
        const {data} = this.props
   
    return(
       
        <View style={styles.container}> 
             <Text style={styles.textStyle}>{data.id}</Text>
            <Image style={styles.ImageStyle} source={{uri:data.imagePokemon}}/>
            <Text style={styles.textStyle}>{data.name}</Text>
            <Text style={styles.textStyle}>{data.Ability}</Text>
        
            <Text>Type:</Text>
            <View style={{flexDirection:'row'}}>
            {data.type.map(item=> {
                 let bg =null
                 switch (item.trim().toLowerCase()) {
                     case "poison":bg =  Theme.poison; break;
                     case "flying":bg =  Theme.flying; break;
                     case "dragon":bg =  Theme.dragon;break;
                     case "grass":bg =  Theme.grass;break;
                     case "fighting": bg =  Theme.fighting;break;  
                     case "normal":bg =  Theme.normal;break; 
                     case "ground":bg =  Theme.ground;break; 
                     case "rock":bg =  Theme.rock; break; 
                     case "bug": bg =  Theme.bug;break; 
                     case "ghost":bg =  Theme.ghost;break;          
                     case "steel": bg =  Theme.steel;break; 
                     case "fire":bg =  Theme.fire;break; 
                     case "water":bg =  Theme.water;break; 
                     case "electric":bg =  Theme.electric;break;       
                     case "psychic":bg =  Theme.psychic;break; 
                     case "ice": bg =  Theme.ice;break; 
                     case "fairy":bg =  Theme.fairy;break; 
                     case "dark":bg =  Theme.dark;break;               
                     default:bg =  Theme.normal; break;
                 }
                    return(
                       
                          <Text key={item} style={{
                            padding:6,
                            backgroundColor:bg
                            , borderRadius:6,
                            color:'white',
                            width:64,
                            textAlign:'center',
                            margin:3
                          }}>{item}</Text>
                    )
                })}
            </View>
            <View>
                <Text>Stats</Text>
                {data.map((item)=>{
                    return(
                        <View></View>
                    )
                })}
            </View>
            <Text style={styles.textStyle}>height:{data.height}</Text>
            <Text style={styles.textStyle}>weight:{data.Weight}</Text>
            <Text style={styles.textStyle}>MegaStone: {data.MegaStone}</Text>
            <Image style={styles.StoneImageStyle} source={{uri:data.imageMegastone}}/>
        </View>
      
        
    )
    }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        padding:6,
        borderRadius:12,
        alignItems:'center',
        shadowColor:'#000',
        shadowOpacity:0.23,
        shadowRadius:6,
        elevation:15,
    },
    ImageStyle:{
        width:128,
        height:128,
        padding:6
    },
    textStyle:{
        fontSize:12,
    },
    StoneImageStyle:{
        width:64,
        height:64,
        padding:6
    }
});
export default PokeCard;