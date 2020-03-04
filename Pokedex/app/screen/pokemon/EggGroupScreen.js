import React, { Component } from 'react';
import { View ,StyleSheet,Text,Image} from 'react-native';
import Api from '../../Api';
import PokeBlock from '../../components/Block';
import { FlatList } from 'react-native-gesture-handler';

export default class EggGroup extends React.Component{
    constructor(props) {
        super(props)
       
        this.state ={
            dataSource:null
        }
    }
    
    componentDidMount(){
        const EggGroupName = this.props.navigation.getParam('name')
        Api.instance().getEggGroupDetail().then((result)=>{
            const data =result.result;
            const dataSource =[];
            data.forEach(element => {
               if ((element.eggGroup[0].color.toLowerCase() == EggGroupName.toLowerCase() ) || (element.eggGroup[1].color.toLowerCase() == EggGroupName.toLowerCase() )) {
                 dataSource.push(element)
               }
           });
            this.setState({
                dataSource:dataSource
            })
        })
    }


    render(){
        const renderItem =(data)=>{
            return(
                <View>
                    <Image style={{width:48,height:48}} source={{uri:data.image}}/>
                    <Text>{data.name.pokemonName}</Text>
                    {data.eggGroup.map((eggData)=>{
                        return(
                            <View key={eggData.name} style={{
                                backgroundColor:eggData.color,
                                padding:6
                                }}>
                                <Text>{eggData.name}</Text>
                            </View>
                        )
                    })}
                </View>
            )
        }
        return(
            <View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item})=>renderItem(item)}
                    keyExtractor={(item)=>item.id}
                 />
            </View>
        )
    }
}