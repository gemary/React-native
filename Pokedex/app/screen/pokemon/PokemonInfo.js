import React, { Component } from 'react';
import { View ,StyleSheet,Text,Image,ActivityIndicator,SafeAreaView} from 'react-native';
import Api from '../../Api/'
import { TouchableOpacity, FlatList, ScrollView } from 'react-native-gesture-handler';
import Theme from '../../asset/RootColor';
export default class PokemonScreen extends React.Component {
    _isMounted = false;
    state={
        id:null,
        PokemonName:null,
        Ability:null,
        Type:null,
        Moves:null,
        Stats:null,
        Sprites:null,
        isloading:true
    }

   async componentDidMount(){
    _isMounted = true;
        const id = this.props.navigation.getParam('id');
        if (_isMounted) {
            Api.instance().getokemonDetail(id).then((res)=>{
                this.setState({
                    id:res.id,
                    height:res.height,
                    weight:res.weight,
                    baseExp:res.base_experience,
                    PokemonName:res.name,
                    Ability:res.abilities,
                    Type:res.types,
                    Moves:res.moves,
                    Stats:res.stats,
                    Sprites_Shiny:res.sprites.front_shiny,
                    Sprites_default:res.sprites.front_default,
                    isloading:false
                })
               
                
            })
        }
      
    }

    UNSAFE_componentWillMount(){
        _isMounted = false;
    }
  
    render(){
      
        const {Sprites_Shiny,Sprites_default,Ability,isloading,Stats,Moves,Type} =this.state
        if (isloading) {
         return(
            <View>
                 <ActivityIndicator size="large" />
            </View>
         )
        }
        else{
            return(
                
                <SafeAreaView style={styles.container}>
                  <ScrollView>
                    <View >
                     <Text style={styles.TextStyle}>#{this.state.id} {this.state.PokemonName}</Text>
                    </View>
                  
                    <View style={styles.SpriteStyle}>
                        <View style={styles.imagecontainer}>
                            <Text style={{
                            fontWeight:'bold',
                            fontSize:18,
                            color:'#3e4444',
                            marginTop:24}}>Shiny</Text>
                            <Image  style={styles.imgStyle} source={{uri:Sprites_Shiny}} />
                        </View>
                        <View style={styles.imagecontainer}>
                            <Text style={{fontSize:18,
                                fontWeight:'bold',
                                color:'#95a5a6',
                                marginTop:24}}>Default</Text>
                            <Image style={styles.imgStyle}  source={{uri:Sprites_default}} />
                        </View>
                    </View>
                    <View>
                         <Text style={styles.TextStyle}>Base Exp:{ this.state.baseExp} </Text>
                    </View>
                  <View style={styles.Rows}>
                  <View style={styles.AbilityStyle}>
                        <Text style={styles.TextStyle}>Abilities</Text>
                        {
                        Ability !=null? Ability.map((data)=>{
                          return(
                                <TouchableOpacity key={data.ability.name}>
                                    <View style={styles.AbilitiesItem}> 
                                          <Text>+{ data.is_hidden ? data.ability.name +` (hidden)` : data.ability.name} </Text>
                                    </View>      
                                </TouchableOpacity>
                          )
                        }):null
                        }
                      
                    </View>
                    <View style={styles.StatsStyle}>
                        <Text  style={styles.TextStyle}>Stats</Text>
                    {
                        Stats !=null? Stats.map((data)=>{
                          return(
                              <View style={styles.AbilitiesItem}>
                                <Text style={{color:Theme.textColor}} key={data.stat.name}>+ {data.stat.name}:{data.base_stat}</Text>
                             </View>
                          )
                        }):null
                        }
                    </View>
                  </View>
                  <Text style={styles.TextStyle}>Types</Text>
                  <View style={styles.TypeStyle}>
                    

                        {
                            
                                Type !=null? Type.map((data)=>{
                                    let bg =null
                                    switch (data.type.name) {
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
                                        default:bg =  Theme.normalbreak;
                                    }
                                  return(
                                      <View style={styles.AbilitiesItem}>
                                        <Text style={{padding:6,
                                            backgroundColor:bg
                                            , borderRadius:6,
                                            color:'white',
                                            width:64,
                                            textAlign:'center',
                                            
                                            }} 
                                            key={data.type.name}> {data.type.name}</Text>
                                     </View>
                                  )
                                }):null
                                
                        }
               </View>
                  <View style={styles.MoveStyle}>
                      <Text style={styles.TextStyle}>Skill (Can Learn and Method Learn)</Text>
                  {
                        Moves !=null? Moves.map((data)=>{
                          return(
                              <View style={styles.MoveItem}>
                                <Text key={data.move.name} style={styles.TextStyle}>- {data.move.name} </Text>
                                { data.version_group_details.map((data)=>{
                                    return(
                                    <View>
                                        <Text style={{color:Theme.textColor}} key={data.move_learn_method.name}> Version : {data.version_group.name} (LM : {data.move_learn_method.name})</Text>
                                    </View>
                                    )
                                })}
                             </View>
                          )
                        }):null
                        }
                      
                  </View>
                  </ScrollView>
                </SafeAreaView>
              
            )
        }
       
    }
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:12,
        backgroundColor:"white",
        
        
    },
    Rows:{
        flexDirection:"row",
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    AbilityStyle:{
        margin:6,
        borderRadius:6,
        backgroundColor:Theme.backGround2,
        shadowColor:'#000',
        shadowRadius:6,
        elevation:15,
        width:164,
    },
    TypeStyle:{
        flexDirection:'row'
    },
    MoveStyle:{
        borderRadius:6,
      
    },
    MoveItem:{
        padding:12,
        backgroundColor:'#fff',
        shadowOpacity:0.7,
        shadowColor:'#000',
        shadowRadius:6,
        elevation:16,
        borderRadius:6,
        marginBottom:6,
        marginHorizontal:6
        
    },
    StatsStyle:{
        margin:6,
        borderRadius:6,
        backgroundColor:'#fff',
        shadowRadius:6,
        shadowColor:'#000',
        elevation:6

    },
    SpriteStyle:{
        flexDirection:"row",
        marginBottom:6,
        marginTop:6,
        marginLeft:12,
        marginRight:12,
        borderRadius:12,
        backgroundColor:Theme.backGround,
        shadowRadius:6,
        shadowOpacity:0.5,
        shadowColor:'#000',
        elevation:15

       
    },
    imagecontainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    imgStyle:{
        width:128,
        height:128
    },
    TextStyle:{
        textTransform:'uppercase',
        fontWeight:'bold',
        padding:12
       
    },
    AbilitiesItem:{
        padding:8,
        fontSize:24
       
    }

})