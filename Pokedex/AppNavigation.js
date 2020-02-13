import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import PokemonScreen from './app/screen/pokemon/PokemonScreen';
import RegionScreen from './app/screen/region/RegionScreen';
import CityScreen from './app/screen/region/CityScreen';
import ItemScreen from './app/screen/item/ItemScreen';
import MoveScreen from './app/screen/move/MoveScreen';
import IntroScreen from './app/screen/intro/IntroScreen';
import EggGroupScreen from './app/screen/pokemon/PokemonDetail';

import { View,Image } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';  
import RegionLogo from './app/screen/logoTitle/RegionLogo';
import ItemLogo from './app/screen/logoTitle/ItemLogo';
import MoveLogo from './app/screen/logoTitle/MoveLogo';
import PokemonLogo from './app/screen/logoTitle/PokemonLogo';

const PokemonStack = createStackNavigator({
    Pokemon:{
        screen:PokemonScreen,
        navigationOptions:{
            headerTitle: () => <PokemonLogo />,
        }
    },
    PokemonDetail:{
        screen: EggGroupScreen,
        navigationOptions:{
            headerTitle: () => <PokemonLogo />,
        }
       
    }
});
const MoveStack = createStackNavigator({
   
    Move:{
        screen: MoveScreen,
        navigationOptions:{
            headerTitle: () => <MoveLogo />,
        }
    }
});
const RegionStack = createStackNavigator({
    Region:{
        screen: RegionScreen,
        navigationOptions:{
              headerTitle: () => <RegionLogo />,
        }
    },
    City:{
        screen:CityScreen,
        navigationOptions:{
            headerTitle: () => <RegionLogo />,
      }
    }

   
});
const ItemStack = createStackNavigator({
    AllItem:{
        screen: ItemScreen,
        navigationOptions:{
            headerTitle: () => <ItemLogo />,
        }
    }
});
const IntroStack = createStackNavigator({
    IntroScreen
});

const Tabsnavigator =createBottomTabNavigator({
  Region:{
      screen:RegionStack,
      navigationOptions:{
        tabBarIcon:({tintColor})=>(  
            <Icon name="ios-map" color={tintColor} size={25}/>  
        ),
        
    }
  },
  Item:{
      screen:ItemStack,
      navigationOptions:{
        tabBarIcon:({tintColor})=>(  
            <Icon name="ios-briefcase" color={tintColor} size={25}/> 
           
        )  
    }
  },
  Move:{
      screen:MoveStack,
      navigationOptions:{
        tabBarIcon:({tintColor})=>(
            <View>
                <Icon color={tintColor} size={25} name="ios-disc"/>
            </View>
        ),
    }
  },
  Pokemon:{
    screen:PokemonStack,
    navigationOptions:{
      tabBarIcon:({tintColor})=>(
          <View>
              <Icon color={tintColor} size={25} name="ios-desktop"/>
          </View>
      ),
  }
  }
},
{
    tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 12,
          textTransform:'uppercase',
          marginBottom:6
        },
        tabStyle:{
         
        },
       
    }
})
const Appcontainer =createAppContainer(Tabsnavigator);

export default Appcontainer ;