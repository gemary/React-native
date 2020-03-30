import React, { PureComponent } from 'react';
import { View ,Text,TouchableOpacity,StyleSheet,Image,ActivityIndicator, RefreshControl} from 'react-native';
import Api from '../../Api';
import { FlatList,TextInput } from 'react-native-gesture-handler';
import Block from './components/pokeBlock';
import Card from './components/pokeCard';

export default class PokemonScreen extends PureComponent {
   
    state = {
        data:null,
        isLoading:true,
        numColumns:null,
        styless:'center'
      }
      datasearch =[]
    renderComponent(data){
        const {navigation} =this.props;
        const id =navigation.getParam('id');
        if (id =='0') {
            return (
                <TouchableOpacity onPress={()=>navigation.navigate('EggroupDetail',{
                    name:data.color
                })}>
                <View style={{ 
                    flex:1,
                    paddingHorizontal:6,
                    margin:6,
                    borderRadius:6,
                    shadowColor: "#000",
                    shadowOffset: {
                    width: 0,
                    height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,
                    backgroundColor:data.color,
                    elevation: 2,
                    alignItems:'stretch',}}>
                    <Text style={styles.btnCustom}>{data.name}</Text>
                </View>
                </TouchableOpacity>
            )
        }
        if (id =='1') {
            return (
                <TouchableOpacity onPress={()=>navigation.navigate('PokemonInfo',{
                    id:data.id
                })}>
                <View>
                    <Block id={data.id} link={data.ThumbnailImage} name={data.name}/>
                </View>
                </TouchableOpacity>
            )
        }
        if (id =='2') {
            return <Card data={data}/>
              
            
        }
        if (id =='3') {
              return(
                <View>
                      <Card data={data}/>
                </View>
            )
        }
    }
    searBarHeader(){
        const {navigation} =this.props;
        const id =navigation.getParam('id');
        if (id == '1') {
            return(
                <View>
                    <TextInput
                        placeholder={" Search for ... Id or Pokemon Name"}
                        onChangeText={text=>this.onTextSearch(text)}
                        style={styles.searBarHeader}
                     />

                   
                </View>
            )
        }
    }
    onRefresh(){
      
        let  filterData =[]
        datasearch.forEach(element => {
            filterData.push(element)
        });
        this.setState({
            data:filterData.length <=0?data:filterData,
        })
    }
    onTextSearch(text){
        const {data} =this.state;  
        let  filterData =[]
      
        this.datasearch.forEach(kw => {
            if (kw.name.toLowerCase().indexOf(text.toLowerCase()) > -1 ||text.trim() == kw.id) {
                filterData.push(kw)   
            }
        });
        this.setState({
            data:filterData.length <=0?data:filterData,
        })
    }   
    async componentDidMount(){
      
        const {navigation} =this.props;
        const id =navigation.getParam('id');
        if (id == '0') {
            Api.instance().getEggGroup().then((result) => {
                this.setState({
                    data:result.results,
                    isLoading:false,
                    numColumns:3,
                    styless:'center'
                }
                )
            
               
              
            }).catch((err) => {
                
            });
        }
        if (id == '1') {
          
            Api.instance().getPokemon().then((result)=>{
                this.setState({
                    data:result,
                    isLoading:false,
                    numColumns:3,
                    styless:'center'
                },
                ()=>{
                    this.datasearch=result;
                }
                )
            })
           
        }
        if (id =='2') {  
            Api.instance().getPokemonForms().then((result) => {
                this.setState({
                    data:result.megaForm,
                    isLoading:false,
                    numColumns:1,
                    styless:'stretch'
                })
              
                
            }).catch((err) => {
                
            });
        }
        if (id == '3') {
            Api.instance().getPokemonForms().then((result) => {

                this.setState({
                    data:result.alolaForm,
                    isLoading:false,
                    numColumns:1,
                    styless:'stretch'
                })
            }).catch((err) => {
                
            });
        }
        
    }
    render() {
        const {styless} =this.state
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
            <View style={{ flex:1,alignItems:styless,}}>
                <FlatList
                ListHeaderComponent={this.searBarHeader()}
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
    },
    loadingStyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    btnCustom:{
        width:96,
        height:96,
        color:'white',
        textAlignVertical:'center',
        textAlign:'center', 
    },
    searBarHeader:{
        borderRadius:24,
        borderColor:'#d6cfcd',
        borderWidth:1,
        padding:6,
        margin:6
    }
})

  
