import { ITEM_REQUEST_WISHLIST, ITEM_SUCCESS_WISHLIST, ITEM_FAIL_WISHLIST, REMOVE_ITEM_WISHLIST} from '../constants/wishListConstants';

import axios from "axios";


const WishList = () => async (dispatch) => {
    try {
        dispatch({type : ITEM_REQUEST_WISHLIST});
        const datas = await axios.get("/api/favoritecourse", {
            headers :{
                "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA")).accessToken
            }
        });
        dispatch({type: ITEM_SUCCESS_WISHLIST, payload: datas.data});
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


const removeFromWishList = (CourseID) => async (dispatch) => {
    try {
        console.log(CourseID);
        await axios.delete("/api/favoritecourse", {
            headers :{
            "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA")).accessToken
        }, 
            data: {
                CourseID
            }
        }
        )
        const datawishlist = await axios.get("/api/favoritecourse", {
            headers :{
                "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA")).accessToken
            }
        });
        dispatch({type: REMOVE_ITEM_WISHLIST, payload: datawishlist.data});
    } catch (error) {
        
    }
   
}

export {WishList, removeFromWishList}