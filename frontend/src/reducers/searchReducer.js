import {
    ITEM_SEARCH_REQUEST
  } from "../constants/searchConstants";
  

const SearchReducer = (state = { searchs: [] }, action )=>{
    switch(action.type){
        case ITEM_SEARCH_REQUEST: 
            return {loading: false, searchs: action.payload};
        default:
            return state;
    }
};


export {SearchReducer}