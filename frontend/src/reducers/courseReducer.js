import { COURSE_REQUEST_LIST, COURSE_SUCCESS_LIST, COURSE_FAIL_LIST } from '../constants/courseConstants';




const TopNumberViewsReducer = (state = { listViews: [] }, action )=>{
    // if(action.type === ITEM_SUCCESS_WISHLIST){
    //     console.log(action.payload);
    // }
    switch(action.type){
        case COURSE_REQUEST_LIST:
            return {loading: true, listViews: []};
        case COURSE_SUCCESS_LIST: 
            return {loading: false, listViews: action.payload};
        case COURSE_FAIL_LIST:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}


export {TopNumberViewsReducer}