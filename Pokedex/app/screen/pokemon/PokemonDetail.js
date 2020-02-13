import React, { PureComponent } from 'react';
import { View ,Text,TouchableOpacity,StyleSheet,Image,ActivityIndicator} from 'react-native';
import Api from '../../Api';
import { FlatList } from 'react-native-gesture-handler';
import Block from './components/pokeBlock';
import Card from './components/pokeCard';

export default class PokemonScreen extends PureComponent {
   
    state = {
        data:null,
        isLoading:true,
        numColumns:null
      }
    renderComponent(data){
        const {navigation} =this.props;
        const id =navigation.getParam('id');
        if (id =='0') {
            return (
                <TouchableOpacity >
                <View style={styles.container}>
                    <Text style={styles.btnCustom}>{data.name}</Text>
                </View>
                </TouchableOpacity>
            )
        }
        if (id =='1') {
            return (
                <View>
                    <Block id={data.id} link={data.ThumbnailImage} name={data.name}/>
                </View>
            )
        }
        if (id =='2') {
            return(
                <View>
                   <Card data={data}/>
                </View>
            )
        }
        if (id =='3') {
              return(
                <View>
                      <Card data={data}/>
                </View>
            )
        }
    }
    async componentDidMount(){
      
        const {navigation} =this.props;
        const id =navigation.getParam('id');
        if (id == '0') {
            Api.instance().getEggGroup().then((result) => {
                this.setState({
                    data:result.results,
                    isLoading:false,
                    numColumns:3
                })
            }).catch((err) => {
                
            });
        }
        if (id == '1') {
          
            Api.instance().getPokemon().then((result)=>{
                this.setState({
                    data:result,
                    isLoading:false,
                    numColumns:3
                })
            })
           
        }
        if (id =='2') {  
            Api.instance().getPokemonForms().then((result) => {
                this.setState({
                    data:result.megaForm,
                    isLoading:false,
                    numColumns:1
                })
              
                
            }).catch((err) => {
                
            });
        }
        if (id == '3') {
            Api.instance().getPokemonForms().then((result) => {

                this.setState({
                    data:result.alolaForm,
                    isLoading:false,
                    numColumns:1
                })
            }).catch((err) => {
                
            });
        }
        
    }
    render() {
        const {data,isLoading} =this.state;
        if (isLoading) {
            return(
                <View style={styles.loadingStyle}>
                    <ActivityIndicator size="large" />
                </View>
           )
        }
        else{
           
           return (
            <View style={styles.container}>
                <FlatList
                data={data}
                renderItem={({item})=>this.renderComponent(item)}
                keyExtractor={item=>`${item.name}`}
                numColumns={this.state.numColumns}
                 />
            </View>
        );
        }
    }
}
const styles =StyleSheet.create({   
    container:{
        flex:1,
        alignItems:'center',
    }
    ,
    loadingStyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    btnCustom:{
        width:98,
        height:98,
        margin:12
        
    }
})

  
