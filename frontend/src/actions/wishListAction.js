import { ITEM_REQUEST_WISHLIST, ITEM_SUCCESS_WISHLIST, ITEM_FAIL_WISHLIST, REMOVE_ITEM_WISHLIST, CHECK_WISHLIST_REQUEST} from '../constants/wishListConstants';

import axios from "axios";


const WishList = () => async (dispatch) => {
    try {
        dispatch({type : ITEM_REQUEST_WISHLIST});
        const datas = await axios.get("/api/favoritecourse", {
            headers :{
                "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA")).accessToken
            }
        });
        console.log(datas.data);
        dispatch({type: ITEM_SUCCESS_WISHLIST, payload: datas.data});
    } catch (error) {
        dispatch({type: ITEM_FAIL_WISHLIST, payload: error});  
    }
}

const removeFromWishList = (CourseID) => async (dispatch) => {
    try {
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

const addWishListAction = (CourseID) => async (dispatch) => {
    try {
        CourseID = Number(CourseID);
        await axios.post("/api/favoritecourse/", {CourseID}, {
            headers :{
                "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA")).accessToken
            }
        })
    } catch (error) {
        
    }
}

const checkWishListAction = (CourseID) => async (dispatch) => {
    try {
        CourseID = Number(CourseID);
        const data = await axios.post("/api/favoritecourse/check", {CourseID}, {
            headers :{
                "x-access-token": JSON.parse(localStorage.getItem("accessToken_OA")).accessToken
            }
        })
        dispatch({type : CHECK_WISHLIST_REQUEST, payload: data.data})
    } catch (error) {
        
    }
}

export {WishList, removeFromWishList, addWishListAction, checkWishListAction}