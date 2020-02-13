
import {
    REGION,
    CITY,
    POKEMON,
    ITEM_ATTRIBUTE,
    ITEM_CATEGORY,
    ITEM_FLING_EFFECT,
    ITEM_POCKET,
    ABILITY,
    BERRY,
    EGG_GROUP,
    TYPE,
    MOVE,
    MOVE_LEARNING_METHOD,
    MOVE_TARGET,
    LISTPOKEMON,
    DETAILPOKEMON,
    POKEMONFORMS
} from './endpoint';
import Base from './base';

export default class Api extends Base{
    static _instance = null
    static instance() {
        if (this._instance == null) {
            this._instance = new Api()
        }
        
        return this._instance
    }
    getCity(regionId){
        const callLink = CITY.replace("{regionId}", `${regionId}`);
        return this.callGet(callLink);
    }
    
    getType(){
        return this.callGet(TYPE);
    }
    getBerry(){
        return this.callGet(BERRY);
    }
    getPokemon(){
        return this.callGet(LISTPOKEMON);
    }
    getokemonDetail(id){
        const url= DETAILPOKEMON.replace("{id}",`${id}`)
        return this.callGet(url);
    }
    getPokemonForms(){
        return this.callGet(POKEMONFORMS);
    }
    getEggGroup(){
        return this.callGet(EGG_GROUP);
    }
    getItemAttribute(){
        return this.callGet(ITEM_ATTRIBUTE);
    }
    getItemCategory(){
        return this.callGet(ITEM_CATEGORY);
    }
    getItemPocket(){
        return this.callGet(ITEM_POCKET);
    }

    getNextData(url){
        return this.callGet(url);
    }
   
}