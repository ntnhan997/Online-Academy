import { ITEM_REQUEST_WISHLIST, ITEM_SUCCESS_WISHLIST, ITEM_FAIL_WISHLIST} from '../constants/wishListConstants';


const wishListReducer = (state = { wishlists: [] }, action )=>{
    // if(action.type === ITEM_SUCCESS_WISHLIST){
    //     console.log(action.payload);
    // }
    switch(action.type){
        case ITEM_REQUEST_WISHLIST:
            return {loading: true, wishlists: []};
        case ITEM_SUCCESS_WISHLIST: 
            return {loading: false, wishlists: action.payload};
        case ITEM_FAIL_WISHLIST:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}


export {wishListReducer}