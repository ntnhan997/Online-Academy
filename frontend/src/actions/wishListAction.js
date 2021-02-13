import { ITEM_REQUEST_WISHLIST, ITEM_SUCCESS_WISHLIST, ITEM_FAIL_WISHLIST} from '../constants/wishListConstants';
import {wishList} from '../dataTemp';



const WishList = () => async (dispatch) => {
    try {
        dispatch({type : ITEM_REQUEST_WISHLIST});
        // const datas = await axios.get("/api/products");
        dispatch({type: ITEM_SUCCESS_WISHLIST, payload: wishList});
    } catch (error) {
        dispatch({type: ITEM_FAIL_WISHLIST, payload: error});  
    }
}



// const addToCart = (id) => (dispatch) =>{
//     try {
//         const dataId = data.find(x => x.courseId === parseInt(id));

//         dispatch({type: ADD_ITEM_WISHLIST, payload: [{
//             ...dataId
//         }]});
//     } catch (error) {
        
//     }
// }


// const removeFromCart = (productId) => (dispatch,getState) => {
//     try {
//         dispatch({type: CART_REMOVE_ITEM, payload: productId});
//         const {cart: {cartItem}} = getState();
//         Cookie.set("cartItem", JSON.stringify(cartItem));
//     } catch (error) {
        
//     }
   
// }

export {WishList}